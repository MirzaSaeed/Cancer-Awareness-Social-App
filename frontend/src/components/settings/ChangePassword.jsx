import React from "react";
import { motion } from "framer-motion";
import { Lock } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const ChangePassword = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ background: "#1A202E" }}>
        <Grid spacing={2}>
          <Box>
            <Box style={{ margin: "0 auto", maxWidth: "800px" }} pb={2}>
              <Typography variant="h5" pb={2}>
                Change Password
              </Typography>
              {/* <Typography sx={{ color: "#8A8D94" }} >
            Select notification you want to receive
          </Typography> */}
              <Divider sx={{ background: "#909BAD" }} />
              <TextField
                label="Current Password"
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
                    <Lock sx={{ color: "#fff", paddingRight: "5px" }} />
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
              <TextField
                label="New Password"
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
                    <Lock sx={{ color: "#fff", paddingRight: "5px" }} />
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
              />{" "}
              <TextField
                label="Repeat Password"
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
                    <Lock sx={{ color: "#fff", paddingRight: "5px" }} />
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
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginTop: "1rem",
                  background: "#0F131C",
                  "&:hover": {
                    background: "#0F131C",
                    color: "#6373E5",
                  },
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default ChangePassword;
