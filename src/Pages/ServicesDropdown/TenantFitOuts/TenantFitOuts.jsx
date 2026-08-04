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

const ArchitectureAndEngineering = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const architecturalServicesData = [
    {
      id: 1,
      title: " Interior Design & Space Planning",
      image: "/DesignSpacePlanning.webp",
      description:
        "We develop intelligent layouts and design concepts that enhance functionality, optimize flow, and reflect your brand identity. Our services include programming, test fits, interior layouts, and finish selections. ",
      color: "purple",
    },
    {
      id: 2,
      title: "Mechanical, Electrical & Plumbing (MEP) Engineering",
      image: "/MechanicalElectricalPlumbingEngineering.webp",
      description:
        "Our engineers design coordinated building systems that support comfort, energy efficiency, and operational performance, including HVAC, power distribution, lighting, plumbing, and life-safety systems. ",
      details: [
        "Bridge, tank, and tower design",
        "Load condition analysis",
        "Serviceability and durability considerations",
      ],
      color: "blue",
    },
    {
      id: 3,
      title: " Structural Evaluation & Modifications",
      image: "/StructuralEvaluationModifications.webp",
      description:
        "We assess existing building conditions and design structural modifications when required to support new layouts, equipment, or architectural features. ",
      color: "green",
    },

    {
      id: 5,
      title: "Code Compliance & Permit Documentation",
      image: "/CodeCompliancePermitDocumentation.webp",
      description:
        "We ensure your project meets all applicable building codes, zoning regulations, accessibility requirements, and life-safety standards while preparing complete permit-ready drawings. ",
      details: [
        "Shallow and deep foundations",
        "Spread footings, mat foundations, piles, drilled shafts",
        "Load-based foundation design",
      ],
      color: "teal",
    },
    {
      id: 4,
      title: "BIM Modeling & 3D Visualization",
      image: "/BIMModeling3D Visualization.webp",
      description:
        "Through Building Information Modeling (BIM) and realistic 3D renderings, we help clients visualize the final space, improve coordination, and reduce conflicts before construction begins. ",
      color: "violet",
    },
    {
      id: 6,
      title: "Construction Documentation & Project Support",
      image: "/ConstructionDocumentationProjectSupport.webp",
      description:
        "We produce detailed construction drawings and specifications, and provide ongoing technical support during construction to address RFIs, review submittals, and help maintain quality and consistency. ",
      details: [
        "Retaining walls and sound walls",
        "Earth pressure and drainage considerations",
        "Constructability-focused designs",
      ],
      color: "indigo",
    },
  ];

  const structuralStudiesData = [
    {
      id: 8,
      title: "Turnkey Tenant Fit-Out Delivery",
      image: "/TurnkeyTenantFitOutDelivery.webp", // P
      description:
        "A complete end-to-end solution covering planning, design, engineering, permitting, and construction coordination — ideal for clients seeking a single point of accountability. ",

      color: "emerald",
    },
    {
      id: 9,
      title: "Design-Build Collaboration Support ",
      image: "/DesignBuildCollaborationSupport.webp", // Placeholder image
      description:
        "We partner with contractors and internal client teams to provide engineering coordination, and technical documentation throughout the project lifecycle. ",

      color: "cyan",
    },
    {
      id: 10,
      title: "Tenant Improvement Planning & Feasibility Studies",
      image: "/TenantImprovementPlanningFeasibilityStudies.webp", // Placeholder for now
      description:
        "We support early-stage decision making with test fits, space utilization studies, budget planning support, and technical feasibility assessments to help clients make informed leasing and investment decisions. ",

      color: "violet",
    },
    {
      id: 11,
      title: "Renovation & Workplace Optimization Solutions",
      image: "/RenovationWorkplaceOptimizationSolutions.webp", // Placeholder image
      description:
        "For occupied spaces, we offer phased renovation strategies, workplace optimization studies, and reconfiguration solutions that minimize disruption while improving performance, flexibility, and employee experience. ",
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
          <ServicesSection servicesData={architecturalServicesData} />
        </div>
        <div className="-mt-16">
          <ContactCTA
            title="Need Expert Structural Engineering Support?"
            description="We are ready to provide reliable, data-driven, and optimized structural engineering solutions. Our team of experts is committed to delivering precise designs, robust analysis, and practical support to ensure your project stands strong from concept to completion. Let us help you build safely, efficiently, and with confidence."
            buttonText="Get in Touch"
            link="/contact"
          />
        </div>
        <div className="mt-0 md:-mt-12">
          <StructuralStudiesSection
            structuralStudiesData={structuralStudiesData}
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

export default ArchitectureAndEngineering;
