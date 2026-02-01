const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true
  },
  language: {
    type: String,
    required: true,
    enum: ['cpp', 'java', 'python', 'javascript']
  },
  code: {
    type: String,
    required: true
  },
  verdict: {
    type: String,
    required: true,
    enum: ['Accepted', 'Wrong Answer', 'Compilation Error', 'Runtime Error', 'Time Limit Exceeded']
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Submission', submissionSchema);