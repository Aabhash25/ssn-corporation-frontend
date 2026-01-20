"use client";
import { useState, useEffect } from "react";

import ContactCTA from "../../../components/contactCTA";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import StructuralStudiesSection from "./StructuralStudiesSection"; // Correct import
import WhySSNSection from "./WhySSNSection";
import ProjectsSection from "./ProjectsSection";
// import MarketWeServe from "./MarketWeServe";

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

const ConstructionAdministration = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const constructionAdminServicesData = [
    {
      id: 1,
      title: "Construction Engineering Inspection (CEI)",
      image: "/",
      description:
        "On-site oversight to verify construction activities meet design standards, specifications, and regulatory requirements.",
      color: "purple",
    },
    {
      id: 2,
      title: "Construction Materials Sampling and Testing",
      image: "/ai-placeholder/bridge-tank-tower.jpg",
      description:
        "Comprehensive testing services to confirm material quality, performance, and compliance with project specifications.",
      color: "blue",
    },
    {
      id: 3,
      title: "Contract Administration",
      image: "/ai-placeholder/roadway-transportation.jpg",
      description:
        "Professional management of contracts, documentation, change orders, and communication between all project stakeholders.",
      color: "green",
    },

    {
      id: 5,
      title: "Bid Assistance",
      image: "/",
      description:
        "Support during the procurement process, including preparing bid documents, responding to bidder questions, and evaluating proposals.",
      color: "teal",
    },
    {
      id: 4,
      title: "Project Closeout",
      image: "/ai-placeholder/structural-evaluation.jpg",
      description:
        "Organized completion of all documentation, certifications, and final deliverables to ensure a smooth handover.",
      color: "violet",
    },
    {
      id: 6,
      title: "Working Drawing Reviews",
      image: "/ai-placeholder/retaining-wall.jpg",
      description:
        "Detailed evaluation of shop drawings and construction documents to ensure alignment with design intent.",
      color: "indigo",
    },
    {
      id: 7,
      title: "Cost Estimates",
      image: "/ai-placeholder/site-feasibility.jpg",
      description:
        "Accurate and reliable cost opinions to support budgeting, planning, and informed decision-making.",
      color: "emerald",
    },
    {
      id: 8,
      title: "Construction Coordination",
      image: "/ai-placeholder/existing-structure.jpg",
      description:
        "Ongoing collaboration with owners, contractors, and consultants to resolve issues efficiently and keep projects moving forward.",
      color: "orange",
    },
  ];

  const constructionAdminSolutionsData = [
    {
      id: 8,
      title: "Quality Assurance & Compliance",
      image: "/ai-placeholder/site-feasibility.jpg", // Placeholder image for now
      description:
        "We help ensure every project meets applicable codes, standards, and regulatory requirements.",

      color: "emerald",
    },
    {
      id: 9,
      title: "Risk Mitigation",
      image: "/ai-placeholder/structural-studies.jpg", // Placeholder image
      description:
        "Early identification of potential issues reduces delays, rework, and unexpected costs.",

      color: "cyan",
    },
    {
      id: 10,
      title: "Schedule & Budget Control",
      image: "/ai-placeholder/disaster-evaluation.jpg", // Placeholder for now
      description:
        "Proactive oversight supports on-time delivery and cost-effective project execution.",

      color: "violet",
    },
    {
      id: 11,
      title: "Integrated Project Delivery",
      image: "/ai-placeholder/existing-structure.jpg", // Placeholder image
      description:
        "Our multidisciplinary coordination approach improves communication and enhances overall project outcomes.",
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
          <ServicesSection servicesData={constructionAdminServicesData} />
        </div>
        <div className="-mt-16">
          <ContactCTA
            title="Need Expert Construction Administration Support?"
            description="We are ready to provide reliable, data-driven, and optimized construction administration solutions. Our team of experts is committed to delivering precise oversight, robust quality control, and practical support to ensure your project stands strong from concept to completion. Let us help you build safely, efficiently, and with confidence."
            buttonText="Get in Touch"
            link="/contact"
          />
        </div>
        <div className="mt-0 md:-mt-20">
          <StructuralStudiesSection
            structuralStudiesData={constructionAdminSolutionsData}
          />
        </div>
        <div className="mt-0 md:-mt-16">
          <WhySSNSection />
        </div>
        <div className="mt-0 md:-mt-16">{/* <MarketWeServe /> */}</div>
        {/* <div className="mt-0 md:-mt-16">
          <ProjectsSection />
        </div> */}
      </div>
    </>
  );
};

export default ConstructionAdministration;
