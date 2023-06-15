import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Avatar,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
  IconButton,
  Tooltip,
  Divider,
} from "@mui/material";
import { Instagram, Twitter, Language } from "@mui/icons-material";

const Profile = () => {
  const [followersOpen, setFollowersOpen] = useState(false);
  const [followingOpen, setFollowingOpen] = useState(false);

  const handleFollowersClick = () => {
    setFollowersOpen(true);
  };

  const handleFollowingClick = () => {
    setFollowingOpen(true);
  };

  const handleFollowersClose = () => {
    setFollowersOpen(false);
  };

  const handleFollowingClose = () => {
    setFollowingOpen(false);
  };

  // Sample data
  const user = {
    name: "John Doe",
    username: "johndoe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    posts: 100,
    followers: [
      {
        id: 1,
        name: "Tom Curise",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      {
        id: 2,
        name: "Jane Smith",
        avatar: "https://i.pravatar.cc/150?img=22",
      },
      {
        id: 3,
        name: "Michael Johnson",
        avatar: "https://i.pravatar.cc/150?img=44",
      },
    ],
    following: [
      {
        id: 1,
        name: "Tom Curise",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      {
        id: 2,
        name: "Jane Smith",
        avatar: "https://i.pravatar.cc/150?img=22",
      },
      {
        id: 3,
        name: "Michael Johnson",
        avatar: "https://i.pravatar.cc/150?img=44",
      },
    ],
    social: {
      website: "https://example.com",
      twitter: "https://twitter.com/example",
      instagram: "https://instagram.com/example",
    },
    postsData: [
      {
        id: 1,
        author: "Kevin Butz",
        image:
          "https://images.unsplash.com/photo-1585416294584-b849d9e571ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9zdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
        avatar:
          "https://images.unsplash.com/profile-1550909047272-90b93f9b8175?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
        content: "Dog with jacket leaning into the wind on a boardwalk.",
        timestamp: "3 hours ago",
        likes: 10,
        share: 3,
        comments: 5,
        comment: [
          {
            id: 1,
            username: "Tomcruies",
            avatar: "https://i.pravatar.cc/150?img=1",
            comment: "Great post!",
          },
          {
            id: 2,
            username: "Janesmith",
            avatar: "https://i.pravatar.cc/150?img=2",

            comment: "Nice work!",
          },
          {
            id: 3,
            username: "Alicejohnson",
            avatar: "https://i.pravatar.cc/150?img=3",

            comment: "Awesome!",
          },
        ],
      },
      {
        id: 3,
        author: "National Cancer Institute",

        image:
          "https://images.unsplash.com/photo-1637618619829-ef0f457d67b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        avatar:
          "https://images.unsplash.com/profile-1605780274397-200ea3604d6fimage?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
        content:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        timestamp: "1 day ago",
        likes: 15,
        share: 1,
        comments: 7,
        comment: [
          {
            id: 1,
            username: "Tomcruies",
            avatar: "https://i.pravatar.cc/150?img=1",
            comment: "Great post!",
            replies: [
              {
                id: 1,
                username: "JohnDoe",
                avatar: "https://i.pravatar.cc/150?img=4",
                reply: "Thanks, Tom!",
                timestamp: "2023-05-10T10:30:00Z",
              },
            ],
          },
          {
            id: 2,
            username: "Janesmith",
            avatar: "https://i.pravatar.cc/150?img=2",
            replies: [],
            comment: "looks great!",
          },
          {
            id: 3,
            username: "Alicejohnson",
            avatar: "https://i.pravatar.cc/150?img=3",
            replies: [],
            comment: "Awesome!",
          },
        ],
      },
      {
        id: 2,
        author: "Jane Smith",
        image:
          "https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        avatar:
          "https://images.unsplash.com/profile-1576086368754-99727c1b6f81image?dpr=1&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff",
        likes: 8,
        comments: 7,
        comment: [
          {
            id: 1,
            username: "Tomcruies",
            avatar: "https://i.pravatar.cc/150?img=1",
            comment: "Great post!",
          },
          {
            id: 2,
            username: "Janesmith",
            avatar: "https://i.pravatar.cc/150?img=2",

            comment: "Nice work!",
          },
          {
            id: 3,
            username: "Alicejohnson",
            avatar: "https://i.pravatar.cc/150?img=3",

            comment: "Awesome!",
          },
        ],
        share: 17,
        content: "Young Girl Receiving Chemotherapy",
        timestamp: "1 day ago",
      },
    ],
  };

  return (
    <Container sx={containerStyles}>
      <Box sx={{ marginTop: "5rem" }}>
        <Grid container>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            ></motion.div>
            <Box display={"flex"} alignItems="center" justifyContent="center">
              <Avatar
                alt={user.name}
                src="https://i.pravatar.cc/150?img=10"
                sx={{ width: 100, height: 100, m: 5 }}
              />
              <Box>
                <Typography variant="h6" pt={5} sx={{ fontWeight: "bold" }}>
                  {user.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontSize: "16px", color: "#909BAD" }}
                >
                  @{user.username}
                </Typography>
                <Typography
                  variant="body1"
                  pt={2}
                  sx={{
                    fontSize: "14px",
                    color: "#909BAD",
                    fontWeight: "bold",
                  }}
                >
                  {user.bio}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body1">Posts: {user.posts}</Typography>
                  <Typography variant="body1">
                    <Button
                      sx={{ color: "#fff" }}
                      onClick={handleFollowersClick}
                    >
                      Followers: {user.followers.length}
                    </Button>
                  </Typography>
                  <Typography variant="body1">
                    <Button
                      sx={{ color: "#fff" }}
                      onClick={handleFollowingClick}
                    >
                      Following: {user.following.length}
                    </Button>
                  </Typography>
                </Box>
                <Box>
                  <Tooltip title="Website" arrow>
                    <IconButton
                      href={user.social.website}
                      target="_blank"
                      sx={{ color: "#c13584" }} // Facebook company color
                      aria-label="Website"
                    >
                      <Language />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Twitter" arrow>
                    <IconButton
                      href={user.social.twitter}
                      target="_blank"
                      sx={{ color: "#00acee" }} // Twitter company color
                      aria-label="Twitter"
                    >
                      <Twitter />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Instagram" arrow>
                    <IconButton
                      href={user.social.instagram}
                      target="_blank"
                      sx={{ color: "#e4405f" }} // Instagram company color
                      aria-label="Instagram"
                    >
                      <Instagram />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} mt={2}>
            <Typography mb={1} variant="h6" textAlign="center">
              Posts
            </Typography>
            <Divider sx={{ background: "#909BAD" }} />
            <Grid
              container
              display="flex"
              justifyContent={"center"}
              mt={1}
              spacing={2}
            >
              {user.postsData.map((post) => (
                <Grid item xs={6} sm={4} md={3} key={post.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={post.image}
                      alt={post.caption}
                      style={{ width: "100%" }}
                    />
                    <Typography variant="body1">{post.caption}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>{" "}
            <Grid
              container
              display="flex"
              justifyContent={"center"}
              mt={1}
              spacing={2}
            >
              {user.postsData.map((post) => (
                <Grid item xs={6} sm={4} md={3} key={post.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src={post.image}
                      alt={post.caption}
                      style={{ width: "100%" }}
                    />
                    <Typography variant="body1">{post.caption}</Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Dialog open={followersOpen} onClose={handleFollowersClose}>
            <DialogTitle sx={{ background: "#1A202E", color: "#fff" }}>
              Followers
            </DialogTitle>
            <DialogContent sx={{ background: "#1A202E", color: "#8599AB" }}>
              <List>
                {user.followers.map((follower) => (
                  <ListItem key={follower}>
                    <ListItemText>
                      <Box
                        key={follower.id}
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Avatar
                          src={follower.avatar}
                          alt={follower.name}
                          sx={{ mr: 2 }}
                        />
                        <Typography variant="subtitle1">
                          {follower.name}
                        </Typography>
                      </Box>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </DialogContent>
          </Dialog>
          <Dialog open={followingOpen} onClose={handleFollowingClose}>
            <DialogTitle sx={{ background: "#1A202E", color: "#fff" }}>
              Following
            </DialogTitle>
            <DialogContent sx={{ background: "#1A202E", color: "#8599AB" }}>
              <List>
                {user.following.map((following) => (
                  <ListItem key={following}>
                    <ListItemText>
                      <Box
                        key={following.id}
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <Avatar
                          src={following.avatar}
                          alt={following.name}
                          sx={{ mr: 2 }}
                        />
                        <Typography variant="subtitle1">
                          {following.name}
                        </Typography>
                      </Box>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </DialogContent>
          </Dialog>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
const containerStyles = {
  height: "94vh",
  background: "#232B3E",
};
