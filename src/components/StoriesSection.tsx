
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    quote: "Living with fibromyalgia taught me to be my own best advocate. I've learned to pace myself and prioritize self-care without guilt.",
    name: "Sarah J.",
    location: "Ohio",
    years: "Living with fibromyalgia for 8 years"
  },
  {
    id: 2,
    quote: "The invisible nature of fibromyalgia was the hardest part. Finding a community that understands has been life-changing for me.",
    name: "Michael T.",
    location: "Colorado",
    years: "Living with fibromyalgia for 12 years"
  },
  {
    id: 3,
    quote: "Some days are harder than others, but I've found strength I never knew I had. There is hope, and you're not alone in this journey.",
    name: "Elena R.",
    location: "Florida",
    years: "Living with fibromyalgia for 5 years"
  },
  {
    id: 4,
    quote: "Finding the right doctor who took my symptoms seriously changed everything. Don't give up searching for healthcare professionals who listen.",
    name: "David K.",
    location: "Washington",
    years: "Living with fibromyalgia for 9 years"
  },
  {
    id: 5,
    quote: "I've had to redefine my idea of 'normal,' but I've discovered new paths to joy. My fibro doesn't define me, but it has shaped my resilience.",
    name: "Priya M.",
    location: "Texas",
    years: "Living with fibromyalgia for 15 years"
  }
];

const StoriesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const goToSlide = (index: number) => {
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const goToNextSlide = () => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    goToSlide(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    goToSlide(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="stories" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Personal Stories
          </h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Real experiences from people living with fibromyalgia, sharing their challenges, triumphs, and wisdom.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden relative py-8">
            <div
              className={`transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="bg-secondary rounded-3xl p-8 md:p-10 shadow-lg relative">
                {/* Decorative butterflies */}
                <div className="absolute top-0 right-0 transform -translate-y-1/3 translate-x-1/4">
                  <Butterfly className="h-16 w-16 text-primary opacity-20" />
                </div>
                <div className="absolute bottom-0 left-0 transform translate-y-1/3 -translate-x-1/4">
                  <Butterfly className="h-12 w-12 text-primary-light opacity-20" />
                </div>

                {/* Quote */}
                <blockquote>
                  <svg
                    className="h-10 w-10 text-primary opacity-30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8c.6 0 1-.4 1-1s-.4-1-1-1c-3.3 0-6-2.7-6-6s2.7-6 6-6c3.3 0 6 2.7 6 6v2c0 1.1-.9 2-2 2s-2-.9-2-2v-5c0-.6-.4-1-1-1s-1 .4-1 1v5c0 2.2 1.8 4 4 4s4-1.8 4-4v-2c0-4.4-3.6-8-8-8zm12 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c.6 0 1-.4 1-1s-.4-1-1-1c-3.3 0-6-2.7-6-6s2.7-6 6-6c3.3 0 6 2.7 6 6v2c0 1.1-.9 2-2 2s-2-.9-2-2v-5c0-.6-.4-1-1-1s-1 .4-1 1v5c0 2.2 1.8 4 4 4s4-1.8 4-4v-2c0-4.4-3.6-8-8-8z" />
                  </svg>
                  <p className="text-xl md:text-2xl font-comfortaa mb-6">
                    {testimonials[activeIndex].quote}
                  </p>
                  <footer className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-primary">
                        {testimonials[activeIndex].name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonials[activeIndex].location} • {testimonials[activeIndex].years}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                            index === activeIndex
                              ? "bg-primary"
                              : "bg-primary/30"
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 bg-white rounded-full shadow-md hidden md:flex"
            onClick={goToPrevSlide}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 bg-white rounded-full shadow-md hidden md:flex"
            onClick={goToNextSlide}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>

        <div className="mt-14 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-primary-light"
              onClick={() => navigate("/share-story")}
            >
              Share Your Story
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => navigate("/stories")}
            >
              View All Stories
            </Button>
          </div>
          <p className="mt-4 text-gray-600 text-sm">
            Your experience matters. Help others by sharing your journey with fibromyalgia.
          </p>
        </div>
      </div>
    </section>
  );
};

// Butterfly SVG component
const Butterfly = ({ className }: { className?: string }) => (
  <svg
    className={className}
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

export default StoriesSection;
