import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}: {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (card) {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;

      card.style.transform = `rotateX(${y / 25}deg) rotateY(${x / 25}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "rotateX(0) rotateY(0)";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative cursor-pointer group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.3 }}
    >
      <div
        className="relative w-full h-[230px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        style={{
          background: "linear-gradient(to right, #ffffff, #001f4d)",
          padding: "2px",
          borderRadius: "16px",
        }}
      >
        <div
          className="w-full h-full bg-black rounded-xl"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="absolute inset-0 flex justify-end m-3 card-img_hover"
          onClick={() => window.open(source_code_link, "_blank")}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
            <Image
              src="/images/github.png"
              alt="GitHub"
              width={20}
              height={20}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5 group-hover:scale-105 transition-transform">
        <h3 className="text-white text-[24px] font-extrabold">{name}</h3>
        <p className="mt-2 text-gray-400 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-yellow-500">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
