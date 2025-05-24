
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import ButterflyIcon from "./ButterflyIcon";
import SparkleIcon from "./SparkleIcon";
import FloatingWords from "./FloatingWords";
import GlowingParticle from "./GlowingParticle";
import RotatingWords from "./RotatingWords";
import AuthModal from "./AuthModal";

const HeroSection = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "signup">("signup");

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAuthClick = (mode: "login" | "signup") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center gradient-bg">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft Glowing Particles */}
        {[...Array(12)].map((_, i) => (
          <GlowingParticle
            key={`particle-${i}`}
            size={i % 3 === 0 ? "lg" : i % 2 === 0 ? "md" : "sm"}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100 + 20}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 4 + 6}s`,
            }}
          />
        ))}
        
        {/* Gentle Sparkles */}
        {[...Array(4)].map((_, i) => (
          <SparkleIcon
            key={`sparkle-${i}`}
            size={i % 3 === 0 ? "lg" : i % 2 === 0 ? "md" : "sm"}
            className={`absolute text-white/25 animate-pulse-gentle`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`,
            }}
          />
        ))}

        {/* Floating Affirmation Words with script font */}
        <FloatingWords
          className="text-lg animate-float font-dancing italic"
          style={{
            left: "15%",
            top: "25%",
            animationDelay: "1s",
            animationDuration: "8s",
          }}
        >
          Healing
        </FloatingWords>
        
        <FloatingWords
          className="text-base animate-float font-dancing italic"
          style={{
            right: "20%",
            top: "70%",
            animationDelay: "3s",
            animationDuration: "7s",
          }}
        >
          Resilience
        </FloatingWords>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <ButterflyIcon 
              variant="detailed"
              className="h-24 w-24 md:h-32 md:w-32 text-white animate-flutter" 
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Breaking the Silence on Fibromyalgia
          </h1>
          
          {/* Rotating Affirmation Words */}
          <div className="mb-6">
            <RotatingWords />
          </div>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join our community to raise awareness, share experiences, and support those affected by fibromyalgia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToAbout}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary transition-colors"
            >
              Learn More
            </Button>
            <Button
              onClick={() => handleAuthClick("signup")}
              size="lg"
              className="bg-white text-primary hover:bg-secondary hover:text-primary transition-colors"
            >
              Join Community
            </Button>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L48 8.3C96 17 192 33 288 44.3C384 56 480 61 576 61.3C672 61 768 56 864 44.3C960 33 1056 17 1152 11.3C1248 6 1344 11 1392 14.3L1440 17V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="#FFF5E6"
          />
        </svg>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default HeroSection;
