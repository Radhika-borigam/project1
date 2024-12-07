import React from "react";
import styles from "../styles/UniqueFeatureCard.module.css";

interface UniqueFeatureCardProps {
  index: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const UniqueFeatureCard: React.FC<UniqueFeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default UniqueFeatureCard;
