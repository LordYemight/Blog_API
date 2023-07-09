const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginSchema  = require('../validators/logInVal'); 
const User = require('../models/user')
require('dotenv').config();

const logIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate the user
    const { error } = loginSchema.validate({ username, password });
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // find the user by username from database
    const user = await User.findOne({ username });

    // Check if the user exists i.e if user doesn't exist
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare the provided password with the stored password hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // If credentials are valid, generate a JWT token
    const token = jwt.sign({ username }, process.env.SECRET_KEY);

    res.json({ token }, 'log-in sucessful');
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = logIn;