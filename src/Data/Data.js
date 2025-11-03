import {
    FaNode,
    FaJava,
    FaAws,
    FaReact,
    FaPython,
    FaSymfony,
    FaPhoneAlt,
    FaUser,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaGithub,
    FaYoutube,
    FaLinkedin,
    FaDocker,
    FaTiktok,
    FaGit,
  } from "react-icons/fa";
 
  //import portfolio from "../assets/images/Portfolio.png"; 

  
  export const navLinks = ["home", "about", "skills", "portfolio", "contact"];
  
  export const SosLinks = [
    "https://www.linkedin.com/in/karim-boualam/",
    "https://github.com/karimboualam/",
    "https://www.youtube.com/",
    "https://www.tiktok.com/",
  ];
  
  export const socialIcons = [
    <FaLinkedin />,
    <FaGithub />,
    <FaYoutube />,
    <FaTiktok />,
  ];
  
  export const bios = [
    {
      id: 1,
      icon: <FaUser />,
      key: "Name",
      value: "Karim BOUALAM",
    },
    {
      id: 2,
      icon: <FaPhoneAlt />,
      key: "Phone",
      value: "0766686647",
    },
    {
      id: 3,
      icon: <FaPaperPlane />,
      key: "Email",
      value: "boualam.karim94@gmail.com",
    },
  ];
  
  export const icons = [
    <FaNode />,
    <FaGit />,
    <FaReact />,
    <FaJava />,
    <FaDocker />,
    <FaAws />,
    <FaPython />,
    <FaSymfony />,
  ];
  
  export const experiences = [
    {
      id: 1,
      year: "2024",
      position: "Consultant Full-Stack (JAVA/ANGULAR)",
      company: "Capgemini",
    },
    {
      id: 2,
      year: "2022-2024",
      position: "Développeur back-end",
      company: "Université de Montpellier",
    },
    {
      id: 3,
      year: "2028",
      position: "Développeur Full Stack",
      company: "Elektro",
    },
    {
      id: 4,
      year: "2020-2021",
      position: "Développeur back-end",
      company: "Elektro",
    },
    {
      id: 5,
      year: "2018",
      position: "Développeur Mobile",
      company: "Elektro",
    },
    {
      id: 6,
      year: "2016",
      position: "Développeur Java",
      company: "BTS",
    },
    {
      id: 7,
      year: "2016",
      position: "Développeur C#",
      company: "BureauTif",
    },
  ];
  export const finishes = [
    {
      id: 1,
      number: "2+",
      itemName: "Années d'expérience",
    },
    {
      id: 2,
      number: "4+",
      itemName: "Clients satisfaits",
    },
    {
      id: 3,
      number: "15+",
      itemName: "Projets réalisés",
    },
  ];
  export const workImages = [
    {
      id: 1,
      name: "project 1",
      category: "web",
    },
    {
      id: 2,
      name: "project 2",
      category: "web",
    },
    {
      id: 3,
      name: "project 3",
      category: "web",
    },
    {
      id: 4,
      name: "project 4",
      category: "web",
    },
    {
      id: 5,
      name: "project 5",
      category: "web",
    },
    {
      id: 6,
      name: "project 6",
      category: "design",
    },
  ];
  
  export const workNavs = ["All", "Web", "Mobile", "Design"];
  
  export const contacts = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      infoText: "Strasbourg, France",
    },
    {
      id: 2,
      icon: <FaPaperPlane />,
      infoText: "boualam.karim94@gmail.com",
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      infoText: "076686647",
    },
  ];
  