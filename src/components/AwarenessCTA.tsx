
import React from "react";
import { Button } from "@/components/ui/button";

const AwarenessCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Butterfly className="h-32 w-32" />
        </div>
        <div className="absolute top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2">
          <Butterfly className="h-40 w-40" />
        </div>
        <div className="absolute bottom-0 left-0 transform translate-y-1/3">
          <Butterfly className="h-24 w-24" />
        </div>
        <div className="absolute top-0 right-0 transform -translate-y-1/3">
          <Butterfly className="h-28 w-28" />
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="h-24 w-6 bg-purple-300 rounded-full animate-pulse-gentle"></div>
              <Butterfly className="h-16 w-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-flutter" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Awareness Campaign
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-purple-200">
            Together we can increase understanding, improve support, and help people with fibromyalgia live their best lives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ActionCard 
              title="Share Your Story" 
              description="Help others feel less alone by sharing your experience with fibromyalgia."
              buttonText="Share Now"
              icon="share"
            />
            <ActionCard 
              title="Make a Donation" 
              description="Support research and advocacy efforts with a tax-deductible contribution."
              buttonText="Donate"
              icon="donate"
            />
            <ActionCard 
              title="Join an Event" 
              description="Participate in virtual or local events to raise awareness in your community."
              buttonText="Find Events"
              icon="events"
            />
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-3">Become an Advocate</h3>
          <p className="mb-6">
            Sign up for our advocacy network to receive toolkits, updates, and opportunities to speak out.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 flex-grow focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <Button className="bg-white text-primary hover:bg-secondary hover:text-primary-light">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L48 8.3C96 17 192 33 288 44.3C384 56 480 61 576 61.3C672 61 768 56 864 44.3C960 33 1056 17 1152 11.3C1248 6 1344 11 1392 14.3L1440 17V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
};

// Action card component
const ActionCard = ({
  title,
  description,
  buttonText,
  icon,
}: {
  title: string;
  description: string;
  buttonText: string;
  icon: string;
}) => {
  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center text-center hover-card h-full">
      <ActionIcon type={icon} />
      <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-purple-100 mb-6 flex-grow">{description}</p>
      <Button variant="secondary" className="text-primary font-medium">
        {buttonText}
      </Button>
    </div>
  );
};

// Action icon component
const ActionIcon = ({ type }: { type: string }) => {
  const iconMap: Record<string, React.ReactNode> = {
    share: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    donate: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    events: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-12 w-12"
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
  };

  return iconMap[type] || null;
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

export default AwarenessCTA;
