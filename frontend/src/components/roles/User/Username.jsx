import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Typography, TextField, Box } from "@mui/material";
import logo from "../../assets/2900470_25486 [Converted].png";

import { PersonOutline } from "@mui/icons-material";
import { useNavigate, Outlet } from "react-router-dom";
const headingStyles = {
  fontWeight: "bold",
  marginBottom: "1rem",
  textAlign: "center",
};
const logoStyles = {
  height: "100px",
};
const Username = () => {
  const navigate = useNavigate();

  // TODO: const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your login logic here
  // };
  return (
    <Box sx={containerStyles}>
      <Outlet />
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
        sx={containerStyles}
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
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", color: "#909BAD", mt: 1 }}
        >
          Add Username
        </Typography>
        <TextField
          label="Username"
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
            startAdornment: (
              <PersonOutline sx={{ color: "#fff", paddingRight: "5px" }} />
            ),
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
          <Button
            sx={{ marginTop: "1rem" }}
            onClick={() => navigate("/setRelation")}
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Username;



const containerStyles = {
    marginTop: "5rem",
    height: "85vh",
    background: "#232B3E",
  };
  