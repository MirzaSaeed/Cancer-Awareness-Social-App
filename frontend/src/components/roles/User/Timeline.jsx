import React from "react";
import { Box, Container, Divider, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SearchBar from "../../core/Searchbar";
import CreatePost from "../../core/Createpost";
import FriendList from "../../core/FriendList";
import SponsoredOrAds from "../../core/SponsoredOrAds";
import UserProfile from "../../core/UserProfile";
import TimelinePost from "../../core/TimelinePost";

const containerStyles = {
  background: "#232B3E",
  marginTop: "5rem",
};
const Timeline = ({ isSidebarOpen }) => {
  const gridItemWidth = isSidebarOpen ? 4 : 12;

  return (
    <Container maxWidth="false">
      <Box sx={containerStyles}>
        <Box sx={{ p: 2 }}>
          <Grid container spacing={2}>
            {/* Left Grid */}
            <Grid item xs={gridItemWidth} md={3}>
              <Box sx={{ position: "sticky", top: 70 }}>
                <Paper sx={{ p: 2, background: "#1A202E", color: "#FFf" }}>
                  <Box sx={{ mb: 2 }}>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <UserProfile />
                    </motion.div>
                  </Box>
                </Paper>
              </Box>
            </Grid>

            <Grid item xs={gridItemWidth} md={6}>
              <Paper sx={{ p: 2, background: "#1A202E", color: "#FFf" }}>
                <Box sx={{ mb: 2 }}>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CreatePost />
                  </motion.div>
                </Box>
                <Divider sx={{ background: "#909BAD" }} />
                <Box sx={{ mt: 2 }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <TimelinePost />
                  </motion.div>
                </Box>
              </Paper>
            </Grid>

            {/* Right Grid */}
            <Grid item xs={gridItemWidth} md={3}>
              <Box sx={{ position: "sticky", top: 70 }}>
                <Paper sx={{ p: 2, background: "#1A202E", color: "#FFf" }}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FriendList />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <SponsoredOrAds />
                  </motion.div>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Timeline;
