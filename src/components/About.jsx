import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Import your image
import profilePic from "../assets/abhay.jpg"; // Replace with your actual image

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Flex container */}
      <div className="mt-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">
        {/* Left Side: Text */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="flex-1 text-secondary text-[18px] leading-[32px]"
        >
          <p className="max-w-3xl">
            I’m <span className="text-white font-semibold">Abhay Kumar Yadav</span>,
            a B.Tech student in Information Technology at Chandigarh Engineering
            College Landran. I'm passionate about full-stack development,
            problem-solving, and building real-world tech solutions. With strong
            skills in <span className="text-white">C, C++, DSA</span> and the
            <span className="text-white"> MERN stack</span>, I love creating scalable,
            intelligent applications that blend automation, AI, and great user
            experience.
            <br />
            <br />
            I'm driven by curiosity and innovation — always seeking to transform
            ideas into impactful digital products.
            <br />
            <br />
            <span className="text-white font-medium">Let’s connect and innovate together!</span>
          </p>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 1)}
          className="flex-shrink-0 w-[300px] h-[300px] rounded-2xl overflow-hidden shadow-xl border-[4px] border-white"
        >
          <img
            src={profilePic}
            alt="Abhay Kumar Yadav"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
