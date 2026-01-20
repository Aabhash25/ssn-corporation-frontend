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

const LandPlanningAndPermitting = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const landPlanningServicesData = [
    {
      id: 1,
      title: "Site Feasibility, Due Diligence",
      image: "/StructuralEngineer3.jpg",
      description:
        "Comprehensive site analysis including zoning, constraints, utilities, and environmental factors to identify risks and opportunities.",
      details: [
        "Zoning and land-use analysis",
        "Site constraints evaluation (setbacks, easements, overlays)",
        "Utility availability and capacity review",
        "Environmental and floodplain screening",
        "Preliminary yield and development studies",
      ],
      color: "purple",
    },
    {
      id: 2,
      title: "Zoning & Entitlements Support",
      image: "/ai-placeholder/bridge-tank-tower.jpg",
      description:
        "Strategic support for zoning changes, variances, and special permits with comprehensive technical documentation.",
      details: [
        "Rezoning documentation support",
        "Variances and special exception applications",
        "Conditional use permit coordination",
        "Technical justification reports",
      ],
      color: "blue",
    },
    {
      id: 3,
      title: "Conceptual Site Planning",
      image: "/ai-placeholder/roadway-transportation.jpg",
      description:
        "Development of conceptual site layouts and planning strategies that optimize land use and meet project objectives.",
      details: [
        "Concept site layouts",
        "Building placement and test fits",
        "Parking and circulation planning",
        "Access and connectivity planning",
        "Land optimization studies",
      ],
      color: "green",
    },

    {
      id: 5,
      title: "Permitting & Agency Coordination",
      image: "/StructuralEngineer4.jpg",
      description:
        "Complete permitting services including application preparation, agency coordination, and approval management.",
      details: [
        "Permit application preparation",
        "Technical documentation for submittals",
        "Coordination with reviewing authorities",
        "Response to technical review comments",
        "Permit tracking and management",
      ],
      color: "teal",
    },
    {
      id: 4,
      title: "Civil & Infrastructure Planning",
      image: "/ai-placeholder/structural-evaluation.jpg",
      description:
        "Comprehensive civil engineering and infrastructure planning for site development and utility systems.",
      details: [
        "Preliminary grading and drainage concepts",
        "Stormwater management strategies",
        "Water, sewer, and utility planning",
        "Roadway and access coordination",
        "Infrastructure feasibility analysis",
      ],
      color: "violet",
    },
    {
      id: 6,
      title: "Construction Drawings and Specification",
      image: "/ai-placeholder/retaining-wall.jpg",
      description:
        "Detailed construction-ready documents and specifications compliant with all regulatory requirements.",
      details: [
        "Site plans and technical exhibits",
        "Code and zoning compliance documentation",
        "Phasing plans and development packages",
        "Consultant coordination drawings",
        "As-built and record documentation",
      ],
      color: "indigo",
    },
  ];

  const landPlanningSolutionsData = [
    {
      id: 8,
      title: "Pre-Development Planning",
      image: "/ai-placeholder/site-feasibility.jpg", // Placeholder image for now
      description:
        "Comprehensive pre-development services including site selection, feasibility studies, and early risk identification to ensure project success.",

      color: "emerald",
    },
    {
      id: 9,
      title: "Entitlement & Approval Support",
      image: "/ai-placeholder/structural-studies.jpg", // Placeholder image
      description:
        "End-to-end entitlement support including zoning strategy development and streamlined approval coordination processes.",

      color: "cyan",
    },
    {
      id: 10,
      title: "Design & Technical Coordination",
      image: "/ai-placeholder/disaster-evaluation.jpg", // Placeholder for now
      description:
        "Integrated coordination between planning, engineering, and architecture teams to deliver constructible solutions.",

      color: "violet",
    },
    {
      id: 11,
      title: "Development Execution Support",
      image: "/ai-placeholder/existing-structure.jpg", // Placeholder image
      description:
        "Ongoing support throughout the development process including regulatory coordination and construction phase assistance.",
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
          <ServicesSection servicesData={landPlanningServicesData} />
        </div>
        <div className="-mt-16">
          <ContactCTA
            title="Need Expert Land Planning & Permitting Support?"
            description="We are ready to provide reliable, data-driven, and optimized land planning and permitting solutions. Our team of experts is committed to delivering precise planning, robust analysis, and practical support to ensure your project stands strong from concept to completion. Let us help you build safely, efficiently, and with confidence."
            buttonText="Get in Touch"
            link="/contact"
          />
        </div>
        <div className="mt-0 md:-mt-20">
          <StructuralStudiesSection
            structuralStudiesData={landPlanningSolutionsData}
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

export default LandPlanningAndPermitting;
