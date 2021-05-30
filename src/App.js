import React from "react";
import "./App.css";
import AboutMe from "./about-me/AboutMe";
import MyServices from "./my-services/MyServices";
import MySkills from "./my-skills/MySkills";

function App() {
  return (
    <div className="item-position">
      <AboutMe />
      <MyServices />
      <MySkills />
    </div>
  );
}

export default App;
