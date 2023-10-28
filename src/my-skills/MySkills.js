import React from "react";
import "./mySkills.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

let skillData = [
  { title: "React js", width: "85%" },
  { title: "Redux", width: "85%" },
  { title: "Next js", width: "60%" },
  { title: "Tailwind css", width: "50%" },
  { title: "Node js", width: "40%" },
  { title: "Express js", width: "40%" },
  { title: "React Material UI", width: "80%" },
  { title: "JavaScript", width: "80%" },
  { title: "HTML", width: "80%" },
  { title: "Accessibility", width: "70%" },
  { title: "CSS", width: "75%" },
  { title: "SCSS", width: "60%" },
  { title: "Git", width: "70%" },
  { title: "Angular", width: "40%" },
  { title: "Cypress.io", width: "50%" },
  { title: "Vue Js", width: "40%" },
];
function MySkills() {
  return (
    <Paper elevation={10} className="paper-size" id="skill">
      <Grid container justify="center">
        <Grid item lg={12} md={12} sm={12} xs={12} className="heading-alignment heading-height">
          <Typography variant="h4" className="heading-color hover-high-effect">
            My Skills
          </Typography>
          <Typography className="primary-color page-sub-heading">What I know</Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} className="side-spacing-my-skill">
          <p className="section-heading heading-color my-skill-heading">My creative skills & experiences.</p>
          <p className="heading-color my-skill-text" style={{ paddingBottom: "15px" }}>
            I have 3 plus years of industry experience as a React and Front-end developer. And having Hands-on, comprehensive knowledge of agile methodologies and web-based applications, and Proven ability to work on multiple projects while meeting challenging deadlines.These are the following technology I know -
          </p>
        </Grid>
        {skillData.map((data, index) => {
          return (
            <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing-my-skill" key={index}>
              <div className="hover-effect" data-aos="zoom-in">
                <Grid container>
                  <Grid item xs={6} className="heading-color">
                    {data.title}
                  </Grid>
                  <Grid item xs={6} className="skill-value heading-color">
                    {data.width}
                  </Grid>
                </Grid>
                <div id="progressbar">
                  <div style={{ width: data.width }}></div>
                </div>
              </div>
            </Grid>
          );
        })}
        <Grid item xs={12} style={{ height: "15px" }}></Grid>
      </Grid>
    </Paper>
  );
}

export default MySkills;
