"use client";

import { useEffect, useState } from "react";

const marketsData = [
  { title: "Corporate Offices & Headquarters" },
  { title: "Retail Stores & Commercial Showrooms" },
  { title: "Restaurants, Cafes & Hospitality Spaces" },
  { title: "Healthcare & Medical Offices" },
  { title: "Educational & Institutional Facilities" },
  { title: "Industrial Offices & Mixed-Use Developments" },
];

const MarketsWeServe = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    marketsData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 150);
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[90rem] mx-auto text-center">
        <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair mb-6">
          Markets We Serve
        </span>

        <p className="text-gray-700 text-base sm:text-lg mb-12">
          Our tenant fit-out expertise spans a wide range of industries,
          including:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {marketsData.map((market, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r from-white to-gray-100 rounded-xl shadow-lg p-8 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl
                ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {market.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketsWeServe;
