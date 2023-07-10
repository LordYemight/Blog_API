const user = require('../models/user');

const getAllUser = async (req, res) => {
  try {
    const Users = await user.find({}, 'username email createdAt');
    res.json({ Users })
  } catch (error) {
    console.error('Error getting all users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

}

module.exports = getAllUser;