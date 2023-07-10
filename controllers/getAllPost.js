const post = require('../models/postSchema');

const getAllPost = async (req, res) => {
  try {
    const allPost = await post.find();
    res.json({ allPost })
  } catch (error) {
    console.error('Error getting all posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

}

module.exports = getAllPost;