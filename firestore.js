const firebase = require('firebase/app');
require('firebase/firestore');

const db = firebase.firestore();

const getDB = cb => {
  db.collection('glossary')
    .get()
    .then(snapshot => {
      cb(snapshot.docs);
    })
    .catch(err => cb(err.message));
};

module.exports = { getDB };
