"use client";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import ContactCTA from "../../../components/contactCTA";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import GeotechnicalStudiesSection from "./GeotechnicalStudiesSection";
import WhySSNSection from "./WhySSNSection";
import TeamSection from "./TeamSection";
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
      object-fit: contain; /* Ensure the image is not cropped */
      width: 100%; /* Make the image responsive */
      height: auto; /* Maintain aspect ratio */
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

const GeotechnicalEngineering = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const servicesDataRow1 = [
    {
      id: 1,
      title: "Subsurface Investigation and Site Characterization",
      image: "/SubSurface2.webp",
      description:
        "We evaluate soil, rock, and groundwater conditions to establish accurate geotechnical parameters for design and construction",
      details: [
        "Field exploration and sampling",
        "Pavement coring",
        "Field infiltration test",
        "Soil and rock profiling",
        "Groundwater assessment",
        "Geohazard identification",
        "Site characterization reports",
      ],
      color: "purple",
    },
    {
      id: 2,
      title: "Geotechnical Laboratory Testing",
      image: "/geptechServices12.webp",
      description:
        "Our laboratory testing services deliver reliable data on soil behavior under applied loads and environmental conditions.",
      details: [
        "Soil classification testing",
        "Compaction and density testing",
        "Consolidation testing",
        "Shear strength testing",
        "Permeability testing",
        "Shrink and swell analysis",
        "Field bearing capacity testing",
      ],
      color: "blue",
    },
    {
      id: 3,
      title: "Geotechnical Engineering & Design",
      image: "/spEnginnering.jpg",
      description:
        "Our engineering services translate subsurface data into practical, constructible design solutions tailored to project requirements.",
      details: [
        "Shallow and deep foundation design",
        "Bearing capacity and settlement analysis",
        "Earthwork and grading design",
        "Ground improvement design",
        "Retaining wall design",
        "Slope stability and embankment analysis",
        "Pavement design (flexible and rigid systems)",
        "Seismic hazard and liquefaction analysis",
        "Groundwater flow and dewatering analysis",
        "Vibration and construction impact assessment",
        "Trenchless system (pipe jacking, HDD, micro-tunneling) analysis and design",
        "Finite element modeling for geo-structural analysis",
        "Landfill/solid waste containment design",
        "Geo-structural design",
        "Geosynthetics related analysis and design",
      ],
      color: "green",
    },
    {
      id: 4,
      title: "Geotechnical Construction Support",
      image: "/geotechServices8.jpg",
      description:
        "Our geotechnical construction support addresses field conditions and temporary works to ensure safe, efficient, and constructible solutions while minimizing risk and delays.",
      details: [
        "Temporary works and shoring system design and review",
        "Dewatering analysis and pump capacity calculations",
        "Excavation stability assessment and support recommendations",
        "Ground improvement implementation support and verification",
        "Foundation installation support and field modification",
        "Construction sequencing and staging evaluation",
        "Monitoring criteria for excavation, settlement, and groundwater",
        "Assessment and mitigation of unforeseen subsurface conditions",
        "Engineering responses to site changes and contractor RFIs",
        "Asphalt subgrade, base, binder, and surface installation monitoring",
        "Site stripping, undercutting, and subgrade evaluation",
      ],
      color: "indigo",
    },
  ];

  const servicesDataRow2 = [
    {
      id: 5,
      title: "Geotechnical Instrumentation and Field Testing",
      image: "/geotechService.png",
      description:
        "Our field testing and instrumentation services provide real-time monitoring and verification of subsurface conditions to ensure safe, efficient, and reliable construction.",
      details: [
        "Field bearing capacity testing",
        "Pile load testing and evaluation",
        "Vibration monitoring during construction",
        "Groundwater level monitoring",
        "Inclinometer and piezometer installation",
        "Settlement plate installation",
        "Continuous data logging and automated monitoring",
        "Ground movement and settlement tracking for critical structures",
      ],
      color: "slate",
    },
    {
      id: 6,
      title: "Construction Materials Testing & Inspection",
      image: "geotechServices9.png",
      description:
        "Our construction materials testing and inspection services verify compliance with project specifications and applicable standards.",
      details: [
        "Soil, aggregate, and fill material testing",
        "Compaction and density verification",
        "Concrete sampling and compressive strength testing",
        "Retaining wall construction monitoring and documentation",
        "Retaining wall inspections - footings, backfill, drainage, and reinforcement placement",

        "Asphalt and pavement materials testing",
        "Concrete and asphalt field inspections",
      ],
      color: "teal",
    },
    {
      id: 7,
      title: "Pavement Design and Engineering",
      image: "geotechServices5.jpg",
      description:
        "Experts in pavement design and rehabilitation programs for durable, safe, and cost-effective roadways and paved surfaces—from evaluation and design to construction support and rehabilitation.",
      details: [
        "Pavement condition assessment and surface distress surveys",
        "Construction quality control and field testing",
        // "Flexible pavement design using AASHTO, Asphalt Institute, and Mechanistic-Empirical (M-E) methods",
        "Rigid pavement design using PCA, AASHTO, and M-E methods",
        "Flexible and rigid pavement design using Unified Facilities Criteria (UFC)",
        "Subgrade, base, and material evaluation",
        "Subgrade improvement design using geosynthetics and stabilization techniques",
        "Pavement drainage design",
        "Pavement rehabilitation and overlay planning",
        "Life-cycle analysis and predictive performance modeling for maintenance and reconstruction",
        "Flexible pavement design using AASHTO, Asphalt Institute, and Mechanistic-Empirical (M-E) methods",
        "Sustainable pavement solutions",
      ],
      color: "slate",
    },
    {
      id: 8,
      title: "Earthworks & Ground Improvement",
      image: "/geotechServices10.jpg",
      description:
        "We deliver expertise in earthworks and ground improvement, including soil stabilization, replacement, reinforcement, preloading, and safe excavation and embankment design",
      details: [
        "Earthworks and ground improvement, including soil treatment, excavation, and embankments",
        "Soil stabilization design using mechanical, chemical, or biological methods. ",
        "Ground improvement techniques: grouting, stone columns, and vibro-compaction. ",
        "Preloading design, instrumentation, and construction support. ",
        "Soil replacement through over-excavation and replacement. ",
        "Ground reinforcement: ground anchors, soil nailing, geosynthetic reinforcements, and MSE walls. ",
        "Ground modification using lime, cement, or other stabilizing materials. ",
        "Excavation and embankment design with stability and support measures. ",
        "Monitoring ground behavior to ensure safety and design compliance. ",
      ],
      color: "slate",
    },
  ];

  const geotechnicalStudiesData = [
    {
      id: 8,
      title: "Preliminary Site Feasibility Assessments Services",
      image: "geotechServices6.jpg",
      description:
        "Early-stage evaluations providing an initial understanding of site conditions to support planning and site selection.",
      details: [
        "Desktop studies and limited subsurface exploration",
        "Preliminary soil and foundation assessment",
        "Recommendations for final investigation scope",
      ],
      color: "emerald",
    },
    {
      id: 9,
      title: "Linear Infrastructure & Corridor Geotechnical Services",
      image: "/geotechServices2.jpeg",
      description:
        "Specialized geotechnical services for transportation and utility projects spanning varied terrain and geologic conditions.",
      details: [
        "Roadway, railway, pipeline, and utility corridors",
        "Pavement, embankment, and retaining wall design",
        "Flood and stormwater management facilities",
        "Geotechnical instrumentation and monitoring",
      ],
      color: "cyan",
    },
    {
      id: 10,
      title: "Project-Specific Geotechnical Studies & Consulting Services",
      image: "geotechServices7.jpg",
      description:
        "Comprehensive investigations developed for defined project layouts and structural loading conditions.",
      details: [
        "Subsurface evaluations and drilling programs",
        "Construction materials investigation",
        "Foundation feasibility and performance studies",
        "Geological and groundwater assessments",
        "General construction considerations",
      ],
      color: "slate",
    },
    {
      id: 11,
      title: "Independent Construction Monitoring & Design Review Services",
      image: "/geotechServices11.jpg",
      description:
        "Experts in independent monitoring, verification, and design review of critical geotechnical works, ensuring compliance, safety, and regulatory standards.",
      details: [
        "Independent design review of foundations, earthworks, and retaining structures",
        "Deep foundation installation monitoring (piles, drilled shafts, caissons)",
        "Instrumentation installation and assessment (inclinometers, piezometers, settlement plates, dataloggers)",
        "Construction verification and field quality assessment",
        "Vibration and ground movement monitoring",
        "Independent reporting and certification for clients and regulatory authorities",
      ],
      color: "violet",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <FontsStyle />
      <div className="min-h-screen bg-white overflow-hidden pt-40">
        <HeroSection />

        <div className="mt-0 md:-mt-16">
          <AboutSection />
        </div>

        <div className="mt-0 md:-mt-20">
          <ServicesSection
            servicesDataRow1={servicesDataRow1}
            servicesDataRow2={servicesDataRow2}
          />
        </div>

        <div className="-mt-16">
          <ContactCTA
            title="Need Expert Engineering Support?"
            description="Our engineers are ready to assist you with reliable, data-driven solutions."
            buttonText="Get in Touch"
            link="/contact"
          />
        </div>

        <div className="mt-0 md:-mt-20">
          <GeotechnicalStudiesSection
            geotechnicalStudiesData={geotechnicalStudiesData}
          />
        </div>

        <div className="mt-0 md:-mt-16">
          <WhySSNSection />
        </div>

        {/* <TeamSection /> */}

        <div className="mt-0 md:-mt-16">
          <ProjectsSection />
        </div>
      </div>
    </>
  );
};

export default GeotechnicalEngineering;
