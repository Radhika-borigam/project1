import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Digital Marketing",
    description:
      "Elevate your brand's digital footprint with Y9K's strategic marketing solutions. We craft targeted, data-driven campaigns that optimize SEO, social media engagement, and paid advertising to maximize your online visibility, drive customer acquisition, and transform digital interactions into measurable business growth and brand success.",
    icon: "/images/Digital.webp",
    link: "/digital-marketing", // Example link
  },
  {
    title: "Cloud Services",
    description:
      "Unlock the full potential of cloud technology with Y9K's comprehensive solutions. We design and implement robust, secure cloud infrastructures that optimize your business operations, enhance data accessibility, and provide scalable, flexible computing environments tailored precisely to your unique organizational requirements and growth objectives.",
    icon: "/images/Cloud.jpg",
    link: "/cloud-services", // Example link
  },
  {
    title: "IT Services",
    description:
      "Elevate your technological capabilities with Y9K's comprehensive IT solutions. We provide end-to-end infrastructure management, proactive network security, and round-the-clock technical support, ensuring your business operates smoothly, securely, and efficiently. Our expert team transforms IT challenges into strategic opportunities for growth and innovation.",
    icon: "/images/IT.jpg",
    link: "/it-services", // Example link
  },
  {
    title: "DevOps Solutions",
    description:
      "Accelerate your software development and deployment with Y9K's advanced DevOps solutions. We implement continuous integration and continuous delivery (CI/CD) strategies, automate workflows, and optimize collaboration between development and operations teams, enabling faster, more reliable, and efficient software delivery and innovation.",
    icon: "/images/Devops.avif",
    link: "/devops-solutions", // Example link
  },
  {
    title: "Custom Software Development",
    description:
      "Transform your unique business challenges into innovative technological solutions with Y9K's custom software development. Our expert team crafts bespoke software applications precisely aligned with your specific operational needs, ensuring enhanced efficiency, scalability, and competitive advantage through cutting-edge technological solutions.",
    icon: "/images/Softwa.jpg",
    link: "/custom-software-development", // Example link
  },
];

const WhatWeOffer: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-black to-gray-800 py-16">
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9] mb-16">
        What We Offer
      </h2>
      <div className="flex flex-col space-y-16 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4776E6] to-[#8E54E9] mb-6">
                {service.title}
              </h3>
              <p className="text-gray-300 text-lg mb-6">{service.description}</p>

              {/* "Get Started" Link */}
              <a
                href={service.link}
                className="text-white bg-gradient-to-r from-[#4776E6] to-[#8E54E9] py-2 px-6 rounded-lg text-lg inline-block hover:from-blue-500 hover:to-purple-500 transition-all duration-300"
              >
                Get Started
              </a>
            </div>

            {/* Image/Icon */}
            <div className="flex-1 flex justify-center items-center">
              <Image
                src={service.icon}
                alt={service.title}
                width={400}
                height={300}
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
