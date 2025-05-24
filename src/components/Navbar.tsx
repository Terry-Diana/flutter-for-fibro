
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import ButterflyIcon from "./ButterflyIcon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    // Only scroll on homepage
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 py-4 px-4 md:px-6",
        isScrolled || !isHomePage
          ? "bg-white bg-opacity-95 backdrop-blur-sm shadow-md"
          : "bg-black bg-opacity-40 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <div className="text-2xl font-comfortaa font-bold flex items-center">
            <ButterflyIcon 
              variant="detailed" 
              className={cn(
                "h-8 w-8 mr-2 animate-flutter",
                isScrolled || !isHomePage ? "text-primary" : "text-white"
              )} 
            />
            <span className={cn(
              "transition-colors",
              isScrolled || !isHomePage ? "text-primary" : "text-white"
            )}>Fibro Awareness</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {isHomePage ? (
            <>
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
            </>
          ) : (
            <>
              <Link
                to="/"
                className={cn(
                  "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all",
                  "text-primary hover:text-primary/80"
                )}
              >
                Home
              </Link>
              <Link
                to="/stories"
                className={cn(
                  "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all",
                  "text-primary hover:text-primary/80"
                )}
              >
                Stories
              </Link>
              <Link
                to="/doctors"
                className={cn(
                  "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all",
                  "text-primary hover:text-primary/80"
                )}
              >
                Doctors
              </Link>
              <Link
                to="/gallery"
                className={cn(
                  "font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary-light after:transition-all",
                  "text-primary hover:text-primary/80"
                )}
              >
                Gallery
              </Link>
            </>
          )}
        </div>

        <Button 
          variant={isScrolled || !isHomePage ? "default" : "secondary"} 
          className={cn(
            "hidden md:flex",
            !isScrolled && isHomePage && "text-primary hover:text-primary-light bg-white hover:bg-white/90"
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
            isScrolled || !isHomePage ? "text-primary" : "text-white"
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
          {isHomePage ? (
            <>
              <button
                onClick={() => scrollToSection("about")}
                className="text-lg font-medium py-2 border-b border-gray-100 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("stories")}
                className="text-lg font-medium py-2 border-b border-gray-100 text-left"
              >
                Stories
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="text-lg font-medium py-2 border-b border-gray-100 text-left"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-lg font-medium py-2 border-b border-gray-100 text-left"
              >
                Blog
              </button>
            </>
          ) : (
            <>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-gray-100"
              >
                Home
              </Link>
              <Link
                to="/stories"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-gray-100"
              >
                Stories
              </Link>
              <Link
                to="/doctors"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-gray-100"
              >
                Doctors
              </Link>
              <Link
                to="/gallery"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-gray-100"
              >
                Gallery
              </Link>
            </>
          )}
          <Button className="mt-4">Get Involved</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
