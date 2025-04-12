

const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

// Definicja schematu użytkownika
const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: 100
  },
  lastname: {
    type: String,
    required: true,
    maxlength: 100
  },
  birth_date: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^.+@.+\..+$/,
    trim: true
  },
  address: {
    county: {
      type: String,
      required: true
    },
    district: {
      type: String,
      required: true
    },
    voivodeship: {
      type: String,
      required: true
    }
  },
  discussions: [{
    discussion_id: {
      type: Types.ObjectId,
      required: true,
      ref: 'Discussion'
    },
    role: {
      type: String,
      required: true,
      enum: ['creator', 'participant', 'observer']
    }
  }]
}, {
  timestamps: false
});

// Tworzenie indeksów na emailu dla unikalności
userSchema.index({ email: 1 }, { unique: true });


const User = model('User', userSchema);

module.exports = User;
