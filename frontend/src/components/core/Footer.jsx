import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  
  text: {
    textAlign: "center",
  },
});

const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <p className={classes.text}>&copy; {year} Cancer Awareness Pvt. All Rights Reserved.</p>
  );
};

export default Footer;
