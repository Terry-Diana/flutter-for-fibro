
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
          : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-primary text-2xl font-comfortaa font-bold flex items-center">
            <ButterflyLogo className="h-8 w-8 mr-2 animate-flutter" />
            <span>Fibro Awareness</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-primary">
          <button
            onClick={() => scrollToSection("about")}
            className="font-medium hover:text-primary-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("stories")}
            className="font-medium hover:text-primary-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all"
          >
            Stories
          </button>
          <button
            onClick={() => scrollToSection("resources")}
            className="font-medium hover:text-primary-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all"
          >
            Resources
          </button>
          <button
            onClick={() => scrollToSection("blog")}
            className="font-medium hover:text-primary-light transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all"
          >
            Blog
          </button>
        </div>

        <Button variant="default" className="hidden md:flex">
          Get Involved
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
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

// Butterfly Logo SVG Component
const ButterflyLogo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C12 22 10 18 2 18C2 18 8 16 10 12C10 12 8 8 2 6C2 6 10 6 12 2C12 2 14 6 22 6C22 6 16 8 14 12C14 12 16 16 22 18C22 18 14 18 12 22Z"
      fill="#6A1B9A"
      stroke="#6A1B9A"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Navbar;
