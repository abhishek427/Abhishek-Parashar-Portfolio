import React, { useState } from "react";
import "./ContactMe.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Icon } from "@iconify/react";
import accountIcon from "@iconify-icons/mdi/account";
import mapMarkerRadius from "@iconify-icons/mdi/map-marker-radius";
import emailOutline from "@iconify-icons/mdi/email-outline";
import linkedinIcon from "@iconify-icons/mdi/linkedin";
import facebookIcon from "@iconify-icons/mdi/facebook";
import instagramIcon from "@iconify-icons/mdi/instagram";
import emailjs from "emailjs-com";
import Form from "./Form";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");
  const [errors, setErrors] = useState([]);
  const [liveValidationStart] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateForm = () => {
    let errorValue = false;
    let errors = {};
    let requireFields = ["name", "email", "subject", "msg"];
    let emailFields = ["email"];

    requireFields.forEach((field, index) => {
      if (document.getElementById(field) !== null) {
        let value;
        if (document.getElementById(field).value !== undefined) {
          value = document.getElementById(field).value;
        } else {
          value = document.getElementById(field).innerHTML;
          if (value === "<span>​</span>") {
            value = -1;
          }
        }
        if (value.length < 1 || value === -1) {
          errors[field] = "This field is required";
        } else if (emailFields.indexOf(field) !== -1 && !value.match(/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/)) {
          errors[field] = "This field should be a valid email";
        } else if (email != null) {
        }
        if (errorValue === false) {
        }
      }
    });
    setErrors(errors);

    return Object.keys(errors).length > 0 ? true : false;
  };
  const data = {
    subject: subject,
  };
  const sentEmail = () => {
    if (validateForm() === false) {
      setName("");
      setEmail("");
      setSubject("");
      setMsg("");
      emailjs.sendForm("gmail", "template_yja62ud", data, "user_ASQa7rDR5ZuJgjmTWSHyR").then(
        (result) => {
          console.log(result.text);
          handleClickOpen();
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  const validate = () => {
    if (liveValidationStart === false) {
      validateForm();
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_yjjgv3v", "template_yja62ud", e.target, "user_ASQa7rDR5ZuJgjmTWSHyR").then(
      (result) => {
        console.log(result.text);
        console.log(e.target, "eee");
      },
      (error) => {
        console.log(error.text);
      }
    );
  }
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
          {/* <form className="contact-form" onSubmit={sendEmail}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  required
                  error={errors["name"]}
                  helperText={errors["name"]}
                  fullWidth
                  autoComplete="name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                    validate();
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  required
                  error={errors["email"]}
                  helperText={errors["email"]}
                  fullWidth
                  autoComplete="Email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    validate();
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="subject"
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  required
                  error={errors["subject"]}
                  helperText={errors["subject"]}
                  fullWidth
                  autoComplete="subject"
                  value={subject}
                  onChange={(event) => {
                    setSubject(event.target.value);
                    validate();
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="msg"
                  name="message"
                  label="Message"
                  variant="outlined"
                  required
                  error={errors["msg"]}
                  helperText={errors["msg"]}
                  fullWidth
                  autoComplete="message"
                  value={msg}
                  onChange={(event) => {
                    setMsg(event.target.value);
                    validate();
                  }}
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item={12} className="btn-contaner">
                <Button variant="contained" color="secondary" size="large" onClick={sentEmail}>
                  <strong>Send message</strong>
                </Button>
              </Grid>
            </Grid>
          </form> */}
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
        {/* <Grid item xs={12}>
          <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </Grid> */}
      </Grid>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12}>
            <DialogTitle id="alert-dialog-slide-title">
              <div className="dialog-contant">Thank You for Messaging me</div>
              <div className="dialog-contant">
                <InsertEmoticonIcon className="icon-style" />
              </div>
            </DialogTitle>
          </Grid>
          <Grid item xs={12}>
            <div className="dialog-contant">
              <p>I will contact you shortly.</p>
            </div>
          </Grid>
        </Grid>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleClose} variant="contained" color="secondary">
            <strong>Okay</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
}

export default ContactMe;
