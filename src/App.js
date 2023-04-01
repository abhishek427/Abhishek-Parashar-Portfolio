import React, { useState, useEffect } from "react";
import "./app.scss";
import AboutMe from "./about-me/AboutMe";
import MySkills from "./my-skills/MySkills";
import ContactMe from "./contact-me/ContactMe";
import MyProject from "./my-projects/MyProject";
import MyAwards from "./my-awards/MyAwards";
import Footer from "./footer/Footer";
import { FaArrowCircleUp } from "react-icons/fa";
import { Grid } from "@material-ui/core";
import TopBar from "./top-bar/TopBar";
import MyServices from "./my-services/MyServices";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
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
        <MyAwards />
        <ContactMe />
      </main>
      <footer className="footer-width">
        <Footer />
      </footer>
      <Grid container justify="flex-end" style={{ marginRight: "40px" }}>
        <FaArrowCircleUp className="scrollTop hover-high-effect" onClick={scrollTop} style={{ display: showScroll ? "flex" : "none" }} />
      </Grid>
    </div>
  );
}

export default App;
