const express = require('express');
const router = express.Router();
const {
  signUpUser,
  getCurrentUser,
  loginUser,
  signOutUser,
} = require('./auth');
const { getDB } = require('./firestore');

router.post('/', async (req, res) => {
  const user = req.body;
  const singUp = await signUpUser(user);
  res.send(singUp);
});
router.post('/login', async (req, res) => {
  const user = req.body;
  const login = await loginUser(user);
  res.send(login);
});
router.get('/logout', (req, res) => {
  const user = getCurrentUser();
  if (!user) {
    return res.send("You're not logged in");
  }
  signOutUser();
  res.send('logout successful.');
});

router.get('/words', (req, res) => {
  try {
    const print = collection => {
      if (collection === 'Missing or insufficient permissions.') {
        return res.send(collection);
      }
      res.json(collection.map(item => item.data()));
    };
    getDB(print);
  } catch (error) {
    console.log(error);
  }
});

router.get('/', (req, res) => {
  const user = getCurrentUser();
  if (!user) {
    return res.send("You're not logged in");
  }
  res.send(user);
});

module.exports = router;
