import React from "react";
import "./Skills.scss";
import { FaJava, FaPython, FaDocker, FaGit, FaJenkins, FaReact } from "react-icons/fa";
import {
  SiSpring, SiAngular, SiTypescript, SiJavascript, SiNodedotjs, SiFlask, SiDjango,
  SiPostgresql, SiMysql, SiMongodb, SiKubernetes,
  SiGitlab, SiGithub, SiSwagger, SiSonarqube, SiJira,
  SiIntellijidea, SiFigma, SiUml,
  // nouveaux
  SiFlutter, SiDart, SiFirebase, SiGooglemaps,
} from "react-icons/si";
import { TbBrandVscode, TbBrandVisualStudio } from "react-icons/tb";

const ICONS = {
  Java: <FaJava />, "Spring Boot": <SiSpring />, Angular: <SiAngular />, React: <FaReact />,
  TypeScript: <SiTypescript />, JavaScript: <SiJavascript />, Python: <FaPython />, "C#": "💻",
  "Node.js": <SiNodedotjs />, Flask: <SiFlask />, Django: <SiDjango />, JavaFX: "🖥️",

  MySQL: <SiMysql />, PostgreSQL: <SiPostgresql />, MongoDB: <SiMongodb />, "SQL Server": "🗄️",

  Docker: <FaDocker />, Kubernetes: <SiKubernetes />, "GitLab CI/CD": <SiGitlab />, "Azure DevOps": "☁️",
  Git: <FaGit />, GitHub: <SiGithub />, Jenkins: <FaJenkins />, Postman: "🧪",
  Swagger: <SiSwagger />, SonarQube: <SiSonarqube />, Jira: <SiJira />,

  "IntelliJ IDEA": <SiIntellijidea />, "VS Code": <TbBrandVscode />, "Visual Studio": <TbBrandVisualStudio />, Figma: <SiFigma />,
  UML: <SiUml />, "API Gateway": "🔀", Linux: "🐧", Windows: "🪟", Scrum: "⚡", SAFe: "📈", TDD: "✅", Kanban: "🗂️", Merise: "📐",

  // nouveaux (même pictogramme Firebase pour les services)
  Dart: <SiDart />,
  Flutter: <SiFlutter />,
  "Firebase Auth": <SiFirebase />,
  "Cloud Firestore": <SiFirebase />,
  "Cloud Storage": <SiFirebase />,
  "Cloud Functions": <SiFirebase />,
  "Google Maps API": <SiGooglemaps />,
};

const skillGroups = [
  {
    title: "Langages",
    items: ["Java", "TypeScript", "JavaScript", "Python", "C#", "Dart"],
  },
  {
    title: "Frameworks & Runtimes",
    items: ["Spring Boot", "Angular", "React", "Node.js", "Flask", "Django", "JavaFX", "Flutter"],
  },
  {
    title: "Bases de données",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Cloud Firestore"],
  },
  {
    title: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "GitLab CI/CD", "Azure DevOps", "API Gateway", "Jenkins",
            "Firebase Auth", "Cloud Storage", "Cloud Functions"],
  },
  {
    title: "Outils",
    items: ["Git", "GitHub", "Postman", "Swagger", "SonarQube", "IntelliJ IDEA", "VS Code",
            "Visual Studio", "Figma", "Jira", "Google Maps API"],
  },
  {
    title: "Méthodes & Systèmes",
    items: ["Scrum", "SAFe", "TDD", "UML", "Merise", "Kanban", "Linux", "Windows"],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__head">
        <span className="eyebrow">core strengths</span>
        <h2>My Skills</h2>
        <p className="sub">
          Les technos et pratiques que j’utilise au quotidien (extraits de mon expérience & de mon CV).
        </p>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skills__card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((name) => (
                <li key={name} className="chip">
                  <span className="ico">{ICONS[name] ?? "•"}</span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
