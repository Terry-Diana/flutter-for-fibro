
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ButterflyIcon from "./ButterflyIcon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white bg-opacity-90 backdrop-blur-sm shadow-md"
          : "bg-black bg-opacity-20 backdrop-blur-sm"
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-primary text-2xl font-comfortaa font-bold flex items-center">
            <ButterflyIcon 
              variant="detailed" 
              className="h-8 w-8 mr-2 animate-flutter text-primary" 
            />
            <span className={cn(
              "transition-colors",
              isScrolled ? "text-primary" : "text-white"
            )}>Fibro Awareness</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className={cn(
              "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all",
              isScrolled ? "text-primary" : "text-white hover:text-white/80"
            )}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("stories")}
            className={cn(
              "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all",
              isScrolled ? "text-primary" : "text-white hover:text-white/80"
            )}
          >
            Stories
          </button>
          <button
            onClick={() => scrollToSection("resources")}
            className={cn(
              "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all",
              isScrolled ? "text-primary" : "text-white hover:text-white/80"
            )}
          >
            Resources
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className={cn(
              "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all",
              isScrolled ? "text-primary" : "text-white hover:text-white/80"
            )}
          >
            Blog
          </button>
        </div>

        <Button 
          variant={isScrolled ? "default" : "secondary"} 
          className={cn(
            "hidden md:flex",
            !isScrolled && "text-primary hover:text-primary-light bg-white hover:bg-white/90"
          )}
        >
          Get Involved
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "md:hidden",
            isScrolled ? "text-primary" : "text-white"
          )}
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 md:hidden pt-20",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6 p-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("stories")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            Stories
          </button>
          <button
            onClick={() => scrollToSection("resources")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            Resources
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="text-lg font-medium py-2 border-b border-gray-100"
          >
            Blog
          </button>
          <Button className="mt-4">Get Involved</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
