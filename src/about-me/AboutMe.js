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
import moment from "moment";

const AboutMe = () => {
  const startDate = moment("2019-11-24");
  const currentDate = moment();
  const duration = moment.duration(currentDate.diff(startDate));

  const years = duration.years();
  const months = duration.months();
  const days = duration.days();

  return (
    <div>
      <Paper elevation={10} className="paper-size about-me-container" id="aboutMe">
        <Grid container justify="center" data-aos="fade-down">
          <Grid item lg={12} md={12} sm={12} xs={12} className="heading-alignment heading-height about-me-heading">
            <Typography variant="h4" className="heading-color hover-high-effect">
              About Abhishek
            </Typography>
            <Typography className="primary-color page-sub-heading">Who I am</Typography>
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12} className="image-container hover-effect">
            <Paper elevation={10} className="my-image-paper-size swing" data-aos="flip-down">
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
                  <p>
                    {" "}
                    I hold a Post Graduate Diploma in Computer Applications (PGDCA) and a Bachelor's degree in Computer Science. Currently, I am serving as a <span className="high-light-text">Senior Software Engineer</span> at <span className="high-light-text">To The New </span>in Noida. With{" "}
                    <span className="high-light-text">
                      {years} {years === 1 ? "year" : "years"}{" "}
                      {months !== 0 && (
                        <>
                          , {months} {months === 1 ? "month" : "months"}
                        </>
                      )}
                    </span>{" "}
                    of experience in web application development, my expertise includes a wide range of technologies and tools.
                  </p>
                  <b>My primary skills encompass:</b>
                  <ul>
                    <li>
                      <i>Front-end Development - </i>
                      Proficient in React.js and Next.js, with a strong command of JavaScript, HTML, and CSS.
                    </li>
                    <br />
                    <li>
                      <i>Back-end Development - </i>
                      Experienced in Node.js and Express.js for building robust server-side applications.
                    </li>
                    <br />
                    <li>
                      <i>Version Control and Project Management - </i>
                      Skilled in using Git for version control and Jira for project management.
                    </li>
                    <br />
                    <li>
                      <i>API Testing - </i>
                      Familiar with Postman for API testing and documentation.
                    </li>
                    <br />
                    <li>
                      <i>State Management - </i>
                      Proficient in Redux for managing application state in complex front-end projects.
                    </li>
                    <br />
                    <li>
                      <i>Testing - </i>
                      Skilled in using Cypress.io and Jest for end-to-end testing of web applications.
                    </li>
                  </ul>
                  <br />
                  Furthermore, my technical knowledge extends to a variety of programming languages and frameworks, including Angular,Vue js.
                  <br />
                  <br />I am passionate about staying up-to-date with the latest industry trends and technologies, which enables me to contribute effectively to dynamic web development projects. My strong analytical and problem-solving skills, coupled with a proactive approach to software engineering, make me a valuable asset in delivering high-quality web applications. <br />
                  <br />
                </Typography>
              </div>
              <div className="resume-button-container" data-aos="flip-up">
                <a href="https://drive.google.com/file/d/1GSrl7yUjDWxN2rWerY6-Ssc5sgBX5cGM/view?usp=sharing">
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
