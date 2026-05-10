"use client";

const ServicesSection = ({ servicesData }) => {
  const renderServiceCard = (service) => {
    return (
      <div
        key={service.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
      >
        {/* Image */}
        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg md:text-xl font-bold text-white font-playfair leading-tight drop-shadow-lg">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            {service.description}
          </p>
          {service.details && (
            <ul className="text-gray-700 text-base md:text-lg leading-relaxed space-y-2 list-inside">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-3 mt-1">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 font-playfair">
            Our Land Planning & Permitting Services
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {servicesData.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
