import React from "react";
import Education from "../components/Education";
import CV from "../components/CV";

function About() {
  return (
    <div className="about">
      <div className="intro">
        <p id="name">
          My name is Mertzanis Stelios, a passionate front-end developer based
          in Greece.
        </p>
        <p>Let me tell you a bit about myself.</p>
      </div>
      <div className="background">
        <h3>Background</h3>
        <p>
          My previous studies and professional experience were in the culinary
          arts and gastronomy.
        </p>
        <p>
          However, my curiosity about understanding how information systems work
          led me to pursue studies in computer science.
        </p>
      </div>
      <Education />
      <CV />
    </div>
  );
}

export default About;
