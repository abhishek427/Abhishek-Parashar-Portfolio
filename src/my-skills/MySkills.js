import React from "react";
import "./MySkills.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

let skillData = [
  { key: 1, title: "React js", width: "70%" },
  { key: 2, title: "Redux", width: "60%" },
  { key: 3, title: "JavaScript", width: "70%" },
  { key: 4, title: "Accessibility", width: "60%" },
  { key: 5, title: "HTML", width: "80%" },
  { key: 6, title: "CSS", width: "60%" },
];
function MySkills() {
  return (
    <Paper elevation={3} className="paper-size" id="skill">
      <Grid container justify="center" spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12} className="heading-alignment heading-height">
          <Typography variant="h4">My Skills</Typography>
          <Typography className="primary-color">What I know</Typography>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing">
          <p className="section-heading">My creative skills & experiences.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ratione error est recusandae consequatur, iusto illum deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate recusandae laudantium esse, harum animi aspernatur quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus aut hic explicabo minus quod.</p>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing">
          {skillData.map((data) => {
            return (
              <div key={data.key}>
                <Grid container>
                  <Grid item xs={6}>
                    {data.title}
                  </Grid>
                  <Grid item xs={6} className="skill-value">
                    {data.width}
                  </Grid>
                </Grid>
                <div id="progressbar">
                  <div style={{ width: data.width }}></div>
                </div>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MySkills;
