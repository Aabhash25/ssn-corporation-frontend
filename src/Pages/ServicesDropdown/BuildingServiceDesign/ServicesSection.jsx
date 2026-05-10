"use client";

const ServicesSection = ({ servicesData }) => {
  const renderServiceCard = (service) => {
    return (
      <div
        key={service.id}
        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 transform hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          {/* Title */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg md:text-xl font-bold text-white font-playfair leading-tight drop-shadow-lg">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <div className="p-6">
          <p className="text-gray-600 text-sm sm:text-base lg:text-base leading-relaxed line-clamp-4 sm:line-clamp-none">
            {service.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      {" "}
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="block mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            Our Building Systems Design Services
          </span>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-2"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {servicesData.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
