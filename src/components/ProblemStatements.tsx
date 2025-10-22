import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, TrendingUp, Leaf, Shield, Users, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    id: "B001",
    icon: TrendingUp,
    title: "StratEdge: The Corporate Comeback",
    theme: "Crisis Management & Corporate Strategy",
    description: [
      "A top multinational company that once stood as an industry leader has now collapsed into chaos after a major scandal.",
      "Sensitive internal data was leaked, top executives resigned, and public trust has been destroyed.",
      "The media calls it the biggest corporate downfall of the decade.",
      "Employees are demotivated, investors are pulling out, and competitors are circling to take over market share.",
      "As part of Rebuild Consulting, your team has been hired to design a complete corporate recovery plan.",
      "Your goal is to bring the company back from crisis — restoring its reputation, rebuilding its internal culture, and ensuring long-term survival."
    ]
  },
  {
    id: "B002",
    icon: FileText,
    title: "InnovEx: The Intrapreneurship Uprising",
    theme: "Innovation & Organizational Behaviour",
    description: [
      "A well-established company known for its stability is now losing relevance in a fast-changing market.",
      "Sales have stagnated, employee morale is low, and innovation has become a buzzword rather than a reality.",
      "The CEO launches InnovEx, an intrapreneurship challenge to awaken creativity inside the organization.",
      "Employees are invited to act like entrepreneurs — pitching breakthrough ideas that can drive transformation from within.",
      "Your team is part of this initiative.",
      "You must propose a unique, impactful intrapreneurial idea that solves a real business challenge and helps the company rediscover its innovative edge."
    ]
  },
  {
    id: "B003",
    icon: Leaf,
    title: "Sustainovate: The Green Shift",
    theme: "Sustainability & Operations Management",
    description: [
      "A global manufacturing company has been hit with strict new environmental regulations.",
      "It can no longer release any harmful effluents or emissions into the environment.",
      "At the same time, shutting down operations is not an option — thousands of jobs and national supply chains depend on it.",
      "The company must now transition toward full sustainability — balancing profitability with environmental responsibility.",
      "You are part of EcoVision Strategies, a sustainability consulting team hired to help the company design its green transformation roadmap."
    ]
  },
  {
    id: "B004",
    icon: Shield,
    title: "FinGuard: The Great Data Heist",
    theme: "Cybersecurity & Crisis Management",
    description: [
      "A leading fintech company that handles millions of daily digital transactions has just suffered a massive cyber-attack.",
      "Sensitive user data, including financial information, has been stolen and leaked online.",
      "Within hours, social media explodes with outrage, users delete their accounts, and investors panic.",
      "The company's stock price crashes, and the government begins investigations into its data protection standards.",
      "Its survival now depends on how it handles the crisis in the next few days.",
      "As part of FinGuard's Emergency Response Team, your mission is to restore public trust and ensure the company's continuity."
    ]
  },
  {
    id: "B005",
    icon: Users,
    title: "PeoplePulse: The Great Resignation Reversal",
    theme: "Human Resource Management & Leadership",
    description: [
      "A reputed multinational company is facing a major internal crisis — mass resignations.",
      "Employees are quitting in record numbers due to burnout, lack of recognition, rigid work culture, and poor communication.",
      "Productivity has dropped, clients are complaining, and remaining employees are losing morale.",
      "The management realizes that throwing money at the problem won't help.",
      "It needs a deeper, more human-centered solution to rebuild a healthy, motivated, and loyal workforce.",
      "As part of PeoplePulse HR Solutions, your challenge is to design a \"Workforce Revival Plan\" that can turn the organization around."
    ]
  }
];

const ProblemStatements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.problem-card');

    if (cards) {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="problem-statements"
      className="relative py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 text-chromatic inline-block px-2 sm:px-4"
            style={{ textShadow: 'var(--shadow-blood)' }}
          >
            PROBLEM STATEMENTS
          </h2>
          <div className="h-1 w-20 sm:w-24 md:w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary font-bold px-4">
            Marketing in the Apocalypse
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="problem-card bg-card/80 backdrop-blur-sm rounded-lg border-2 border-primary/30 hover:border-accent/50 transition-all duration-500 overflow-hidden"
                style={{ boxShadow: '0 10px 40px hsl(var(--primary) / 0.2)' }}
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full p-4 sm:p-5 md:p-6 lg:p-8 text-left transition-all duration-300 hover:bg-card/50"
                  aria-expanded={isOpen}
                  aria-controls={`problem-content-${index}`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <div className={`inline-block p-2.5 sm:p-3 md:p-4 rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-primary/20' : 'bg-accent/20'
                      }`}>
                        <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-colors duration-300 ${
                          isOpen ? 'text-primary' : 'text-accent'
                        }`} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <div className="inline-block self-start px-2.5 sm:px-3 py-1 bg-primary/20 rounded-md">
                          <span className="text-primary font-bold text-xs sm:text-sm">
                            {problem.id}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground leading-tight pr-8 sm:pr-10">
                          {problem.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base text-accent font-semibold italic">
                          {problem.theme}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 mt-1">
                      <ChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-primary transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </button>

                <div
                  id={`problem-content-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 pt-2">
                    <div className="pl-0 sm:pl-10 md:pl-14 lg:pl-16">
                      <div className="space-y-3 sm:space-y-4 md:space-y-5">
                        {problem.description.map((para, i) => (
                          <p
                            key={i}
                            className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-center px-4">
          <div className="inline-block px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/40 rounded-lg backdrop-blur-sm">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground font-semibold">
              Choose your battlefield and strategize your survival plan!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
