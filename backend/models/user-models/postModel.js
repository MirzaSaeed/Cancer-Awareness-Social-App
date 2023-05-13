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
  message: {
    type: String,
  },
  description: {
    type: String,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "userAuths",
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "adminAuths",
  },
});

module.exports = mongoose.model("userPosts", postSchema);
