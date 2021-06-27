import { Button, Grid } from "@material-ui/core";
import React from "react";
import "./TopBar.css";
function TopBar() {
  return (
    <Grid container justify="center" alignItems="center" className="top-bar-container">
      <Grid item xs={3} className="top-bar-item">
        <Button className="item-btn">
          <strong>My Services</strong>
        </Button>
      </Grid>
      <Grid item xs={3} className="top-bar-item">
        <Button className="item-btn">
          <strong>My Skills</strong>
        </Button>
      </Grid>
      <Grid item xs={3} className="top-bar-item">
        <Button className="item-btn">
          <strong>My Projects</strong>
        </Button>
      </Grid>
      <Grid item xs={3} className="top-bar-item">
        <Button className="item-btn">
          <strong>Contact me</strong>
        </Button>
      </Grid>
    </Grid>
  );
}

export default TopBar;
