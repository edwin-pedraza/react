import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  choucair,
  IqOuts,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  upskilled,
  ecci,
  insutec,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "resum",
    title: "Resum",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const resume = [
  {
    title: "Web Developer",
    
  },
  {
    title: "React Native Developer",
    
  },
  {
    title: "Backend Developer",
    
  },
  {
    title: "Content Creator",
    
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const educationes = [
  {
    title: "Certificate IV in Information Technology,",
    company_name: "Upskilled Pty Ltd, Australia",
    icon: upskilled,
    iconBg: "#383E56",
    date: "2023 - Currently",
    Achievement: {
      subtitle: "Achievements",
      point:[      
      "Developed business requirement templates aimed to collect input for an implementation project to automate processes in a major local bank.",
      "Developed an UAT procedure from scratch",
      "Documented UAT which had to be signed and agreed by clients."
    ]},
  },
  {
    title: "Bachelor Degree of Systems Engineer",
    company_name: "ECCI University, Bogota, Colombia",
    icon: ecci,
    iconBg: "#383E56",
    date: "2010 - 2014",
    Achievement: {
      subtitle: "Achievements",
      point:[      
      "Developed business requirement templates aimed to collect input for an implementation project to automate processes in a major local bank.",
      "Developed an UAT procedure from scratch",
      "Documented UAT which had to be signed and agreed by clients."
    ]},
  },
  {
    title: "Professional Technician in Systems Engineering",
    company_name: "INSUTEC. Bogota, Colombia",
    icon: insutec,
    iconBg: "#383E56",
    date: "2005 - 2008",
    Achievement: {
      subtitle: "Achievements",
      point:[      
      "Developed business requirement templates aimed to collect input for an implementation project to automate processes in a major local bank.",
      "Developed an UAT procedure from scratch",
      "Documented UAT which had to be signed and agreed by clients."
    ]},
  },

];

const experiences = [
  {
    title: "System Test Analyst",
    company_name: "Choucair Testing, Colombia",
    icon: choucair,
    iconBg: "#383E56",
    date: "June 2015 - July 2016",
    
    Achievement: {
      subtitle: "Achievements",
      point:[      
      "Developed business requirement templates aimed to collect input for an implementation project to automate processes in a major local bank.",
      "Developed an UAT procedure from scratch",
      "Documented UAT which had to be signed and agreed by clients."
    ]},
    
    respon: {
      subtitle: "Responsibilities",
      point:[      
      "Identifying and breaking down the necessary tasks to test new or existed product.",
      "Designing tests, either alone or as part of a team",
      "Setting up automated tests.",
      "Performing functional tests of clients’ web page.",
      "Analysing the customers’ IT Quality Assurance Area."
      
    ]},
  },
  {
    title: "IT Support Officer",
    company_name: "IQ Outsourcing, Colombia",
    icon: IqOuts,
    iconBg: "#E6DEDD",
    date: "September 2013 - May 2015",
    Achievement: {
      subtitle: "Achievements",
      point:[      
      "Proposed, prepared and facilitated training for new team members, this included developing training information packages and knowledge assessment test. This initiative increased team productivity by 20%.",
      "Designed and implemented an operational status report using SQL to pull information out of different systems and consolidating it in a company dashboard",
      "Utilised SQL to identify errors in data bases, escalating errors to correct areas. This process allowed the business to fix errors in a timely manner saving time and money"
    ]},

    respon: {
      subtitle: "Responsibilities",
      point:[      
      "Monitoring and maintaining computer systems and networks.",
      "Ensuring that new technologies and processes are adapted to current systems effectively.",
      "Supervising installation of software and hardware modules and ensuring that upgrades are performed timely.",
      "Validating errors and proposing solutions to applications.",
      "Ensuring that computer hardware and software is updated and maintained correctly.",
      "Repairing and replacing equipment as necessary.",
      "• Diagnosing and troubleshooting technical problems.",
      "• Identifying priority issues and ensuring that they are handled first.",
      "• Responding on time to service issues and requests.",
      "• Providing technical support to customers’ IT staff.",
    ]},
  },
  
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
    name: "Portfolio",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
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

export { services, technologies, educationes,experiences, testimonials, projects,resume };