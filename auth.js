// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require('firebase/app');
// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
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
    .then(user => {
      console.log(user.user);
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};

//get current logged in user
function authStateListener() {
  const user = auth.currentUser;

  auth.onAuthStateChanged(function (user) {
    if (user) {
      console.log(user);
    } else {
      // No user is signed in.
      console.log(user);
    }
  });
}

module.exports = { signUpUser, authStateListener };
