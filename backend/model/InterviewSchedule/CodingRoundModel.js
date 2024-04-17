const mongoose = require('mongoose');

const codingRoundSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
//   answer: {
//     type: String,
//     required: true
//   },
//   company: {
//     type: String,
//     required: true
//   }
});

const codingRound = mongoose.model('Coding Round(Employer)', codingRoundSchema);
module.exports = codingRound
