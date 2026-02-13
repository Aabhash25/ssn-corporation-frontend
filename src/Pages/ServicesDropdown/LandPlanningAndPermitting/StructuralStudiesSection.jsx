"use client";

const StructuralStudiesSection = ({ structuralStudiesData }) => {
  const renderServiceCard = (service) => {
    return (
      <div
        key={service.id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 p-6 flex flex-col"
      >
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 font-playfair mb-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed flex-1">
          {service.description}
        </p>
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[85%]">
        <div className="text-center mb-12">
          <span className="block mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            Our Land Planning & Permitting Solutions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {structuralStudiesData.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default StructuralStudiesSection;
