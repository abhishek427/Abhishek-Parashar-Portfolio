import React from "react";
import { Grid } from "@material-ui/core";
import "./footer.scss";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify-icons/mdi/react";

function Footer() {
  return (
    <Grid container alignItems="center" className="footer-container">
      <Grid item xs={12} className="footer-text">
        <p className="footer-text">
          <Icon icon={reactIcon} className="footer-icon" />
          Developed using Reactjs by Abhishek Parashar
        </p>
      </Grid>
    </Grid>
  );
}

export default Footer;
