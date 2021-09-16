import React, { useState } from "react";
import "./app.scss";
import AboutMe from "./about-me/AboutMe";
import MyServices from "./my-services/MyServices";
import MySkills from "./my-skills/MySkills";
import ContactMe from "./contact-me/ContactMe";
import MyProject from "./my-projects/MyProject";
import Footer from "./footer/Footer";
import { FaArrowCircleUp } from "react-icons/fa";
import { Grid } from "@material-ui/core";
import TopBar from "./top-bar/TopBar";

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
      <header>
        <TopBar />
      </header>
      <main className="site-background">
        <AboutMe />
        <MyServices />
        <MySkills />
        <MyProject />
        <ContactMe />
      </main>
      <footer className="footer-width">
        <Footer />
      </footer>
      <Grid container justify="flex-end" style={{ marginRight: "40px" }}>
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} style={{ display: showScroll ? "flex" : "none" }} />
      </Grid>
    </div>
  );
}

export default App;
