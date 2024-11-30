import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion"; // Assuming you have motion utilities
import { styles } from "./styles"; // Import the styles object

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className={`${styles.padding} bg-tertiary rounded-2xl relative cursor-pointer`}
      whileHover={{ scale: 1.05 }} // Enlarge the card on hover
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full h-[230px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div
          className="absolute inset-0 flex justify-end m-3 card-img_hover"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <img
              src="/images/github.png"
              alt="GitHub"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className={`${styles.heroHeadText} text-black text-[24px]`}>
          {name}
        </h3>
        {/* Updated description style */}
        <p className={`mt-2 text-black text-[14px]`}>{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
