import React from "react";
import Slider from "react-slick";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./myCourses.scss";
import mernVsNext from "../images/courseImages/MernVsNext.jpg";
import mern from "../images/courseImages/mern.jpg";
import reactjs from "../images/courseImages/react.jpg";
import typeScript from "../images/courseImages/typeScript.jpg";
import webpack from "../images/courseImages/webpack.jpg";
import node from "../images/courseImages/nodejs.jpg";
import { Card } from "@material-ui/core";

const courses = [
  {
    id: 1,
    title: "mernVsNext",
    image: mernVsNext,
  },
  {
    id: 2,
    title: "mern",
    image: mern,
  },
  {
    id: 3,
    title: "reactjs",
    image: reactjs,
  },
  {
    id: 4,
    title: "typescript",
    image: typeScript,
  },
  {
    id: 5,
    title: "mern",
    image: webpack,
  },
  {
    id: 6,
    title: "node",
    image: node,
  },
];
function MyCourses() {
  let settings = {
    dots: true,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Grid container justify="center" className="section-background-color" id="courses">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">
        <Typography variant="h4" className="heading-color hover-high-effect">
          My Courses
        </Typography>
        <Typography className="primary-color page-sub-heading">What I learn</Typography>
      </Grid>
      <div className="course-slider">
        <Slider {...settings}>
          {courses.map((item) => {
            return (
              <Card elevation={10} className="award-card course-slider-item" data-aos="fade-up">
                <img src={item.image} alt={item.title} className="image-size hover-effect" />
              </Card>
            );
          })}
        </Slider>
      </div>
    </Grid>
  );
}

export default MyCourses;
