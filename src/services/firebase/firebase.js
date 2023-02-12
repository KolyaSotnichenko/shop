import firebase from 'firebase'

let _usersDb = null;

class Firebase {
  constructor() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDTrWOUAzV_Cms8CkPwdDYCMagDn9Akr0Y',
      authDomain: 'shop-9cd65.firebaseapp.com',
      projectId: 'shop-9cd65',
    });

    // initialize Firestore through Firebase
    _usersDb = firebase.firestore();

    // disable deprecated features
    _usersDb.settings({
      timestampsInSnapshots: true
    });
  }

  async addUser(user) {
    const createdAt = new Date();
    const name = firebase.auth().currentUser.displayName;
    const email = firebase.auth().currentUser.email;
    return await _usersDb.collection('users').add({
      name,
      createdAt,
      email,
    });
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  async updateProfile(profile) {
    if (!firebase.auth().currentUser) return;
    await firebase.auth().currentUser.updateProfile({
      displayName: profile.name,
      photoURL: profile.picture,
    });
  }

  async signOut() {
    await firebase.auth().signOut();
  }

  setAuthStateListener(listener) {
    firebase.auth().onAuthStateChanged(listener);
  }

  async setToken(token) {
    await firebase.auth().signInWithCustomToken(token);
  }
}

const firebaseClient = new Firebase();