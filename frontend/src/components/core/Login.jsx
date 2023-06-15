import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Typography, TextField, Box } from "@mui/material";
import logo from "../assets/2900470_25486 [Converted].png";

import { Email, Lock, } from "@mui/icons-material";
import { useNavigate, Outlet } from "react-router-dom";
import SignUp from "./SignUp";
const headingStyles = {
  fontWeight: "bold",
  marginBottom: "1rem",
  textAlign: "center",
};
const logoStyles = {
  height: "100px",
};
const Login = () => {
  const navigate = useNavigate();

  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const handleSignUp = () => {
    setShowSignUpForm(true);
  };

  // TODO: const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your login logic here
  // };
  return (
    <>
      <Outlet />
      {!showSignUpForm && (
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
        </motion.div>
      )}
      {!showSignUpForm && (
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", color: "#909BAD", mt: 1 }}
          >
            Sign in to your account
          </Typography>
          <TextField
            label="Email"
            fullWidth
            sx={{ marginTop: "1rem" }}
            InputLabelProps={{
              sx: {
                color: "#909BAD",
                "&.Mui-focused": {
                  color: "#fff",
                },
              },
            }}
            InputProps={{
              startAdornment: <Email  sx={{ color: "#fff" ,paddingRight: '5px'}} />,
              style: { color: "#909BAD" },
              sx: {
                
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#909BAD",
                  color: "#fff",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
              },
            }}
          />
          <TextField
            sx={{ marginTop: "1rem" }}
            label="Password"
            fullWidth
            type="password"
            InputLabelProps={{
              sx: {
             

                color: "#909BAD",
                "&.Mui-focused": {
                  color: "#fff",
                },
              },
            }}
            InputProps={{
              startAdornment: <Lock sx={{ color: "#fff" ,paddingRight: '5px'}} />,
              style: { color: "#909BAD" },
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#909BAD",
                  color: "#fff",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#fff",
                },
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button sx={{ marginTop: "1rem" }} onClick={()=> navigate("/setUsername")} variant="contained" size="large">
              Login
            </Button>
            <Typography variant="subtitle1" sx={{ color: "#909BAD", mt: 2 }}>
              Don't have an account?
              <Button
                variant="text"
                size="small"
                onClick={handleSignUp}
                sx={{
                  color: "#fff",
                  marginLeft: "0.5rem",
                  textDecoration: "underline",
                }}
              >
                Sign Up
              </Button>
            </Typography>
          </Box>
        </motion.div>
      )}
      {showSignUpForm && (
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Render the login form */}
          <SignUp />
          
        </motion.div>
      )}
    </>
  );
};

export default Login;
