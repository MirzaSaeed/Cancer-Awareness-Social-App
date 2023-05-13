const mongoose = require("mongoose");
const { Schema } = mongoose;
const likeSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employeeAuths",
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: "adminAuths",
  },
  liked: {
    type: String,
    trim: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "userPosts",
  },
});

module.exports = mongoose.model("likes", likeSchema);
