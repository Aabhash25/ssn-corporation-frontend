"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

// ✅ Fonts + Non-italic Fix
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

    .font-roboto {
      font-family: "Roboto", sans-serif;
      font-style: normal !important;
    }

    .font-playfair {
      font-family: "Playfair Display", serif;
      font-style: normal !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span {
      font-style: normal !important;
    }
  `}</style>
);

const barData = [
  { name: "Engineering & Construction", 2024: 28, 2025: 40, growth: 12 },
  { name: "Only Engineering", 2024: 8, 2025: 15, growth: 7 },
  { name: "Only Construction", 2024: 6, 2025: 10, growth: 4 },
];

const StatisticsBarChart = () => {
  return (
    <>
      <FontsStyle />
      <section className="relative py-10 sm:py-16 bg-gray-50 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          {/* Header */}
          <div className="mb-10 sm:mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 sm:p-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full inline-flex shadow-lg">
                <ArrowTrendingUpIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-playfair font-bold mb-2">
              Our Achievements
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-roboto text-gray-700 max-w-2xl mx-auto leading-relaxed">
              A comparison of our past achievements and projected growth across
              service categories.
            </p>
          </div>

          {/* Bar Chart Container */}
          <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-2xl font-playfair font-bold mb-1">
                Project Growth Analysis
              </h3>
              <p className="text-gray-600 font-roboto text-sm sm:text-base">
                2024 Achievements vs 2025 Projections
              </p>
            </div>

            {/* Chart */}
            <div className="w-full h-[250px] sm:h-[350px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 30 }}
                >
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis
                    dataKey="name"
                    tickLine={false}
                    interval={0}
                    tick={{
                      fontSize: 10,
                      sm: { fontSize: 12 },
                      fontWeight: 500,
                      fontFamily: "Roboto, sans-serif",
                      fill: "#374151",
                    }}
                    angle={-10}
                    dy={10}
                  />
                  <YAxis
                    tick={{
                      fontSize: 12,
                      fontFamily: "Roboto, sans-serif",
                      fill: "#4B5563",
                    }}
                  />
                  <Tooltip
                    formatter={(value, name) => [`${value} projects`, name]}
                    labelFormatter={(label) => `Category: ${label}`}
                  />
                  <Legend
                    wrapperStyle={{
                      fontSize: "12px",
                      fontFamily: "Roboto, sans-serif",
                    }}
                  />
                  <Bar
                    dataKey="2024"
                    name="2024 Achievements"
                    fill="#F97316"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                  <Bar
                    dataKey="2025"
                    name="2025 Projections"
                    fill="#3B82F6"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Growth Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
            {barData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-md border-l-4 border-blue-500"
              >
                <h4 className="font-playfair font-semibold text-base sm:text-lg mb-2">
                  {item.name}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-xl sm:text-2xl font-bold text-gray-800">
                    {item.growth}
                  </span>
                  <span className="text-green-500 font-semibold text-sm sm:text-base">
                    +{Math.round((item.growth / item["2024"]) * 100)}%
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-roboto">
                  Project Growth
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsBarChart;
