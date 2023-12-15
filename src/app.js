// app.js
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

// Import configuration options
const corsOptions = require('./config/corsConfig').options;
const jwtConfig = require('./config/jwtConfig');

// Routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes'); 
const authorRoutes = require('./routes/authorRoutes');

// Initialize Express App
const app = express();

// Apply CORS with the imported options
app.use(cors(corsOptions));

// Body parser middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);
app.use('/api/authors', authorRoutes);

// JWT Verification Middleware (example of usage, modify according to actual needs)
app.use((req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    req.user = jwt.verify(token, jwtConfig.secret);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

module.exports = app;
