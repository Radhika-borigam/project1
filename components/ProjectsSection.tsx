"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { textVariant } from "@/utils/motion";

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerPage(1);
      } else if (width < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, projects.length - cardsPerPage)
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: { opacity: 1, x: 0 },  // Animate to the center
  };

  return (
    <div
      className="relative px-4 mt-20 bg-cover bg-center"
      style={{
        background: "radial-gradient(circle, #1e1e2e, #161622, #0c0c10)",
        padding: "30px 0",
      }}
    >
      <motion.div variants={textVariant()} initial="hidden" animate="visible">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 font-black text-[30px]">
          Services
        </h2>
      </motion.div>

      <div className="relative mt-10">
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={text-white bg-secondary rounded-full p-3 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }}
          >
            {"<"}
          </button>

          <div className="flex justify-center gap-7 overflow-hidden w-full">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project-${index}}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
                transition={{ type: "spring", duration: 0.5, delay: index * 0.2 }} // Staggered animations
              >
                <ProjectCard index={index} {...project} />
              </motion.div>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= projects.length}
            className={text-white bg-secondary rounded-full p-3 ${
              currentIndex + cardsPerPage >= projects.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
