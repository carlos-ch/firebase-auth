const firebase = require('firebase/app');
require('firebase/firestore');

const db = firebase.firestore();

// const print = collection => {
//   collection.forEach(item => {
//     console.log(item.data());
//   });
// };

const getDB = cb => {
  db.collection('glossary')
    .get()
    .then(snapshot => {
      cb(snapshot.docs);
    });
};

module.exports = { getDB };
