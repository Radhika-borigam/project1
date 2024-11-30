"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { textVariant } from "@/utils/motion";

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Update cards per page based on screen size
  useEffect(() => {
    const updateCardsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerPage(1); // Show 1 card on small screens
      } else if (width < 1024) {
        setCardsPerPage(2); // Show 2 cards on medium screens
      } else {
        setCardsPerPage(3); // Default to 3 cards on larger screens
      }
    };

    updateCardsPerPage(); // Initial check
    window.addEventListener("resize", updateCardsPerPage);

    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  // Calculate the indices of the visible cards
  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + cardsPerPage
  );

  // Handlers for navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, projects.length - cardsPerPage)
    );
  };

  return (
    <div
      className="relative px-4 mt-20 bg-cover bg-center"
    >
        
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-black text-[30px]">Services</h2>
      </motion.div>

      <div className="relative mt-10">
        {/* Carousel Container */}
        <div className="flex justify-between items-center">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`text-white bg-secondary rounded-full p-3 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {"<"}
          </button>

          {/* Cards */}
          <div className="flex justify-center gap-7 overflow-hidden w-full">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`project-${index}`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <ProjectCard index={index} {...project} />
              </motion.div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex + cardsPerPage >= projects.length}
            className={`text-white bg-secondary rounded-full p-3 ${
              currentIndex + cardsPerPage >= projects.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
