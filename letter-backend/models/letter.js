const mongoose = require("mongoose");

const letterSchema = new mongoose.Schema({

  letterCode: {
    type: String,
    required: true,
  },

  letterHead: {
    type: String,
    required: true,
  },

  from: {
    type: String,
    required: true,
  },

  to: {
    type: String,
    required: true,
  },

  receivedDate: {
    type: Date,
    required: true,
  },

  receiver: {
    type: String,
    required: true,
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Letter", letterSchema);