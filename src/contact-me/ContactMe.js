import React from "react";
import "./ContactMe.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { Icon } from "@iconify/react";
import accountIcon from "@iconify-icons/mdi/account";
import mapMarkerRadius from "@iconify-icons/mdi/map-marker-radius";
import emailOutline from "@iconify-icons/mdi/email-outline";
import linkedinIcon from "@iconify-icons/mdi/linkedin";
import facebookIcon from "@iconify-icons/mdi/facebook";
import instagramIcon from "@iconify-icons/mdi/instagram";

import Form from "./Form";

let socialMediaData = [
  { key: 1, icon: linkedinIcon, link: "https://www.linkedin.com/in/abhishek-parashar-ba6b26a2/" },
  { key: 2, icon: facebookIcon, link: "https://www.facebook.com/abhishek.parasar.505/" },
  { key: 3, icon: instagramIcon, link: "https://www.instagram.com/parashar427/" },
];
let contactData = [
  { key: 1, title: "Name", value: "Abhishek Parashar", icon: accountIcon },
  { key: 2, title: "Address", value: "Modinagar", icon: mapMarkerRadius },
  { key: 3, title: "Email", value: "abhishek427821@gmail.com", icon: emailOutline },
];
function ContactMe() {
  return (
    <Paper elevation={3} className="paper-size">
      <Grid container justify="center" spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12} className="heading-alignment heading-height">
          <Typography variant="h4">Contact me</Typography>
          <Typography className="primary-color">get in touch</Typography>
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing">
          <p className="section-heading">Get in Touch</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
          {contactData.map((data) => {
            return (
              <Grid container alignItems="center" className="contactData" key={data.key}>
                <Grid item xs={1}>
                  <Icon icon={data.icon} className="contact-me-icons" />
                </Grid>
                <Grid item xs={11}>
                  <strong>{data.title}</strong>
                  <p className="contact-value">{data.value}</p>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing">
          <p className="section-heading">Message Me</p>
          <Form />
        </Grid>

        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing">
          <div>
            <strong>Follow me on </strong>
          </div>
          {socialMediaData.map((data) => {
            return (
              <a href={data.link} key={data.key} style={{ textDecoration: "none" }}>
                {" "}
                <Icon icon={data.icon} className="socal-media-icons" />
              </a>
            );
          })}
        </Grid>
        <Grid item lg={5} md={5} sm={12} xs={12} className="side-spacing"></Grid>
      </Grid>
    </Paper>
  );
}

export default ContactMe;
