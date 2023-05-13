const asyncHandler = require("express-async-handler");

// * POST Request
// * Post /auth/user/post/liked
const likeapost = asyncHandler(async (req, res) => {});

// * GET Request
// * Get /auth/user/totallikes
const getLikes = asyncHandler(async (req, res) => {});

module.exports = {
  getLikes,
  likeapost,
};
