import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FileText, TrendingUp, Leaf, Shield, Users } from "lucide-react";

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

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.problem-card');

    if (cards) {
      gsap.fromTo(
        cards,
        { y: 80, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
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

  return (
    <section
      ref={sectionRef}
      id="problem-statements"
      className="relative py-16 md:py-24 lg:py-32 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-accent/20 border-2 border-accent rounded-md mb-4 md:mb-6">
            <span className="text-accent font-bold tracking-wider text-sm md:text-base uppercase">Caselet Challenge</span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-chromatic inline-block animate-reveal px-4"
            style={{ textShadow: 'var(--shadow-blood)' }}
          >
            PROBLEM STATEMENTS
          </h2>
          <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 md:mb-8"></div>
          <p className="text-lg md:text-xl lg:text-2xl text-primary font-bold">
            Marketing in the Apocalypse
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="problem-card p-6 md:p-8 lg:p-10 bg-card/80 backdrop-blur-sm rounded-lg border-2 border-primary/30 hover:border-accent/50 transition-all duration-500 group"
                style={{ boxShadow: '0 10px 40px hsl(var(--primary) / 0.2)' }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="inline-block p-3 md:p-4 bg-accent/20 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:text-primary transition-colors" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="inline-block px-3 py-1 bg-primary/20 rounded-md mb-2">
                          <span className="text-primary font-bold text-xs md:text-sm">
                            Problem Statement ID: {problem.id}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                          {problem.title}
                        </h3>
                        <p className="text-sm md:text-base text-accent font-semibold italic">
                          Theme: {problem.theme}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 md:space-y-4">
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
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary/20 to-accent/20 border-2 border-primary/40 rounded-lg backdrop-blur-sm"
          >
            <p className="text-base md:text-lg lg:text-xl text-foreground font-semibold">
              Choose your battlefield and strategize your survival plan!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatements;
