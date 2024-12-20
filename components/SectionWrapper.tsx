import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component: React.FC, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        <span id={idName}>&nbsp;</span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
