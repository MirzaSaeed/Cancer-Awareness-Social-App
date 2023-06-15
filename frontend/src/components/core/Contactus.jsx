import React from "react";
import { motion } from "framer-motion";
import { Typography, Box, TextField, Button, Container } from "@mui/material";
import { Email, Person } from "@mui/icons-material";
const containerStyles = {
  height: "94vh",
  background: "#232B3E",
};
const ContactUs = () => {
  return (
    <Container sx={containerStyles}>
      <Box textAlign="center" sx={{ marginTop: "5rem" }}>
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
            Contact Us
          </Typography>
          <Typography variant="body1" component="p" sx={{ mb: 4 }}>
            We would love to hear from you! Please fill out the form below and
            we'll get back to you as soon as possible.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              sx={{ mb: 3 }}
              InputLabelProps={{
                sx: {
                  color: "#909BAD",
                  "&.Mui-focused": {
                    color: "#fff",
                  },
                },
              }}
              InputProps={{
                startAdornment: <Person sx={{ color: "#fff" }} />,
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
              label="Email"
              variant="outlined"
              fullWidth
              sx={{ mb: 3 }}
              InputLabelProps={{
                sx: {
                  color: "#909BAD",
                  "&.Mui-focused": {
                    color: "#fff",
                  },
                },
              }}
              InputProps={{
                startAdornment: <Email sx={{ color: "#fff" }} />,
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
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 3 }}
              InputLabelProps={{
                sx: {
                  color: "#909BAD",
                  "&.Mui-focused": {
                    color: "#fff",
                  },
                },
              }}
              InputProps={{
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
            <Button variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </form>
        </motion.div>
      </Box>
    </Container>
  );
};

export default ContactUs;
