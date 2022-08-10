import React from "react";
import "./myProject.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import sonu from "../images/sonu1.jpg";
import Carousel from "react-material-ui-carousel";
import education from "../images/education.jpeg";
import mental from "../images/mental.png";
import acc from "../images/accf.png";
import Angular from "../images/Angular.png";
import doctor from "../images/doctor.jpg";

let cardData = [
  { key: 1, title: "Health Care Site", image: sonu, subheading: "Working with Sonu Sood to build a platform that can help millions of poor people who can't afford their surgery expenses,Techstack used- React js, Redux, Node js ,express js." },
  { key: 2, title: "Education Solution", image: education, subheading: "Education LMS is a K-5 solution for the Montessori school education system. The role-based solution enables SuperAdmin, Admin, Teacher, and parents roles to view respective modules. Functionality includes creating online schools, admitting students, creating classes, creating curriculum, task assignments, and evaluation." },
  { key: 3, title: "Mental Health", image: mental, subheading: "In this project, Admin helps the user to heal the mental issue by gathering the data from the client by filling the form and giving some suggestions for better leaving, and also providing music for relaxation.Tech use - React js, Redux, stripe for payment, etc." },
  { key: 4, title: "Dr./Pasent Project", image: doctor, subheading: "In the nutshell in this Project, The Doctor prescribed the medication to the patient, and the insurance manager clear the bill for the medication.Techstack used- React js, Redux,Angular,React unit testing." },
  { key: 5, title: "Accessibility", image: acc, subheading: "I have done Three projects in Accessibility Developer and given 1000+ Accessibility-related recommendations in Two projects and Develop one project according to Accessibility." },
  { key: 6, title: "Angular", image: Angular, subheading: "I have done two small projects in Angular as well and have good knowledge of Angular.And also worked on the angular matrial UI." },
];
function MyServices() {
  return (
    <Grid container justify="center" className="section-background-color" id="project">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">
        <Typography variant="h4" className="heading-color hover-high-effect">
          My Project
        </Typography>
        <Typography className="primary-color page-sub-heading">What I did</Typography>
      </Grid>
      <Grid item lg={12} md={12} sm={12} xs={12} className="project-card-spacing" style={{ width: "100%", height: "100%", marginBottom: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <Carousel style={{ width: "100%", height: "100%" }}>
          {cardData.map((data) => {
            return (
              <Card className="card-color" elevation={10} key={data.key} data-aos="fade-down">
                <CardContent className="card-content">
                  <div className="imageContner-project">
                    <img src={data.image} alt="" className="image-size-project hover-effect" />
                  </div>
                  <p className="heading-color card-heading hover-high-effect">{data.title}</p>
                  <div className="project-heading-container">
                    <p className="heading-color">{data.subheading}</p>
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
