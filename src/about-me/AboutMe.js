import React from "react";
import "./aboutMe.scss";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import myImage from "../images/me.jpeg";
import Button from "@material-ui/core/Button";
import ReactTypingEffect from "react-typing-effect";
import { Icon } from "@iconify/react";
import download from "@iconify-icons/mdi/download";

const AboutMe = () => {
  return (
    <div>
      <Paper elevation={10} className="paper-size about-me-container" id="aboutMe">
        <Grid container justify="center" data-aos="fade-down">
          <Grid item lg={12} md={12} sm={12} xs={12} className="heading-alignment heading-height">
            <Typography variant="h4" className="heading-color hover-high-effect">
              About me
            </Typography>
            <Typography className="primary-color page-sub-heading">Who I am</Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className="image-container hover-effect">
            <Paper elevation={10} className="my-image-paper-size" data-aos="flip-down">
              <img src={myImage} className="image-size" alt="Abhishek Parashar" />
            </Paper>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <div className="about-me-wrapper">
              <div className="side-spacing-aboutme-text">
                <div className="aboutme-text-style">
                  <Grid container>
                    <Grid item lg={1} md={1} sm={12} xs={12} className="heading-color i-am-style">
                      I am
                    </Grid>
                    <Grid item lg={11} md={11} sm={12} xs={12}>
                      <span className="heading-ani-color">
                        <ReactTypingEffect text={["Software Developer", "FrontEnd Developer", "Accessibility Dev."]} speed={100} eraseSpeed={100} eraseDelay={200} typingDelay={200} />
                      </span>
                    </Grid>
                  </Grid>
                </div>
              </div>
              <div className="side-spacing-aboutme">
                <Typography variant="inherit" className="peragraph-fontsize heading-color">
                  I have done Post Graduate Diploma in Computer Applications (PGDCA), And B.tech in Computer Science Branch and currently working for Qualitest (QA Infotech), Noida.
                  <p> I have a total work experience of Two years in web application development that includes React Js, JavaScript, HTML, CSS.</p>
                  <p> In addition to these, I have experience in some of the latest technologies and tools like Git, Jira, Postman, etc. Some of the programming languages and frameworks that I have hands-on are React Js, Redux, Angular, Cypress.io, etc.</p>
                  <p> I am looking forward to adding Design Patterns, Data Structures, Nodejs, React Native, and Python near future.</p>
                </Typography>
              </div>
              <div className="resume-button-container" data-aos="flip-up">
                <a href="https://drive.google.com/file/d/1U6q-cBRmVT0zGFt8K7ZchJfo4_K6-ACn/view?usp=sharing">
                  <Button variant="contained" size="large" className="resume-btn hover-effect">
                    <strong className="icon-heading-container">
                      <span data-aos="flip-down">
                        <Icon icon={download} style={{ marginRight: "10px", display: "flex" }} />
                      </span>{" "}
                      Download Resume
                    </strong>
                  </Button>
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AboutMe;
