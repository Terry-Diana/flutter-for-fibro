
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart, Clock, User, MapPin, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import StoryCard from "@/components/StoryCard";
import { mockStories } from "@/data/mockStories";

const Stories = () => {
  const [stories, setStories] = useState(mockStories);
  const [selectedStory, setSelectedStory] = useState<typeof mockStories[0] | null>(null);
  const navigate = useNavigate();

  const handleReadMore = (story: typeof mockStories[0]) => {
    setSelectedStory(story);
  };

  const handleLike = (storyId: number) => {
    setStories(prev => prev.map(story => 
      story.id === storyId 
        ? { ...story, likes: story.likes + 1 }
        : story
    ));
  };

  if (stories.length === 0) {
    return (
      <div className="min-h-screen bg-accent">
        <Navbar />
        <div className="section-container pt-20">
          <div className="text-center py-20">
            <div className="mb-8">
              <svg className="mx-auto h-24 w-24 text-primary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-primary mb-4">No Stories Yet</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Be the first to share your fibromyalgia journey with our community. Your story could inspire others.
            </p>
            <Button 
              className="bg-primary hover:bg-primary-light"
              onClick={() => navigate("/submit-story")}
            >
              Share Your Story
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      <div className="section-container pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Community Stories
          </h1>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read inspiring stories from our fibromyalgia community. Every journey is unique, but none of us walk alone.
          </p>
        </div>

        <div className="mb-8 flex justify-end">
          <Button 
            className="bg-primary hover:bg-primary-light"
            onClick={() => navigate("/submit-story")}
          >
            <Plus className="h-4 w-4 mr-2" />
            Share Your Story
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onReadMore={handleReadMore}
              onLike={handleLike}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            Load More Stories
          </Button>
        </div>
      </div>

      {/* Story Modal */}
      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">
              {selectedStory?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedStory && (
            <div className="space-y-6">
              <img
                src={selectedStory.image}
                alt={`${selectedStory.author}'s story`}
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {selectedStory.author}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {selectedStory.location}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {Math.floor((new Date().getTime() - new Date(selectedStory.diagnosisDate).getTime()) / (365.25 * 24 * 60 * 60 * 1000))} years since diagnosis
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {selectedStory.fullStory}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <button
                  onClick={() => handleLike(selectedStory.id)}
                  className="flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
                >
                  <Heart className="h-5 w-5" />
                  {selectedStory.likes} likes
                </button>
                <Button variant="outline">
                  Share Story
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Stories;
