const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

const router = express.Router();

router.post('/', (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: 'User not found' });
    }

    bcrypt.compare(password, user.password, (error, result) => {
      if (error || !result) {
        return res.status(400).json({ error: 'Incorrect password' });
      }

      // Generate token and send it back to client
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET || 'somesuperhardstringtoguess');
      return res.json({ token });
    });
  });
});

module.exports = router;
