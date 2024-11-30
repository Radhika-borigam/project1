import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Hero: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/assets/custom-background.png')" }}
    >
      <motion.div variants={textVariant()}>
        <h2 className="text-white text-[50px] font-bold">Next-Level Web Solutions</h2>
        <p className="text-secondary text-[20px] mt-4">Experience Innovation</p>
        <p className="text-secondary text-[16px] mt-2 max-w-[600px]">
          Empowering businesses with cutting-edge design and development.
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
