import { motion } from "framer-motion";
import { Button, Container, Typography } from "@mui/material";
import logo from "../assets/2900470_25486 [Converted].png";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "94vh",
  background: "#232B3E",
};

const headingStyles = {
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#ffff",
  textAlign: "center",
};
const logoStyles = {
  height: "100px",
};
const subheadingStyles = {
  color: "#909BAD",
  marginBottom: "2rem",
  textAlign: "center",
};
const LandingPage = () => {
  // const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleGetStarted = () => {
    setShowLoginForm(true);
  };

  const handleBackToHome = () => {
    setShowLoginForm(false);
  };

  return (
    <Container maxWidth="false" sx={containerStyles}>
      <Outlet />
      {!showLoginForm && (
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" component="h1" sx={headingStyles}>
            <img src={logo} alt="Logo" style={logoStyles} />
          </Typography>
          <Typography variant="h3" component="h1" sx={headingStyles}>
            Cancer Awareness
          </Typography>{" "}
          <Typography variant="h6" component="h1" sx={headingStyles}>
            A Social Platform for the Patients
          </Typography>
          <Typography variant="subtitle1" sx={subheadingStyles}>
            Welcome Back!
          </Typography>
        </motion.div>
      )}
      {!showLoginForm && (
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button
            sx={{ backgroundColor: "#1A202E" }}
            variant="contained"
            size="large"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </motion.div>
      )}
      {showLoginForm && (
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Login />
        </motion.div>
      )}
      {showLoginForm && (
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="contained"
            sx={{ marginTop: "1rem" }}
            size="large"
            onClick={handleBackToHome}
          >
            Back to Home
          </Button>
        </motion.div>
      )}
    </Container>
  );
};

export default LandingPage;
