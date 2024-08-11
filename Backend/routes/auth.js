
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username (email) and password are required' });
  }

  try {
    // Create and save the new user with both email and username set
    const newUser = new User({
      email: username, // Assuming username is actually the email
      username: username.split('@')[0], // Use part of email as username or set differently
      password
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    if (error.code === 11000) { // Handle duplicate key error
      return res.status(409).json({ error: 'User with this email already exists' });
    }
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.send({ token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ message: 'Server error' });
  }
});


router.get('/profile', authMiddleware, (req, res) => {
  res.send(req.user);
});

module.exports = router;

