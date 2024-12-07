import React from "react";
import UniqueFeatureCard from "./UniqueFeatureCard";
import styles from "../styles/WhyAreWeUnique.module.css";

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
    <section
      className={${styles.container} bg-gradient-to-b from-gray-900 via-black to-gray-800 py-12}
    >
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
          <UniqueFeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyAreWeUnique;
