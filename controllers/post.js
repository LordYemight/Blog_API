const Post = require('../models/postSchema');


const post =  async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    const post = new Post({
      title,
      content,
      user: userId,
    });

    const savedPost = await post.save();

    res.json(savedPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = post;
