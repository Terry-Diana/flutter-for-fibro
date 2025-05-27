
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import StoryCard from "@/components/StoryCard";
import { mockStories } from "@/data/mockStories";

const StoriesSection = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const navigate = useNavigate();
  const featuredStories = mockStories.slice(0, 3);

  const handleReadMore = (story: any) => {
    navigate("/stories");
  };

  const handleLike = (storyId: number) => {
    // This would typically update the backend
    console.log(`Liked story ${storyId}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStoryIndex((prev) => (prev + 1) % featuredStories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [featuredStories.length]);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredStories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onReadMore={handleReadMore}
              onLike={handleLike}
            />
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-primary-light"
              onClick={() => navigate("/submit-story")}
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

export default StoriesSection;
