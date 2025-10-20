import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import EventDescription from "@/components/EventDescription";
import Round1 from "@/components/Round1";
import Round2 from "@/components/Round2";

import Rules from "@/components/Rules";
import JudgingCriteria from "@/components/JudgingCriteria";
import Coordinators from "@/components/Coordinators";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Prefers reduced motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.body.classList.add('prefers-reduced-motion');
    }

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (loading) {
    return <LoadingScreen onLoadComplete={() => setLoading(false)} />;
  }

  return (
    <main className="relative">
      {/* Sticky Back Button */}
      <a
        href="https://intemstellar-nu.vercel.app/"
        className="fixed top-4 left-4 z-50"
      >
        <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-primary/90 hover:bg-primary text-primary-foreground font-semibold text-sm sm:text-base rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
          Back
        </button>
      </a>

      {/* Sticky Register Button */}
      <a
        href="#register"
        className="fixed top-4 right-4 z-50"
      >
        <button className="px-4 sm:px-6 py-2 sm:py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-sm sm:text-base rounded-lg backdrop-blur-sm border border-primary/20 transition-all duration-300 hover:scale-105 shadow-lg">
          Register
        </button>
      </a>
      
      <Hero />
      <EventDescription />
      <Round1 />
      <Round2 />
      
      <Rules />
      <JudgingCriteria />
      <Coordinators />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
