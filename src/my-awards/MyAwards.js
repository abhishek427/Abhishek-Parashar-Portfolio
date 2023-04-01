import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./myAwards.scss";
import { Card } from "@material-ui/core";
import award1 from "../images/award1.jpeg";
import award2 from "../images/award2.jpeg";

const awardData = [
  { id: 1, img: award1 },
  { id: 2, img: award2 },
];
function MyAwards() {
  return (
    <Paper elevation={10} className="paper-size" id="awards">
      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12} className="heading-alignment heading-height">
          <Typography variant="h4" className="heading-color hover-high-effect">
            My Awards
          </Typography>
          <Typography className="primary-color page-sub-heading">What I Achieve</Typography>
        </Grid>
        {awardData.map((item) => {
          return (
            <Grid item lg={6} md={6} sm={12} xs={12} key={item.id}>
              <Card elevation={10} className="award-card" data-aos="fade-up">
                <img src={item.img} className="image-size hover-effect" />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}

export default MyAwards;
