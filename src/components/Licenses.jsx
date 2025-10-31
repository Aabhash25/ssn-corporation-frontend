"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import {
  DocumentCheckIcon,
  GlobeAmericasIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

// Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

// USA topojson
const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// State abbreviations
const stateAbbr = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
};

// License data
const licenses = [
  {
    type: "Engineering Practice",
    color: "#3B82F6",
    description: "Licensed to provide professional engineering services",
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
    ],
  },
  {
    type: "Engineering & General Contractor",
    color: "#10B981",
    description: "Full engineering and construction contracting services",
    icon: BuildingOfficeIcon,
    states: ["NC"],
  },
  {
    type: "Engineering Firm",
    color: "#F59E0B",
    description: "Certified engineering firm with specialized capabilities",
    icon: DocumentCheckIcon,
    states: ["VA", "GA", "SC"],
  },
];

const getStateLicense = (abbr) => {
  return licenses.find((l) => l.states.includes(abbr)) || licenses[0];
};

const Licenses = () => {
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });

  return (
    <>
      <FontsStyle />
      <div className="overflow-x-hidden text-gray-800 relative">
        <section className="relative flex flex-col items-center pt-6 pb-6 sm:pt-8 sm:pb-8 px-4 sm:px-6 lg:px-10 bg-white">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/6 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-48 sm:w-64 h-48 sm:h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 w-full max-w-7xl">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-10"
            >
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl shadow-lg">
                  <GlobeAmericasIcon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-2 sm:mb-4">
                Where We{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                  Serve
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-roboto max-w-3xl mx-auto leading-relaxed">
                Licensed professional Engineers and General Contractors serving
                across the
                <span className="font-semibold text-blue-600">
                  {" "}
                  United States
                </span>{" "}
                and
                <span className="font-semibold text-green-600">
                  {" "}
                  construction services
                </span>
                .
              </p>
            </motion.div>

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-100 max-w-full mx-auto"
            >
              <div className="relative w-full overflow-hidden flex justify-center">
                <div className="w-full max-w-full">
                  <ComposableMap
                    projection="geoAlbersUsa"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const abbr = Object.keys(stateAbbr).find(
                            (key) => stateAbbr[key] === geo.properties.name
                          );
                          const license = abbr ? getStateLicense(abbr) : null;
                          const center = geoCentroid(geo);

                          return (
                            <g key={geo.rsmKey}>
                              <Geography
                                geography={geo}
                                fill={license ? license.color : "#CBD5E1"}
                                stroke="#ffffff"
                                strokeWidth={0.7}
                                className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                                onMouseEnter={(e) =>
                                  license &&
                                  setTooltip({
                                    visible: true,
                                    content: `${geo.properties.name} (${abbr}) - ${license.type}`,
                                    x: e.clientX,
                                    y: e.clientY,
                                  })
                                }
                                onMouseMove={(e) =>
                                  license &&
                                  setTooltip((t) => ({
                                    ...t,
                                    x: e.clientX,
                                    y: e.clientY,
                                  }))
                                }
                                onMouseLeave={() =>
                                  setTooltip({
                                    visible: false,
                                    content: "",
                                    x: 0,
                                    y: 0,
                                  })
                                }
                              />
                              {abbr && center && (
                                <Marker coordinates={center}>
                                  <text
                                    textAnchor="middle"
                                    alignmentBaseline="central"
                                    fontSize={6}
                                    fill="#ffffff"
                                    stroke="#000000"
                                    strokeWidth={0.25}
                                    className="font-bold"
                                  >
                                    {abbr}
                                  </text>
                                </Marker>
                              )}
                            </g>
                          );
                        })
                      }
                    </Geographies>
                  </ComposableMap>
                </div>
              </div>

              {/* Legend */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-2xl">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  {licenses.map((info) => (
                    <div
                      key={info.type}
                      className="flex items-center gap-2 sm:gap-3 bg-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg shadow-sm"
                    >
                      <div
                        className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                        style={{ backgroundColor: info.color }}
                      />
                      <span className="font-semibold text-gray-900 text-xs sm:text-sm">
                        {info.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tooltip */}
          {tooltip.visible && (
            <div
              className="fixed bg-gray-900 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-xl z-50 pointer-events-none"
              style={{
                top: tooltip.y + 10,
                left: tooltip.x + 10,
                fontSize: "12px",
                maxWidth: "200px",
              }}
            >
              {tooltip.content}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default Licenses;
