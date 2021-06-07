import React, { useState } from "react";
import "./ContactMe.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonBooth } from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let contactData = [
  { key: 1, title: "Name", value: "Abhishek Parashar", icon: faPersonBooth },
  { key: 2, title: "Address", value: "Modinagar", icon: faPersonBooth },
  { key: 3, title: "Email", value: "abhishek427821@gmail.com", icon: faPersonBooth },
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

  const saveTeacherData = () => {
    if (validateForm() === false) {
      handleClickOpen();
      setName("");
      setEmail("");
      setSubject("");
      setMsg("");
    }
  };
  const validate = () => {
    if (liveValidationStart === false) {
      validateForm();
    }
  };
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
              <TextField
                id="name"
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
              <Button variant="contained" color="secondary" size="large" onClick={saveTeacherData}>
                <strong>Send message</strong>
              </Button>
            </Grid>
          </Grid>
        </Grid>
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
