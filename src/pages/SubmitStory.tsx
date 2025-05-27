
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SubmitStory = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    location: "",
    diagnosisDate: "",
    story: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Story submitted successfully!",
      description: "Your story has been sent for review and will be published once approved.",
    });

    setIsSubmitting(false);
    navigate("/stories");
  };

  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      <div className="section-container pt-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/stories")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Stories
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Share Your Story
            </h1>
            <p className="text-lg text-gray-600">
              Your experience matters. Help others by sharing your journey with fibromyalgia.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Tell Your Story</CardTitle>
              <p className="text-gray-600">
                All stories are reviewed before publication to ensure they meet our community guidelines.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Story Title *</Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      placeholder="Give your story a meaningful title"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="author">Your Name *</Label>
                    <Input
                      id="author"
                      name="author"
                      value={formData.author}
                      onChange={handleInputChange}
                      placeholder="How would you like to be credited?"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State (optional)"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="diagnosisDate">Diagnosis Date</Label>
                    <Input
                      id="diagnosisDate"
                      name="diagnosisDate"
                      type="date"
                      value={formData.diagnosisDate}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="We'll contact you about your story status"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="story">Your Story *</Label>
                  <Textarea
                    id="story"
                    name="story"
                    value={formData.story}
                    onChange={handleInputChange}
                    placeholder="Share your journey with fibromyalgia. What would you want others in our community to know? Include your diagnosis experience, challenges you've faced, coping strategies, or words of encouragement."
                    className="min-h-[300px]"
                    required
                  />
                  <p className="text-sm text-gray-500">
                    Minimum 200 characters. Be authentic and respectful.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Review Guidelines</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Stories are reviewed within 3-5 business days</li>
                    <li>• Content must be respectful and appropriate for all audiences</li>
                    <li>• Medical advice or specific treatment recommendations will be edited</li>
                    <li>• You retain ownership of your story and can request removal at any time</li>
                  </ul>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting || formData.story.length < 200}
                    className="bg-primary hover:bg-primary-light"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Story
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/stories")}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitStory;
