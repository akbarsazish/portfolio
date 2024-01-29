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
    starfoods,
    addressLLC,
    trade,
    education,
    starfood,
    crm,
    math,
    air_pollution,
    awesome_books,
    book_store,
    online_academy,
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
      name: "git",
      icon: git,
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
  

  const frontEndSkills = [
      { "front": "JavaScript", "percentage": 90 },
      { "front": "TypeScript", "percentage": 80 },
      { "front": "React & Redux Toolkit", "percentage": 85 },
      { "front": "jQuery & Ajax", "percentage": 80 },
      { "front": "Tailwind & Bootstrap", "percentage": 70 },
      { "front": "HTML & CCS", "percentage": 95 }
  ];

  const backEndSkills = [
      { "backEnd": "PHP", "percentage": 60 },
      { "backEnd": "Laravel", "percentage": 65 },
      { "backEnd": "SQL", "percentage": 50 },
      { "backEnd": "WordPress", "percentage": 70 },
  ];


  const toolsAndMethods = [
      { "tools": "Git & GitHub", "percentage": 85 },
      { "tools": "API", "percentage": 80 },
      { "tools": "Responsive Dev", "percentage": 90 },
      { "tools": "Chrome Dev Tools", "percentage": 85 },
  ];

  const softSkills = [
      { "soft": "Problem solving", "percentage": 85 },
      { "soft": "Team work", "percentage": 80 },
      { "soft": "Mentoring", "percentage": 90 },
      { "soft": "Remote Pair-Programming", "percentage": 85 },
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
      name: "Starfoods",
      description:
        "Starfoods demonstrates my web development skills, emphasizing user-friendly interfaces, smooth shopping experiences, secure payments, and quick shipping. Explore my work to see how I can enhance your next project.",
      tags: [
        { name: "React",
          color: "blue-text-gradient",
        },
        { name: "Bootstrap",
          color: "green-text-gradient",
        },
       
        { name: "CSS",
          color: "pink-text-gradient",
        },
        { name: "Laravel",
          color: "blue-text-gradient",
        },
        { name: "SQL Server",
          color: "green-text-gradient",
        },
      ],
      image: starfood,
      source_code_link: "https://github.com/akbarsazish/starfoods",
      see_live_link: "https://star.starfoods.ir",
    },
    {
      name: "CRM",
      description:
        "A CRM (Customer Relationship Management) system, streamlines customer data management, and provides analytics. I specialize in creating adaptable CRM solutions that support sales, customer service, and growth, reflecting my skills in developing, data-driven applications.",
      tags: [
        { name: "JavScript",
          color: "blue-text-gradient",
        },
        { name: "jQuery",
          color: "green-text-gradient",
        },
        {name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {name: "CSS",
          color: "blue-text-gradient",
        },
        {  name: "Laravel",
          color: "green-text-gradient",
        },
        { name: "SQL Server",
          color: "pink-text-gradient",
        },
      ],
      image: crm,
      source_code_link: "https://github.com/akbarsazish/crm-update",
      see_live_link: "https://star4.ir",
    },
    {
      name: "Math",
      description:
        "Math magicians is a website for all fans of mathematics. It allows user to make simple calculations and read random math related qoutes.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: math,
      source_code_link: "https://github.com/akbarsazish/Math-Magicians",
      see_live_link: "https://math-magicians-9om6.onrender.com/",
    },
    {
      name: "Air Pollution",
      description:
        "Presenting a straightforward air pollution application that offers historical air quality data for various countries worldwide. Users can easily search for specific locations to access air pollution information.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
      ],
      image: air_pollution,
      source_code_link: "https://github.com/akbarsazish/Air-Pollution-API",
      see_live_link: "https://akbarsazish.github.io/Air-Pollution-API/",
    },
    {
      name: "Books",
      description:
        "Awesome Books website lets you add books with their titles and authors to a list and remove them when needed. The data is stored in the browser memory using localStorage for easy access. It is a simple tool for keeping track of your books.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
      ],
      image: awesome_books,
      source_code_link: "https://github.com/akbarsazish/Awesome-Books-ES6",
      see_live_link: "https://akbarsazish.github.io/Awesome-Books-ES6/",
    },
    {
      name: "Book Store",
      description:
        "An online small project which developed by react and redux toolkit that enable users that they can add their books and authors, see list of books and they are able edit and delete the book from the list.",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "Redux Toolkit",
            color: "green-text-gradient",
          },
          {
            name: "CSS",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
        ],
      image: book_store,
      source_code_link: "https://github.com/akbarsazish/Bookstore-React",
      see_live_link: "https://akbarsazish.github.io/Bookstore-React/",
    },
    {
      name: "Online Academy",
      description:
        "Online Academy is an online platform for web development and programming. I will be enhancing in the future and include tutorials on HTML, CSS, JavaScript, PHP, ASP.NET, and more, spanning front-end, back-end, mobile app development, and web design.",
        tags: [
          {
            name: "JavScript",
            color: "blue-text-gradient",
          },
    
          {
            name: "CSS",
            color: "pink-text-gradient",
          },
          {
            name: "HTML",
            color: "blue-text-gradient",
          },
        ],
      image: online_academy,
      source_code_link: "https://github.com/akbarsazish/Sazish-Academy",
      see_live_link: "https://akbarsazish.github.io/Sazish-Academy/",
    },
  ];
  
  export { services, technologies, experiences, frontEndSkills, backEndSkills, toolsAndMethods, softSkills, testimonials,  projects };