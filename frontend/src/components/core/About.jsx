import React from "react";
import { motion } from "framer-motion";
import { Typography, Box, Container } from "@mui/material";
import logo from "../assets/2900470_25486 [Converted].png";


const containerStyles = {
  height: "94vh",
  background: "#232B3E",
};


const About = () => {
  return (
    <Container sx={containerStyles}>
      <Box textAlign="center" sx={{ marginTop: "5rem" }}>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
            About Cancer Awareness
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 4 }}>
            Cancer Awareness is a social application dedicated to providing
            valuable information and support to cancer patients. Our mission is
            to raise awareness about cancer, educate patients about diagnoses
            and treatment options, and create a supportive community for
            individuals affected by cancer.
          </Typography>
          <Typography variant="body1" component="p">
            Through our platform, users can access a wide range of resources,
            including informative articles, personal stories, and professional
            advice. We aim to empower individuals with knowledge, connect them
            with experts, and foster a sense of community and support during
            their cancer journey.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <img
            src={logo}
            alt="About Cancer Awareness"
            style={{ maxWidth: "25%", marginTop: 20 }}
          />
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
