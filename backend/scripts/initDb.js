require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const mockUsers = [
  {
    username: 'jan.kowalski',
    email: 'jan.kowalski@example.com',
    password: 'Test123!',
    city: 'Warsaw',
    district: 'Mokotow',
    isVerified: true,
    isPublicFigure: false
  },
  {
    username: 'anna.nowak',
    email: 'anna.nowak@example.com',
    password: 'Test123!',
    city: 'Krakow',
    district: 'Stare Miasto',
    isVerified: true,
    isPublicFigure: true
  }
];

async function initializeDb() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing users
    await User.deleteMany({});
    console.log('Cleared existing users');

    // Create new users
    for (const userData of mockUsers) {
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      await User.create({
        ...userData,
        password: hashedPassword
      });
      console.log(`Created user: ${userData.username}`);
    }

    console.log('Database initialization completed');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

initializeDb(); 