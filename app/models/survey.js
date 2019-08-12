const mongoose = require('mongoose')

const surveySchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    unique: true
  },
  answer: {
    yes: {
      type: Number,
      default: 0
    },
    no: {
      type: Number,
      default: 0
    }
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Survey', surveySchema)
