
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Clock, User } from "lucide-react";

const ResourceDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const getResourceData = () => {
    switch (type) {
      case "understanding-fibromyalgia":
        return {
          title: "Understanding Fibromyalgia",
          description: "Comprehensive resources about fibromyalgia symptoms, diagnosis, and treatment options.",
          resources: [
            {
              title: "Mayo Clinic - Fibromyalgia Overview",
              description: "Comprehensive medical information about fibromyalgia symptoms, causes, and treatments.",
              url: "https://www.mayoclinic.org/diseases-conditions/fibromyalgia/symptoms-causes/syc-20354780",
              type: "Article",
              readTime: "10 min"
            },
            {
              title: "National Fibromyalgia Association",
              description: "Educational resources and latest research on fibromyalgia.",
              url: "https://www.fmaware.org/",
              type: "Website",
              readTime: "Varies"
            },
            {
              title: "Understanding Chronic Pain",
              description: "Video series explaining the science behind chronic pain conditions.",
              url: "#",
              type: "Video",
              readTime: "25 min"
            }
          ]
        };
      case "support-groups":
        return {
          title: "Support Groups",
          description: "Connect with local and online communities for support and understanding.",
          resources: [
            {
              title: "Fibromyalgia Support Network",
              description: "Online forum with thousands of members sharing experiences and support.",
              url: "#",
              type: "Community",
              readTime: "Ongoing"
            },
            {
              title: "Local Support Group Finder",
              description: "Find fibromyalgia support groups in your area.",
              url: "#",
              type: "Directory",
              readTime: "5 min"
            },
            {
              title: "Virtual Support Meetings",
              description: "Weekly online meetings for fibromyalgia patients and families.",
              url: "#",
              type: "Video Call",
              readTime: "1 hour"
            }
          ]
        };
      case "pain-management":
        return {
          title: "Pain Management",
          description: "Evidence-based techniques and strategies for managing fibromyalgia pain.",
          resources: [
            {
              title: "Gentle Exercise for Fibromyalgia",
              description: "Low-impact exercise routines designed specifically for fibromyalgia patients.",
              url: "#",
              type: "Video",
              readTime: "30 min"
            },
            {
              title: "Mindfulness and Pain Management",
              description: "Meditation and mindfulness techniques for chronic pain relief.",
              url: "#",
              type: "Guide",
              readTime: "15 min"
            },
            {
              title: "Sleep Hygiene for Chronic Pain",
              description: "Tips for improving sleep quality when dealing with chronic pain.",
              url: "#",
              type: "Article",
              readTime: "8 min"
            }
          ]
        };
      default:
        return null;
    }
  };

  const resourceData = getResourceData();

  if (!resourceData) {
    return (
      <div className="min-h-screen bg-accent">
        <Navbar />
        <div className="section-container pt-20">
          <div className="text-center py-20">
            <h1 className="text-3xl font-bold text-primary mb-4">Resource Not Found</h1>
            <Button onClick={() => navigate("/")} className="bg-primary hover:bg-primary-light">
              Back to Home
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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {resourceData.title}
            </h1>
            <p className="text-lg text-gray-600">
              {resourceData.description}
            </p>
          </div>

          <div className="grid gap-6">
            {resourceData.resources.map((resource, index) => (
              <Card key={index} className="hover-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary mb-2">
                        {resource.title}
                      </CardTitle>
                      <p className="text-gray-600">
                        {resource.description}
                      </p>
                    </div>
                    <span className="bg-secondary text-primary text-sm px-3 py-1 rounded-full ml-4">
                      {resource.type}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {resource.readTime}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="group"
                      onClick={() => window.open(resource.url, '_blank')}
                    >
                      Access Resource
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResourceDetails;
