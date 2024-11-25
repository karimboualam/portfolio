import React from "react";
import "./Skills.scss";

function Skills() {
  const skills = ["Java", "JavaScript", "React", "Node.js", "Python", "DevOps"];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
