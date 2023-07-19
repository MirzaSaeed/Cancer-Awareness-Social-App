import React, { useState } from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ProfileSettings from "../settings/ProfileSettings";
import NotificationsSettings from "../settings/Notifications.settings";
import PrivacyPolicy from "../settings/PrivacyPolicy";
import Security from "../settings/Security";
import ChangePassword from "../settings/ChangePassword";

const FirstCard = ({ onItemClick, selectedItem }) => {
  const cardItems = [
    {
      title: "Profile",
      route: "profile",
    },
    {
      title: "Change Password",
      route: "change-password",
    },
    {
      title: "Privacy Policy",
      route: "privacy-policy",
    },
    {
      title: "Security",
      route: "security",
    },
    {
      title: "Notification Settings",
      route: "notifications",
    },
  ];

  return (
    <Box sx={{ position: "sticky" }}>
      <Paper sx={{ p: 2, background: "#1A202E", color: "#fff" }}>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Grid container direction="column" spacing={2}>
            {cardItems.map((item) => (
              <Grid item key={item.title}>
                <Box
                  sx={{
                    py: 1,
                    px: 1,
                    borderRadius: 1,
                    cursor: "pointer",
                    background:
                      item.route === selectedItem ? "#0F131C" : "#1A202E",
                    color: item.route === selectedItem ? "#6373E5" : "6373E5",
                    "&:hover": {
                      background:
                        item.route === selectedItem ? "#0F131C" : "#232B3E",
                      color: "#6373E5",
                    },
                    "&.Mui-selected": {
                      background: "#0F131C",
                      color: "#6373E5",
                    },
                    "&.Mui-focused": {
                      background: "#0F131C",
                      color: "#6373E5",
                    },
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      paddingLeft: "1rem",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onItemClick(item.route)}
                  >
                    {item.title}
                  </motion.div>
                </Box>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Paper>
    </Box>
  );
};

const SecondCard = ({ selectedItem }) => {
  const renderDetails = () => {
    switch (selectedItem) {
      case "profile":
        return <ProfileSettings />;
      case "change-password":
        return <ChangePassword />;
      case "privacy-policy":
        return <PrivacyPolicy />;
      case "security":
        return <Security />;
      case "notifications":
        return <NotificationsSettings />;
      default:
        return null;
    }
  };

  return (
    <Paper sx={{ p: 2, background: "#1A202E", color: "#fff" }}>
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
      >
        {renderDetails()}
      </motion.div>
    </Paper>
  );
};

const Account = () => {
  const [selectedItem, setSelectedItem] = useState("profile");
  const containerStyles = {
    background: "#232B3E",
    marginTop: "5rem",
    height: "100%",
    // height: selectedItem === "privacy-policy",
  };
  const onItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <Container sx={containerStyles}>
      <Box sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FirstCard onItemClick={onItemClick} selectedItem={selectedItem} />
          </Grid>
          <Grid item xs={8}>
            <SecondCard selectedItem={selectedItem} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Account;
