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
    title: "Power Trading & Energy Markets",
    icon: backend, // You can customize this icon or replace it with a power icon
  },
  {
    title: "Regulatory Compliance & Open Access",
    icon: creator, // Replace with a document/legal icon if available
  },
  {
    title: "Team Mentoring & Knowledge Transfer",
    icon: backend, // Reuse or customize this icon for technical areas
  },
  {
    title: "Client Relations & Energy Consulting",
    icon: creator, // Reuse or use a communication/consulting icon
  },
];

const technologies = [

];

const experiences = [
  {
    title: "Junior Manager – Power Trading",
    company_name: "Manikaran Power Ltd",
    icon: starbucks, // Replace with Manikaran logo if available
    iconBg: "#383E56",
    date: "July 2024 – Present",
    points: [
      "Coordinated with SLDCs, DISCOMs, and other regulatory bodies for Open Access approvals.",
      "Handled compliance documentation and liaised with internal and external stakeholders.",
      "Supported renewable energy certificate (REC) submissions and power scheduling operations.",
      "Worked closely with the trading and regulatory team to streamline approval processes.",
    ],
  },
  {
    title: "Management Trainee – Power Trading",
    company_name: "Manikaran Power Ltd",
    icon: tesla, // You can also use same logo for both roles
    iconBg: "#E6DEDD",
    date: "Jan 2024 – June 2024",
    points: [
      "Assisted in preparing and managing Open Access applications.",
      "Learned documentation processes, SLDC communication, and compliance basics.",
      "Supported power exchange team in trading operations and REC handling.",
      "Built strong foundational understanding of India's power sector mechanisms.",
    ],
  },
  {
    title: "Academic Patent Filing",
    company_name: "CGC Landran – Department of ECE",
    icon: meta, // You can replace this with a certificate/college icon
    iconBg: "#E6DEDD",
    date: "March 2023 – April 2023",
    points: [
      "Filed two patents as part of academic innovation and research initiatives.",
      "Patent PIE Number 1239 filed in March 2023.",
      "Patent PIE Number 1258 filed in April 2023.",
      "Focused on real-world problem solving through hardware/software solutions.",
    ],
  },
];



const testimonials = [
  {
    testimonial:
      "Vikash brings remarkable dedication to energy trading operations and consistently ensures regulatory accuracy and client satisfaction.",
    name: "Anjali Mehta",
    designation: "Senior Manager – Operations",
    company: "Manikaran Power Ltd",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "His coordination with SLDCs and DISCOMs has always been reliable and efficient, which makes him a valuable team asset.",
    name: "Ravi Sharma",
    designation: "Assistant Manager – Open Access",
    company: "Manikaran Power Ltd",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Vikash is detail-oriented and quick to adapt. His understanding of regulatory processes and documentation is commendable.",
    name: "Neha Bansal",
    designation: "Energy Analyst",
    company: "Power Exchange India Ltd",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },

];

const projects = [
  
];


export { services, technologies, experiences, testimonials, projects };
