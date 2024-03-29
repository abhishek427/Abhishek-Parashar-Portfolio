import React, { useState } from "react";
import "./form.scss";
import emailjs from "emailjs-com";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Icon } from "@iconify/react";
import send from "@iconify-icons/mdi/send";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Form() {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [liveValidationStart] = useState(false);
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();
    setName("");
    setEmail("");
    setMsg("");
    setSubject("");
    if (validateForm() === false) {
      setFlag(true);
      emailjs.sendForm(process.env.REACT_APP_DATA_SERVICE, process.env.REACT_APP_DATA_TEMPLATE, e.target, process.env.REACT_APP_DATA_ENV).then(
        (result) => {
          handleClickOpen();
          setFlag(false);
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  }

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
          errors[field] = "*This field is required";
        } else if (emailFields.indexOf(field) !== -1 && !value.match(/^[\w\.=-]+@[\w\.-]+\.[\w]{2,3}$/)) {
          errors[field] = "*This field should be a valid email";
        } else if (email != null) {
        }
        if (errorValue === false) {
        }
      }
    });
    setErrors(errors);

    return Object.keys(errors).length > 0 ? true : false;
  };
  const validate = () => {
    if (liveValidationStart === false) {
      validateForm();
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="nameEmailContainer">
          <div className="nameContainer">
            <label className="heading-color">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name..."
              className={(errors["name"] ? "errorClass" : "", "hover-effect")}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validate();
              }}
            />
            <small>{errors["name"]}</small>
          </div>
          <div className="emailContainer">
            <label className="heading-color">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email..."
              id="email"
              className={(errors["email"] ? "errorClass" : "", "hover-effect")}
              onChange={(e) => {
                setEmail(e.target.value);
                validate();
              }}
            />
            <small>{errors["email"]}</small>
          </div>
        </div>
        <label className="heading-color">Subject</label>
        <input
          type="text"
          name="subject"
          value={subject}
          placeholder="Enter the subject of this message..."
          id="subject"
          className={(errors["subject"] ? "errorClass" : "", "hover-effect")}
          onChange={(e) => {
            setSubject(e.target.value);
            validate();
          }}
        />
        <small>{errors["subject"]}</small>
        <div className="messageContainer">
          <label className="heading-color">Message</label>
          <textarea
            cols="10"
            rows="5"
            charswidth="23"
            name="message"
            value={msg}
            id="msg"
            placeholder="Type whatever you want..."
            className={(errors["msg"] ? "errorClass" : "", "hover-effect")}
            onChange={(e) => {
              setMsg(e.target.value);
              validate();
            }}
          ></textarea>
          <small>{errors["msg"]}</small>
        </div>
        <div className="send-btn-container">
          <Button type="submit" variant="contained" className="send-btn hover-effect" size="large">
            {flag === true ? (
              <CircularProgress className="circular-progress" />
            ) : (
              <strong className="icon-heading-container ">
                Send message <Icon icon={send} style={{ marginLeft: "10px" }} />
              </strong>
            )}
          </Button>
        </div>
      </form>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
        <Grid container justify="center" alignItems="center" className="menu-container">
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
        <DialogActions style={{ display: "flex", justifyContent: "center" }} className="menu-container">
          <Button onClick={handleClose} variant="contained" className="ok-btn">
            <strong>Okay</strong>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Form;
