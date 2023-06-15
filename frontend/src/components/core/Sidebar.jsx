import React, { useState } from "react";
import {
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Collapse,
  Button,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  People as PeopleIcon,
  Forum as ForumIcon,
  Pages as PagesIcon,
  Archive as ArchiveIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";

const useStyles = makeStyles({
  drawerPaper: {
    marginTop: "61px"
  }
});

const Sidebar = ({ open, handleToggle }) => {
  const classes = useStyles();
  const data = [
    { icon: <PeopleIcon />, label: "Community" },
    { icon: <ForumIcon />, label: "Messages" },
    { icon: <PagesIcon />, label: "Pages" },
    { icon: <ArchiveIcon />, label: "Archives" },
    { icon: <FavoriteIcon />, label: "Favorites" },
  ];

  return (
    <Drawer
      open={open}
      anchor="left"
      onClose={handleToggle}
      classes={{
    paper: classes.drawerPaper
  }}
      // BackdropProps={{ style: { backgroundColor: "transparent" }, marginTop: '2rem' }}
    >
      <Box sx={{ width: 245,   }}>
        <List
          sx={{
            backgroundColor: "#1A202E", 
            paddingBottom: "10px",
            height: "98vh",
          }}
        >
          <ListItem sx={{ flexDirection: "column" }}>
            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User Profile" />
            <ListItemText sx={{ color: "#fff" }} primary="John Doe" />
          </ListItem>

          {data.map((item) => (
            <ListItem
              button
              key={item.label}
              sx={{
                paddingTop: "15px",
                paddingBottom: "15px",
                // backgroundColor: "#0F131C", // Darrk selected
                color: "rgba(255,255,255,.8)",
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
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <Typography>{item.label}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
