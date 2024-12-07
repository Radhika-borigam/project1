import React from "react";

interface UniqueFeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const UniqueFeatureCard: React.FC<UniqueFeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-[#1e293b] rounded-lg p-6 flex flex-col items-center text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default UniqueFeatureCard;