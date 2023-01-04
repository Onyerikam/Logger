const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password, name } = req.body;

  const newUser = new User({ email, password, name });
  newUser.save((err) => {
    if (err) {
      return res.status(400).json({ error: err });
    }

    return res.json({ message: 'User created successfully' });
  });
});

module.exports = router;
