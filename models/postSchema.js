const mongoose = require('mongoose');
const moment = require('moment-timezone')

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  writerName: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
    username: {
      type: String
    },
  },
  createdAt: {
    type: Date,
    default: moment().tz('Your_Timezone').add(1, 'hours').toDate(),
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


