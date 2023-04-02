import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import "./topBar.scss";
import { Link } from "react-scroll";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify-icons/mdi/menu";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      height: "100%",
      justifyContent: "center",
      width: "100%",
      alignItems: "center",
      // boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
    },
  },
  sectionMobile: {
    display: "flex",
    height: "100%",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function TopBar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    props.setTheme(event.target.value);
  };

  const navData = [
    { key: 1, offset: -73, to: "aboutMe", title: "About me" },
    { key: 2, offset: -57, to: "service", title: "My Services" },
    { key: 3, offset: -73, to: "skill", title: "My Skills" },
    { key: 4, offset: -57, to: "project", title: "My Projects" },
    { key: 5, offset: -73, to: "awards", title: "My Awards" },
    // { key: 6, offset: -57, to: "courses", title: "My Courses" },
    { key: 7, offset: -57, to: "contact", title: "Contact me" },
  ];
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="top-bar-container">
      <div className={classes.sectionDesktop}>
        <div className="top-bar-item-container">
          {navData.map((data) => {
            return (
              <Link to={data.to} smooth={true} duration={500} offset={data.offset} activeClass="active" isDynamic={true}>
                <Button className="item-btn hover-high-effect">
                  <strong className="top-bar-text">{data.title}</strong>
                </Button>
              </Link>
            );
          })}
          <Box sx={{ minWidth: 150 }}>
            <FormControl fullWidth sx={{ m: 1, minWidth: 150, backgroundColor: "white", borderRadius: "5px" }} size="small">
              <InputLabel id="demo-simple-select-label">Themes</InputLabel>
              <Select labelId="demo-simple-select-label" id="demo-simple-select" value={props.theme} label="Age" onChange={handleChange}>
                <MenuItem value={1}>Theme 1</MenuItem>
                <MenuItem value={2}>Theme 2</MenuItem>
                <MenuItem value={3}>Theme 3</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <div className={classes.sectionMobile}>
        <Grid container>
          <Grid item xs={5} className="mobile-name-container">
            <Link to="aboutMe" smooth={true} duration={500} offset={-73} activeClass="active" isDynamic={true}>
              <strong>Abhishek Parashar</strong>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{ m: 1, width: 120, backgroundColor: "white", borderRadius: "5px" }} size="small">
                <InputLabel id="demo-simple-select-label">Themes</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={props.theme} label="Age" onChange={handleChange}>
                  <MenuItem value={1}>Theme 1</MenuItem>
                  <MenuItem value={2}>Theme 2</MenuItem>
                  <MenuItem value={3}>Theme 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={3} className="mobile-button-container">
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
    </div>
  );
}

export default TopBar;
