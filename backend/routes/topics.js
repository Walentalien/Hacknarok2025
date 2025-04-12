const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Topic = require('../models/Topic');
const User = require('../models/User');

// Get all topics
router.get('/', async (req, res) => {
  try {
    const topics = await Topic.find()
      .populate('author', 'username isPublicFigure')
      .sort({ createdAt: -1 });
    res.json({ topics });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get local topics
router.get('/local', async (req, res) => {
  try {
    const { city, district } = req.user;
    const topics = await Topic.find({
      $or: [
        { city },
        { district }
      ]
    })
    .populate('author', 'username isPublicFigure')
    .sort({ createdAt: -1 });
    res.json({ topics });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Search topics
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const topics = await Topic.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    })
    .populate('author', 'username isPublicFigure')
    .sort({ createdAt: -1 });
    res.json({ topics });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new topic
router.post('/', [
  check('title').notEmpty().trim(),
  check('description').notEmpty().trim(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, description } = req.body;
    const topic = new Topic({
      title,
      description,
      author: req.user._id,
      city: req.user.city,
      district: req.user.district
    });

    await topic.save();
    await topic.populate('author', 'username isPublicFigure');
    
    res.json({ topic });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get topic by ID
router.get('/:id', async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id)
      .populate('author', 'username isPublicFigure')
      .populate({
        path: 'posts',
        populate: {
          path: 'author',
          select: 'username isPublicFigure'
        }
      });

    if (!topic) {
      return res.status(404).json({ message: 'Topic not found' });
    }

    res.json({ topic });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router; 