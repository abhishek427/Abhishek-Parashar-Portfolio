import React from "react";
import "./ContactMe.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

let contactData = [
  { key: 1, title: "Name", value: "Abhishek Parashar", icon: faPersonBooth },
  { key: 2, title: "Address", value: "Modinagar", icon: faPersonBooth },
  { key: 3, title: "Email", value: "abhishek427821@gmail.com", icon: faPersonBooth },
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
                  <FontAwesomeIcon icon={data.icon} className="primary-color" />
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
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField id="Name" label="Name" variant="outlined" className="text-field-width" />
            </Grid>
            <Grid item xs={6}>
              <TextField id="Email" label="Email" variant="outlined" className="text-field-width" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="Subject" label="Subject" variant="outlined" className="text-field-width" />
            </Grid>
            <Grid item xs={12}>
              <TextField id="Message" label="Message" multiline rows={4} variant="outlined" className="text-field-width" />
            </Grid>
            <Grid item={12} className="btn-contaner">
              <Button variant="contained" color="secondary" size="large">
                <strong>Send message</strong>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ContactMe;
