"use client";
import React from "react";
import {
  ArrowTrendingUpIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

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

const statsData = [
  {
    name: "Design Build",
    2024: 28,
    2025: 40,
    growth: 12,
    icon: BuildingOfficeIcon,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    name: "Planning and Engineering",
    2024: 8,
    2025: 15,
    growth: 7,
    icon: WrenchScrewdriverIcon,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    name: "General Construction",
    2024: 6,
    2025: 10,
    growth: 4,
    icon: RocketLaunchIcon,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
  },
];

const StatisticsProgressCards = () => {
  const total2024 = statsData.reduce((sum, item) => sum + item[2024], 0);
  const total2025 = statsData.reduce((sum, item) => sum + item[2025], 0);
  const totalGrowth = statsData.reduce((sum, item) => sum + item.growth, 0);

  return (
    <>
      <FontsStyle />
      <section className="relative py-10 sm:py-16 bg-gradient-to-br from-gray-50 to-white w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-3 sm:p-5 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl inline-flex shadow-lg">
                <ArrowTrendingUpIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-5xl font-playfair font-bold mb-3 text-gray-800">
              Our Growth Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-roboto text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From 2024 achievements to 2025 projections with continued growth
              across all sectors.
            </p>
          </div>

          {/* Progress Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {statsData.map((item, index) => {
              const IconComponent = item.icon;
              const growthPercentage = Math.round(
                (item.growth / item[2024]) * 100
              );

              return (
                <div
                  key={index}
                  className={`${item.bgColor} rounded-3xl p-6 sm:p-8 shadow-lg border border-white/50`}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${item.color} shadow-md`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-white/80 text-xs font-semibold text-gray-700 shadow-sm">
                        +{growthPercentage}%
                      </span>
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-playfair font-bold text-xl sm:text-2xl text-gray-800 mb-2">
                    {item.name}
                  </h3>

                  {/* Numbers Section */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm font-roboto text-gray-600">
                        2024 Achievements
                      </span>
                      <span className="text-xl font-bold text-gray-800">
                        {item[2024]} projects
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-2 border-t border-gray-200">
                      <span className="text-sm font-roboto text-gray-600">
                        2025 Projections
                      </span>
                      <span className="text-xl font-bold text-gray-800">
                        {item[2025]} projects
                      </span>
                    </div>
                  </div>

                  {/* Growth Stats */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-roboto text-gray-600">
                        Growth
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-800 block">
                          +{item.growth}
                        </span>
                        <span className="text-sm font-roboto text-green-600">
                          +{growthPercentage}% increase
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsProgressCards;
