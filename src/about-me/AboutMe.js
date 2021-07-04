import React from "react";
import "./AboutMe.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import myImage from "../images/myPhoto.jpeg";
//import Button from "@material-ui/core/Button";
import ReactTypingEffect from "react-typing-effect";

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
                        <ReactTypingEffect text={["Software Developer", "FrontEnd Developer", "Accessibility Dev."]} speed={100} eraseSpeed={100} eraseDelay={200} typingDelay={200} />
                      </span>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className="side-spacing-aboutme">
                <Typography variant="inherit" className="peragraph-fontsize">
                  I have done Post Graduate Diploma in Computer Applications (PGDCA) post-graduate, B.tech in Computer Science Branch and currently working for QA Infotech, Noida.
                  <p> I have a total work experience of one and half years in web application development that includes JavaScript, HTML, CSS.</p> In addition to these, I have got some of the latest technologies and tools like Git, Jira, Postman, etc. in his skill set. Some of the programming languages and frameworks that he has hands-on are React Js, Redux, Angular, Cypress.io, etc.
                  <p> I am looking forward to adding Design Patterns, Data Structures, Nodejs, React Native, and Python near future.</p>
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
