"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  HomeModernIcon,
  ArrowTrendingUpIcon,
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

// Stats data
const stats2024 = [
  {
    label: "Total Projects",
    value: 42,
    icon: BuildingOfficeIcon,
    color: "orange",
  },
  {
    label: "Engineering & Construction",
    value: 28,
    icon: WrenchScrewdriverIcon,
    color: "green",
  },
  { label: "Only Engineering", value: 8, icon: CpuChipIcon, color: "blue" },
  {
    label: "Only Construction",
    value: 6,
    icon: HomeModernIcon,
    color: "purple",
  },
];

const stats2025 = [
  {
    label: "Total Projects",
    value: 65,
    icon: BuildingOfficeIcon,
    color: "orange",
  },
  {
    label: "Engineering & Construction",
    value: 40,
    icon: WrenchScrewdriverIcon,
    color: "green",
  },
  { label: "Only Engineering", value: 15, icon: CpuChipIcon, color: "blue" },
  {
    label: "Only Construction",
    value: 10,
    icon: HomeModernIcon,
    color: "purple",
  },
];

const colorClasses = {
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  blue: "bg-blue-50 text-blue-500",
  purple: "bg-purple-50 text-purple-500",
};

const Statistics = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const renderStats = (stats, isProjected = false) =>
    stats.map((stat, idx) => {
      const Icon = stat.icon;
      return (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          className="flex-1 min-w-[250px] max-w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col items-center gap-4 text-center border border-gray-100 hover:shadow-2xl transition"
        >
          <div className={`p-4 rounded-full ${colorClasses[stat.color]}`}>
            <Icon className="w-7 h-7" />
          </div>
          <p className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900">
            {inView ? (
              <CountUp
                end={stat.value}
                duration={2.5}
                suffix={isProjected ? "+" : ""}
              />
            ) : (
              0
            )}
          </p>
          <p className="font-roboto text-gray-700 text-base sm:text-lg">
            {stat.label}
          </p>
          {isProjected && (
            <div className="mt-2 text-xs sm:text-sm font-semibold text-white bg-gray-900 px-3 py-1 rounded-full">
              PROJECTED
            </div>
          )}
        </motion.div>
      );
    });

  return (
    <>
      <FontsStyle />
      <section
        ref={ref}
        className="relative py-2 sm:py-8 lg:py-10 bg-gray-50 w-full overflow-hidden"
      >
        <div className="max-w-full mx-auto px-3 sm:px-4 lg:px-6 text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-10"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 sm:p-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full inline-flex shadow-lg">
                <ArrowTrendingUpIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-2">
              Our Achievements & Projections
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-roboto text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Growing stronger every year, delivering quality projects with
              professional engineering and construction services.
            </p>
          </motion.div>

          {/* Stats Full Width */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full">
            {/* 2024 Stats */}
            <div className="w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold text-orange-500 mb-2 text-center">
                2024 Achievements
              </h3>
              <div className="flex gap-3 overflow-x-auto">
                {renderStats(stats2024)}
              </div>
            </div>

            {/* 2025 Stats */}
            <div className="w-full">
              <h3 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold text-blue-500 mb-2 text-center">
                2025 Projections
              </h3>
              <div className="flex gap-3 overflow-x-auto">
                {renderStats(stats2025, true)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
