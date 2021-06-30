import { Button, Grid } from "@material-ui/core";
import React from "react";
import "./TopBar.css";
import { Link } from "react-scroll";
function TopBar() {
  return (
    <Grid container justify="center" alignItems="center" className="top-bar-container">
      <Grid item xs={3} className="top-bar-item">
        <Link to="service" smooth={true} duration={500} offset={-57} activeClass="active" isDynamic={true} className="top-bar-link">
          <Button className="item-btn">
            <strong className="top-bar-text">My Services</strong>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3} className="top-bar-item">
        <Link to="skill" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true} className="top-bar-link">
          <Button className="item-btn">
            <strong className="top-bar-text">My Skills</strong>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3} className="top-bar-item">
        <Link to="project" smooth={true} duration={500} offset={-57} activeClass="active" isDynamic={true} className="top-bar-link">
          <Button className="item-btn">
            <strong className="top-bar-text">My Projects</strong>
          </Button>
        </Link>
      </Grid>
      <Grid item xs={3} className="top-bar-item">
        <Link to="contact" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true} className="top-bar-link">
          <Button className="item-btn">
            <strong className="top-bar-text">Contact me</strong>
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default TopBar;
