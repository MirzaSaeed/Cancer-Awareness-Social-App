import React, { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import logo from "../assets/2900470_25486 [Converted].png";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  Person,
  Email,
  Lock,
  Phone,
  Event,
  LocationOn,
} from "@mui/icons-material";
import Login from "./Login";
import { cities } from "./Cities";
const headingStyles = {
  fontWeight: "bold",
  marginBottom: "1rem",
  textAlign: "center",
};
const logoStyles = {
  height: "100px",
};
const SignUp = () => {
  // const navigate = useNavigate();
  // TODO: const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Add your login logic here
  // };
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = () => {
    setShowLoginForm(true);
  };

  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <Container>
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
        </motion.div>
      )}
      {!showLoginForm && (
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "center", color: "#909BAD" }}
          >
            Sign Up to your account
          </Typography>
          <Grid
            sx={{ marginTop: "1rem" }}
            container
            spacing={2}
            alignItems="center"
          >
            <Grid item xs={6}>
              <TextField
                label="First Name"
                fullWidth
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
                    <Person sx={{ color: "#fff", paddingRight: "5px" }} />
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                fullWidth
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
                    <Person sx={{ color: "#fff", paddingRight: "5px" }} />
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
            </Grid>
            <Grid item xs={6}>
              <FormControl
                component="fieldset"
                sx={{ flexDirection: "row", alignItems: "center", ml: 1 }}
              >
                Gender:
                <RadioGroup
                  name="gender"
                  value={gender}
                  onChange={handleGenderChange}
                  sx={{ flexDirection: "row", ml: 5 }}
                >
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio sx={{ color: "#fff", paddingRight: "5px" }} />
                    }
                    label="Male"
                    sx={{ color: "#909BAD" }}
                  />
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio sx={{ color: "#fff", paddingRight: "5px" }} />
                    }
                    label="Female"
                    sx={{ color: "#909BAD" }}
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Birthday"
                type="date"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "#909BAD",
                    "&.Mui-focused": {
                      color: "#fff",
                    },
                  },
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <Event sx={{ color: "#fff", paddingRight: "5px" }} />
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
                value={birthday}
                onChange={handleBirthdayChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                fullWidth
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
                    <Email sx={{ color: "#fff", paddingRight: "5px" }} />
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
            </Grid>
            <Grid item xs={6}>
              <TextField
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone Number"
                fullWidth
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
                    <Phone sx={{ color: "#fff", paddingRight: "5px" }} />
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
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel id="city-label" sx={{ color: "#fff" }}>
                  City
                </InputLabel>
                <Select
                  style={{ color: "#909BAD" }}
                  labelId="city-label"
                  value={city}
                  onChange={handleCityChange}
                  InputProps={{
                    startAdornment: <LocationOn sx={{ color: "#fff" }} />,
                    style: { color: "#909BAD" },
                  }}
                  sx={{
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
                  }}
                >
                  <MenuItem
                    sx={{
                      background: "#1A202E",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#0F131C",
                        color: "#6373E5",
                      },
                      "&.Mui-selected": {
                        backgroundColor: "#0F131C",
                        color: "#6373E5",
                      },
                      "&.Mui-focused ": {
                        backgroundColor: "#0F131C",
                        color: "#6373E5",
                      },
                    }}
                    value=""
                  >
                    Select City
                  </MenuItem>
                  {cities.map((cityName) => (
                    <MenuItem
                      sx={{
                        background: "#1A202E",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor: "#0F131C",
                          color: "#6373E5",
                        },
                        "&.Mui-selected": {
                          backgroundColor: "#0F131C",
                          color: "#6373E5",
                        },
                        "&.Mui-focusVisible": {
                          backgroundColor: "#0F131C",
                          color: "#6373E5",
                        },
                      }}
                      key={cityName}
                      value={cityName}
                    >
                      {cityName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              sx={{ marginTop: "1rem" }}
              onClick={() => {
                setShowLoginForm(true);
              }}
              variant="contained"
              size="large"
            >
              Sign Up
            </Button>
            <Typography variant="subtitle1" sx={{ color: "#909BAD", mt: 2 }}>
              Already have an account?
              <Button
                variant="text"
                size="small"
                onClick={handleLogin}
                sx={{
                  color: "#fff",
                  marginLeft: "0.5rem",
                  textDecoration: "underline",
                }}
              >
                Login
              </Button>
            </Typography>
          </Box>
        </motion.div>
      )}
      {showLoginForm && (
        <motion.div
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Render the login form */}
          <Login />
        </motion.div>
      )}
    </Container>
  );
};

export default SignUp;
