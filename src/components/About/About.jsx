import React from "react";
import "./About.scss";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-photo">
        <img src="/profile-photo.jpg" alt="About Me" />
      </div>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          Développeur Full Stack Junior avec 1 an et 2 mois d'expérience en développement Java et C#.
          Passionné par l'apprentissage continu et les solutions innovantes.
        </p>
      </div>
    </section>
  );
}

export default About;
