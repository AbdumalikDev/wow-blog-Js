const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const TagSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  name: {
    type: String,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Tag = mongoose.model('Tag', TagSchema);
