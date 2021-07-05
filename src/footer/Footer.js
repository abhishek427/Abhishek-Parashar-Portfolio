import React from "react";
import { Grid } from "@material-ui/core";
import "./Footer.css";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify-icons/mdi/react";

function Footer() {
  return (
    <Grid container alignItems="center" className="footer-container">
      <Grid item xs={12} className="footer-text">
        <p className="footer-text">
          <Icon icon={reactIcon} style={{ margin: "2px", color: "crimson", paddingRight: "5px" }} />
          Developed using Reactjs by Abhishek Parashar
        </p>
      </Grid>
    </Grid>
  );
}

export default Footer;
