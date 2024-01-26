import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    css,
    reactjs,
    redux,
    jQuery,
    tailwind,
    bootstrap,
    git,
    docker,
    starfoods,
    addressLLC,
    trade,
    education,
    carrent,
    jobit,
    tripguide,
    threejs,
    php,
    laravel,
    wordpress,
    sql,
  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      date: "Apr 2022 - PRESENT",
      icon: web,
    },
    {
      title: "Web Developer",
      date: "Feb 2020 - Aug 2021",
      icon: mobile,
    },
    {
      title: "Database Manager",
      date: "Sep 2018 - Jan 2020",
      icon: backend,
    },
    {
      title: "Biometric Engineer",
      date: "Biometric Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "jQuery",
      icon: jQuery,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  
    {
      name: "docker",
      icon: docker,
    },

    {
      name: "php",
      icon: php,
    },
    {
      name: "laravel",
      icon: laravel,
    },
    {
      name: "wordpress",
      icon: wordpress,
    },
    {
      name: "sql",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Artam Almas Alborz",
      icon: starfoods,
      iconBg: "#383E56",
      date: "Apr 2022 - PRESENT",
      points: [
        "Developing and maintaining web applications using JavaScript, TypeScript, React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "ADRAS (Afghanistan Development and Registry and Addressing Services)",
      icon: addressLLC,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Aug 2021",
      points: [
        "Contributed to the development of a large software system that centralizes administrative operations of governmental civil ORGs across 34 provinces.",
        "The system focused on employee records and letter management in ministries and their departments.",
        "Independently created 2 modules from scratch and participated as a team member on 5 additional projects.",
        "Played an essential role as part of a team of 189 IT and web developers in the successful deployment of the software to over 3,000 active users.",
      ],
    },
    {
      title: "Database Manager",
      company_name: "Ministry of industry and Commerce",
      icon: trade,
      iconBg: "#383E56",
      date: "Sep 2018 - Jan 2020",
      points: [
        "Retrieve information through database queries.",
        "Work closely with developers to assist in database schema design and development tasks.",
        "Support database backup and recovery processes as needed.",
        "Foster effective communication and collaboration with database developers to align with project requirements..",
      ],
    },
    {
      title: "Biometric Technical Member",
      company_name: "Ministry of Higher Education of Afghanistan",
      icon: education,
      iconBg: "#E6DEDD",
      date: "Feb 2017 - Aug 2018",
      points: [
        "Coordinated the distribution of ID cards for Kankor Examination volunteers.",
        "Managed the registration process for Kankor Examination volunteers, verifying their identity through eye detection and fingerprint scanning.",
        "Facilitated the seamless transfer of database data between computers and the server through efficient export and import operations..",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  

  const technicalSkills = [
      { "skill": "HTML", "percentage": 95 },
      { "skill": "CSS", "percentage": 85 },
      { "skill": "Bootstrap", "percentage": 95 },
      { "skill": "JavaScript", "percentage": 80 },
      { "skill": "React", "percentage": 70 }
  ];


  const softSkills = [
      { "skill": "Teamwork", "percentage": 90 },
      { "skill": "Creativity", "percentage": 85 },
      { "skill": "Management", "percentage": 80 },
      { "skill": "Learning", "percentage": 85 },
      { "skill": "Planing", "percentage": 85 }

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
       
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, technicalSkills, softSkills, testimonials,  projects };