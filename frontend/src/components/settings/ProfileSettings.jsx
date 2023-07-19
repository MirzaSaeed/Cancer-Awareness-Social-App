import React, { useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  CardMedia,
  CardContent,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import { Email, Person, PersonOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProfileSettings = () => {
  const fileInputRef = useRef(null);
  const handleImageUpload = (event) => {
    // Handle the file upload logic here
    console.log(event.target.files);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ background: "#1A202E" }}>
        <Grid spacing={2}>
          <Box>
            <Box style={{ margin: "0 auto", maxWidth: "800px" }} pb={2}>
              <Typography variant="h5" pb={2}>
                Profile Settings
              </Typography>
              {/* <Typography sx={{ color: "#8A8D94" }} >
              Select notification you want to receive
            </Typography> */}
              <Divider sx={{ background: "#909BAD" }} />
              <Box sx={{ width: "100%" }}>
                <CardContent sx={{ display: "flex", alignItems: "center" }}>
                  <CardMedia
                    component="img"
                    src="https://i.pravatar.cc/150?img=10"
                    alt=""
                    sx={{ borderRadius: 10, display: "block", width: "80px" }}
                  />
                  <Box sx={{ ml: 4 }}>
                    <input
                      accept="image/*"
                      id="post-image-upload"
                      type="file"
                      onChange={handleImageUpload}
                      ref={fileInputRef}
                      style={{ display: "none" }}
                    />
                    <label htmlFor="post-image-upload">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        sx={{
                          background: "#0F131C",
                          "&:hover": {
                            background: "#0F131C",
                            color: "#6373E5",
                          },
                        }}
                      >
                        Upload new photo
                      </Button>
                    </label>
                    <Button
                      sx={{
                        ml: 1,
                        color: "#fff",
                        "&:hover": {
                          color: "#6373E5",
                        },
                      }}
                    >
                      Reset
                    </Button>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ mt: 1 }}
                    >
                      Allowed JPG, GIF or PNG. Max size of 800K
                    </Typography>
                  </Box>
                </CardContent>
                <Divider sx={{ background: "#909BAD" }} />
                <TextField
                  label="Username"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                  InputLabelProps={{
                    sx: {
                      color: "#909BAD",
                      "&.Mui-focused": {
                        color: "#fff",
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <PersonOutline
                        sx={{ color: "#fff", paddingRight: "5px" }}
                      />
                    ),
                    style: { color: "#909BAD" },
                    sx: {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#909BAD",
                        color: "#fff",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      },
                    },
                  }}
                />
                <Grid
                  sx={{ marginTop: "0.5rem" }}
                  container
                  spacing={2}
                  alignItems="center"
                >
                  <Grid item xs={6}>
                    <TextField
                      label="First Name"
                      fullWidth
                      InputLabelProps={{
                        sx: {
                          color: "#909BAD",
                          "&.Mui-focused": {
                            color: "#fff",
                          },
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Person sx={{ color: "#fff", paddingRight: "5px" }} />
                        ),
                        style: { color: "#909BAD" },
                        sx: {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#909BAD",
                            color: "#fff",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Last Name"
                      fullWidth
                      InputLabelProps={{
                        sx: {
                          color: "#909BAD",
                          "&.Mui-focused": {
                            color: "#fff",
                          },
                        },
                      }}
                      InputProps={{
                        startAdornment: (
                          <Person sx={{ color: "#fff", paddingRight: "5px" }} />
                        ),
                        style: { color: "#909BAD" },
                        sx: {
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#909BAD",
                            color: "#fff",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                          },
                        },
                      }}
                    />
                  </Grid>
                </Grid>
                <TextField
                  label="Email"
                  sx={{ marginTop: "1rem" }}
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: "#909BAD",
                      "&.Mui-focused": {
                        color: "#fff",
                      },
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <Email sx={{ color: "#fff", paddingRight: "5px" }} />
                    ),
                    style: { color: "#909BAD" },
                    sx: {
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#909BAD",
                        color: "#fff",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#fff",
                      },
                    },
                  }}
                />
                <Alert
                  severity="warning"
                  sx={{
                    background: "#dddddd",
                    marginTop: "1rem",
                  }}
                >
                  Your email is not confirmed. Please check your inbox.
                  <br />
                  <Link to="#">Resend confirmation</Link>
                </Alert>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default ProfileSettings;
