import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

// College / University
import { FaUniversity } from "react-icons/fa";

// High School / Senior Secondary
import { HiAcademicCap } from "react-icons/hi";

// School / Secondary Education
import { GiSchoolBag } from "react-icons/gi";

const educations = [
  {
    title: "B.Tech in Information Technology",
    institute: "Chandigarh Engineering College, Landran",
    duration: "2023 - Present",
    grade: "CGPA : 8.5",
    icon: <FaUniversity className="text-purple-400 text-xl" />,
  },
  {
    title: "Senior Secondary (XII) - Science Stream",
    institute: "International Hindu School, Varanasi",
    duration: "2022 - 2023",
    grade: "CBSE Board",
    icon: <HiAcademicCap className="text-pink-400 text-xl" />,
  },
  {
    title: "Secondary (X)",
    institute: "DAV Public School, Mohania",
    duration: "2020 - 2021",
    grade: "CBSE Board ",
    icon: <GiSchoolBag className="text-blue-400 text-xl" />,
  },
];

const EducationCard = ({ title, institute, duration, grade, index, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className="group rounded-2xl p-[2px] bg-gradient-to-br from-purple-700 via-indigo-600 to-pink-500 hover:scale-[1.03] transition-transform duration-300"
  >
    <div className="bg-[#1a1a1a] min-h-[230px] h-full backdrop-blur-md rounded-2xl p-6 shadow-xl text-white flex flex-col justify-between group-hover:shadow-purple-500/40 transition-all duration-300">
      <div className="flex items-center gap-4 mb-3">
        <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      </div>
      <div>
        <p className="text-md text-gray-300 mb-1">{institute}</p>
        <p className="text-sm text-gray-400">{duration}</p>
        <p className="text-sm text-gray-300 mt-1">{grade}</p>
      </div>
    </div>
  </motion.div>
);

const Education = () => (
  <>
    <motion.div variants={fadeIn("", "", 0.1, 1)} className="mb-10">
      <p className={styles.sectionSubText}>My Academic Journey</p>
      <h2 className={styles.sectionHeadText}>Education</h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {educations.map((edu, index) => (
        <EducationCard key={index} index={index} {...edu} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Education, "education");
