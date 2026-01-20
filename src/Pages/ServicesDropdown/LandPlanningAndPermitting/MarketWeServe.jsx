"use client";

import { useEffect, useState } from "react";

const marketsData = [
  {
    title: "Commercial developments",
  },
  {
    title: "Industrial facilities",
  },
  {
    title: "Healthcare and institutional projects",
  },
  {
    title: "Residential and multifamily communities",
  },
  {
    title: "Education and corporate campuses",
  },
  {
    title: "Hospitality and recreation developments",
  },
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
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="text-center mb-8">
        <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
          Markets We Serve
        </span>
      </div>

      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        We provide land planning and permitting services across diverse development sectors:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
            <h3 className="text-lg font-semibold text-gray-900">
              {market.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketsWeServe;