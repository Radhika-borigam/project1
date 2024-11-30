import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "../styles/WhatWeOffer.module.css";

const services = [
  {
    title: "Comprehensive DevOps Ecosystem",
    description:
      "We integrate a robust set of DevOps tools and cloud providers, ensuring you have everything you need at your fingertips.",
    icon: "⚙️",
  },
  {
    title: "Seamless CI/CD Flows",
    description:
      "Develop and manage continuous integration and continuous deployment pipelines effortlessly.",
    icon: "📡",
  },
  {
    title: "Rapid Deployment",
    description:
      "With just one click, deploy your applications swiftly and reliably.",
    icon: "⚡",
  },
];

const WhatWeOffer: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>What We Offer</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
