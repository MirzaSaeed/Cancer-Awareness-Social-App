import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  Menu,
} from "@mui/material";
import logo from "../assets/2900470_25486 [Converted].png";
import { useNavigate } from "react-router-dom";
import Profile from "./Account";
import { ArrowBack, Menu as MenuIcon,  } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import Timeline from "../roles/User/Timeline";
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },

  appbar: {
    color: theme.palette.text.main,
  },
}));

// const tabs = {
//   color: "#fff",
// };
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

const logoStyles = {
  marginRight: "8px",
  height: "30px",
};
const headingStyles = {
  display: "flex",
};

const Header = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const [value, setValue] = useState("null");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar position="fixed" >
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleToggle}>
        <Sidebar open={open} handleToggle={handleToggle} />
        {open ? <ArrowBack /> :
         <MenuIcon />}
       
        </IconButton>


        <Typography
          variant="h6"
          style={headingStyles}
          className={classes.title}
        >
          <img src={logo} alt="Logo" style={logoStyles} />
          Cancer Awareness
        </Typography>
        <Tabs
          value={value}
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#6373E5",
            },
          }}
          sx={{
            "& .MuiTab-root:hover": {
              color: "#6373E5", // Set the tab text color on hover
            },
          }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="HOME" onClick={() => navigate("/")} />
          <Tab label="ABOUT" onClick={() => navigate("/about")} />
          <Tab label="CONTACT US" onClick={() => navigate("/contactus")} />
        </Tabs>
        <Profile />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
