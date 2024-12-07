import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/utils/motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Project A",
    description: "A great project showcasing my skills.",
    tags: [
      { name: "React", color: "text-blue-500" },
      { name: "Next.js", color: "text-gray-400" }
    ],
    image: "/images/project-a.png",
    source_code_link: "https://github.com/projectA"
  },
  {
    name: "Project B",
    description: "Another awesome project to explore.",
    tags: [
      { name: "TypeScript", color: "text-green-500" },
      { name: "Framer Motion", color: "text-purple-500" }
    ],
    image: "/images/project-b.png",
    source_code_link: "https://github.com/projectB"
  }
];

const Works: React.FC = () => {
  return (
    <>
      {/* Section Header */}
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work...
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            image={project.image}
            source_code_link={project.source_code_link}
          />
        ))}
      </div>
    </>
  );
};

export default Works;
