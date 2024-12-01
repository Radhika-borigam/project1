import React from "react";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "NullaFLOW",
    description:
      "Build chatbots and automate workflows with a no-code platform designed for seamless customer engagement and internal support.",
    link: "/nullaflow",
  },
  {
    title: "KnowRAG",
    description:
      "Transform knowledge management with LLM-driven insights, secure document storage, and workflow automation.",
    link: "/knowrag",
  },
  {
    title: "AutomatosX",
    description:
      "Scale your AI/ML deployments effortlessly with a robust ML Ops platform, offering real-time analytics and advanced API management.",
    link: "/automatosx",
  },
];

const CardsSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-800 py-8 sm:py-12 md:py-16 min-h-screen flex flex-col items-center">
      {/* Cards Header */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 px-4">
        Explore Our Solutions
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-16 sm:gap-x-8 justify-center items-stretch w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 border-2 border-transparent h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
              index === 2 ? "sm:col-span-2 sm:mx-auto" : ""
            }`}
            style={{
              borderImageSlice: 3,
              borderImageSource: "linear-gradient(to right, #4776E6, #8E54E9)",
              maxWidth: index === 2 ? "600px" : "none",
            }}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6">
                {card.description}
              </p>
            </div>
            <Link
              href={card.link}
              className="inline-block px-4 sm:px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#4776E6] to-[#8E54E9] hover:from-blue-500 hover:to-purple-500 rounded-lg text-center w-full sm:w-auto cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>

      {/* Centered Image */}
      <div className="mt-12 sm:mt-16 flex justify-center px-4 sm:px-6">
        <Image
          src="/vercel.svg"
          alt="Decorative Image"
          width={800}
          height={400}
          className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px]"
        />
      </div>
    </div>
  );
};

export default CardsSection;
