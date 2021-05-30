import React from "react";
import { Grid } from "@material-ui/core";
import "./Footer.css";
function Footer() {
  return (
    <Grid container alignItems="center" className="footer-container">
      <Grid item xs={12} className="footer-text">
        <p className="footer-text">Footer</p>
      </Grid>
    </Grid>
  );
}

export default Footer;
