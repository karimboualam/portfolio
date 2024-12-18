import React from "react";
import "./Footer.scss";
import { socialIcons, SosLinks } from "../../Data/Data";
import { motion } from "framer-motion";

const Footer = () => {
  function getCurrentYear() {
    const currentDate = new Date(); // Crée un nouvel objet Date avec la date actuelle
    const currentYear = currentDate.getFullYear(); // Récupère l'année actuelle
    return currentYear;
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>
          Copyright&copy;{getCurrentYear()} All rights reserved.Made by{" "}
          <span>Karim BOUALAM</span>
        </p>
      </div>
      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index}>
                <a
                  href={SosLinks[index]}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {socialIcon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
