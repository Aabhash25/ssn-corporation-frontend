"use client";
import React from "react";
import { FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import ConstructionLayout from "../Layout/ConstructionLayout";

const stateResources = [
  {
    state: "North Carolina",
    items: [
      {
        name: "Building Code",
        url: "https://codes.iccsafe.org/codes/united-states/north-carolina",
      },
      {
        name: "DOT Specification & Standard Drawings",
        url: "https://connect.ncdot.gov/resources/Specifications/Pages/2024-Roadway-Standard-Drawings.aspx",
      },
      {
        name: "NCDEQ Erosion & Sediment Control Manual",
        url: "https://www.deq.nc.gov/about/divisions/energy-mineral-and-land-resources/erosion-and-sediment-control/erosion-and-sediment-control-planning-and-design-manual",
      },
    ],
  },
  {
    state: "Georgia",
    items: [
      {
        name: "Building Code",
        url: "https://codes.iccsafe.org/codes/georgia",
      },
      {
        name: "DOT Specification & Standard Drawings",
        url: "https://connect.ncdot.gov/resources/Specifications/Pages/2024-Roadway-Standard-Drawings.aspx",
      },
      {
        name: "NCDEQ Erosion & Sediment Control Manual",
        url: "https://www.deq.nc.gov/about/divisions/energy-mineral-and-land-resources/erosion-and-sediment-control/erosion-and-sediment-control-planning-and-design-manual",
      },
    ],
  },
  {
    state: "Virginia",
    items: [
      {
        name: "Building Code",
        url: "https://codes.iccsafe.org/codes/virginia",
      },
      {
        name: "DOT Specification & Standard Drawings",
        url: "https://connect.ncdot.gov/resources/Specifications/Pages/2024-Roadway-Standard-Drawings.aspx",
      },
      {
        name: "NCDEQ Erosion & Sediment Control Manual",
        url: "https://www.deq.nc.gov/about/divisions/energy-mineral-and-land-resources/erosion-and-sediment-control/erosion-and-sediment-control-planning-and-design-manual",
      },
    ],
  },
];

const ufcResources = [
  {
    name: "Unified Facilities Criteria (UFC) Manuals & Specifications",
    url: "#",
  },
  {
    name: "UFC Codes & Manuals - click here to view UFC Codes & Manuals",
    url: "#",
  },
  {
    name: "UFC Specifications - click here to view UFC Specifications",
    url: "#",
  },
];

const OpenResources = () => {
  return (
    <ConstructionLayout variant="default">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Page Header */}
        <motion.h1
          className="text-5xl sm:text-6xl font-playfair font-bold text-gray-900 text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Open Resources
        </motion.h1>
        <p className="text-lg sm:text-xl font-roboto text-gray-700 text-center mb-12">
          Explore curated building codes and manuals for states and federal
          facilities.
        </p>

        {/* State-specific Resources */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stateResources.map((state, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h2 className="text-2xl font-playfair font-bold mb-4 text-gray-800">
                {state.state}
              </h2>
              <ul className="space-y-2">
                {state.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaBook className="text-orange-400 w-4 h-4 flex-shrink-0" />
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 font-roboto hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* UFC Global Resources */}
        <motion.div
          className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900 text-center">
            UFC Manuals & Specifications
          </h2>
          <ul className="space-y-3 max-w-3xl mx-auto">
            {ufcResources.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <FaBook className="text-orange-400 w-4 h-4 flex-shrink-0" />
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-roboto ${
                    item.name.includes("click here")
                      ? "text-blue-600 underline hover:text-orange-500"
                      : "text-gray-700 hover:text-orange-500"
                  } transition-colors`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Fonts */}
      <style jsx>{`
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </ConstructionLayout>
  );
};

export default OpenResources;
