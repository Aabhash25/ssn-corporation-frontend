"use client";
import { useState, useEffect } from "react";

import ContactCTA from "../../../components/contactCTA";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import StructuralStudiesSection from "./StructuralStudiesSection"; // Correct import
import WhySSNSection from "./WhySSNSection";
import ProjectsSection from "./ProjectsSection";
import MarketWeServe from "./MarketWeServe";

const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

    body {
      font-family: "Inter", sans-serif;
      background-color: #fafafa;
    }

    .font-playfair {
      font-family: "Playfair Display", serif;
    }

    .adjusted-image {
      object-fit: contain;
      width: 100%;
      height: auto;
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(30px);
      }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in-up {
      animation: fadeInUp 1s ease-out forwards;
    }

    .text-overlay-1 {
      animation: fadeInUp 1s ease-out 0.2s forwards;
      opacity: 0;
    }
    .text-overlay-2 {
      animation: fadeInUp 1s ease-out 0.4s forwards;
      opacity: 0;
    }
    .text-overlay-3 {
      animation: fadeInUp 1s ease-out 0.6s forwards;
      opacity: 0;
    }

    .service-transition {
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .content-transition {
      transition: all 0.3s ease-out;
    }
  `}</style>
);

const BuildingServiceDesign = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const buildingServicesData = [
    {
      id: 1,
      title: "MEP (Mechanical, Electrical & Plumbing) Design",
      image: "/MEPDesign.jpeg",
      description:
        "We develop fully coordinated MEP systems that enhance building comfort, energy efficiency, and operational reliability. Our designs integrate seamlessly with architectural and structural plans, ensuring constructability and minimal conflicts during construction.",
      color: "purple",
    },
    {
      id: 2,
      title: "Fire Alarm System Design",
      image: "/FireAlarmSystemDesign.png",
      description:
        "Our team designs fire alarm systems that meet all local, state, and national codes, providing early detection and reliable notification in emergency scenarios. We focus on optimal device placement, zoning, and system redundancy to protect occupants and property.",
      details: [
        "Bridge, tank, and tower design",
        "Load condition analysis",
        "Serviceability and durability considerations",
      ],
      color: "blue",
    },
    {
      id: 3,
      title: "Automatic Sprinkler & Fire Suppression Design",
      image: "/AutomaticSprinklerFireSuppressionDesign.jpeg",
      description:
        "From wet pipe to pre-action and special hazard systems, we provide sprinkler and fire suppression designs tailored to your building's use, occupancy classification, and code requirements. Our systems are engineered for efficiency, reliability, and safety.",
      color: "green",
    },

    {
      id: 5,
      title: "Life Safety & Egress Planning",
      image: "/StructuralEngineer4.jpg",
      description:
        "We integrate life safety strategies into every design, including emergency egress paths, fire-rated construction, and alarm placement. Our planning ensures occupant safety and compliance with all relevant regulations.",
      details: [
        "Shallow and deep foundations",
        "Spread footings, mat foundations, piles, drilled shafts",
        "Load-based foundation design",
      ],
      color: "teal",
    },
    {
      id: 4,
      title: "HVAC System Engineering",
      image: "/HVACBuildingServiceDesign.png",
      description:
        "We design heating, ventilation, and air conditioning systems that deliver comfort, promote indoor air quality, and optimize energy use. Our HVAC solutions are sustainable, scalable, and tailored to your building's specific requirements.",
      color: "violet",
    },
    {
      id: 6,
      title: "Electrical Power & Lighting Design",
      image: "/IntegratedSystemCoordination.jpeg",
      description:
        "We provide comprehensive electrical system planning, including service entrance, distribution, lighting design, and power quality solutions. Our designs prioritize efficiency, reliability, and long-term adaptability.",
      details: [
        "Retaining walls and sound walls",
        "Earth pressure and drainage considerations",
        "Constructability-focused designs",
      ],
      color: "indigo",
    },
  ];

  const buildingSolutionsData = [
    {
      id: 8,
      title: "Integrated System Coordination",
      image: "/IntegratedSystemCoordination.jpeg", // Placeholder image for now
      description:
        "We ensure that every building system — from electrical and plumbing to fire protection — works together seamlessly. Our approach reduces design conflicts, construction delays, and budget overruns.",

      color: "emerald",
    },
    {
      id: 9,
      title: "Code Compliance & Submission Ready Plans",
      image: "/ai-placeholder/structural-studies.jpg", // Placeholder image
      description:
        "Our deliverables are fully compliant with national and local codes, including NFPA and building code requirements. We provide clear, detailed, and submission-ready plans to streamline approvals and inspections.",

      color: "cyan",
    },
    {
      id: 10,
      title: "Risk Assessment & Performance Optimization",
      image: "/RiskAssessment&PerformanceOptimization.jpeg",
      description:
        "We evaluate building performance, fire risk, and operational efficiency to design systems that balance safety, cost, and long-term functionality.",

      color: "violet",
    },
    {
      id: 11,
      title: "Sustainable & Energy-Efficient Design",
      image: "/ai-placeholder/existing-structure.jpg", // Placeholder image
      description:
        "Our designs focus on reducing energy consumption, minimizing environmental impact, and maximizing occupant comfort. We incorporate energy-efficient systems and sustainable practices into every project.",
      color: "orange",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <FontsStyle />
      <div className="min-h-screen bg-white overflow-hidden pt-16 sm:pt-24 md:pt-40">
        {" "}
        <HeroSection />
        <div className="mt-0 md:-mt-16">
          <AboutSection />
        </div>
        <div className="mt-0 md:-mt-20">
          <ServicesSection servicesData={buildingServicesData} />
        </div>
        <div className="-mt-16">
          <ContactCTA
            title="Need Expert Building Systems Design Support?"
            description="We are ready to provide reliable, data-driven, and optimized building systems design solutions. Our team of experts is committed to delivering precise designs, robust analysis, and practical support to ensure your project stands strong from concept to completion. Let us help you build safely, efficiently, and with confidence."
            buttonText="Get in Touch"
            link="/contact"
          />
        </div>
        <div className="mt-0 md:-mt-20">
          <StructuralStudiesSection
            structuralStudiesData={buildingSolutionsData}
          />
        </div>
        <div className="mt-0 md:-mt-16">
          <WhySSNSection />
        </div>
        <div className="mt-0 md:-mt-16">
          <MarketWeServe />
        </div>
        <div className="mt-0 md:-mt-16">
          <ProjectsSection />
        </div>
      </div>
    </>
  );
};

export default BuildingServiceDesign;
