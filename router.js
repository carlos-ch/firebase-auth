const express = require('express');
const router = express.Router();
const { signUpUser, authStateListener } = require('./auth');

router.post('/', (req, res) => {
  const user = req.body;
  signUpUser(user);
  res.send(req.body);
});
router.get('/', (req, res) => {
  authStateListener();
  res.send('listo');
});

module.exports = router;
