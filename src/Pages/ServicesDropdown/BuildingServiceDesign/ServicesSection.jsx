"use client";

const ServicesSection = ({ servicesData }) => {
  const renderServiceCard = (service) => {
    return (
      <div
        key={service.id}
        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
      >
        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg md:text-xl font-bold text-white font-playfair leading-tight drop-shadow-lg">
              {service.title}
            </h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-600 text-sm leading-snug mb-0">
            {service.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-6 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        <div className="text-center mb-12">
          <span className="block mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            Our Building Systems Design Services
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {servicesData.map((service) => renderServiceCard(service))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;