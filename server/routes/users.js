const express = require('express');

const User = require('../models/User');

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await find();
  res.json(users);
});

// Get a single user
router.get('/:id', (req, res) => {
  const { id } = req.params;

  User.findById(id, (err, user) => {
    if (err || !user) {
      return res.status(400).json({ error: 'User not found' });
    }

    return res.json(user);
  });
});

// Create a new user
router.post('/', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

// Update an existing user
router.put('/:id', async (req, res) => {
  const user = await findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
});

// Delete a user
router.delete('/:id', async (req, res) => {
  const user = await findByIdAndDelete(req.params.id);
  res.json(user);
});

// Get user's workout schedule
router.get('/:id/schedule', async (req, res) => {
  const user = await findById(req.params.id);
  res.json(user.schedule);
});

// Update user's workout schedule
router.put('/:id/schedule', async (req, res) => {
  const user = await findByIdAndUpdate(req.params.id, { schedule: req.body }, { new: true });
  res.json(user.schedule);
});

// Get user's daily caloric intake and expenditure
router.get('/:id/calories', async (req, res) => {
  const user = await findById(req.params.id);
  res.json(user.calories);
});

// Update user's daily caloric intake and expenditure
router.put('/:id/calories', async (req, res) => {
  const user = await findByIdAndUpdate(req.params.id, { calories: req.body }, { new: true });
  res.json(user.calories);
});

module.exports = router;
