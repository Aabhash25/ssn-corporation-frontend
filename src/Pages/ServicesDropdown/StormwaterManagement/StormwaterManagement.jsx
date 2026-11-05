"use client";
import { useState, useEffect } from "react";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import StructuralStudiesSection from "./StructuralStudiesSection";
import WhySSNSection from "./WhySSNSection";
import ContactFormSection from "../../../components/ContactFormSection";

// ⬇️ Paste the FontsStyle component here, exactly as in ConstructionAdministration.jsx
const FontsStyle = () => null; // replace this line with the real block

const StormwaterManagement = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const stormwaterServicesData = [
    {
      id: 1,
      title: "Stormwater Management Plans & BMP Design",
      image: "/ai-placeholder/site-feasibility.webp",
      description:
        "Site-specific stormwater control plans with best management practices designed to meet local, state, and federal requirements.",
      color: "blue",
    },
    {
      id: 2,
      title: "Storm Drainage & Conveyance Design",
      image: "/ai-placeholder/roadway-transportation.webp",
      description:
        "Design of storm sewers, inlets, culverts, channels, and outfalls that move runoff safely and efficiently.",
      color: "teal",
    },
    {
      id: 3,
      title: "Detention & Retention Facilities",
      image: "/ai-placeholder/bridge-tank-tower.webp",
      description:
        "Detention and retention ponds, underground storage, and infiltration systems sized to control peak flows and protect downstream properties.",
      color: "cyan",
    },
    {
      id: 4,
      title: "Hydrology & Hydraulic Analysis",
      image: "/ai-placeholder/structural-studies.webp",
      description:
        "Watershed delineation, runoff modeling, and hydraulic analysis to support sound drainage decisions.",
      color: "indigo",
    },
    {
      id: 5,
      title: "Erosion & Sediment Control",
      image: "/ai-placeholder/retaining-wall.webp",
      description:
        "Erosion and sediment control plans and details that protect waterways and keep construction sites compliant.",
      color: "emerald",
    },
    {
      id: 6,
      title: "Floodplain & Flood Risk Studies",
      image: "/ai-placeholder/disaster-evaluation.webp",
      description:
        "Floodplain analysis and flood risk assessment to guide site planning, grading, and development in flood-prone areas.",
      color: "violet",
    },
    {
      id: 7,
      title: "Stormwater Permitting & Compliance",
      image: "/ai-placeholder/structural-evaluation.webp",
      description:
        "Preparation and submittal of stormwater permits and reports, with coordination through agency review and approval.",
      color: "purple",
    },
    {
      id: 8,
      title: "Drainage Evaluation & Retrofit",
      image: "/ai-placeholder/existing-structure.webp",
      description:
        "Evaluation of existing drainage systems, with practical retrofit solutions for flooding, failing infrastructure, and updated regulations.",
      color: "orange",
    },
  ];

  const stormwaterSolutionsData = [
    {
      id: 9,
      title: "Regulatory Compliance",
      image: "/ai-placeholder/site-feasibility.webp",
      description:
        "Designs that meet applicable stormwater, water quality, and erosion control requirements from the start.",
      color: "emerald",
    },
    {
      id: 10,
      title: "Flood & Property Protection",
      image: "/ai-placeholder/disaster-evaluation.webp",
      description:
        "Drainage solutions that reduce flood risk and protect your site, your neighbors, and downstream areas.",
      color: "cyan",
    },
    {
      id: 11,
      title: "Cost-Effective Design",
      image: "/ai-placeholder/structural-studies.webp",
      description:
        "Efficient layouts and right-sized systems that control construction cost without cutting corners.",
      color: "violet",
    },
    {
      id: 12,
      title: "Integrated Site Engineering",
      image: "/ai-placeholder/existing-structure.webp",
      description:
        "Stormwater design coordinated with civil, geotechnical, and structural work for smoother permitting and construction.",
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
        <HeroSection />
        <div className="mt-0 md:-mt-16">
          <AboutSection />
        </div>
        <div className="mt-0 md:-mt-20">
          <ServicesSection servicesData={stormwaterServicesData} />
        </div>
        <div className="mt-0 md:-mt-16">
          <ContactFormSection
            layout="split"
            compact
            title="Need Expert Stormwater & Drainage Engineering?"
            description="We deliver reliable, code-compliant stormwater and drainage solutions, from hydrology studies and BMP design to permitting and construction support. Let us help you manage runoff, protect your site, and keep your project moving."
          />
        </div>
        <div className="mt-0 md:-mt-12">
          <StructuralStudiesSection
            structuralStudiesData={stormwaterSolutionsData}
          />
        </div>
        <div className="mt-0 md:-mt-16">
          <WhySSNSection />
        </div>
      </div>
    </>
  );
};

export default StormwaterManagement;
