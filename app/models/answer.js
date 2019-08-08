const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  answerOne: {
    type: Number,
    required: true
  },
  answerTwo: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Answer', answerSchema)
