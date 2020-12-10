const firebase = require('firebase/app');
// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBO0AGrF3hfNdm0ddphcyZq2_ZgRfhnPFo',
  authDomain: 'user-login-773cc.firebaseapp.com',
  databaseURL: 'https://user-login-773cc.firebaseio.com',
  projectId: 'user-login-773cc',
  appId: '1:268257370959:web:33efed642b52bc7cf71b3a',
  measurementId: 'G-G2Q48NDJLV',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

//sign up user
const signUpUser = userData => {
  return auth
    .createUserWithEmailAndPassword(userData.email, userData.password)
    .then(res => res.user)
    .catch(error => {
      console.log(error.message);
      return error.message;
    });
};
// get current user
const getCurrentUser = () => {
  return auth.currentUser;
};

//login user
const loginUser = userData => {
  return auth
    .signInWithEmailAndPassword(userData.email, userData.password)
    .then(res => res.user)
    .catch(error => {
      console.log(error.message);
      return error.message;
    });
};

// sign out user
const signOutUser = () => {
  return auth
    .signOut()
    .then(res => res)
    .catch(error => {
      console.log(error.message);
      return error.message;
    });
};

// state change listener
auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log('User logged in');
  } else {
    // No user is signed in.
    console.log('User logged out');
  }
});

module.exports = { signUpUser, getCurrentUser, loginUser, signOutUser };
