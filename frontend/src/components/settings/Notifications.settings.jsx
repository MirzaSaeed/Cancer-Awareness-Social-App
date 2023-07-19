import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Switch,
  Divider,
  Paper,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Notifications as NotificationsIcon,
  //   Security as SecurityIcon,
} from "@mui/icons-material";
import { alpha, styled } from "@mui/material/styles";
const NotificationsSettings = () => {
  const CustomSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: "#fff",
      "&:hover": {
        backgroundColor: alpha("#6373E5 ", theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#6373E5 ",
    },
  }));
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box style={{ margin: "0 auto", maxWidth: "800px" }}>
        <Typography variant="h5">Notification Settings</Typography>
        <Typography sx={{ color: "#8A8D94" }} pb={2}>
          Select notification you want to receive
        </Typography>
        <Divider sx={{ background: "#909BAD" }} />

        <Box>
          <Typography variant="h6" pt={2}>
            Security
          </Typography>
          <Typography sx={{ color: "#8A8D94" }} pb={2}>
            Control security alert you will be notified.
          </Typography>
          <Paper
            sx={{
              background: "#0F131C",
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            <List>
              <ListItem>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <ListItemText
                    primary="Unusual activity notifications"
                    secondary="Donec in quam sed urna bibendum tincidunt quis mollis
                    mauris."
                  />
                  <CustomSwitch defaultChecked />
                </div>
              </ListItem>
              <ListItem>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <ListItemText
                    primary="Unauthorized financial activity"
                    secondary="Fusce lacinia elementum eros, sed vulputate urna eleifend
                    nec."
                  />

                  <CustomSwitch />
                </div>
              </ListItem>
            </List>
          </Paper>
          <Divider sx={{ background: "#909BAD" }} />

          <Typography variant="h6" pt={2}>
            System{" "}
          </Typography>
          <Typography sx={{ color: "#8A8D94" }} pb={2}>
            Please enable system alert you will get.
          </Typography>
          <Paper sx={{ background: "#0F131C", color: "#fff" }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon style={{ color: "#6373E5" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Notify me about new features and updates"
                  secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <CustomSwitch />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon style={{ color: "#6373E5" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Notify me by email for latest news"
                  secondary="Nulla et tincidunt sapien. Sed eleifend volutpat elementum."
                />
                <CustomSwitch />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <NotificationsIcon style={{ color: "#6373E5" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Notify me about tips on using account"
                  secondary="Donec in quam sed urna bibendum tincidunt quis mollis mauris."
                />
                <CustomSwitch />
              </ListItem>
            </List>
          </Paper>
        </Box>
      </Box>
    </motion.div>
  );
};

export default NotificationsSettings;
