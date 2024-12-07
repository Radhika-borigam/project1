"use client";


import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

import WhatWeOffer from "@/components/WhatWeOffer";
import WhyAreWeUnique from "@/components/WhyAreWeUnique";
import Footer from "@/components/Footer";
import CardsSection from "@/components/CardsSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Next-Level IT Solutions"
        subTitle="Experience Innovation"
        description="Empowering businesses with cutting-edge design and development."
    
      />

      {/* Projects Section */}
      {/* <ProjectsSection /> */}
      <CardsSection/>
      <WhatWeOffer />
      <WhyAreWeUnique />
      <ContactForm />
      <Footer/>
    </div>
  );
}
