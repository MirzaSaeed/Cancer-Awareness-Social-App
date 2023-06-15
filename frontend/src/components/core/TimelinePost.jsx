import React, { useState } from "react";
import {
  Typography,
  Box,
  Divider,
  IconButton,
  TextField,
  InputAdornment,
  Tooltip,
  Avatar,
  ListItem,
  DialogContent,
  DialogTitle,
  Dialog,
  List,
  Button,
  ListItemText,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import { Reply } from "@mui/icons-material";
import posts from "../assets/posts";

const TimelinePost = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCommentTextChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText) {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };
  // const handleReply = (comment) => {
  //   const updatedComments = comments.map((c) => {
  //     if (c.id === comment.id) {
  //       return {
  //         ...c,
  //         showReply: !c.showReply,
  //       };
  //     }
  //     return c;
  //   });
  //   setComments(updatedComments);
  // };
  const [replyText, setReplyText] = useState();
  const [selectedCommentId, setSelectedCommentId] = useState(null);

  const handleReply = (commentId) => {
    setSelectedCommentId(commentId);
  };

  const handleReplyTextChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleReplySubmit = () => {
    if (replyText && selectedCommentId) {
      // Find the selected comment by its ID
      const selectedComment = comments.find(
        (comment) => comment.id === selectedCommentId
      );

      if (selectedComment) {
        // Add the new reply to the selected comment's replies array
        const newReply = {
          id: selectedComment.replies.length + 1,
          username: "JohnDoe", // Replace with the actual username
          avatar: "https://i.pravatar.cc/150?img=4", // Replace with the actual avatar URL
          reply: replyText,
          timestamp: new Date().toISOString(),
        };

        const updatedComments = comments.map((comment) => {
          if (comment.id === selectedCommentId) {
            return {
              ...comment,
              replies: [...comment.replies, newReply],
            };
          }
          return comment;
        });

        setComments(updatedComments);
        setReplyText("");
        setSelectedCommentId(null);
      }
    }
  };

  const open = Boolean(anchorEl);
  const [likesOpen, setLikesOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [sharesOpen, setSharesOpen] = useState(false);

  const handleLikeClick = () => {
    setLikesOpen(true);
  };

  const handleCommentClick = () => {
    setCommentsOpen(true);
  };
  const handleShareClick = () => {
    setSharesOpen(true);
  };
  const handleLikeClose = () => {
    setLikesOpen(false);
  };

  const handleCommentClose = () => {
    setCommentsOpen(false);
  };
  const handleShareClose = () => {
    setSharesOpen(false);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Timeline Posts
      </Typography>
      {posts.map((post) => (
        <Box
          key={post.id}
          sx={{
            marginBottom: "1rem",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
          >
            <img
              src={post.avatar}
              alt={post.author}
              style={{
                width: 48,
                height: 48,
                marginRight: "1rem",
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="subtitle1"
              component="div"
              fontWeight="bold"
              sx={{ flex: 1 }}
            >
              {post.author}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {post.timestamp}
            </Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              marginBottom: "1rem",
            }}
          >
            {post.content}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={post.image}
              alt="Post"
              style={{ width: "75%", borderRadius: 8 }}
            />
          </Typography>
          <Box>
            <Tooltip title="Like">
              <IconButton>
                <FavoriteIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Comment">
              <IconButton onClick={handleClick}>
                <CommentIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share">
              <IconButton>
                <ShareIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              pl: 1,
              pr: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body1">
              <Button sx={{ color: "#fff" }} onClick={handleLikeClick}>
                Likes: {post.likes.length}
              </Button>
            </Typography>
            <Typography variant="body1">
              <Button sx={{ color: "#fff" }} onClick={handleCommentClick}>
                Comments: {post.comment.length}
              </Button>
            </Typography>
            <Typography variant="body1">
              <Button sx={{ color: "#fff" }} onClick={handleShareClick}>
                Shares: {post.shares.length}
              </Button>
            </Typography>
          </Box>
          <Dialog open={likesOpen} onClose={handleLikeClose}>
            <DialogTitle sx={{ background: "#1A202E", color: "#fff" }}>
              Likes
            </DialogTitle>
            <DialogContent sx={{ background: "#1A202E", color: "#8599AB" }}>
              <List>
                {post.likes &&
                  post.likes.map((user) => (
                    <ListItem key={user.id}>
                      <ListItemText>
                        <Box
                          key={user.id}
                          sx={{ display: "flex", alignItems: "center", mb: 2 }}
                        >
                          <Avatar
                            src={user.avatar}
                            alt={user.username}
                            sx={{ mr: 2 }}
                          />
                          <Typography variant="subtitle1">
                            {user.username}
                          </Typography>
                        </Box>
                      </ListItemText>
                    </ListItem>
                  ))}
              </List>
            </DialogContent>
          </Dialog>
          <Dialog open={commentsOpen} onClose={handleCommentClose}>
            <DialogTitle sx={{ background: "#1A202E", color: "#fff" }}>
              Comments
            </DialogTitle>
            <DialogContent sx={{ background: "#1A202E", color: "#8599AB" }}>
              <List>
                {post.comment &&
                  post.comment.map((comment) => (
                    <Box
                      display="flex"
                      alignItems="center"
                      p={1}
                      pt={0}
                      m={1}
                      mt={0}
                    >
                      <Avatar
                        sx={{ width: 24, height: 24 }}
                        src={comment.avatar}
                        alt={comment.username}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ ml: 1, fontSize: "12px", color: "#909BAD" }}
                      >
                        @{comment.username}:
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ ml: 1, fontSize: "14px" }}
                      >
                        {comment.comment}
                      </Typography>
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => handleReply(comment.id)}
                      >
                        <Tooltip title="Reply">
                          <Reply
                            sx={{
                              color: "#fff",
                              "&:hover": {
                                color: "#6373E5",
                              },
                              "&.Mui-selected": {
                                backgroundColor: "#0F131C",
                                color: "#6373E5",
                              },
                              "&.Mui-focused ": {
                                backgroundColor: "#0F131C",
                                color: "#6373E5",
                              },
                            }}
                          />
                        </Tooltip>
                      </IconButton>
                      {comment.replies && comment.id === selectedCommentId && (
                        <Box
                          ml={5}
                          mt={1}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          key={comment.replies.id}
                        >
                          <TextField
                            placeholder="Reply..."
                            value={replyText}
                            onChange={handleReplyTextChange}
                            variant="outlined"
                            size="small"
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#909BAD",
                                color: "#fff",
                              },
                              "& .MuiInputBase-input": {
                                color: "#909BAD",
                              },
                              "&:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#fff",
                              },
                              "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  borderColor: "#fff",
                                },
                            }}
                            InputLabelProps={{
                              sx: {
                                color: "#909BAD",
                                "&.Mui-focused": {
                                  color: "#fff",
                                },
                              },
                            }}
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Tooltip title="Comment">
                                    <IconButton
                                      sx={{
                                        color: "#fff",
                                        "&:hover": {
                                          color: "#6373E5",
                                        },
                                        "&.Mui-selected": {
                                          backgroundColor: "#0F131C",
                                          color: "#6373E5",
                                        },
                                        "&.Mui-focused ": {
                                          backgroundColor: "#0F131C",
                                          color: "#6373E5",
                                        },
                                      }}
                                      component="span"
                                      size="small"
                                    >
                                      <SendIcon onClick={handleReplySubmit} />
                                    </IconButton>
                                  </Tooltip>
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  ))}
                <form onSubmit={handleCommentSubmit}>
                  <Box
                    pb={2}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      variant="outlined"
                      value={comment}
                      onChange={handleCommentChange}
                      placeholder="Add a comment..."
                      size="small"
                      fullWidth
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#909BAD",
                          color: "#fff",
                        },
                        "& .MuiInputBase-input": {
                          color: "#909BAD",
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#fff",
                        },
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#fff",
                        },
                      }}
                      InputLabelProps={{
                        sx: {
                          color: "#909BAD",
                          "&.Mui-focused": {
                            color: "#fff",
                          },
                        },
                      }}
                    />
                    <InputAdornment position="end">
                      <Tooltip title="Comment">
                        <IconButton
                          sx={{
                            color: "#fff",
                            "&:hover": {
                              color: "#6373E5",
                            },
                            "&.Mui-selected": {
                              backgroundColor: "#0F131C",
                              color: "#6373E5",
                            },
                            "&.Mui-focused ": {
                              backgroundColor: "#0F131C",
                              color: "#6373E5",
                            },
                          }}
                          component="span"
                          size="small"
                        >
                          <SendIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  </Box>
                </form>
              </List>
            </DialogContent>
          </Dialog>
          <Dialog open={sharesOpen} onClose={handleShareClose}>
            <DialogTitle sx={{ background: "#1A202E", color: "#fff" }}>
              Shares
            </DialogTitle>
            <DialogContent sx={{ background: "#1A202E", color: "#8599AB" }}>
              <List>
                {post.shares &&
                  post.shares.map((user) => (
                    <ListItem key={user.id}>
                      <ListItemText>
                        <Box
                          key={user.id}
                          sx={{ display: "flex", alignItems: "center", mb: 2 }}
                        >
                          <Avatar
                            src={user.avatar}
                            alt={user.username}
                            sx={{ mr: 2 }}
                          />
                          <Typography variant="subtitle1">
                            {user.username}
                          </Typography>
                        </Box>
                      </ListItemText>
                    </ListItem>
                  ))}
              </List>
            </DialogContent>
          </Dialog>

          <Divider sx={{ background: "#909BAD" }} />
        </Box>
      ))}
    </Box>
  );
};

export default TimelinePost;
