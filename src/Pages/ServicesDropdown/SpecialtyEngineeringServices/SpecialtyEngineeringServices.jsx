import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
const SpecialtyEngineeringServices = () => {
  const location = useLocation();
  // Scroll to section when hash changes or component mounts
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Get screen size
          const isDesktop = window.innerWidth >= 1024;
          const isXlScreen = window.innerWidth >= 1440;

          // Calculate navbar height based on screen size
          let navbarHeight = 0;
          if (isDesktop) {
            // Top bar height
            const topBarHeight = isXlScreen ? 56 : 48;
            // Main navbar height
            const mainNavHeight = isXlScreen ? 96 : 80;
            // Add extra padding to show full image
            navbarHeight = topBarHeight + mainNavHeight + 200; // Total offset
          } else {
            navbarHeight = 64 + 120; // Mobile: navbar + padding
          }

          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 150); // Increased delay
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]); // Changed to only watch hash, not entire location

  const services = [
    {
      title: "Pavement Engineering Services",
      id: "pavement-engineering",
      content: `Our pavement engineering services support new construction and rehabilitation of roadways, parking areas, and paved surfaces. We assess traffic loading, subgrade conditions, and environmental factors to recommend appropriate pavement structures — including flexible (asphalt), rigid (concrete), or composite systems — with optimized layer thickness, materials specification, and construction guidance that extend service life and minimize maintenance costs.`,
      image: "/PavementEngineeringServices.webp",
    },
    {
      title: "Trenchless Design (HDD, Pipe Jacking, Microtunneling)",
      id: "trenchless-design",
      content: `SSN Engineers specializes in trenchless utility installation solutions when open-cut methods are impractical or disruptive.

- Horizontal Directional Drilling (HDD)
- Pipe Jacking & Microtunneling
- Feasibility studies, alignment analysis, and geotechnical coordination
- Construction support documentation and as-built deliverables

These methods reduce environmental impact, improve safety, and preserve existing site conditions.`,
      image: "/TrenchlessDesign(HDD,PipeJacking,Microtunneling).webp",
    },
    {
      title: "Traffic Engineering Services",
      id: "traffic-engineering",
      content: `Our traffic engineering solutions help clients optimize mobility, safety, and regulatory compliance for public and private developments.

- Traffic impact studies & trip generation analysis
- Signing, striping, and pavement marking plans
- Parking analysis and circulation planning
- Access management & site driveway evaluations`,
      image: "/TrafficEngineeringServices.webp",
    },
    {
      title: "Mechanical, Electrical, and Plumbing (MEP) Design",
      id: "mep-design",
      content: `SSN Engineers provides full-service MEP design for buildings of all types.

- Mechanical — HVAC, ventilation, load calculations
- Electrical — power distribution, lighting, backup systems
- Plumbing — domestic water, sanitary, storm drainage

Includes detailed drawings, specifications, equipment sizing, and coordination with architectural and structural disciplines.`,
      image: "/Mechanical,Electrical,andPlumbing(MEP)Design.webp",
    },
    {
      title: "Special Inspections Services (IBC Chapter 17)",
      id: "special-inspections",
      content: `Certified inspectors provide:

- Structural steel and concrete reinforcement monitoring
- Masonry, wood, and load-bearing frame inspection
- Soils and compaction verification
- Fire-resistance system inspections`,
      image: "/SpecialInspectionsServices(IBCChapter17).webp",
    },
    {
      title: "Instrumentation and Monitoring Services",
      id: "instrumentation-monitoring",
      content: `Our instrumentation and monitoring services collect real-time data on ground or structure behavior.

- Settlement monitoring
- Vibration and movement tracking
- Slope and embankment inclination monitoring
- Subsurface pressure and groundwater measurement`,
      image: "/IMG_3411.webp",
    },
    {
      title: "Hydrology and Drainage Studies",
      id: "hydrology-drainage",
      content: `We provide hydrology and drainage studies that evaluate watershed characteristics, runoff potential, and conveyance capacity.

- Watershed modeling & peak flow analysis
- Drainage area mapping
- Size and layout of stormwater conveyance systems
- Detention/retention recommendations
- Erosion and sediment control planning`,
      image: "/HydrologyandDrainageStudies.webp",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="w-full bg-gradient-to-b from-gray-50 to-gray-100/50">
        {/* Hero Section - Add your HeroSection component here */}
        <HeroSection />
        <AboutSection />
        {/* <div className="h-64 bg-gray-800 flex items-center justify-center">
          <h1 className="text-4xl text-white font-bold">
            Specialty Engineering Services
          </h1>
        </div> */}

        {/* About Section - Add your AboutSection component here */}

        <div className="w-full py-12 px-4 sm:px-8 lg:px-16 xl:px-24">
          <div className="text-center mb-12 relative max-w-6xl mx-auto">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-60"></div>
            <h2 className="block mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 font-playfair tracking-tight">
              Our Specialty Engineering Services
            </h2>
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

        <div className="w-full bg-white pt-10 pb-20 px-4 md:px-8">
          <div className="max-w-[1800px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-yellow-400">
                Our Commitment
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-400 mt-6 rounded-full mx-auto"></div>
            </div>

            <div className="font-roboto text-gray-700 text-xl leading-relaxed space-y-6 max-w-4xl mx-auto text-center">
              <p>
                These studies support compliance with local regulations,
                minimize flood risk, and ensure sustainable site performance.
              </p>
              <p>
                These specialty services are backed by SSN's commitment to
                technical excellence, practical engineering judgment, and
                integrated project delivery.
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

export default SpecialtyEngineeringServices;
