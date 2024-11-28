"use client";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
    <HeroSection
      title="Next-Level Web Solutions"
      subTitle="Experience Innovation"
      description="Empowering businesses with cutting-edge design and development."
      backgroundImage="/assets/custom-background.png" // Custom image
    />
  </div>

  );
}
