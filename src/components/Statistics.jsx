"use client";
import React from "react";

// Fonts
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
  { name: "Design and Build", 2024: 28, 2025: 40, growth: 12 },
  { name: "Engineering Design", 2024: 8, 2025: 15, growth: 7 },
  { name: "General Construction", 2024: 6, 2025: 10, growth: 4 },
  { name: "SSN Family Growth", 2024: 8, 2025: 30, growth: 22 },
];

const StatisticsProgressCards = () => {
  return (
    <>
      <FontsStyle />
      <section className="py-10 sm:py-16 bg-gray-50 w-full overflow-hidden">
        <div className="max-w-full mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-playfair font-bold mb-3 text-gray-800">
              Our Growth Journey
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-roboto text-gray-600 max-w-2xl mx-auto">
              Let's look in data from 2024 to 2025 project acheivements. We have
              a promising growth across all sections.
            </p>
          </div>

          {/* Full-width Cards */}
          <div className="flex flex-wrap gap-6">
            {statsData.map((item, index) => {
              const growthPercentage = Math.round(
                (item.growth / item[2024]) * 100
              );

              // 🔥 Auto-detect label based on category
              const isFamily = item.name === "SSN Family Growth";
              const unit = isFamily ? "members" : "projects";

              return (
                <div
                  key={index}
                  className="flex-1 min-w-[250px] bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200"
                >
                  <h3 className="font-playfair font-bold text-2xl text-gray-800 mb-4">
                    {item.name}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between py-1">
                      <span className="text-sm font-roboto text-gray-600">
                        2024
                      </span>
                      <span className="text-xl font-bold text-gray-900">
                        {item[2024]} {unit}
                      </span>
                    </div>

                    <div className="flex justify-between py-1 border-t border-gray-200 pt-3">
                      <span className="text-sm font-roboto text-gray-600">
                        2025
                      </span>
                      <span className="text-xl font-bold text-gray-900">
                        {item[2025]} {unit}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <span className="text-sm font-roboto text-gray-600">
                        Growth
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-gray-900 block">
                          +{item.growth}
                        </span>
                        <span className="text-sm font-roboto text-yellow-500">
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
