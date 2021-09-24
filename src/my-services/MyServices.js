import React from "react";
import "./myServices.scss";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Icon } from "@iconify/react";
import languageJavascript from "@iconify-icons/mdi/language-javascript";
import wheelchairAccessibility from "@iconify-icons/mdi/wheelchair-accessibility";
import cogsIcon from "@iconify-icons/mdi/cogs";
import js from "../images/js.jpeg";
import acc from "../images/acc.jpeg";
import test from "../images/test.jpeg";

let cardData = [
  { key: 1, title: "Web Developer", icon: languageJavascript, img: js, subheading: "I have a good knowledge of JavaScript and have done many projects on javascript related frameworks and libraries." },
  { key: 2, title: "Accessibility developer", icon: wheelchairAccessibility, img: acc, subheading: "I worked on a couple of projects to make Accessibility for the Differently abled people and having good knowledge of WCAG 2.0 and WCAG 3.0." },
  { key: 3, title: "Tester", icon: cogsIcon, img: test, subheading: "I have good knowledge of writing unit tests, functional tests, and integration testing. Using mocha chai and Cypress.io" },
];
const NewServices = () => {
  return (
    <Grid container justify="center" className="section-background-color" id="service">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">
        <Typography variant="h4" className="heading-color hover-high-effect">
          My Services
        </Typography>
        <Typography className="primary-color">What I provide</Typography>
      </Grid>

      {cardData.map((data) => {
        return (
          <Grid item lg={3} md={3} sm={12} xs={12} className="card-spacing" key={data.key}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${data.img})` }}>
                  <div className="over-lay">
                    <div>
                      <Icon icon={data.icon} className="icon-size" />
                    </div>
                    <div>
                      <p className="heading-color card-heading">{data.title}</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <p className="heading-color card-heading hover-high-effect">{data.title}</p>
                  <p className="heading-color hover-effect">{data.subheading}</p>
                </div>
              </div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default NewServices;
