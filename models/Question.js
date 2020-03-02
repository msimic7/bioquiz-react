const mongoose = require('mongoose');

const QuestionSchema = mongoose.Schema(
  {
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    _id: {
      type: String
    },
    question: {
      type: String
    },
    answers: [
      {
        type: String
      }
    ],
    correctAnswer: {
      type: Number
    }
  },
  { _id: false }
);

module.exports = mongoose.model('questions', QuestionSchema);
