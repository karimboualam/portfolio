import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCalendar, FiTag, FiCheck } from "react-icons/fi";
import styles from "./Projects.module.scss";

const ALL = "All";
const FILTERS = [ALL, "Web", "Web/ML", "Data", "Desktop"];

const projects = [
  {
    name: "Gestion d’adhésions & dossiers obsèques (Assfa)",
    period: "2024–2025",
    type: "Web",
    description:
      "App de gestion des adhésions, cotisations, sinistres & bénéficiaires, exports PDF/Excel, rôles (adhérent/gestionnaire/admin).",
    stack: ["Java", "Spring Boot", "Angular", "MySQL", "JWT", "Docker", "Jenkins"],
    highlights: [
      "Multi-rôles & sécurisation JWT",
      "Exports PDF/Excel et reporting",
      "CI/CD Docker + Jenkins",
    ],
    github: "https://github.com/karimboualam",
    demo: "",
  },
  {
    name: "Analyse de code & détection de code smells",
    period: "2024",
    type: "Web/ML",
    description:
      "Analyse de dépôts GitHub, scoring qualité + modèle ML pour détecter des code smells et proposer des remédiations.",
    stack: ["Java", "Spring Boot", "Angular", "Python", "Flask", "SonarQube", "Azure DevOps"],
    highlights: [
      "Intégration Sonar + ML",
      "Recommandations automatiques",
      "Pipelines Azure DevOps",
    ],
    github: "https://github.com/karimboualam",
    demo: "",
  },
  {
    name: "Évolution France Travail & outil demandeurs d’emploi",
    period: "2024",
    type: "Web",
    description:
      "Évolutions Java/Angular + création d’un outil complémentaire. Améliorations UX, NgRx, sécurisation JWT/OAuth2.",
    stack: ["Java", "Spring Boot", "Angular", "NgRx", "JWT", "OAuth2", "PostgreSQL"],
    highlights: ["NgRx & perf front", "OAuth2/JWT", "Refonte UX ciblée"],
    github: "https://github.com/karimboualam",
    demo: "",
  },
  {
    name: "Gestion des monuments historiques",
    period: "2023–2024",
    type: "Web",
    description:
      "Gestion des monuments/visites/travaux, recherches avancées, rôles (admin, visiteur, conservateur).",
    stack: ["Java", "Spring Boot", "Angular", "JWT", "GitLab CI/CD", "Docker", "SQL"],
    highlights: ["ACL & rôles", "Recherches avancées", "CI/CD GitLab"],
    github: "https://github.com/karimboualam",
    demo: "",
  },
  {
    name: "Gestion d’intérim (microservices)",
    period: "2023",
    type: "Web",
    description:
      "Microservices (missions, plannings, employés), API Gateway, conteneurisation & orchestration.",
    stack: ["Spring Boot", "Angular", "MongoDB", "API Gateway", "Docker", "Kubernetes"],
    highlights: ["Gateway + services", "Docker/K8s", "MongoDB"],
    github: "https://github.com/karimboualam",
    demo: "",
  },
  {
    name: "Analyse de risques & sinistres auto (Data)",
    period: "2024–2025",
    type: "Data",
    description:
      "Préparation des données, modèles de prédiction et détection d’anomalies/fraude. Restitution claire.",
    stack: ["Python", "Pandas", "scikit-learn", "TensorFlow", "SMOTE", "Matplotlib"],
    highlights: ["Pipelines data", "Modèles ML", "Détection d’anomalies"],
    github: "https://github.com/karimboualam",
    demo: "",
  },
  {
    name: "Gestion magasin d’électronique (Desktop)",
    period: "2021",
    type: "Desktop",
    description:
      "Java desktop (stocks, commandes, clients) + import/export Excel et notifications e-mail.",
    stack: ["Java SE", "JavaFX", "JDBC", "SQL Server", "Apache POI"],
    highlights: ["JavaFX UI", "Excel import/export", "SQL Server"],
    github: "https://github.com/karimboualam",
    demo: "",
  },
  {
    name: "Gestion de stock (C# / .NET)",
    period: "2019",
    type: "Desktop",
    description:
      "Application web de gestion de stocks (CRUD, rapports) déployée et optimisée.",
    stack: ["C#", ".NET", "SQL Server", "HTML/CSS/JS"],
    highlights: [".NET + SQL Server", "Rapports", "Déploiement"],
    github: "https://github.com/karimboualam",
    demo: "",
  },
];

export default function Projects() {
  const [active, setActive] = useState(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return projects;
    return projects.filter((p) => p.type === active);
  }, [active]);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <span className={styles.kicker}>Selected work</span>
        <h2>My Projects</h2>
        <p>Une sélection de projets pro & perso, avec les points clés et la stack.</p>
      </div>

      {/* Filtres */}
      <div className={styles.filters}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`${styles.filter} ${active === f ? styles.active : ""}`}
          >
            <FiTag /> {f}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className={styles.grid}>
        {filtered.map((p, i) => (
          <motion.article
            key={p.name + i}
            className={styles.card}
            initial={{ y: 14, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
            whileHover={{ y: -6 }}
          >
            <div className={styles.meta}>
              <span className={styles.badge}>{p.type}</span>
              <span className={styles.period}><FiCalendar /> {p.period}</span>
            </div>

            <h3 className={styles.title}>{p.name}</h3>
            <p className={styles.desc}>{p.description}</p>

            <ul className={styles.highlights}>
              {p.highlights.map((h, k) => (
                <li key={k}><FiCheck /> {h}</li>
              ))}
            </ul>

            <ul className={styles.stack}>
              {p.stack.map((t, k) => (
                <li key={k}>{t}</li>
              ))}
            </ul>

            <div className={styles.actions}>
              {p.github && (
                <a className={styles.btn} href={p.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub /> Voir le code
                </a>
              )}
              {p.demo && (
                <a className={styles.btnGhost} href={p.demo} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink /> Démo
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

