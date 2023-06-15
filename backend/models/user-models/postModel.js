const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({
  uploadDate: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
  },
  filename: {
    type: String,
  },
  path: {
    type: String,
  },
  caption: {
    type: String,
  },
  image: {
    type: Buffer,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "userAuths",
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  admin: {
    type: Schema.Types.ObjectId,
    ref: "adminAuths",
  },
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("userPosts", postSchema);
