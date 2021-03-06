import React from "react";
import "./mySkills.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

let skillData = [
  { key: 1, title: "React js", width: "85%" },
  { key: 2, title: "Redux", width: "85%" },
  { key: 3, title: "React Material UI", width: "80%" },
  { key: 4, title: "JavaScript", width: "80%" },
  { key: 5, title: "HTML", width: "80%" },
  { key: 6, title: "Accessibility", width: "70%" },
  { key: 7, title: "CSS", width: "75%" },
  { key: 8, title: "SCSS", width: "60%" },
  { key: 9, title: "Git", width: "70%" },
  { key: 10, title: "Angular", width: "40%" },
  { key: 11, title: "Cypress.io", width: "50%" },
  { key: 12, title: "Vue Js", width: "40%" },
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
            I have 2.6 plus years of industry experience as a React and Front-end developer. And having Hands-on, comprehensive knowledge of agile methodologies and web-based applications, and Proven ability to work on multiple projects while meeting challenging deadlines.These are the following technology I know -
          </p>
        </Grid>
        {skillData.map((data) => {
          return (
            <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing-my-skill" key={data.key}>
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
