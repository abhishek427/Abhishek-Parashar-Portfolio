import React from "react";
import "./MyProject.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { faCoffee, faEgg } from "@fortawesome/free-solid-svg-icons";
import myImage from "../images/profile-1.jpeg";
import Carousel from "react-material-ui-carousel";

let cardData = [
  { key: 1, title: "sonu", icon: faCoffee, subheading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
  { key: 2, title: "zapprx", icon: faEgg, subheading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
  { key: 3, title: "Terri", icon: faCoffee, subheading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
];
function MyServices() {
  return (
    <Grid container justify="center" className="section-background-color" id="project">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">
        <Typography variant="h4" className="heading-color">
          My Project
        </Typography>
        <Typography className="primary-color">what I did</Typography>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className="project-card-spacing" style={{ width: "100%", height: "100%", marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <Carousel style={{ width: "100%", height: "100%" }}>
          {cardData.map((data) => {
            return (
              <Card className="card-color">
                <CardContent className="card-content">
                  <div className="imageContner-project">
                    <img src={myImage} alt="" className="image-size-project" />
                  </div>
                  <p className="heading-color card-heading">{data.title}</p>
                  <p className="heading-color">{data.subheading}</p>
                </CardContent>
              </Card>
            );
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
}

export default MyServices;
