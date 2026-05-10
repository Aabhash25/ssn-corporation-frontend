"use client";
import { useState, useEffect } from "react";

import ContactCTA from "../../../components/contactCTA";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import StructuralStudiesSection from "./StructuralStudiesSection"; // Correct import
import WhySSNSection from "./WhySSNSection";
import ProjectsSection from "./ProjectsSection";

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

const StructuralEngineering = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const structuralServicesData = [
    {
      id: 1,
      title: "Building Structural Analysis and Design",
      image: "/StructuralEngineer3.jpg",
      description:
        "We provide structural analysis and design for residential, commercial, industrial, and institutional buildings. Services include gravity and lateral load analysis, framing design, and preparation of structural construction documents.",
      details: [
        "Residential, commercial, industrial, and institutional buildings",
        "Gravity and lateral load analysis",
        "Framing design",
        "Structural construction document preparation",
      ],
      color: "purple",
    },
    {
      id: 2,
      title: "Bridge, Tank, and Tower Structural Design",
      image: "/BridgeTankandTowerStructuralDesign.jpeg",
      description:
        "We offer structural engineering services for bridges, tanks, towers, and similar structures. Designs consider applicable loading conditions, serviceability requirements, and long-term durability.",
      details: [
        "Bridge, tank, and tower design",
        "Load condition analysis",
        "Serviceability and durability considerations",
      ],
      color: "blue",
    },
    {
      id: 3,
      title: "Roadway and Transportation Structure Engineering",
      image: "/RoadwayandTransportationStructureEngineering.png",
      description:
        "Our structural services support roadway and transportation projects, including culverts, underpasses, retaining systems, and ancillary roadway structures. Designs comply with applicable transportation standards and project requirements.",
      details: [
        "Culverts, underpasses, retaining systems",
        "Roadway structure analysis and design",
        "Compliance with transportation standards",
      ],
      color: "green",
    },
    {
      id: 4,
      title: "Retaining Wall and Site Structure Design",
      image: "/RetainingWallandSiteStructureDesign.jpg",
      description:
        "SSN Corporation designs retaining walls, sound walls, and other site structures. Our designs address earth pressures, drainage considerations, and constructability.",
      details: [
        "Retaining walls and sound walls",
        "Earth pressure and drainage considerations",
        "Constructability-focused designs",
      ],
      color: "indigo",
    },
    {
      id: 5,
      title: "Foundation Structural Analysis and Design",
      image: "/StructuralEngineer4.jpg",
      description:
        "We provide structural analysis and design for shallow and deep foundations, including spread footings, mat foundations, piles, and drilled shafts, based on project loading and site conditions.",
      details: [
        "Shallow and deep foundations",
        "Spread footings, mat foundations, piles, drilled shafts",
        "Load-based foundation design",
      ],
      color: "teal",
    },
    {
      id: 6,
      title: "Structural Evaluation, Retrofitting, and Rehabilitation",
      image: "/StructuralEvaluationRetrofittingandRehabilitation.jpeg",
      description:
        "Our engineers evaluate existing structures and develop retrofit or rehabilitation solutions to address structural deficiencies, increased loading, or updated code requirements.",
      details: [
        "Structural evaluation",
        "Retrofitting solutions",
        "Rehabilitation for code compliance or increased load",
      ],
      color: "violet",
    },
    {
      id: 7,
      title: "Post-Tensioned Slab Design",
      image: "/StructuralEngineer2.png",
      description:
        "We design post-tensioned slab-on-grade and elevated slab systems to improve structural performance, reduce cracking, and optimize material use.",
      details: [
        "Post-tensioned slab-on-grade",
        "Elevated slab systems",
        "Improved structural performance and material optimization",
      ],
      color: "orange",
    },
  ];

  const structuralStudiesData = [
    {
      id: 8,
      title: "Structural Design for New Construction",
      image: "/ai-placeholder/site-feasibility.jpg", // Placeholder image for now
      description:
        "SSN Corporation provides structural engineering solutions for new buildings, facilities, and infrastructure projects from concept through construction.",
      details: [
        "Design and analysis of new buildings and facilities",
        "Development of construction documents and drawings",
        "Integration of structural systems for safety and efficiency",
        "Coordination with architectural and MEP designs",
        // "(We can use a building design structure set – may be Catana construction)",
      ],
      color: "emerald",
    },
    {
      id: 9,
      title: "Transportation and Facility Infrastructure Structures",
      image: "/ai-placeholder/structural-studies.jpg", // Placeholder image
      description:
        "We deliver structural solutions for transportation-related and facility support structures, including foundations, culverts, retaining systems, and equipment support structures.",
      details: [
        "Foundations for roads, bridges, and facility structures",
        "Design of culverts, retaining walls, and load-bearing supports",
        "Equipment support structures for industrial and utility facilities",
        // "(I will provide image later)",
      ],
      color: "cyan",
    },
    {
      id: 10,
      title: "Structural Evaluation of Disaster-Damaged Structures",
      image: "/ai-placeholder/disaster-evaluation.jpg", // Placeholder for now
      description:
        "Our engineers perform structural evaluations of buildings and infrastructure affected by fire, earthquake, flood, wind, or other natural or man-made disasters. Services include condition assessments, damage documentation, and repair or retrofit recommendations.",
      details: [
        "Condition assessments of disaster-affected structures",
        "Damage documentation and analysis",
        "Repair and retrofit recommendations for safety and performance",
        // "(Placeholder – image and additional details to be provided)",
      ],
      color: "violet",
    },
    {
      id: 11,
      title: "Existing Structure Improvements",
      image: "/ai-placeholder/existing-structure.jpg", // Placeholder image
      description:
        "We support rehabilitation, strengthening, and adaptive reuse of existing structures to extend service life and improve performance.",
      details: [
        "Structural strengthening and retrofitting",
        "Adaptive reuse of existing buildings",
        "Extension of service life through targeted interventions",
        "Optimization of existing structure performance",
      ],
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
          <ServicesSection servicesData={structuralServicesData} />
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
          <ProjectsSection />
        </div>
      </div>
    </>
  );
};

export default StructuralEngineering;
