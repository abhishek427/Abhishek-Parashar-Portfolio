import React from "react";
import "./MyServices.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faEgg } from "@fortawesome/free-solid-svg-icons";

let cardData = [
  { key: 1, title: "Web Developer", icon: faCoffee, subheading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
  { key: 2, title: "Accessibility developer", icon: faEgg, subheading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
  { key: 3, title: "Tester", icon: faCoffee, subheading: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quia sunt, quasi quo illo enim." },
];
function MyServices() {
  return (
    <Grid container justify="center" className="section-background-color">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">
        <Typography variant="h4" className="heading-color">
          My Services
        </Typography>
        <Typography className="primary-color">what I provide</Typography>
      </Grid>

      {cardData.map((data) => {
        return (
          <Grid item lg={3} md={3} sm={12} xs={12} key={data.key} className="card-spacing">
            <Card className="card-color">
              <CardContent className="card-content">
                <span className="icon-size">
                  <FontAwesomeIcon icon={data.icon} className="icon-style" />
                </span>
                <p className="heading-color card-heading">{data.title}</p>
                <p className="heading-color">{data.subheading}</p>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default MyServices;
