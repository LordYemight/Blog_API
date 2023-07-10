const User = require('../models/user');

const updateUser = async (req, res) => {
  try {
    const postId = req.params.id;
    const { username, email } = req.body;

    const updatedFields = {};
    if (username) {
      updatedFields.username = username;
    }
    if (email) {
      updatedFields.email = email;
    }

    const user = await User.findById(postId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    Object.assign(user, updatedFields);

    const updatedUser = await user.save();

    res.json({ user: updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
module.exports = updateUser;