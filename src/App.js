import React from "react";
import "./App.css";
import AboutMe from "./about-me/AboutMe";
import MyServices from "./my-services/MyServices";
import MySkills from "./my-skills/MySkills";
import ContactMe from "./contact-me/ContactMe";
import MyProject from "./my-projects/MyProject";
import Footer from "./footer/Footer";
function App() {
  return (
    <div className="item-position">
      <AboutMe />
      <MyServices />
      <MySkills />
      <MyProject />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
