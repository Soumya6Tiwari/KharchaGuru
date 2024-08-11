const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const authRoutes2 = require('./routes/transactions');


// fs is file system ad readdirSync means read the sync directory synchronously so it is going to do line by line
// so readdirSync reads the information line by line in a specified directory
const {readdirSync} = require('fs')

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/', authRoutes2);

// readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
