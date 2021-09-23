import React from "react";
import "./myProject.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import sonu from "../images/sonu1.jpg";
import Carousel from "react-material-ui-carousel";
import clever from "../images/cropped-clever-education-solutions-logo.png";
import terri from "../images/logo.png";
import acc from "../images/accf.png";
import Angular from "../images/Angular.png";

let cardData = [
  { key: 1, title: "Illaj India", image: sonu, subheading: "Working with Sonu Sood to bulid a platform which can help millions of poor peoples who can't afford their surgery expenses ,Techstack used- React js, Redux, Node js ,express js." },
  { key: 2, title: "Clever Education Sol.", image: clever, subheading: "Clever LMS is a K-5 solution for the Montessori school education system. The role based solution enables SuperAdmin, Admin, Teacher  and parents roles to view respective modules . Functionality includes creating online schools, admitting students, creating classes, creating curriculum, task assignments and evaluation." },
  { key: 3, title: "Terri the healer", image: terri, subheading: "In this project, Terri helps the user to heal the mental issue by gathering the data from the client by filling the form and give some suggestions for better leaving and also provide music for relaxation.Tech use - React js, Redux, stripe for payment, etc." },
  { key: 5, title: "Accessibility", image: acc, subheading: "I have done two projects in Accessibility Developer and give 1000+ Accessibility-related recommendations in various projects." },
  { key: 6, title: "Angular", image: Angular, subheading: "I have done two small projects in Angular as well and have good knowledge of Angular.And also worked on the angular matrial UI." },
];
function MyServices() {
  return (
    <Grid container justify="center" className="section-background-color" id="project">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">
        <Typography variant="h4" className="heading-color hover-high-effect">
          My Project
        </Typography>
        <Typography className="primary-color">What I did</Typography>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className="project-card-spacing" style={{ width: "100%", height: "100%", marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <Carousel style={{ width: "100%", height: "100%" }}>
          {cardData.map((data) => {
            return (
              <Card className="card-color" elevation={10} key={data.key}>
                <CardContent className="card-content">
                  <div className="imageContner-project">
                    <img src={data.image} alt="" className="image-size-project hover-effect" />
                  </div>
                  <p className="heading-color card-heading hover-high-effect">{data.title}</p>
                  <div className="project-heading-container">
                    <p className="heading-color hover-effect">{data.subheading}</p>
                  </div>
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
