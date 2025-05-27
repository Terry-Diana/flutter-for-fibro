
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Clock, User, MapPin } from "lucide-react";

interface Story {
  id: number;
  title: string;
  excerpt: string;
  fullStory: string;
  author: string;
  location: string;
  diagnosisDate: string;
  image: string;
  likes: number;
  isLoading: boolean;
}

interface StoryCardProps {
  story: Story;
  onReadMore: (story: Story) => void;
  onLike: (storyId: number) => void;
}

const StoryCard = ({ story, onReadMore, onLike }: StoryCardProps) => {
  const calculateYearsSinceDiagnosis = (diagnosisDate: string) => {
    const diagnosis = new Date(diagnosisDate);
    const now = new Date();
    const years = now.getFullYear() - diagnosis.getFullYear();
    return years;
  };

  return (
    <Card className="hover-card overflow-hidden">
      <div className="relative">
        <img
          src={story.image}
          alt={`${story.author}'s story`}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
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
            onClick={() => onReadMore(story)}
          >
            Read More
          </Button>
          <button
            onClick={() => onLike(story.id)}
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <Heart className="h-4 w-4" />
            {story.likes}
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
