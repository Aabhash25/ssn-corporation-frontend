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
      font-style: normal !important; /* ✅ Prevent slanted text */
    }

    .font-playfair {
      font-family: "Playfair Display", serif;
      font-style: normal !important; /* ✅ Ensure Playfair is never italic */
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span {
      font-style: normal !important; /* ✅ Extra safety for all text */
    }
  `}</style>
);

const barData = [
  {
    name: "Engineering and Construction",
    2024: 28,
    2025: 40,
    growth: 12,
  },
  {
    name: "Only Engineering",
    2024: 8,
    2025: 15,
    growth: 7,
  },
  {
    name: "Only Construction",
    2024: 6,
    2025: 10,
    growth: 4,
  },
];

const StatisticsBarChart = () => {
  return (
    <>
      <FontsStyle />
      <section className="relative py-12 bg-gray-50 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-4 sm:p-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full inline-flex shadow-lg">
                <ArrowTrendingUpIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold mb-2 not-italic">
              Our Achievements
            </h2>
            <p className="text-sm sm:text-base md:text-lg font-roboto text-gray-700 max-w-3xl mx-auto leading-relaxed not-italic">
              Clear comparison of our achievements and projected growth across
              different service categories.
            </p>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-2 not-italic">
                Project Growth Analysis
              </h3>
              <p className="text-gray-600 font-roboto not-italic">
                2024 Achievements vs 2025 Projections
              </p>
            </div>

            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={barData}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis
                  dataKey="name"
                  textAnchor="middle"
                  tick={{
                    fontSize: 14, // ✅ slightly larger text
                    fontWeight: 600, // ✅ makes it bold
                    fontFamily: "Roboto, sans-serif",
                    fontStyle: "normal", // ✅ ensure non-italic
                    fill: "#1F2937", // optional: Tailwind gray-800 for darker text
                  }}
                />

                <YAxis />
                <Tooltip
                  formatter={(value, name) => [`${value} projects`, name]}
                  labelFormatter={(label) => `Category: ${label}`}
                />
                <Legend />
                <Bar
                  dataKey="2024"
                  name="2024 Achievements"
                  fill="#F97316"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="2025"
                  name="2025 Projections"
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Growth Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {barData.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
              >
                <h4 className="font-playfair font-semibold text-lg mb-2 not-italic">
                  {item.name}
                </h4>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-gray-800 not-italic">
                    {item.growth}
                  </span>
                  <span className="text-green-500 font-semibold not-italic">
                    +{Math.round((item.growth / item["2024"]) * 100)}%
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-roboto not-italic">
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
