"use client";

const StructuralStudiesSection = ({ structuralStudiesData }) => {
  const renderServiceCard = (service) => {
    return (
      <div
        key={service.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-l-4 border-yellow-400 p-6 flex flex-col justify-between transform hover:scale-105"
      >
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 font-playfair mb-4">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-0">
          {service.description}
        </p>
      </div>
    );
  };

  return (
    <section className="relative w-full py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      {" "}
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        <div className="text-center mb-12">
          <span className="block mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-500 font-playfair">
            Our Building Systems Solutions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {structuralStudiesData.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default StructuralStudiesSection;
