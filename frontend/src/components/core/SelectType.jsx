import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Button, Typography } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/2900470_25486 [Converted].png";
import { Bloodtype } from "@mui/icons-material";

const SelectType = () => {
  const navigate = useNavigate();

  const [age, setAge] = useState("");
  const [selectedRelation, setSelectedRelation] = useState(null);
  console.log(age);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleRelationSelect = (relation) => {
    setSelectedRelation(relation);
  };
  const [city, setCity] = useState("");

  const types = [
    "Blood Cancer",
    "Heart Cancer",
    "Brain Cancer",
    "Lungs Cancer",
  ];
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const onClick = () => {
    navigate("/timeline");
  };
  return (
    <Box sx={containerStyles}>
      <Outlet />
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
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", color: "#909BAD", mt: 1 }}
        >
          Select Your Diagnse Type
        </Typography>
        <Box sx={{ marginTop: "1rem" }}>
          <FormControl fullWidth>
            <InputLabel
              id="city-label"
              sx={{
                color: "#fff",
                "&.Mui-focused": {
                  color: "#fff",
                },
              }}
            >
              Diagnse Type
            </InputLabel>
            <Select
              style={{ color: "#909BAD" }}
              labelId="city-label"
              value={city}
              onChange={handleCityChange}
              InputProps={{
                startAdornment: <Bloodtype sx={{ color: "#fff" }} />,
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
              MenuProps={{
                PaperProps: {
                  style: { backgroundColor: "#1A202E" },
                },
              }}
            >
              {types.map((type) => (
                <MenuItem
                  onClick={() => handleRelationSelect(type)}
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
                  key={type}
                  value={type}
                >
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            sx={{ marginTop: "1rem" }}
            onClick={onClick}
            variant="contained"
            X
            disabled={!selectedRelation}
          >
            Submit
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default SelectType;
const headingStyles = {
  fontWeight: "bold",
  marginBottom: "1rem",
  textAlign: "center",
};
const logoStyles = {
  height: "100px",
};

const containerStyles = {
  marginTop: "5rem",
  height: "85vh",
  background: "#232B3E",
};
