import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WhyChooseSSN from "./WhyChooseSSN";
import ServicesSection from "./ServicesSection";

const MaterialTesting = () => {
  const location = useLocation();

  // Scroll to section when hash changes
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const isDesktop = window.innerWidth >= 1024;
          const isXlScreen = window.innerWidth >= 1440;

          let navbarHeight = 0;
          if (isDesktop) {
            const topBarHeight = isXlScreen ? 56 : 48;
            const mainNavHeight = isXlScreen ? 96 : 80;
            navbarHeight = topBarHeight + mainNavHeight + 200;
          } else {
            navbarHeight = 64 + 120;
          }

          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  const servicesData = [
    {
      id: "soil-aggregate-testing",
      title: "Soil and Aggregate Physical & Strength Testing",
      description:
        "We evaluate soil and aggregate materials to determine engineering properties essential for foundations, pavements, and earthwork design.",
      details: [
        "Grain Size Analysis (Sieve & Hydrometer)",
        "Atterberg Limits",
        "Standard & Modified Proctor Compaction",
        "California Bearing Ratio (CBR)",
        "Direct Shear and Triaxial Shear Tests",
        "Unconfined Compressive Strength (UCS)",
        "Specific Gravity and Moisture Content",
        "Relative Density and Consolidation Tests",
        "Aggregate Gradation, Abrasion, and Soundness",
      ],
      image: "/Soil.jpg",
    },
    {
      id: "concrete-testing",
      title: "Fresh and Hardened Concrete Testing",
      description:
        "Our concrete testing services ensure compliance with mix design specifications, structural performance requirements, and durability standards.",
      details: [
        "Slump Test",
        "Air Content Test",
        "Temperature Measurement",
        "Unit Weight and Yield",
        "Concrete Sampling and Cylinder Casting",
        "Compressive Strength",
        "Flexural Strength",
        "Splitting Tensile Strength",
        "Modulus of Elasticity",
        "Density and Absorption",
        "Rapid Chloride Permeability (RCPT)",
      ],
      image: "/concreteTesting.jpg",
    },
    {
      id: "rock-testing",
      title: "Rock Testing",
      description:
        "Our rock testing services assess rock strength, durability, and deformation to support engineering decisions for foundations, slopes, excavations, pavements, and underground structures using reliable laboratory data.",
      details: [
        "Uniaxial Compressive Strength (UCS) Testing",
        "Triaxial Compressive Strength Testing",
        "Point Load Strength Index Testing",
        "Brazilian Tensile Strength Testing",
        "Slake Durability Testing",
        "Porosity and Absorption Testing",
        "Direct Shear Strength Testing of Rock Joints",
        "Modulus of Elasticity and Deformation Testing",
      ],
      image: "/Rock.jpg",
    },
    {
      id: "bitumen-asphalt-testing",
      title: "Bitumen and Asphalt Mix Testing",
      description:
        "We provide comprehensive asphalt and bituminous material testing for pavement design, production control, and performance evaluation.",
      details: [
        "Asphalt Binder Penetration, Softening Point, and Viscosity",
        "Marshall Stability and Flow",
        "Superpave Mix Design Testing",
        "Asphalt Content by Ignition Method",
        "Gradation Analysis of Hot Mix Asphalt",
        "Bulk Specific Gravity and Density",
        "Indirect Tensile Strength",
        "Moisture Susceptibility Testing",
      ],
      image: "/asphaltTesting.jpg",
    },
    {
      id: "water-drainage-testing",
      title: "Water Drainage & Permeability Testing",
      description:
        "Our hydraulic and permeability testing services evaluate infiltration, drainage capacity, and water movement through soils and materials.",
      details: [
        "Constant Head and Falling Head Permeability",
        "Infiltration Rate Testing",
        "Soil Hydraulic Conductivity",
        "Porosity and Void Ratio Evaluation",
        "Filter Media Testing",
        "Permeable Pavement Testing",
      ],
      image: "/permeabilityTesting.jpg",
    },
    {
      id: "environmental-testing",
      title: "Environmental Sampling & Testing",
      description:
        "We support environmental compliance and risk assessment through laboratory testing of soil, water, and construction materials.",
      details: [
        "Soil Contamination Analysis",
        "Groundwater and Surface Water Sampling",
        "pH, Turbidity, and Conductivity Tests",
        "Heavy Metals and Hydrocarbon Screening",
        "Compaction Moisture and Volatile Content Testing",
        "Construction Debris Characterization",
      ],
      image: "/environmentalTesting.jpg",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100/50">
      <HeroSection />
      <AboutSection />

      <ServicesSection servicesData={servicesData} />

      <WhyChooseSSN />

      <style jsx>{`
        .font-roboto {
          font-family: "Roboto", sans-serif;
          font-feature-settings:
            "kern" 1,
            "liga" 1;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
          font-feature-settings:
            "kern" 1,
            "liga" 1;
        }
      `}</style>
    </div>
  );
};

export default MaterialTesting;
