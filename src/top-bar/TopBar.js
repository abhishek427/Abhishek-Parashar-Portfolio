import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./TopBar.css";
import { Link } from "react-scroll";
import AppBar from "@material-ui/core/AppBar";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/mdi/menu";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: "100%",
    },
  },
  sectionMobile: {
    display: "flex",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function TopBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar className="top-bar-container">
      <div className={classes.sectionDesktop}>
        <Grid container justify="flex-end">
          <Grid item lg={2} md={2} sm={2} xs={2} className="top-bar-item">
            <Link to="aboutMe" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true} className="top-bar-link">
              <Button className="item-btn">
                <strong className="top-bar-text">About me</strong>
              </Button>
            </Link>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} className="top-bar-item">
            <Link to="service" smooth={true} duration={500} offset={-57} activeClass="active" isDynamic={true} className="top-bar-link">
              <Button className="item-btn">
                <strong className="top-bar-text">My Services</strong>
              </Button>
            </Link>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} className="top-bar-item">
            <Link to="skill" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true} className="top-bar-link">
              <Button className="item-btn">
                <strong className="top-bar-text">My Skills</strong>
              </Button>
            </Link>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} className="top-bar-item">
            <Link to="project" smooth={true} duration={500} offset={-57} activeClass="active" isDynamic={true} className="top-bar-link">
              <Button className="item-btn">
                <strong className="top-bar-text">My Projects</strong>
              </Button>
            </Link>
          </Grid>
          <Grid item lg={2} md={2} sm={2} xs={2} className="top-bar-item">
            <Link to="contact" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true} className="top-bar-link">
              <Button className="item-btn">
                <strong className="top-bar-text">Contact me</strong>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className={classes.sectionMobile}>
        <Grid container>
          <Grid item xs={12} className="mobile-button-container">
            <Button onClick={handleClickOpen}>{open === false ? <Icon icon={menuIcon} className="mobile-top-bar-icon" /> : <CloseIcon className="mobile-top-bar-icon" />}</Button>
          </Grid>
          <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12} className="mobile-top-bar-item">
                <Link to="aboutMe" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true} className="mobile-top-bar-link" onClick={handleClose}>
                  <Button className="item-btn">
                    <strong className="top-bar-text-mobile">About me</strong>
                  </Button>
                </Link>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} className="mobile-top-bar-item">
                <Link to="service" smooth={true} duration={500} offset={-57} activeClass="active" isDynamic={true} className="mobile-top-bar-link" onClick={handleClose}>
                  <Button className="item-btn">
                    <strong className="top-bar-text-mobile">My Services</strong>
                  </Button>
                </Link>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} className="mobile-top-bar-item">
                <Link to="skill" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true} className="mobile-top-bar-link" onClick={handleClose}>
                  <Button className="item-btn">
                    <strong className="top-bar-text-mobile">My Skills</strong>
                  </Button>
                </Link>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} className="mobile-top-bar-item">
                <Link to="project" smooth={true} duration={500} offset={-57} activeClass="active" isDynamic={true} className="mobile-top-bar-link" onClick={handleClose}>
                  <Button className="item-btn">
                    <strong className="top-bar-text-mobile">My Projects</strong>
                  </Button>
                </Link>
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12} className="mobile-top-bar-item">
                <Link to="contact" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true} className="mobile-top-bar-link" onClick={handleClose}>
                  <Button className="item-btn">
                    <strong className="top-bar-text-mobile">Contact me</strong>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Dialog>
        </Grid>
      </div>
    </AppBar>
  );
}

export default TopBar;
