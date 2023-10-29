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
    url: "https://www.udemy.com/certificate/UC-d5ffab32-46e7-4e69-847d-d97fe6b3fb2b/",
  },
  {
    id: 2,
    title: "mern",
    image: mern,
    url: "https://www.udemy.com/certificate/UC-1ffc00f3-dbb8-4182-9f04-e099f812a5b2/",
  },
  {
    id: 3,
    title: "reactjs",
    image: reactjs,
    url: "https://www.udemy.com/certificate/UC-f1dceedb-2bc2-415b-bb7f-e1e629c3b875/",
  },
  {
    id: 4,
    title: "typescript",
    image: typeScript,
    url: "https://www.udemy.com/certificate/UC-ffa930cd-c4ce-49de-b666-ef258e1b9531/",
  },
  {
    id: 5,
    title: "webpack",
    image: webpack,
    url: "https://www.udemy.com/certificate/UC-fe518b99-394b-4fb9-830f-2be782d6f03c/",
  },
  {
    id: 6,
    title: "node js",
    image: node,
    url: "https://www.udemy.com/certificate/UC-0cd2e579-a139-4428-9e9f-2d187ca08348/",
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
          {courses.map((item, index) => {
            return (
              <Card elevation={10} className="award-card course-slider-item" data-aos="fade-up" key={index}>
                <div class="card__collection clear-fix">
                  <div className="cards cards--two">
                    <img src={item.image} className="img-responsive" alt={item.title} />
                    <span className="cards--two__rect"></span>
                    <span className="cards--two__tri"></span>
                    <a href={item.url} target="_blank">
                      View Credential
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </Slider>
      </div>
    </Grid>
  );
}

export default MyCourses;
