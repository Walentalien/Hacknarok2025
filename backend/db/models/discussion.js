// discussion.model.js

const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

// Definicja schematu dyskusji
const discussionSchema = new Schema({
  creator: {
    type: Types.ObjectId,
    required: true,
    ref: 'User'
  },
  topic: {
    type: String,
    required: true,
    maxlength: 100
  },
  description: {
    type: String,
    required: true,
    maxlength: 1500
  },
  participants: {
    active: [{
      type: Types.ObjectId,
      ref: 'User'
    }],
    observers: [{
      type: Types.ObjectId,
      ref: 'User'
    }]
  },
  posts: [{
    creator: {
      type: Types.ObjectId,
      required: true,
      ref: 'User'
    },
    content: {
      type: String,
      required: true,
      maxlength: 1000
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    }
  }],
  messages: [{
    creator: {
      type: Types.ObjectId,
      required: true,
      ref: 'User'
    },
    content: {
      type: String,
      required: true,
      maxlength: 300
    },
    date: {
      type: Date,
      required: true,
      default: Date.now
    }
  }],
  active: {
    type: Boolean,
    required: true,
    default: true
  }
}, {
  timestamps: false 
});


const Discussion = model('Discussion', discussionSchema);

module.exports = Discussion;
