import React from "react";

interface UniqueFeatureCardProps {
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
    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-pink-500 rounded-lg p-8 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
      <div className="text-yellow-400 text-4xl mb-4">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </div>
  );
};

export default UniqueFeatureCard;
