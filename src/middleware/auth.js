const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Secret key for JWT
const secretKey = 'your-secret-key';

// Dummy user data for testing
const users = [
  {
    id: 1,
    username: 'john',
    password: '$2b$10$yBbmY7XVL.r0dzDXxw1HyORyOFJGPHSh8kOKzzOv2wpXmjzN.5ZQy', // Hashed password for "password123"
  },
];

// Middleware function for user authentication
const authenticateUser = (req, res, next) => {
  try {
    // Extract the token from the request header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Verify the token
    const decoded = jwt.verify(token, secretKey);

    // Find the user based on the decoded user ID
    const user = users.find((user) => user.id === decoded.id);

    if (!user) {
      throw new Error();
    }

    // Attach the user object to the request
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

module.exports = authenticateUser;
