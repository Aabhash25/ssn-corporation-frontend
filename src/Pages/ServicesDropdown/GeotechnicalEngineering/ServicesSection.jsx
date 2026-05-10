"use client";

import { useState } from "react";

const ServicesSection = ({ servicesDataRow1, servicesDataRow2 }) => {
  const [expandedCards, setExpandedCards] = useState(new Set());

  const toggleCardExpansion = (serviceId) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) newSet.delete(serviceId);
      else newSet.add(serviceId);
      return newSet;
    });
  };

  const renderServiceCard = (service) => {
    const isExpanded = expandedCards.has(service.id);
    return (
      <div
        key={service.id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 min-h-[400px] md:min-h-[480px] flex flex-col"
      >
        {/* Image */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className={`w-full h-full object-cover`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-t-2xl" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg md:text-xl font-bold text-white font-playfair leading-tight drop-shadow-lg">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 flex-1">
            {service.description}
          </p>

          <div className="space-y-3 mb-4">
            {(isExpanded ? service.details : service.details.slice(0, 4)).map(
              (detail, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {detail}
                  </span>
                </div>
              ),
            )}
          </div>

          {service.details.length > 4 && (
            <button
              onClick={() => toggleCardExpansion(service.id)}
              className="text-yellow-400 hover:text-yellow-500 text-sm font-medium transition-colors duration-200 self-start"
            >
              {isExpanded
                ? "See Less ↑"
                : `See ${service.details.length - 4} More ↓`}
            </button>
          )}
        </div>
      </div>
    );
  };

  const allServices = [...servicesDataRow1, ...servicesDataRow2];

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        <div className="text-center mb-12">
          <span className="block mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            Our Geotechnical Services
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {allServices.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
