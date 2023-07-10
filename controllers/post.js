const Post = require('../models/postSchema');

const post =  async (req, res) => {
  try {
    const { title, content } = req.body;
    const { _id: userId, username: userName } = req.user;

    const post = new Post({
      title,
      content,
      creators_Name: {
        id: userId,
        username: userName,
      },
    });

    const savedPost = await post.save();

    res.json(savedPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = post;
