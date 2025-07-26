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
  bihar,
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
    name: "Resume Analyzer",
    description:
      "An intelligent resume analyzer that evaluates uploaded resumes for ATS compatibility, keyword relevance, formatting clarity, and alignment with job descriptions, offering instant scoring and actionable suggestions for improvement.",
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
      "An engaging website that highlights Bihar's rich heritage, top destinations, and tourism hotspots, featuring photo galleries, interactive maps, dynamic filters, and smooth navigation to enhance cultural exploration and user experience.",
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
      "A fun and vibrant landing page for Fanta using only front-end tools, enriched with fruit animations, bold design, smooth transitions, responsive layout, and delightful UI crafted for brand engagement.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: fanta,
    source_code_link: "https://abhay963.github.io/fanta/",
  },

  {
    name: "Random Password Generator",
    description:
      "A robust password generator that creates strong, customizable passwords using selected criteria like symbols, numbers, uppercase, and lowercase. Includes clipboard copy support and fully responsive, user-friendly design for security-conscious users.",
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
      "A fast, reliable tool to generate QR codes from text or URLs instantly. Fully client-side with image download feature, ensuring quick access, seamless sharing, and privacy-focused QR generation experience.",
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
      "A stylish weather forecasting app displaying real-time temperature, wind, and humidity using OpenWeatherMap API. Includes 5-day forecasts, user-friendly interface, and responsive design for reliable weather updates anytime.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: weather,
    source_code_link: "https://abhay963.github.io/-Weather-Forecast-Application/",
  },
];



export { services, technologies, experiences, testimonials, projects };