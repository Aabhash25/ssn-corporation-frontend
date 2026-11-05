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
      title: "On-Site Construction Materials Testing (CMT)",
      id: "on-site-construction-materials-testing",
      content: `Our field technicians test and sample materials directly on your project site, giving you real-time verification that work meets plans and specifications.

- Fresh Concrete Sampling, Slump, Air Content, and Temperature
- Concrete Cylinder and Beam Casting and Field Curing
- In-Place Density Testing (Nuclear Gauge, Sand Cone)
- Asphalt Sampling and Field Density Testing
- Masonry Grout and Mortar Sampling
- Soil and Aggregate Field Sampling
- Daily Field Reports and Test Documentation`,
      image: "/concreteTesting.webp",
    },
    {
      title: "Soil & Aggregate Laboratory Testing",
      id: "soil-aggregate-laboratory-testing",
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
      image: "/Soil.webp",
    },
    {
      title: "Concrete, Masonry & Asphalt Laboratory Testing",
      id: "concrete-masonry-asphalt-laboratory-testing",
      content: `Our laboratory verifies concrete, masonry, and asphalt materials against mix design, structural, and durability requirements.

- Concrete Compressive, Flexural, and Splitting Tensile Strength
- Concrete Density, Absorption, and Modulus of Elasticity
- Rapid Chloride Permeability (RCPT)
- Masonry Unit, Prism, Mortar, and Grout Compressive Strength
- Asphalt Binder Penetration, Softening Point, and Viscosity
- Marshall Stability and Flow
- Asphalt Content by Ignition Method and Gradation
- Bulk Specific Gravity, Density, and Moisture Susceptibility`,
      image: "/asphaltTesting.webp",
    },
    {
      title: "Earthwork Inspection & Compaction Testing",
      id: "earthwork-inspection-compaction-testing",
      content: `We inspect and test earthwork operations to confirm that subgrades, fills, and backfills are placed and compacted to project requirements.

- Subgrade and Fill Observation
- Field Density Testing (Nuclear Gauge, Sand Cone)
- Proctor Correlation and Percent Compaction Reporting
- Moisture Content Verification
- Proofrolling Observation
- Utility Trench Backfill Testing
- Lift Thickness and Material Suitability Checks`,
      image: "/Soil.webp",
    },
    {
      title: "Special Inspections & Structural Testing",
      id: "special-inspections-structural-testing",
      content: `Our inspectors provide code-required special inspections and structural testing to verify that critical building elements are built as designed.

- Cast-in-Place Concrete and Reinforcing Steel Inspection
- Post-Installed and Cast-in-Place Anchor Inspection
- Structural Steel and Bolting Inspection
- Masonry Inspection
- Soils and Foundation Verification
- Fireproofing and Related Inspections
- IBC Chapter 17 Reporting and Documentation`,
      image: "/concreteTesting.webp",
    },
    {
      title: "Retaining Wall, Foundation & Pavement Inspections",
      id: "retaining-wall-foundation-pavement-inspections",
      content: `We inspect and test the structural and site elements that carry your project's loads, from walls and footings to the pavement surface.

- Retaining Wall Subgrade, Drainage, and Backfill Inspection
- Segmental and Cast-in-Place Wall Observation
- Footing and Foundation Excavation Inspection
- Reinforcement and Concrete Placement Verification
- Pavement Subgrade and Base Course Testing
- Asphalt Placement and Compaction Inspection
- Concrete Pavement Sampling and Testing`,
      image: "/asphaltTesting.webp",
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
                Our Construction Material Testing Services{" "}
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

      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      `,
        }}
      />
    </>
  );
};

export default MaterialTesting;
