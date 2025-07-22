import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-2xl sm:w-[320px] w-full max-w-full flex-shrink-0'
  >
    <p className='text-white font-black text-[36px] sm:text-[48px]'>"</p>

    <div className='mt-2'>
      <p className='text-white text-[16px] sm:text-[18px] leading-relaxed'>
        {testimonial}
      </p>

      <div className='mt-6 flex items-center justify-between'>
        <div className='flex flex-col'>
          <p className='text-white font-semibold text-[14px] sm:text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='text-secondary text-[12px] sm:text-[14px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover ml-4'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      {/* Header */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* Cards */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <div className='flex flex-wrap justify-center gap-7'>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
