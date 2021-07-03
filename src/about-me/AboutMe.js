import React from "react";
import "./AboutMe.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import myImage from "../images/myPhoto.jpeg";
//import Button from "@material-ui/core/Button";
import ReactTypingEffect from "react-typing-effect";
import Typical from "react-typical";
const AboutMe = () => {
  return (
    <div>
      <Paper elevation={3} className="paper-size about-me-container" id="aboutMe">
        <Grid container justify="center">
          <Grid item lg={12} md={12} sm={12} xs={12} className="heading-alignment heading-height">
            <Typography variant="h4">About me</Typography>
            <Typography className="primary-color">who I am</Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className="image-container">
            <Paper elevation={5} className="my-image-paper-size">
              <img src={myImage} className="image-size" alt="Abhishek Parashar" />
            </Paper>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <div className="about-me-wrapper">
              <div className="side-spacing-aboutme-text">
                <div className="aboutme-text-style">
                  <Grid container>
                    <Grid item lg={1} md={1} sm={12} xs={12}>
                      I am
                    </Grid>
                    <Grid item lg={11} md={11} sm={12} xs={12}>
                      <span className="primary-color">
                        {/* <strong>Software Developer</strong> */}
                        <ReactTypingEffect text={["Software Developer", "FrontEnd Developer"]} speed={100} eraseSpeed={100} eraseDelay={200} typingDelay={200} />

                        {/* <Typical loop={Infinity} steps={["Software Developer", 1000, "FrontEnd Developer", 1000]} className="Typo" /> */}
                      </span>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className="side-spacing-aboutme">
                <Typography variant="inherit" className="peragraph-fontsize">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.
                </Typography>
              </div>
              {/* <div className="side-spacing-aboutme">
                <Button variant="contained" color="secondary" size="large">
                  <strong>Download Resume</strong>
                </Button>
              </div> */}
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AboutMe;
