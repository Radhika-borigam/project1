import React from "react";
import UniqueFeatureCard from "./UniqueFeatureCard";
import styles from "../styles/WhyAreWeUnique.module.css";
import { motion } from "framer-motion";

const features = [
  {
    title: "Technical Skills",
    description:
      "The clients greatly appreciate the technical expertise of WorkMomentum's specialists in both web and mobile development. Our pros stay up-to-date with trends and best practices to craft innovative, reliable, and secure systems.",
    icon: "💻",
  },
  {
    title: "Professionalism",
    description:
      "You can count on us for timely delivery and the superior quality of provided services. To maximize our clients’ potential, we focus on producing business value every single day.",
    icon: "📂",
  },
  {
    title: "Clear Frameworks and Procedures",
    description:
      "Our well-defined workflows enable us to deliver first-class software consistently. The agile approach we use in product development ensures productivity and on-time deployment.",
    icon: "📋",
  },
  {
    title: "Seamless Sales Process",
    description:
      "Experience a seamless sales journey with us. We prioritize our partners’ needs, promptly addressing inquiries and offering comprehensive guidance at every step.",
    icon: "🤝",
  },
];

const WhyAreWeUnique: React.FC = () => {
  return (
    <section className={`${styles.container} bg-gradient-to-b from-gray-900 via-black to-gray-800 py-12`}>
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-6">
        Why are we unique?
      </h2>
      <p className="text-center text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 px-4">
        We have a unique vision and values guiding us in a specific direction.
        Our experience and commitment to operational excellence guarantee
        successful deliveries.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-stretch px-6 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-[#1C1C1C] rounded-xl p-6 border-2 border-transparent text-white shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            style={{
              borderImageSlice: 3,
              borderImageSource: "linear-gradient(to right, #4776E6, #8E54E9)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyAreWeUnique;
