import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WhyChooseSSN from "./WhyChooseSSN";

const MaterialTesting = () => {
  const location = useLocation();

  // Scroll to section when hash changes or component mounts
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

  const services = [
    {
      title: "Soil and Aggregate Physical & Strength Testing",
      id: "soil-aggregate-testing",
      content: `We evaluate soil and aggregate materials to determine engineering properties essential for foundations, pavements, and earthwork design.

- Grain Size Analysis (Sieve & Hydrometer)
- Atterberg Limits
- Standard & Modified Proctor Compaction
- California Bearing Ratio (CBR)
- Direct Shear and Triaxial Shear Tests
- Unconfined Compressive Strength (UCS)
- Specific Gravity and Moisture Content
- Relative Density and Consolidation Tests
- Aggregate Gradation, Abrasion, and Soundness`,
      image: "/Soil.jpg",
    },
    {
      title: "Fresh and Hardened Concrete Testing",
      id: "concrete-testing",
      content: `Our concrete testing services ensure compliance with mix design specifications, structural performance requirements, and durability standards.

- Slump Test
- Air Content Test
- Temperature Measurement
- Unit Weight and Yield
- Concrete Sampling and Cylinder Casting
- Compressive Strength
- Flexural Strength
- Splitting Tensile Strength
- Modulus of Elasticity
- Density and Absorption
- Rapid Chloride Permeability (RCPT)`,
      image: "/concreteTesting.jpg",
    },
    {
      title: "Rock Testing",
      id: "rock-testing",
      content: `Our rock testing services assess rock strength, durability, and deformation to support engineering decisions for foundations, slopes, excavations, pavements, and underground structures using reliable laboratory data.

- Uniaxial Compressive Strength (UCS) Testing
- Triaxial Compressive Strength Testing
- Point Load Strength Index Testing
- Brazilian Tensile Strength Testing
- Slake Durability Testing
- Porosity and Absorption Testing
- Direct Shear Strength Testing of Rock Joints
- Modulus of Elasticity and Deformation Testing`,
      image: "/Rock.jpg",
    },
    {
      title: "Bitumen and Asphalt Mix Testing",
      id: "bitumen-asphalt-testing",
      content: `We provide comprehensive asphalt and bituminous material testing for pavement design, production control, and performance evaluation.

- Asphalt Binder Penetration, Softening Point, and Viscosity
- Marshall Stability and Flow
- Superpave Mix Design Testing
- Asphalt Content by Ignition Method
- Gradation Analysis of Hot Mix Asphalt
- Bulk Specific Gravity and Density
- Indirect Tensile Strength
- Moisture Susceptibility Testing`,
      image: "/asphaltTesting.jpg",
    },
    {
      title: "Water Drainage & Permeability Testing",
      id: "water-drainage-testing",
      content: `Our hydraulic and permeability testing services evaluate infiltration, drainage capacity, and water movement through soils and materials.

- Constant Head and Falling Head Permeability
- Infiltration Rate Testing
- Soil Hydraulic Conductivity
- Porosity and Void Ratio Evaluation
- Filter Media Testing
- Permeable Pavement Testing`,
      image: "/permeabilityTesting.jpg",
    },
    {
      title: "Environmental Sampling & Testing",
      id: "environmental-testing",
      content: `We support environmental compliance and risk assessment through laboratory testing of soil, water, and construction materials.

- Soil Contamination Analysis
- Groundwater and Surface Water Sampling
- pH, Turbidity, and Conductivity Tests
- Heavy Metals and Hydrocarbon Screening
- Compaction Moisture and Volatile Content Testing
- Construction Debris Characterization`,
      image: "/environmentalTesting.jpg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100/50">
        <HeroSection />
        <AboutSection />

        <div className="w-full py-20 px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="w-full py-12 px-4 sm:px-8 lg:px-16 xl:px-24">
            <div className="text-center mb-12 relative max-w-6xl mx-auto">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-60"></div>
              <h2 className="block mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 font-playfair tracking-tight">
                Our Material Testing Engineering Services
              </h2>
            </div>
          </div>

          <div className="max-w-[1800px] mx-auto space-y-24">
            {services.map((service, idx) => {
              return (
                <motion.div
                  key={idx}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center scroll-mt-24 lg:scroll-mt-40 xl:scroll-mt-32`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className={`relative group ${idx % 2 === 1 ? "lg:order-last" : ""}`}
                  >
                    <div className="absolute -inset-3 bg-gradient-to-r from-yellow-400/10 to-blue-400/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[28rem] md:h-[34rem] object-cover transform transition-transform duration-700 group-hover:scale-105"
                        initial={{ scale: 1.05 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.8, delay: idx * 0.15 + 0.2 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                    </div>
                  </div>

                  <div className="space-y-8 px-4 md:px-8">
                    <div className="relative">
                      <h2 className="text-4xl sm:text-5xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight tracking-tight">
                        {service.title}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mt-6 mb-8 rounded-full"></div>
                    </div>

                    <div className="font-roboto text-gray-700 text-xl leading-relaxed">
                      {service.content.split("\n").map((line, i) => {
                        line = line.trim();
                        if (line.startsWith("- ")) {
                          return (
                            <ul key={i} className="list-disc list-inside mb-2">
                              <li>{line.replace("- ", "")}</li>
                            </ul>
                          );
                        } else if (line !== "") {
                          return (
                            <p key={i} className="mb-2">
                              {line}
                            </p>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <WhyChooseSSN />

        <div className="w-full bg-white pt-10 pb-20 px-4 md:px-8">
          <div className="max-w-[1800px] mx-auto">
            <div className="text-center mb-12">
              <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-500 font-playfair">
                Our Commitment
              </span>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mt-6 rounded-full mx-auto"></div>
            </div>

            <div className="font-roboto text-gray-700 text-xl leading-relaxed space-y-6 max-w-4xl mx-auto text-center">
              <p>
                Our testing services support compliance with local and
                international standards, minimize construction risk, and ensure
                material performance.
              </p>
              <p>
                These testing services are backed by SSN's commitment to
                technical excellence, accurate results, and integrated project
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
};

export default MaterialTesting;
