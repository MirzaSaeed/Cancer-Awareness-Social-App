import React, { useState } from "react";
import { Box, Typography, Paper, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/2900470_25486 [Converted].png";

const headingStyles = {
  fontWeight: "bold",
  marginBottom: "1rem",
  textAlign: "center",
};
const logoStyles = {
  height: "100px",
};
const Relationship = () => {
  const navigate = useNavigate();
  const [selectedRelation, setSelectedRelation] = useState(null);

  const handleRelationSelect = (relation) => {
    setSelectedRelation(relation);
  };
  const onClick= ()=>{
    navigate("/timeline")
  }

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
          Select Your Relation
        </Typography>
        <Box>
          <Paper
            elevation={3}
            sx={{ backgroundColor: "#232B3E", width: 400, p: 2, m: 2 }}
          >
            <Grid spacing={2}>
              <Grid item md={12} pb={2}>
                <motion.div onClick={() => handleRelationSelect("diagnosed")}>
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{
                      backgroundColor:
                        selectedRelation === "diagnosed"
                          ? "#0F131C"
                          : "#1A202E",
                      color:
                        selectedRelation === "diagnosed" ? "#6373E5" : "#fff",
                      p: 2,
                      borderRadius: 2,
                      cursor: "pointer",
                      "&:hover": {
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
                  >
                    I am Diagnosed
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12}>
                <motion.div
                  onClick={() => handleRelationSelect("familyFriend")}
                >
                  <Typography
                    variant="body1"
                    align="center"
                    sx={{
                      backgroundColor:
                        selectedRelation === "familyFriend"
                          ? "#0F131C"
                          : "#1A202E",
                      color:
                        selectedRelation === "familyFriend"
                          ? "#6373E5"
                          : "#fff",
                      p: 2,
                      borderRadius: 2,
                      cursor: "pointer",
                      "&:hover": {
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
                  >
                    I am a Family or Friend
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Paper>
        </Box>
        <Grid item sx={{ marginLeft: "15px" }}>
          <Button
            onClick={onClick}
            variant="contained"
            X
            disabled={!selectedRelation}
          >
            Next
          </Button>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Relationship;

const containerStyles = {
  marginTop: "5rem",
  height: "85vh",
  background: "#232B3E",
};
