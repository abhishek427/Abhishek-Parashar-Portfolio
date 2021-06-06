import React, { useState } from "react";
import "./App.css";
import AboutMe from "./about-me/AboutMe";
import MyServices from "./my-services/MyServices";
import MySkills from "./my-skills/MySkills";
import ContactMe from "./contact-me/ContactMe";
import MyProject from "./my-projects/MyProject";
import Footer from "./footer/Footer";
import { FaArrowCircleUp } from "react-icons/fa";
import { Grid } from "@material-ui/core";
function App() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <div className="item-position">
      <AboutMe />
      <MyServices />
      <MySkills />
      <MyProject />
      <ContactMe />
      <Footer />
      <Grid container justify="flex-end" style={{ marginRight: "40px" }}>
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ height: 40, width: 40, display: showScroll ? "flex" : "none", color: "crimson" }} />
      </Grid>
    </div>
  );
}

export default App;
