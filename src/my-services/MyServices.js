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
  { key: 1, title: "Web Development", icon: languageJavascript, img: js, subheading: "I possess strong JavaScript expertise and have executed numerous projects involving various JavaScript frameworks and libraries." },
  { key: 2, title: "Accessibility development", icon: wheelchairAccessibility, img: acc, subheading: "I've actively contributed to accessibility projects aimed at enhancing digital experiences for differently-abled individuals. My proficiency extends to WCAG 2.0 and a solid understanding of WCAG 3.0 guidelines." },
  { key: 3, title: "devtest", icon: cogsIcon, img: test, subheading: "I possess a strong skill set in writing unit tests, functional tests, and integration testing, leveraging tools like Mocha, Chai, Jest, and Cypress.io." },
];
const NewServices = () => {
  return (
    <Grid container justify="center" className="section-background-color" id="service">
      <Grid item lg={12} md={12} sm={12} xs={12} style={{ marginTop: "3%" }} className="heading-alignment heading-height">
        <Typography variant="h4" className="heading-color hover-high-effect">
          My Services
        </Typography>
        <Typography className="primary-color page-sub-heading">What I provide</Typography>
      </Grid>

      {cardData.map((data, index) => {
        return (
          <Grid item lg={3} md={3} sm={12} xs={12} className="card-spacing" key={data.key}>
            <div className="flip-card" data-aos="zoom-in-up">
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundImage: `url(${data.img})` }}>
                  <div className="over-lay">
                    <div>
                      <Icon icon={data.icon} className="icon-size" style={{ color: data.key === 1 ? "#f0db4f" : "white" }} />
                    </div>
                    <div>
                      <p className="heading-color card-heading">{data.title}</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <p className="heading-color card-heading hover-effect">{data.title}</p>
                  <p className="heading-color hover-effect flip-card-back-subheading">{data.subheading}</p>
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
