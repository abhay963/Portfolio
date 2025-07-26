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
    id: "education", // 👈 add this
    title: "Education",
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
    company_name: "Bluestock Fintech  ",
    icon: starbucks, // Replace with Manikaran logo if available
    iconBg: "#383E56",
    date: "Jan 2025 – Feb 2025",
    points: [
      "Built a scalable MERN-stack fintech dashboard, reducing load time by 30% and improving API response speed by 35%.",
      "Integrated secure Google OAuth login, increasing user authentication success rate by 40%.",
      "Collaborated with cross-functional teams during agile sprints and handled peer reviews via GitHub version control.",
      "Designed and optimized backend APIs with Node.js & Express.js, improving data handling efficiency by 45%.",
    ],
  },
  
];




const testimonials = [
  {
    testimonial:
      "Abhay's creativity and technical skills are truly impressive. His project TechSnap is a unique and effective tool that blends news with active recall learning.",
    name: "Sara Lee",
    designation: "Mentor",
    company: "TechSnap Community",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Abhay demonstrates deep passion for solving real-world problems with technology. PashuSaathi is a perfect example of innovation meeting social impact.",
    name: "Chris Brown",
    designation: "Tech Advisor",
    company: "PashuSaathi",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "From UI to backend, Abhay builds complete, user-focused solutions. His work ethic and attention to detail make him a standout developer.",
    name: "Lisa Wang",
    designation: "UI/UX Reviewer",
    company: "Freelance",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Fanta",
    description:
      "A vibrant and interactive landing page for the Fanta brand, built with HTML, CSS, and JavaScript. It features playful fruit animations, smooth transitions, and a fully responsive design — all crafted using pure front-end technologies.",
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
    source_code_link: "https://abhay963.github.io/fanta/",
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

export { services, technologies, experiences, testimonials, projects };