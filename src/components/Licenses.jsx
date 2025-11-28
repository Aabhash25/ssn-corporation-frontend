"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  GlobeAmericasIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Roboto:wght@300;400;500;700&display=swap");

    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

const licenses = [
  {
    type: "Engineering Practice",
    color: "#3B82F6",
    description:
      "Capable to provide professional engineering services across USA.",
    icon: ShieldCheckIcon,
    states: [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "WA",
      "WV",
      "WI",
      "WY",
      "SC",
    ],
  },
  {
    type: " General Contractor",
    color: "#10B981",
    description:
      "Unlimited general building contractor dedicated to residential and commercial site development and building construction, and commercial space upfit.",
    icon: BuildingOfficeIcon,
    states: ["NC"],
  },
  {
    type: "Engineering Firm",
    color: "#F59E0B",
    description:
      "Certified engineering firm with specialized capabilities and expertise offering range of engineering services.",
    icon: DocumentCheckIcon,
    states: ["VA", "GA", "SC"],
  },
];

const Licenses = () => {
  // Track expanded cards
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (type) => {
    setExpanded((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  return (
    <>
      <FontsStyle />
      <section className="relative flex flex-col items-center pt-6 sm:pt-8 pb-12 px-6 sm:px-10 bg-white overflow-hidden text-gray-800">
        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/5 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-3">
              Where We Serve
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 font-roboto max-w-2xl mx-auto leading-relaxed">
              Licensed professional Engineers and General Contractors serving
              across the United States with excellence in engineering and
              construction.
            </p>
          </motion.div>

          {/* Cards Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {licenses.map((license, index) => {
              const Icon = license.icon;
              const isExpanded = expanded[license.type];
              const visibleStates = isExpanded
                ? license.states
                : license.states.slice(0, 6);

              return (
                <motion.div
                  key={license.type}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center"
                >
                  {/* Title */}
                  <h3
                    className="text-2xl sm:text-3xl font-playfair font-semibold mb-3"
                    style={{ color: license.color }}
                  >
                    {license.type}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 font-roboto text-base sm:text-lg leading-relaxed mb-5 max-w-xs">
                    {license.description}
                  </p>

                  {/* States */}
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {visibleStates.map((state) => (
                      <span
                        key={state}
                        className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium shadow-sm"
                      >
                        {state}
                      </span>
                    ))}
                  </div>

                  {/* Expand / collapse */}
                  {license.states.length > 6 && (
                    <button
                      onClick={() => toggleExpand(license.type)}
                      className="text-sm font-semibold text-blue-600 hover:underline mt-1"
                    >
                      {isExpanded
                        ? "Show Less"
                        : `+${license.states.length - 6} more`}
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Licenses;
