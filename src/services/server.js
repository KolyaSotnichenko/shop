const express = require('express');
const cors = require('cors');
var   { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');
const firebaseAdmin = require('firebase-admin');
const path = require('path');
require('dotenv').config()

const app = express();
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'shop')));

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
  }),
  audience: process.env.AUTH0_API_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ['RS256']
});

const serviceAccount = require('./firebase/firebase-key.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: `"https://shop-9cd65-default-rtdb.firebaseio.com"`
});

app.get('/firebase', jwtCheck, async (req, res) => {
  const uid = req.user.sub;

  console.log(uid)

  try {
    const firebaseToken = await firebaseAdmin.auth().createCustomToken(uid);
    res.json({firebaseToken});
  } catch (err) {
    res.status(500).send({
      message: 'Something went wrong acquiring a Firebase token.',
      error: err
    });
  }
});

app.listen(3001, () => console.log('Server running on localhost:3001'));