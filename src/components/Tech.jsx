import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import Technologies from "./Technologies";

const Tech = () => {
  return (
    <>
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <p className={styles.sectionSubText}>Tools, Libraries & Frameworks</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <Technologies/>

      
    </>
  );
};

export default SectionWrapper(Tech, "tech");
