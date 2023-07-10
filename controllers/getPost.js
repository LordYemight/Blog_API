const post = require('../models/postSchema');


const getPost =  async (req, res) => {
  try {
    const postId = req.params.id;
    const Post = await post.findById(postId);
    if (!Post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ Post });
  } catch (error) {
    console.error('Error getting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getPost;