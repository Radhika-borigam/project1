import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <div className="relative bg-gradient-to-b from-gray-900 via-black to-gray-800 py-8 sm:py-12 md:py-16 min-h-screen flex flex-col items-center overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
      {/* Moving shapes (triangles and circles) */}
        <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-lg rounded-tr-lg animate-move-shape-1" />
        <div className="absolute top-8 right-12 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-lg rounded-full animate-move-shape-2" />
        <div className="absolute bottom-12 left-10 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 opacity-50 blur-lg rounded-full animate-move-shape-3" />
        <div className="absolute bottom-8 right-20 w-18 h-18 bg-gradient-to-r from-yellow-500 to-red-500 opacity-50 blur-lg rounded-tr-lg animate-move-shape-4" />
        <div className="absolute top-1/3 left-1/4 w-14 h-14 bg-gradient-to-r from-teal-400 to-purple-700 opacity-50 blur-lg rounded-full animate-move-shape-5" />
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-r from-indigo-400 to-green-500 opacity-50 blur-lg rounded-bl-lg animate-move-shape-6" />
      </div>

      {/* Enhanced Introductory Section */}
      <motion.div
        className="bg-gradient-to-r from-[#4776E6] to-[#8E54E9] p-6 sm:p-8 md:p-10 rounded-xl shadow-lg text-center max-w-4xl mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Y9K: Transforming Technology, Empowering Business
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 leading-relaxed">
          In the fast-evolving digital landscape, Y9K delivers cutting-edge IT
          solutions that seamlessly align with your business goals. We provide
          comprehensive services including managed IT support, cloud solutions,
          digital marketing, and cybersecurity, enabling organizations to
          innovate and grow without the complexity of in-house technology
          management.
        </p>
        <p className="text-lg sm:text-xl text-gray-100 leading-relaxed mt-4">
          Our expert team transforms technological challenges into strategic
          advantages, ensuring your business stays agile and competitive.
        </p>
      </motion.div>

      {/* Cards Header */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 px-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Explore Our Solutions
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-16 sm:gap-x-8 justify-center items-stretch w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`flex flex-col justify-between bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 border-2 border-transparent h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${
              index === 2 ? "sm:col-span-2 sm:mx-auto" : ""
            }`}
            style={{
              borderImageSlice: 3,
              borderImageSource: "linear-gradient(to right, #4776E6, #8E54E9)",
              maxWidth: index === 2 ? "600px" : "none",
            }}
            initial={
              index % 2 === 0
                ? { opacity: 0, x: -50 }
                : { opacity: 0, x: 50 }
            }
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;