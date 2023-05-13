const fs = require("fs");
const asyncHandler = require("express-async-handler");
const userModel = require("../../models/user-models/userModel");
const postModel = require("../../models/user-models/postModel");
const adminModel = require("../../models/admin-models/userModel");

// * POST Request
// * Post /auth/user/post/upload
const uploadPost = asyncHandler(async (req, res) => {
  const admin = await adminModel.findOne();
  const user = await userModel.findById(req.user.id);
  if (user) {
    const { title, description, message, uploadDate } = req.body;
    const { filename, path } = req.file;
    const uploadPost = await postModel.create({
      title,
      description,
      message,
      filename,
      path,
      uploadDate,
      user: req.user.id,
      admin: admin.id,
    });
    res.json({ uploadPost });
  } else {
    res.status(400).json({ message: "User not authorized" });
  }
});

// * GET Request
// * Get /auth/user/post/:id
const showPost = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user.id);
  if (user) {
    const post = await postModel.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Photo not found" });
    } else {
      // ? res.sendfile(post.path);
      res.json(post);
    }
  } else {
    res.status(400).json({ message: "User not authorized" });
  }
});

// * GET Request
// * Get /auth/user/posts
const getPosts = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user.id);
  if (user) {
    const posts = await postModel.find();
    if (!posts) {
      return res.status(404).json({ message: "Post not found" });
    } else {
      res.json(posts);
    }
  } else {
    res.status(400).json({ message: "User not authorized" });
  }
});

// * DELETE Request
// * Delete /auth/user/post/:id
const deletePost = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user.id);
  if (user) {
    const post = await postModel.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    } else {
      // ? res.sendfile(post.path);
      res.json({ message: "Post has been deleted", post });
    }
  } else {
    res.status(400).json({ message: "User not authorized" });
  }
});

// * PUT Request
// * Update /auth/user/post/:id
const updatePost = asyncHandler(async (req, res) => {
  const { title, description, message } = req.body;
  const user = await userModel.findById(req.user.id);
  if (user) {
    const updatePost = await postModel.findByIdAndUpdate(req.params.id, {
      title,
      description,
      message,
    });
    res.json(updatePost);
  } else {
    res.status(400).json({ message: "User not authorized" });
    throw new Error("User not found");
  }
});

// * GET Request
// * Get /auth/user/feed
const feeds = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user.id);
  if (user) {
    const posts = await postModel.find();
    if (!posts) {
      return res.status(404).json({ message: "Post not found" });
    } else {
      res.json(posts);
    }
  } else {
    res.status(400).json({ message: "User not authorized" });
  }
});
module.exports = {
  uploadPost,
  showPost,
  getPosts,
  deletePost,
  updatePost,
  feeds,
};
