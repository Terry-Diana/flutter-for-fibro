
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center gradient-bg">
      {/* Decorative Butterflies */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Butterfly
            key={i}
            className={`absolute opacity-${Math.floor(
              Math.random() * 3
            ) + 7}0 animate-float butterfly-shadow`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg) scale(${
                Math.random() * 0.5 + 0.5
              })`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <Butterfly className="h-24 w-24 md:h-32 md:w-32 text-white animate-flutter" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Breaking the Silence on Fibromyalgia
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join our community to raise awareness, share experiences, and support those affected by fibromyalgia.
          </p>
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="bg-white text-primary hover:bg-secondary hover:text-primary transition-colors"
          >
            Learn More
          </Button>
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
    </div>
  );
};

// Butterfly SVG component
const Butterfly = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C12 22 10 18 2 18C2 18 8 16 10 12C10 12 8 8 2 6C2 6 10 6 12 2C12 2 14 6 22 6C22 6 16 8 14 12C14 12 16 16 22 18C22 18 14 18 12 22Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HeroSection;
