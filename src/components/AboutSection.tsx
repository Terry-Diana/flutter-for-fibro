
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AboutSection = () => {
  return (
    <section id="about" className="bg-accent py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Understanding Fibromyalgia
          </h2>
          <div className="w-24 h-1 bg-primary-light mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Fibromyalgia is a complex chronic condition characterized by widespread pain, fatigue, and tenderness.
            Despite affecting millions worldwide, it remains misunderstood and often invisible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-md p-8 hover-card">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Key Facts
            </h3>
            <ul className="space-y-4">
              <FactItem
                icon="pain"
                title="Chronic Pain"
                description="Widespread pain throughout the body that persists for months or years"
              />
              <FactItem
                icon="sleep"
                title="Sleep Disturbances"
                description="Insomnia, unrefreshing sleep, and sleep disorders are common"
              />
              <FactItem
                icon="fatigue"
                title="Fatigue"
                description="Extreme tiredness that interferes with daily activities"
              />
              <FactItem
                icon="cognition"
                title="Cognitive Issues"
                description="'Fibro fog' can affect memory, concentration and clarity of thought"
              />
              <FactItem
                icon="sensitivity"
                title="Sensory Sensitivity"
                description="Heightened sensitivity to light, sound, touch, and temperature"
              />
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 hover-card">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Prevalence & Impact
            </h3>
            <div className="mb-8">
              <InfographicItem
                percent="80%"
                text="Of cases are diagnosed in women, though it affects all genders"
                color="bg-primary-light"
              />
              <InfographicItem
                percent="2-4%"
                text="Of the global population is affected by fibromyalgia"
                color="bg-secondary"
              />
              <InfographicItem
                percent="7 years"
                text="Average time to diagnosis from symptom onset"
                color="bg-primary"
              />
              <InfographicItem
                percent="30%"
                text="Report significant work limitations due to symptoms"
                color="bg-primary-light"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                What does a fibromyalgia flare-up feel like?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                A flare-up can feel like extreme, full-body pain – like having the flu, a sunburn, and muscle soreness all at once. Many describe increased fatigue, cognitive difficulties ("fibro fog"), heightened sensitivity to stimuli, and sometimes depression or anxiety. Flares can last days to weeks and may be triggered by stress, weather changes, overexertion, or poor sleep.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Is fibromyalgia a real medical condition?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Yes, fibromyalgia is recognized by major medical organizations worldwide as a real chronic pain condition. While there's no single test to diagnose it, modern research shows measurable changes in how pain signals are processed in the central nervous system of people with fibromyalgia. It is not "all in your head" or a psychosomatic illness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                How is fibromyalgia diagnosed?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Diagnosis typically involves ruling out other conditions with similar symptoms. Doctors use the criteria established by the American College of Rheumatology, which includes a history of widespread pain lasting at least three months, and evaluation of multiple tender points throughout the body. Blood tests and imaging may be done to exclude other diseases.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Can fibromyalgia be cured?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Currently, there is no cure for fibromyalgia. However, many people learn to manage their symptoms effectively through a combination of medication, physical therapy, exercise, stress reduction techniques, and lifestyle modifications. Treatment plans are typically personalized to address each person's unique symptoms and triggers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-semibold">
                Is fibromyalgia a progressive disease?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Fibromyalgia is not typically considered a progressive disease like multiple sclerosis or rheumatoid arthritis. It does not cause joint deformity or damage to internal organs. Many people experience fluctuating symptoms with periods of flares and remission. With proper management, some individuals may even see improvements in their symptoms over time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

// Common icon component
const Icon = ({ type }: { type: string }) => {
  const iconMap: Record<string, React.ReactNode> = {
    pain: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22V2M17 12H7M7 17C7 17 5 19 3 19M7 7C7 7 5 5 3 5M17 17C17 17 19 19 21 19M17 7C17 7 19 5 21 5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    sleep: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5V3M12 21V19M5 12H3M21 12H19M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M18.364 18.364L16.95 16.95M7.05 7.05L5.636 5.636"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    fatigue: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18C15 16.3431 13.6569 15 12 15C10.3431 15 9 16.3431 9 18M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    cognition: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    sensitivity: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-8 w-8 text-primary"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 15L20 3M12 12L17 17M2 22L9 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return <div className="mr-4">{iconMap[type] || null}</div>;
};

// Fact item component
const FactItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => (
  <li className="flex items-start">
    <Icon type={icon} />
    <div>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </li>
);

// Infographic item component
const InfographicItem = ({
  percent,
  text,
  color,
}: {
  percent: string;
  text: string;
  color: string;
}) => (
  <div className="flex items-center mb-4 animate-fade-in">
    <div
      className={`${color} text-white text-2xl font-bold w-20 h-20 flex items-center justify-center rounded-full mr-4 flex-shrink-0 butterfly-shadow`}
    >
      {percent}
    </div>
    <p className="text-gray-700">{text}</p>
  </div>
);

export default AboutSection;
