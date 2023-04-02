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
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 1) {
      root.style.setProperty("--primary-color-update", "#ff3054");
      root.style.setProperty("--secondary-color-update", "#ffffff");
      root.style.setProperty("--primary-background-color-update", "#10044a");
      root.style.setProperty("--secondary-background-color-update", "#7729ee");
      root.style.setProperty("--error-color-update", "#ff3054");
      root.style.setProperty("--progress-bar-bg-color-update", "#ffffff");
      root.style.setProperty("--paper-bg-color-update", "#10044a");
      root.style.setProperty("--site-bg-color-update", "#d4ccd9");
    } else if (theme === 2) {
      root.style.setProperty("--primary-color-update", "#CA005E");
      root.style.setProperty("--secondary-color-update", "white");
      root.style.setProperty("--primary-background-color-update", "#159895");
      root.style.setProperty("--secondary-background-color-update", "#245953");
      root.style.setProperty("--error-color-update", "pink");
      root.style.setProperty("--progress-bar-bg-color-update", "#ffffff");
      root.style.setProperty("--paper-bg-color-update", "#245953");
      root.style.setProperty("--site-bg-color-update", "#FFEAEA");
    }
  }, [theme]);

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
        <TopBar theme={theme} setTheme={setTheme} />
      </header>
      <main className="site-background">
        <AboutMe />
        <MyServices />
        <MySkills />
        <MyProject />
        <MyAwards />
        {/* <MyCourses /> */}
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
