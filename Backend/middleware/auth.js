// middleware/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.authMiddleware = async (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).send({ message: 'Not authorized' });
  
    const token = authHeader.replace('Bearer ', '');
    if (!token) return res.status(401).send({ message: 'Not authorized' });
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      if (!req.user) return res.status(401).send({ message: 'User not found' });
      next();
    } catch (error) {
      res.status(401).send({ message: 'Invalid token' });
    }
  };
  
