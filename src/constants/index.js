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
  netflix,
  gdarena,
  langChat,
  geeksforgeeks,
  sihstaff,
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








const experiences = [
  {
  title: "Campus Mantri (Official Campus Representative)",
  company_name: "GeeksforGeeks",
  icon: geeksforgeeks,
  
  date: "Jan 2026 – Present",
  points: [
    "Appointed as official GeeksforGeeks Campus Mantri at CEC Mohali.",
    "Promoting coding culture and technical initiatives across campus.",
    "Organizing workshops, coding contests, and tech events.",
   
  ],
},

  {
    title: "Software Development Engineer Intern",
    company_name: "Bluestock Fintech",
    icon: starbucks, // Replace with Bluestock logo if available
    iconBg: "#383E56",
    date: "Jan 2025 – Feb 2025",
   points: [
  "Developed features for a MERN-stack fintech dashboard, including user authentication and data visualization.",
  "Built and tested REST APIs using Node.js and Express.js for smooth data communication between frontend and backend.",
  "Collaborated with team members using GitHub and participated in agile sprint discussions and code reviews."
],

  },
 
  {
    title: "Internshala Student Partner",
    company_name: "Internshala",
    icon: tesla, // Replace with Internshala logo if available
    iconBg: "#0A66C2",
    date: "Mar 2024 – July 2024",
   points: [
  "Promoted Internshala internship and training programs within the college community.",
  "Organized and participated in webinars and information sessions to spread awareness about career opportunities.",
  "Used social media and peer networks to increase student engagement and registrations."
],

  },
];








const projects = [
  {
    name: "GD Arena",
    description:
      "• AI-powered GD practice platform\n• Real-time topic generation\n• Voice-based interaction\n• Placement-focused confidence building",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: gdarena,
    source_code_link: "https://gd-arena-frontend-lzuk.vercel.app/",
  },

  {
    name: "QuickNotes",
    description:
      "• Notes saving with local storage\n• Search, copy & sharing features\n• Clean responsive UI\n• Built with React & Redux",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwind", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: notes,
    source_code_link: "https://notes-saver-dusky.vercel.app/",
  },

  {
    name: "Netflix Clone",
    description:
      "• Full-stack streaming platform clone\n• User authentication system\n• Movie API integration\n• Responsive Netflix-style UI",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "tailwindcss", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: netflix,
    source_code_link: "https://github.com/abhay963/Netflix-Clone",
  },

  {
    name: "LangChat",
    description:
      "• Real-time language exchange platform\n• Text, audio & video calls\n• WebRTC integration\n• Global user connectivity",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "stream", color: "pink-text-gradient" },
      { name: "webrtc", color: "orange-text-gradient" },
    ],
    image: langChat,
    source_code_link: "https://github.com/abhay963/LangChat",
  },

  {
    name: "Nagar-Sahayata Portal",
    description:
      "• Civic complaint management system\n• Role-based dashboards\n• Issue tracking & resolution\n• Built using MERN stack",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
    ],
    image: sihstaff,
    source_code_link: "https://github.com/abhay963/Nagar-Sahayata-Portal",
  },

  {
    name: "Resume Analyzer",
    description:
      "• AI-based resume analysis tool\n• ATS keyword matching\n• Real-time scoring system\n• Job description alignment",
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
      "• Interactive tourism showcase website\n• Maps & photo galleries\n• Smooth animations\n• Responsive design",
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
      "• Animated landing page design\n• Bold visuals & transitions\n• Interactive UI elements\n• Front-end focused project",
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
      "• Custom strong password generation\n• Symbol & number options\n• Instant copy feature\n• Simple & secure UI",
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
      "• QR generation from text/links\n• Instant download option\n• Offline functionality\n• Privacy-focused design",
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
      "• Live weather data display\n• API-based forecast fetching\n• Wind & humidity tracking\n• Mobile responsive UI",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: weather,
    source_code_link: "https://abhay963.github.io/-Weather-Forecast-Application/",
  },
];





export {   experiences,  projects };