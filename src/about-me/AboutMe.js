import React from "react";
import "./AboutMe.css";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import myImage from "../images/profile-1.jpeg";
import Button from "@material-ui/core/Button";

const AboutMe = () => {
  return (
    <div>
      <Paper elevation={3} className="paper-size about-me-height">
        <Grid container justify="center">
          <Grid xs={12} className="heading-alignment heading-height">
            <Typography variant="h4">About me</Typography>
          </Grid>

          <Grid item xs={4}>
            <Paper elevation={5} className="my-image-paper-size">
              <img src={myImage} className="image-size" />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <div className="about-me-wrapper">
              <div className="side-spacing">I am a developer</div>
              <div className="side-spacing">
                <Typography variant="inherit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque, sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</Typography>
              </div>
              <div className="side-spacing">
                <Button variant="contained">Contained</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AboutMe;
