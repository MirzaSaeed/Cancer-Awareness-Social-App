import React from "react";
import { motion } from "framer-motion";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  People as PeopleIcon,
  Forum as ForumIcon,
  Pages as PagesIcon,
  Archive as ArchiveIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";

const useStyles = makeStyles({
  drawerPaper: {
    marginTop: "61px",
  },
});
let scale = 1.05;
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
        paper: classes.drawerPaper,
      }}
    >
      <Box sx={{ width: 245 }}>
        <List
          sx={{
            backgroundColor: "#1A202E",
            paddingBottom: "10px",
            height: scale === 1.05 ? "95vh" : "98vh",
          }}
        >
          <ListItem sx={{ flexDirection: "column" }}>
            <Avatar src="https://i.pravatar.cc/150?img=10" alt="User Profile" />
            <ListItemText sx={{ color: "#fff" }} primary="John Doe" />
          </ListItem>

          {data.map((item) => (
            <motion.div
              whileHover={{
                scale: scale,
              }}
              whileTap={{ scale: 0.95 }}
              key={item.label}
            >
              <ListItem
                button
                sx={{
                  paddingTop: "15px",
                  paddingBottom: "15px",
                  color: "rgba(255,255,255,.8)",
                  "&:hover": {
                    color: "#6373E5",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#0F131C",
                    color: "#6373E5",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "#0F131C",
                    color: "#6373E5",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <Typography>{item.label}</Typography>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
