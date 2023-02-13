let _auth0Client = null;
let _idToken = null;
let _profile = null;

class Auth0Client {
  constructor() {
    _auth0Client = new auth0.WebAuth({
      domain: 'dev-sdkioo3idqauf0m7.us.auth0.com',
      audience: 'https://dev-sdkioo3idqauf0m7.us.auth0.com/userinfo',
      clientID: 'nZDMgalW1UhK98Jnx1gumDYt9JmNFiDQ',
      redirectUri: 'https://shop-9cd65.firebaseapp.com/cabinet',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
  }

  getIdToken() {
    return _idToken;
  }

  getProfile() {
    return _profile;
  }

  handleCallback() {
    return new Promise((resolve, reject) => {
      _auth0Client.parseHash(async (err, authResult) => {
        window.location.hash = '';
        if (err) return reject(err);

        if (!authResult || !authResult.idToken) {
          return resolve(false);
        }
        _idToken = authResult.idToken;
        _profile = authResult.idTokenPayload;

        localStorage.setItem('token', _idToken)

        return resolve(true);
      });
    });
  }

  signIn() {
    _auth0Client.authorize();
  }

  signOut() {
    _idToken = null;
    _profile = null;
    localStorage.removeItem('token')
    _auth0Client.logout()
  }
}

export const auth0Client = new Auth0Client();