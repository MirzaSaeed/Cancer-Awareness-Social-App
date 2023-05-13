const express = require("express");
const {
  getLikes,
  likeapost,
} = require("../../controllers/user-controllers/likeController");
const router = express.Router();
const {
  loginUser,
  loggedInuser,
  updateUser,
  registerUser,
  addUsername,
} = require("../../controllers/user-controllers/userController");
const {
  uploadPost,
  showPost,
  getPosts,
  deletePost,
  updatePost,
  feeds,
} = require("../../controllers/user-controllers/postController");
const {
  commenting,
  deleteComment,
  getComments,
  getComment,
} = require("../../controllers/user-controllers/commentController");
const { userProtect } = require("../../middleware/authMiddleware");
const { upload } = require("../../middleware/fileUploadMiddleware");

// ? Authentication
router.post("/user/signup", registerUser);
router.post("/user/login", loginUser);
router.get("/user/me", userProtect, loggedInuser);

// ? Adding Username
router.put("/user/addUsername/:id", userProtect, addUsername);

// ? Update Employee Information
router.put("/user/updateData/:id", userProtect, updateUser);

// ? Posts Routes
router.post("/user/post/upload", userProtect, upload.single("img"), uploadPost);
router.get("/user/posts", userProtect, getPosts);
router.get("/user/post/:id", userProtect, showPost);
router.delete("/user/post/:id", userProtect, deletePost);
router.put("/user/post/:id", userProtect, updatePost);
router.get("/user/feed", userProtect, feeds); // ? Timeline post/feed

// ? Commenting on Post Routes as a user
router.post("/user/post/", userProtect, commenting);
router.get("/user/postcomments", userProtect, getComments);
router.get("/user/post/comment/:id", userProtect, getComment);
router.delete("/user/post/comment/:id", userProtect, deleteComment);

module.exports = router;
