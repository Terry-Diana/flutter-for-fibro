
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StoriesSection from "@/components/StoriesSection";
import ResourcesSection from "@/components/ResourcesSection";
import AwarenessCTA from "@/components/AwarenessCTA";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StoriesSection />
      <ResourcesSection />
      <AwarenessCTA />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
