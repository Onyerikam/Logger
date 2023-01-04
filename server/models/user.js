const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  // Other fields...
  schedule: [
    {
      day: {
        type: String,
        required: true
      },
      workouts: [
        {
          name: {
            type: String,
            required: true
          },
          type: {
            type: String,
            required: true
          },
          target: {
            type: String,
            required: true
          }
        }
      ]
    }
  ],
  calories: {
    intake: {
      type: Number,
      default: 0
    },
    expenditure: {
      type: Number,
      default: 0
    }
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;