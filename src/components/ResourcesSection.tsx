
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, BookOpen, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesSection = () => {
  const resources = [
    {
      title: "Understanding Fibromyalgia",
      description: "Comprehensive guide to symptoms, diagnosis, and treatment options.",
      icon: BookOpen,
      link: "/resources/understanding-fibromyalgia",
      type: "Guide"
    },
    {
      title: "Support Groups",
      description: "Connect with local and online support communities.",
      icon: Users,
      link: "/resources/support-groups",
      type: "Community"
    },
    {
      title: "Pain Management",
      description: "Techniques and strategies for managing chronic pain.",
      icon: Heart,
      link: "/resources/pain-management",
      type: "Health"
    }
  ];

  return (
    <section id="resources" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Resources & Support
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Access valuable information, tools, and connections to help you on your fibromyalgia journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {resources.map((resource, index) => {
          const IconComponent = resource.icon;
          return (
            <Card key={index} className="hover-card text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <span className="inline-block bg-secondary text-primary text-sm px-3 py-1 rounded-full mb-4">
                  {resource.type}
                </span>
                <Link to={resource.link}>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="text-center">
        <Link to="/doctors">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Find Recommended Doctors
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ResourcesSection;
