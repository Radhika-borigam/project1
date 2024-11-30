"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import WhatWeOffer from "@/components/WhatWeOffer";
import WhyAreWeUnique from "@/components/WhyAreWeUnique";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Next-Level Web Solutions"
        subTitle="Experience Innovation"
        description="Empowering businesses with cutting-edge design and development."
        backgroundImage="/assets/custom-background.png" // Custom image
      />

      {/* Projects Section */}
      <ProjectsSection />
      <WhatWeOffer />
      <WhyAreWeUnique />
      <Footer/>
    </div>
  );
}
