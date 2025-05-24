
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Heart, Clock, User, MapPin } from "lucide-react";

const mockStories = [
  {
    id: 1,
    title: "Finding Strength in Community",
    excerpt: "Living with fibromyalgia taught me to be my own best advocate...",
    fullStory: "Living with fibromyalgia taught me to be my own best advocate. I've learned to pace myself and prioritize self-care without guilt. The journey hasn't been easy, but finding this community has made all the difference. Here I share my complete story of diagnosis, struggles, and the hope I've found through connecting with others who understand.",
    author: "Sarah J.",
    location: "Ohio",
    diagnosisDate: "2016-03-15",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b000?w=400&h=300&fit=crop",
    likes: 42,
    isLoading: false
  },
  {
    id: 2,
    title: "Breaking the Invisible Barrier",
    excerpt: "The invisible nature of fibromyalgia was the hardest part...",
    fullStory: "The invisible nature of fibromyalgia was the hardest part. Finding a community that understands has been life-changing for me. When people look at me, they see someone who appears healthy, but inside I'm battling daily pain that no one can see. This is my story of learning to advocate for myself and finding others who truly understand what it means to live with an invisible illness.",
    author: "Michael T.",
    location: "Colorado",
    diagnosisDate: "2012-08-22",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    likes: 38,
    isLoading: false
  },
  {
    id: 3,
    title: "Redefining Normal",
    excerpt: "Some days are harder than others, but I've found strength...",
    fullStory: "Some days are harder than others, but I've found strength I never knew I had. There is hope, and you're not alone in this journey. I've had to redefine what 'normal' means for me, but in doing so, I've discovered resilience, compassion, and a deeper appreciation for the good days. This is my story of transformation through adversity.",
    author: "Elena R.",
    location: "Florida",
    diagnosisDate: "2019-11-10",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
    likes: 56,
    isLoading: false
  }
];

const Stories = () => {
  const [stories, setStories] = useState(mockStories);
  const [selectedStory, setSelectedStory] = useState<typeof mockStories[0] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const calculateYearsSinceDiagnosis = (diagnosisDate: string) => {
    const diagnosis = new Date(diagnosisDate);
    const now = new Date();
    const years = now.getFullYear() - diagnosis.getFullYear();
    return years;
  };

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
        <div className="section-container">
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
            <Button className="bg-primary hover:bg-primary-light">
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-accent">
      <div className="section-container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Community Stories
          </h1>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read inspiring stories from our fibromyalgia community. Every journey is unique, but none of us walk alone.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Card key={story.id} className="hover-card overflow-hidden">
              <div className="relative">
                {story.isLoading ? (
                  <Skeleton className="h-48 w-full" />
                ) : (
                  <img
                    src={story.image}
                    alt={`${story.author}'s story`}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  <Heart className="h-4 w-4 text-primary" />
                  <span className="sr-only">{story.likes} likes</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-primary line-clamp-2">
                  {story.title}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {story.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {story.location}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="h-4 w-4" />
                  {calculateYearsSinceDiagnosis(story.diagnosisDate)} years since diagnosis
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {story.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReadMore(story)}
                  >
                    Read More
                  </Button>
                  <button
                    onClick={() => handleLike(story.id)}
                    className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                    {story.likes}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary-light">
            Share Your Story
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
                  {calculateYearsSinceDiagnosis(selectedStory.diagnosisDate)} years since diagnosis
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
    </div>
  );
};

export default Stories;
