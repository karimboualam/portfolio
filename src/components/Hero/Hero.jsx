import React from "react";
import "./Hero.scss";
//import profile from "../../assets/images/profil-photo.png"; 


function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Hi, Je suis Karim BOUALAM</h1>
        <h2>Développeur Full-Stack</h2>
        <p>Passionné par le développement et les nouvelles technologies.</p>
        <a href="#projects" className="btn">Voir mes projets</a>
      </div>
      {/*<div className="hero-image">*/}
       {/*  <img src="/profile-photo.jpg" alt="Karim Boualam" /> */}
      {/*   <img src={profile} alt="Karim Boualam" />   {/* ✅ */}
     {/*   </div>*/}
    </div>
  );
}

export default Hero;
