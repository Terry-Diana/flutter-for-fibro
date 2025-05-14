
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const resources = [
  {
    id: 1,
    title: "Medical Guidelines",
    description: "Access the latest clinical guidelines and research on fibromyalgia treatment approaches.",
    icon: "medical",
    links: [
      { text: "Treatment Guidelines", url: "#" },
      { text: "Research Library", url: "#" },
      { text: "Doctor Directory", url: "#" }
    ]
  },
  {
    id: 2,
    title: "Mental Health Support",
    description: "Resources for managing the emotional aspects of living with a chronic condition.",
    icon: "mental",
    links: [
      { text: "Therapy Resources", url: "#" },
      { text: "Coping Strategies", url: "#" },
      { text: "Support Groups", url: "#" }
    ]
  },
  {
    id: 3,
    title: "Daily Living",
    description: "Practical tips and tools for managing daily activities with fibromyalgia.",
    icon: "daily",
    links: [
      { text: "Energy Conservation", url: "#" },
      { text: "Adaptive Equipment", url: "#" },
      { text: "Home Modifications", url: "#" }
    ]
  },
  {
    id: 4,
    title: "Support Communities",
    description: "Connect with others who understand what you're going through.",
    icon: "community",
    links: [
      { text: "Online Forums", url: "#" },
      { text: "Local Groups", url: "#" },
      { text: "Family Support", url: "#" }
    ]
  },
  {
    id: 5,
    title: "Pain Management",
    description: "Resources for managing fibromyalgia pain through various approaches.",
    icon: "pain",
    links: [
      { text: "Pain Clinics", url: "#" },
      { text: "Alternative Treatments", url: "#" },
      { text: "Exercise Programs", url: "#" }
    ]
  },
  {
    id: 6,
    title: "Advocacy Resources",
    description: "Tools to help advocate for yourself and the broader fibromyalgia community.",
    icon: "advocacy",
    links: [
      { text: "Disability Rights", url: "#" },
      { text: "Awareness Materials", url: "#" },
      { text: "Legislative Updates", url: "#" }
    ]
  }
];

const downloadables = [
  { title: "Symptom Tracker", description: "Daily log for monitoring symptoms and triggers", icon: "tracker" },
  { title: "Doctor Visit Prep Sheet", description: "Guide to prepare for medical appointments", icon: "doctor" },
  { title: "Pain Location Chart", description: "Visual body map to document pain areas", icon: "chart" },
  { title: "Medication Log", description: "Track your medications and their effects", icon: "medicine" }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="bg-accent py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Resources & Support
          </h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Find helpful information, support communities, and tools to manage life with fibromyalgia.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {resources.map((resource) => (
            <Card key={resource.id} className="hover-card border border-gray-100 h-full">
              <CardHeader>
                <div className="flex items-center mb-2">
                  <ResourceIcon type={resource.icon} />
                  <CardTitle className="text-primary">{resource.title}</CardTitle>
                </div>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {resource.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-primary hover:text-primary-light flex items-center"
                      >
                        <svg
                          className="h-4 w-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Downloadables Section */}
        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Printable Resources
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {downloadables.map((item, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-5 flex flex-col items-center text-center hover-card"
              >
                <DownloadIcon type={item.icon} />
                <h4 className="text-lg font-semibold text-primary mt-3 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Download PDF
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Support Map Placeholder */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Find Local Support Groups
              </h3>
              <p className="mb-6">
                Connect with others in your area who understand what you're going through. Local support groups provide valuable emotional support, practical advice, and a sense of community.
              </p>
              <Button>Search Groups Near You</Button>
            </div>
            <div className="md:w-1/2 bg-gray-200 rounded-lg overflow-hidden h-64 flex items-center justify-center text-gray-500 border border-gray-300">
              <div className="text-center">
                <svg
                  className="h-12 w-12 mx-auto mb-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm">
                  Interactive map will be displayed here
                  <br />
                  <span className="text-xs">(Backend implementation required)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Resource icon component
const ResourceIcon = ({ type }: { type: string }) => {
  const iconMap: Record<string, React.ReactNode> = {
    medical: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 mr-2 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    mental: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 mr-2 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    daily: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 mr-2 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    community: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 mr-2 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    pain: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 mr-2 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    advocacy: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6 mr-2 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
        />
      </svg>
    ),
  };

  return iconMap[type] || null;
};

// Download icon component
const DownloadIcon = ({ type }: { type: string }) => {
  const iconMap: Record<string, React.ReactNode> = {
    tracker: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    doctor: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    chart: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    medicine: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  };

  return iconMap[type] || null;
};

export default ResourcesSection;
