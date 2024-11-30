"use client"; // Enables client-side rendering in Next.js

import Image from "next/image"; // Next.js optimized image component
import React, { FC } from "react";
import { Typewriter } from "react-simple-typewriter";
interface HeroSectionProps {
  title?: string; // Optional title prop
  subTitle?: string; // Optional subtitle prop
  description?: string; // Optional description prop
  backgroundImage?: string; // Optional background image path
}

const HeroSection: FC<HeroSectionProps> = ({
  title = "UI/UX, Web Development, Digital Marketing",
  subTitle = "At Y9K",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste beatae molestias voluptate impedit repellat porro doloremque quasi itaque veritatis?",
  backgroundImage = "/ll.png", // Updated path to match the file name in `public`
}) => {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-x-0 bottom-0 h-full w-full">
        <Image
          src="/ll.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority // Optimized for performance
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12">
        {/* Gradient Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          <Typewriter
              words={[title]} // Pass the title
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={250} // Reduced speed
              deleteSpeed={0} // Reduced speed
              delaySpeed={2500} // Slower pause between loops
            />
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-white">
        <Typewriter
            words={[subTitle]} // Pass the subtitle
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={150} // Reduced speed
            deleteSpeed={100} // Reduced speed
            delaySpeed={3000} // Slower pause between loops
          />
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
        <Typewriter
            words={[description]} // Pass the description
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={150} // Reduced speed
            deleteSpeed={100} // Reduced speed
            delaySpeed={3500} // Slower pause between loops
          />
        </p>

        {/* Subscribe Button */}
        <div className="mt-8">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
