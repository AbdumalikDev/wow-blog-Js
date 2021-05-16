const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const postSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
    set: (val) => Math.round(val),
  },
  free: {
    type: Boolean,
    default: true,
  },
  author: {
    type: String,
    ref: 'User',
  },
  category: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Category',
    },
  ],
  tags: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Tag',
    },
  ],
  data: {
    type: Date,
    default: Date.now,
  },
});

/* postSchema.index({ price: 1, ratingsAverage: -1 }); */

module.exports = Post = mongoose.model('Post', postSchema);
