import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Animation constants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" }
  }
};

const pulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: "reverse" as const
  }
};

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="about" 
      className="bg-gradient-to-b from-accent/20 to-accent/60 py-16 md:py-24"
    >
      <div className="section-container">
        <SectionHeader 
          title="Understanding Fibromyalgia" 
          description="Fibromyalgia is a complex chronic condition characterized by widespread pain, fatigue, and tenderness. Despite affecting millions worldwide, it remains misunderstood and often invisible."
        />

        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <KeyFactsCard />
          <PrevalenceCard />
        </motion.div>

        <FAQSection isVisible={isVisible} />
      </div>
    </section>
  );
};

// Section Header Component
const SectionHeader = ({ title, description }: { title: string; description: string }) => (
  <motion.div 
    className="text-center mb-16"
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
      {title}
    </h2>
    <div className="flex justify-center mb-6">
      <div className="w-16 h-1 bg-primary rounded-full" />
      <div className="w-4 h-1 bg-secondary rounded-full mx-2" />
      <div className="w-8 h-1 bg-primary-light rounded-full" />
    </div>
    <p className="text-lg max-w-3xl mx-auto text-gray-700">
      {description}
    </p>
  </motion.div>
);

// Key Facts Card Component
const KeyFactsCard = () => {
  const facts = [
    {
      icon: "pain",
      title: "Chronic Pain",
      description: "Widespread pain throughout the body that persists for months or years"
    },
    {
      icon: "sleep",
      title: "Sleep Disturbances",
      description: "Insomnia, unrefreshing sleep, and sleep disorders are common"
    },
    {
      icon: "fatigue",
      title: "Fatigue",
      description: "Extreme tiredness that interferes with daily activities"
    },
    {
      icon: "cognition",
      title: "Cognitive Issues",
      description: "'Fibro fog' can affect memory, concentration and clarity of thought"
    },
    {
      icon: "sensitivity",
      title: "Sensory Sensitivity",
      description: "Heightened sensitivity to light, sound, touch, and temperature"
    }
  ];

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary flex flex-col h-full"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-6">
        <h3 className="text-2xl font-bold text-primary">
          Key Facts
        </h3>
        <div className="ml-auto">
          <motion.div 
            className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center"
            animate={pulse}
          >
            <Icon type="info" />
          </motion.div>
        </div>
      </div>
      
      <ul className="space-y-4 flex-grow">
        {facts.map((fact, index) => (
          <motion.li 
            key={index}
            variants={itemVariants}
            className="pb-4 last:pb-0 border-b border-gray-100 last:border-0"
          >
            <FactItem {...fact} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

// Prevalence Card Component
const PrevalenceCard = () => {
  const stats = [
    { percent: "80%", text: "Of cases are diagnosed in women, though it affects all genders", color: "bg-primary-light" },
    { percent: "2-4%", text: "Of the global population is affected by fibromyalgia", color: "bg-secondary" },
    { percent: "7 years", text: "Average time to diagnosis from symptom onset", color: "bg-primary" },
    { percent: "30%", text: "Report significant work limitations due to symptoms", color: "bg-primary-light" }
  ];

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-secondary flex flex-col h-full"
      variants={itemVariants}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-6">
        <h3 className="text-2xl font-bold text-primary">
          Prevalence & Impact
        </h3>
        <div className="ml-auto">
          <motion.div 
            className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center"
            animate={pulse}
          >
            <Icon type="chart" />
          </motion.div>
        </div>
      </div>
      
      <div className="space-y-6 flex-grow">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="flex items-center"
          >
            <InfographicItem {...stat} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// FAQ Section Component
const FAQSection = ({ isVisible }: { isVisible: boolean }) => {
  const faqs = [
    {
      question: "What does a fibromyalgia flare-up feel like?",
      answer: "A flare-up can feel like extreme, full-body pain – like having the flu, a sunburn, and muscle soreness all at once. Many describe increased fatigue, cognitive difficulties ('fibro fog'), heightened sensitivity to stimuli, and sometimes depression or anxiety. Flares can last days to weeks and may be triggered by stress, weather changes, overexertion, or poor sleep."
    },
    {
      question: "Is fibromyalgia a real medical condition?",
      answer: "Yes, fibromyalgia is recognized by major medical organizations worldwide as a real chronic pain condition. While there's no single test to diagnose it, modern research shows measurable changes in how pain signals are processed in the central nervous system of people with fibromyalgia. It is not 'all in your head' or a psychosomatic illness."
    },
    {
      question: "How is fibromyalgia diagnosed?",
      answer: "Diagnosis typically involves ruling out other conditions with similar symptoms. Doctors use the criteria established by the American College of Rheumatology, which includes a history of widespread pain lasting at least three months, and evaluation of multiple tender points throughout the body. Blood tests and imaging may be done to exclude other diseases."
    },
    {
      question: "Can fibromyalgia be cured?",
      answer: "Currently, there is no cure for fibromyalgia. However, many people learn to manage their symptoms effectively through a combination of medication, physical therapy, exercise, stress reduction techniques, and lifestyle modifications. Treatment plans are typically personalized to address each person's unique symptoms and triggers."
    },
    {
      question: "Is fibromyalgia a progressive disease?",
      answer: "Fibromyalgia is not typically considered a progressive disease like multiple sclerosis or rheumatoid arthritis. It does not cause joint deformity or damage to internal organs. Many people experience fluctuating symptoms with periods of flares and remission. With proper management, some individuals may even see improvements in their symptoms over time."
    }
  ];

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-accent"
      variants={fadeIn}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="flex items-center mb-8">
        <h3 className="text-2xl font-bold text-primary">
          Frequently Asked Questions
        </h3>
        <div className="ml-auto">
          <motion.div 
            className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center"
            animate={pulse}
          >
            <Icon type="question" />
          </motion.div>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={`item-${index}`} 
            value={`item-${index}`}
            className="border-b border-gray-200 last:border-0 mb-4 last:mb-0"
          >
            <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors text-left py-4">
              <span className="mr-4 text-primary font-bold">Q{index + 1}.</span>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700 pb-4 pl-8">
              <span className="text-secondary font-medium mr-2">A:</span>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
};

// Icon Component with additional icons
const Icon = ({ type }: { type: string }) => {
  const iconMap: Record<string, React.ReactNode> = {
    pain: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22V2M17 12H7M7 17C7 17 5 19 3 19M7 7C7 7 5 5 3 5M17 17C17 17 19 19 21 19M17 7C17 7 19 5 21 5" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    sleep: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5V3M12 21V19M5 12H3M21 12H19M18.364 5.636L16.95 7.05M7.05 16.95L5.636 18.364M18.364 18.364L16.95 16.95M7.05 7.05L5.636 5.636" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    fatigue: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18C15 16.3431 13.6569 15 12 15C10.3431 15 9 16.3431 9 18M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    cognition: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15C9 13.3431 10.3431 12 12 12C13.6569 12 15 13.3431 15 15Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    sensitivity: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-primary" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 15L20 3M12 12L17 17M2 22L9 15" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    info: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-secondary" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L7 13M12 17L12 8M17 17L17 11M3 21H21M4 16H20C20.5523 16 21 15.5523 21 15V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V15C3 15.5523 3.44772 16 4 16Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    question: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.22766 9C8.77678 7.83481 10.2584 7 12.0001 7C14.2092 7 16.0001 8.34315 16.0001 10C16.0001 11.3994 14.7224 12.5751 12.9943 12.9066C12.4519 13.0106 12.0001 13.4477 12.0001 14M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  return <>{iconMap[type] || null}</>;
};

// Fact Item Component
const FactItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <div className="flex items-start group">
    <motion.div 
      className="mr-4 mt-1 flex-shrink-0"
      whileHover={{ scale: 1.1 }}
    >
      <Icon type={icon} />
    </motion.div>
    <div>
      <h4 className="font-semibold text-lg text-primary group-hover:text-secondary transition-colors">
        {title}
      </h4>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

// Infographic Item Component
const InfographicItem = ({ percent, text, color }: { percent: string; text: string; color: string }) => (
  <div className="flex items-start">
    <motion.div 
      className={`${color} text-white text-xl font-bold w-16 h-16 flex items-center justify-center rounded-full mr-4 flex-shrink-0 shadow-md`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {percent}
    </motion.div>
    <p className="text-gray-700 mt-2">{text}</p>
  </div>
);

export default AboutSection;