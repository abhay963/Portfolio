import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  
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
  bihar,
  notes,
  fanta,qr,random,resume,weather,
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
    title: "Scalable Web Applications",
    icon: backend, // You can customize this icon or replace it with a power icon
  },
  {
    title: "API Integration & Architecture",
    icon: creator, // Replace with a document/legal icon if available
  },
  {
    title: "Interactive 3D Web Design",
    icon: backend, // Reuse or customize this icon for technical areas
  },
  {
    title: "Component-Based UI Development",
    icon: creator, // Reuse or use a communication/consulting icon
  },
  {
    title: "Secure Authentication & Authorization",
    icon: backend, // Reuse or use a communication/consulting icon
  },
  {
    title: "Version Control & CI/CD Workflow",
    icon: creator, // Reuse or use a communication/consulting icon
  },
  {
    title: "Database Modeling & Optimization",
    icon: backend, // Reuse or use a communication/consulting icon
  },
  {
    title: "Adaptive & Collaborative",
    icon: creator, // Reuse or use a communication/consulting icon
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];



const experiences = [
  {
    title: "Software Development Engineer Intern",
    company_name: "Bluestock Fintech",
    icon: starbucks, // Replace with Bluestock logo if available
    iconBg: "#383E56",
    date: "Jan 2025 – Feb 2025",
    points: [
      "Built a scalable MERN-stack fintech dashboard, reducing load time by 30% and improving API response speed by 35%.",
      "Integrated secure Google OAuth login, increasing user authentication success rate by 40%.",
      "Collaborated with cross-functional teams during agile sprints and handled peer reviews via GitHub version control.",
      "Designed and optimized backend APIs with Node.js & Express.js, improving data handling efficiency by 45%.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "SkillCraft Technology",
    icon: meta, // Replace with SkillCraft logo if available
    iconBg: "#1E293B",
    date: "Aug 2024 – Nov 2024",
    points: [
      "Developed and deployed responsive websites using React.js and Tailwind CSS, improving client web performance by 50%.",
      "Implemented RESTful APIs and Firebase integration for real-time data syncing and secure user authentication.",
      "Led UI/UX enhancements across multiple client projects, resulting in a 25% boost in user engagement and retention.",
      "Collaborated with designers and backend developers to deliver fully functional web apps within tight deadlines.",
    ],
  },
  {
    title: "Internshala Student Partner",
    company_name: "Internshala",
    icon: tesla, // Replace with Internshala logo if available
    iconBg: "#0A66C2",
    date: "Mar 2024 – July 2024",
    points: [
      "Promoted Internshala's internship and training programs within college communities, increasing student signups by 70%.",
      "Organized webinars and info sessions to educate peers about career opportunities and skill development.",
      "Utilized social media and offline strategies to expand Internshala’s campus reach and visibility.",
      "Recognized as a top-performing campus ambassador based on lead generation and engagement metrics.",
    ],
  },
];








const projects = [
  {
    name: "Resume Analyzer",
    description:
      "An AI-powered tool that analyzes resumes for keyword matching, formatting, and ATS compliance. It provides real-time scoring, tailored suggestions, and ensures alignment with job descriptions.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
    ],
    image: resume,
    source_code_link: "https://github.com/Akshat-shukla18/ResumeAnalyzer",
  },

  {
    name: "Bihar Tourism",
    description:
      "A visually rich website showcasing Bihar’s culture, destinations, and history with interactive maps, photo galleries, smooth transitions, and engaging design for tourism exploration.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: bihar,
    source_code_link: "https://abhay963.github.io/BIHAR-TOURISM/",
  },

  {
    name: "Fanta",
    description:
      "A colorful Fanta landing page with animated fruits, clean UI, bold visuals, and transitions, designed for user interaction and smooth engagement using only front-end technologies.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: fanta,
    source_code_link: "https://abhay963.github.io/fanta/",
  },
  
  {
    name: "QuickNotes",
    description:
      " ✨ A simple and sleek notes-saving web app with local storage, paste sharing, search, copy, and social sharing features. Built using React, Redux, Tailwind CSS, and react-hot-toast.",
      
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: notes,
    source_code_link: "https://notes-saver-dusky.vercel.app/",
  },


  {
    name: "Random Password Generator",
    description:
      "Generates strong, customizable passwords with options like symbols, numbers, and cases. ",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "html", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: random,
    source_code_link: "https://abhay963.github.io/Random-Password-Generator/",
  },

  {
    name: "QR Code Generator",
    description:
      "Quickly generates QR codes from text or links. It supports instant download and works offline. Clean UI and client-side privacy ensure seamless and safe QR code creation.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: qr,
    source_code_link: "https://abhay963.github.io/QR-code-generator/",
  },

  {
    name: "Weather App",
    description:
      "Displays live weather, forecasts, wind, and humidity using OpenWeatherMap API. Offers intuitive layout, modern styling, and mobile responsiveness for accurate weather data anywhere.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: weather,
    source_code_link: "https://abhay963.github.io/-Weather-Forecast-Application/",
  },
];




export {  technologies, experiences,  projects };