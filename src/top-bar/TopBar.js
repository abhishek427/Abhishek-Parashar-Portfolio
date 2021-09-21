import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./topBar.scss";
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
  const navData = [
    { key: 1, offset: -73, to: "aboutMe", title: "About me" },
    { key: 2, offset: -57, to: "service", title: "My Services" },
    { key: 3, offset: -73, to: "skill", title: "My Skills" },
    { key: 4, offset: -57, to: "project", title: "My Projects" },
    { key: 5, offset: -73, to: "contact", title: "Contact me" },
  ];
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar className="top-bar-container">
      <div className={classes.sectionDesktop}>
        <Grid container justify="center">
          {navData.map((data) => {
            return (
              <Grid item lg={2} md={2} sm={2} xs={2} className="top-bar-item" key={data.key}>
                <Link to={data.to} smooth={true} duration={500} offset={data.offset} activeClass="active" isDynamic={true} className="top-bar-link">
                  <Button className="item-btn">
                    <strong className="top-bar-text">{data.title}</strong>
                  </Button>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div className={classes.sectionMobile}>
        <Grid container>
          <Grid item xs={6} className="mobile-name-container">
            <Link to="aboutMe" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true}>
              <strong>Abhishek Parashar</strong>
            </Link>
          </Grid>
          <Grid item xs={6} className="mobile-button-container">
            <Button onClick={handleClickOpen}>{open === false ? <Icon icon={menuIcon} className="mobile-top-bar-icon" /> : <CloseIcon className="mobile-top-bar-icon" />}</Button>
          </Grid>
          <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <Grid container className="menu-container">
              {navData.map((data) => {
                return (
                  <Grid item lg={12} md={12} sm={12} xs={12} className="mobile-top-bar-item" key={data.key}>
                    <Link to={data.to} smooth={true} duration={500} offset={data.offset} activeClass="active" isDynamic={true} className="mobile-top-bar-link" onClick={handleClose}>
                      <Button className="item-btn">
                        <strong className="top-bar-text-mobile">{data.title}</strong>
                      </Button>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Dialog>
        </Grid>
      </div>
    </AppBar>
  );
}

export default TopBar;
