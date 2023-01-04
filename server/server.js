const express = require('express');
const mongoose = require('mongoose');

const loginRoutes = require('./routes/login.js');
const signupRoutes = require('./routes/signup.js');
const userRoutes = require('./routes/users.js');
const workoutRoutes = require('./routes/workouts.js')

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://Onyerikam:Dozie2009@logger.axjqpvo.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/users', userRoutes);
app.use('/workouts', workoutRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
