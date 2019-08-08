const mongoose = require('mongoose')

const answerSchema = new mongoose.Schema({
  yes: {
    type: Number
  },
  no: {
    type: Number
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  survey: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Answer', answerSchema)
