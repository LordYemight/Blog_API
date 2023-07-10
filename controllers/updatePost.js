const Post = require('../models/postSchema');

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;
    
    const updatedFields = {};
    if (title) {
      updatedFields.title = title;
    }
    if (content) {
      updatedFields.content = content;
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    Object.assign(post, updatedFields);

    const updatedPost = await post.save();
    res.json({ post: updatedPost });

  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = updatePost;