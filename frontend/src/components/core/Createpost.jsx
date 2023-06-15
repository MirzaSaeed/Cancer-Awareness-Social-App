import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  Button,
  InputAdornment,
  Tooltip,
  Typography,
  Avatar,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const user = {
  name: "John Doe",
  avatar: "https://i.pravatar.cc/150?img=10",
};

const CreatePost = () => {
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);

  const handlePostTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setPostImage(file);
  };

  const handlePost = () => {
    // Perform post action with postText and postImage data
    console.log("Post Text:", postText);
    console.log("Post Image:", postImage);

    // Reset input fields after posting
    setPostText("");
    setPostImage(null);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Create a Post
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={user.avatar}
          alt={user.name}
          sx={{ width: 48, height: 48, marginRight: "1rem" }}
        />
        <TextField
          label={`What's on your mind, ${user.name}?`}
          variant="outlined"
          InputLabelProps={{
            sx: {
              color: "#909BAD",
              "&.Mui-focused": {
                color: "#fff",
              },
            },
          }}
          // placeholder={`What's on your mind, ${user.name}?`}
          multiline
          rows={2}
          value={postText}
          onChange={handlePostTextChange}
          fullWidth
          sx={{
            mb: 2,
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <input
                  accept="image/*"
                  id="post-image-upload"
                  type="file"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                />
                <label htmlFor="post-image-upload">
                  <Tooltip title="Upload Photo">
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
                    >
                      <PhotoCamera />
                    </IconButton>
                  </Tooltip>
                </label>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{ background: "#3F51B5" }}
        onClick={handlePost}
      >
        Post
      </Button>
    </Box>
  );
};

export default CreatePost;
