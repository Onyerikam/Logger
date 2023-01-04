const express = require('express');

const Workout = require('../models/User');

const router = express.Router();

// Get workouts for a specific date
router.get('/date/:date', async (req, res) => {
  const workouts = await Workout.find({ date: req.params.date });
  res.json(workouts);
});

// Calculate and store progress for a specific exercise
router.post('/:id/progress', async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  const exercise = workout.exercises.find((ex) => ex.name === req.body.name);
  exercise.progress.push(req.body.progress);
  await workout.save();
  res.json(workout);
});

// Get workouts for a specific body part
router.get('/body/:part', async (req, res) => {
  const workouts = await Workout.find({ 'exercises.target': req.params.part });
  res.json(workouts);
});

// Get workouts for a specific type
router.get('/type/:type', async (req, res) => {
  const workouts = await Workout.find({ 'exercises.type': req.params.type });
  res.json(workouts);
});


// Get all workouts
router.get('/', async (req, res) => {
  const workouts = await Workout.find();
  res.json(workouts);
});

// Get a single workout
router.get('/:id', async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  res.json(workout);
});

// Create a new workout
router.post('/', async (req, res) => {
  const workout = new Workout(req.body);
  await workout.save();
  res.json(workout);
});

// Update an existing workout
router.put('/:id', async (req, res) => {
  const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(workout);
});

// Delete a workout
router.delete('/:id', async (req, res) => {
  const workout = await Workout.findByIdAndDelete(req.params.id);
  res.json(workout);
});

// Add an exercise to a workout
router.post('/:id/exercises', async (req, res) => {
  const workout = await Workout.findById(req.params.id);
  workout.exercises.push(req.body);
  await workout.save();
  res.json(workout);
});

module.exports = router;
