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
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    icon: web,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Figma",
    icon: backend,
  },
  {
    title: "Figma Prototyping",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "PG Life",
    company_name: "Internshala",
    icon: starbucks,
    iconBg: "#383E56",
    date: "june 2024 - August 2024",
    points: [
      "Built the project using HTML, CSS, JavaScript, and PHP, showcasing skills in front-end and back-end web development.",
      "Uploaded the project on GitHub for version control and sharing, demonstrating proficiency in collaborative tools and coding best practices",
      "Designed and developed a responsive website, PG Life, to streamline the search for student accommodations, focusing on user-friendly interfaces and intuitive navigation",
    ],
  },
  {
    title: "AI-Chatbot",
    company_name: "LetsUpgrade",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Developed an AI chatbot during my Python internship, showcasing expertise in natural language processing and conversational AI.",
      "Implemented core functionalities like real-time responses and user interaction handling, ensuring asmooth conversational experience",
      "Uploaded the project on GitHub, demonstrating skills in version control and the ability to present work effectively for collaboration and review. ",
    ],
  },
  {
    title: "Diavolos",
    company_name: "Own Startup",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - Nov 2024",
    points: [
      "Founded a startup and designed its UI/UX using Figma.",
      "Developed and maintained web applications using React.js and related technologies",
      "Collaborated with cross-functional teams, including designers and product managers, to build high-quality products.",
      "Ensured responsive design, cross-browser compatibility, and participated in code reviews.",
    ],
  },
    ]
const testimonials = [
  {
    testimonial:
      "Aayush Dhiman is a visionary innovator shaping the future with groundbreaking ideas",
    name: "Rishabh Rawat",
    designation: "Software Devleloper",
    company: "Cisco",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFnmjJooiVVjQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1666775136475?e=1743638400&v=beta&t=Z7szR8tropbkA1UWBW3vV_ySZqOmE9uknnp60XsnUoA",
  },
  {
    testimonial:
      "Aayush Dhiman's creativity knows no bounds-his futuristic ideas redefine innovation",
    name: "Ayushi Dhiman",
    designation: "Risk Analyst",
    company: "Amazon",
    image: "https://media.licdn.com/dms/image/v2/D5635AQFd3OxVa6x8Iw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1715447557956?e=1738922400&v=beta&t=OM_uKnNEtmrZMR46HiJirRE84y4Vt3yVqZodJbQV1QU",
  },
  {
    testimonial:
      "The relentless hard work drives his visionary,future-focused innovations",
    name: "Abhaya Pratap Singh",
    designation: "Senior Executive Talent Acquisition",
    company: "HCL Technologies",
    image: "https://media.licdn.com/dms/image/v2/C5103AQEy5DWMeNon7w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1579031557275?e=1743638400&v=beta&t=yIxzrHSxY6RZ0khhdTni_plO2qcfbbAa9pnPIM8sA9s",
  },
];

const projects = [
  {
    name: "PG Life",
    description:
      "Created a responsive website using web technology tools Html, Css, Bootstrap, DBMS, Javascript, AJAX, React.js, Node.js.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "purple-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "orange-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/aayushdhiman98/PGLife",
  },
  {
    name: "AI Chatbot",
    description:
      "Created a responsive AI chatbot using web technologies: HTML, CSS, JavaScript, Python, Flask, AJAX, and NLP for interactive and intelligent conversations.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Python",
        color: "purple-text-gradient",
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/aayushdhiman98/realtimechat-",
  },
  {
    name: "Personal Portfolio",
    description:
      "I developed a dynamic personal portfolio using React, CSS, and JavaScript, leveraging Three.js and Anime.js to create immersive animations and interactive 3D visuals.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/aayushdhiman98/Personal-Portfolio.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
