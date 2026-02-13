"use client";

import { useEffect, useState } from "react";

const marketsData = [
  {
    title:
      "Commercial Buildings: Offices, retail spaces, mixed-use developments",
  },
  {
    title:
      "Industrial Facilities: Manufacturing plants, warehouses, logistics centers",
  },
  {
    title:
      "Healthcare & Institutional: Clinics, hospitals, and specialized care facilities",
  },
  {
    title:
      "Residential & Multifamily: Apartments, condominiums, and housing developments",
  },
  {
    title:
      "Educational & Office Campuses: Schools, colleges, and research facilities",
  },
  {
    title:
      "Hospitality & Recreation: Hotels, resorts, and recreational centers",
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
    <section className="bg-white py-20 px-6 lg:px-12 overflow-hidden">
      <div className="text-center mb-8">
        <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
          Markets We Serve
        </span>
      </div>

      <p className="text-center text-gray-700 max-w-4xl mx-auto mb-16 text-base sm:text-lg">
        We deliver building system design services across a wide range of
        sectors:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 max-w-[90rem] mx-auto">
        {marketsData.map((market, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg p-8 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-2xl
              ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
              {market.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketsWeServe;
