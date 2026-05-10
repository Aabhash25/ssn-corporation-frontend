"use client";

const StructuralStudiesSection = ({ structuralStudiesData }) => {
  const renderServiceCard = (service) => {
    return (
      <div
        key={service.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200 p-6 flex flex-col"
      >
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 font-playfair mb-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg leading-relaxed flex-1">
          {service.description}
        </p>
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[85%]">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 font-playfair">
            Our Land Planning & Permitting Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {structuralStudiesData.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default StructuralStudiesSection;
