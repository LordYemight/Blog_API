const user = require ('../models/user');
const regSchema = require('../validators/registerVal');
const bcrypt = require('bcrypt');


const register = async (req, res) => {
  try {
    const { username, email, password, posts } = req.body
    const { error } = regSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

     // check if user exists 
    const existingUser = await user.findOne ({ email })
    if (existingUser) {
      return res.status(409).json({ error: 'Email is already registered' })
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create new user in the database
    const newUser = new user ({
      username, 
      email,
      password: hashedPassword,
      posts: posts || []
    });
    await newUser.save();
    res.status(201).json({ message: 'registration successful' });
  } catch (error) {
    console.error ('error registering', error);
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = register;