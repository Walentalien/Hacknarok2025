require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const { check, validationResult } = require('express-validator');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mock mObywatel data
const mockMObywatelData = {
  "mock-user-id": {
    pesel: "12345678901",
    firstName: "Jan",
    lastName: "Kowalski",
    city: "Warsaw",
    district: "Mokotow",
    street: "ul. Przykładowa 1",
    postalCode: "00-001",
    isVerified: true
  }
};

// Authentication middleware
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Routes
app.get('/', (req, res) => {
  res.send('Forum API is running');
});

// Mock mObywatel login endpoint
app.post('/api/auth/login', [
  check('username').notEmpty(),
  check('password').notEmpty()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    // Get mock mObywatel data
    const mObywatelData = mockMObywatelData[user._id] || mockMObywatelData['mock-user-id'];

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        city: user.city,
        district: user.district,
        isVerified: user.isVerified,
        isPublicFigure: user.isPublicFigure,
        mObywatelData
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Personal cabinet endpoints
app.get('/api/cabinet/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    const mObywatelData = mockMObywatelData[user._id] || mockMObywatelData['mock-user-id'];
    
    res.json({
      user: {
        ...user.toObject(),
        mObywatelData
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/cabinet/discussions', authMiddleware, async (req, res) => {
  try {
    const topics = await Topic.find({ 
      participants: req.user._id 
    }).sort({ updatedAt: -1 });
    
    res.json({ topics });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected routes
app.use('/api/topics', authMiddleware);
app.use('/api/posts', authMiddleware);

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  socket.on('join-topic', (topicId) => {
    socket.join(`topic-${topicId}`);
  });

  socket.on('new-post', (data) => {
    io.to(`topic-${data.topicId}`).emit('post-added', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});