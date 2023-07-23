import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Box,
  IconButton,
  MenuItem,
  Typography,
  Menu,
  Tooltip,
  Avatar,
  styled,
  tooltipClasses,
  ListItemIcon,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { AccountCircle, Logout, Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.primary.main,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.primary.background,
  },
}));

const ProfileIcon = () => {
  const navigate = useNavigate();
  const data = [
    { icon: <Person />, label: "Profile", link: "Profile" },
    { icon: <AccountCircle />, label: "Account", link: "Account" },
    // { icon: <PermMedia />, label: "Dashboard" },
    { icon: <Logout />, label: "Logout", link: " " },
  ];

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <BootstrapTooltip title="Open settings">
        <IconButton size="small" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            sx={{ width: 30, height: 30, fontSize: 15, bgcolor: blueGrey[500] }}
            alt="Mirza"
            src="https://i.pravatar.cc/150?img=10"
          />
        </IconButton>
      </BootstrapTooltip>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        PaperProps={{
          style: {
            backgroundColor: "#232B3E", // Set the background color here
          },
        }}
      >
        {data.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            key={item.label}
          >
            <MenuItem
              key={item.label}
              sx={{
                py: 1,
                minHeight: 32,
                background: "#232B3E",
                color: "rgba(255,255,255,.8)",
                "&:hover": {
                  backgroundColor: "#0F131C",
                  color: "#6373E5",
                },
              }}
              onClick={() => navigate(`/${item.link}`)}
            >
              <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
              <Typography textAlign="center">{item.label}</Typography>
            </MenuItem>
          </motion.div>
        ))}
      </Menu>
    </Box>
  );
};

export default ProfileIcon;
