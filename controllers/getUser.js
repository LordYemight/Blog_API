const user = require('../models/user');

const getUser =  async (req, res) => {
  try {
    const userId = req.params.id;
    const User = await user.findById(userId, 'username email createdAt' );
    if (!User) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ User });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getUser;