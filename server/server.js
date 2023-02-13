const express = require('express');
const cors = require('cors');
var { expressjwt: jwt } = require('express-jwt');
const jwks = require('jwks-rsa');
const firebaseAdmin = require('firebase-admin');
const path = require('path');
require('dotenv').config()

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));                               
});



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

const serviceAccount = require('../client/src/services/firebase/firebase-key.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});

app.get('/firebase', jwtCheck, async (req, res) => {
  const {sub: uid} = req.user;

  try {
    await firebaseAdmin.auth().createCustomToken(uid)
      .then(customToken => {
        res.json({ firebaseToken: customToken })
      })
  } catch (err) {
    res.status(500).send({
      message: 'Something went wrong acquiring a Firebase token.',
      error: err
    });
  }
});

app.listen(3001);

module.exports = app;