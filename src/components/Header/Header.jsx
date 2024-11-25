import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header id="home" className="header">
      <div className="header-content">
        <h1>Hi, I'm HEADER KARIM BOUALAM</h1>
        <h2>Full Stack Developer</h2>
        <p>Passionate about building interactive and scalable web applications.</p>
        <a href="#contact" className="btn">Contact Me</a>
      </div>
      <div className="header-image">
        <img src="src\assets\images\profil-photo.png" alt="Your Name" />
      </div>
    </header>
  );
}

export default Header;
