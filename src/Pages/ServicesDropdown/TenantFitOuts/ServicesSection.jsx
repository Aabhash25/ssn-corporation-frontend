"use client";

const ServicesSection = ({ servicesData }) => {
  const renderServiceCard = (service, index) => {
    return (
      <div
        key={service.id}
        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 flex flex-col"
      >
        {/* Image Section */}
        <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-lg md:text-xl font-bold text-white font-playfair leading-tight drop-shadow-lg">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description Section */}
        <div className="p-6 flex-1 flex flex-col">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 flex-1">
            {service.description}
          </p>
          {/* Optional: CTA or button placeholder */}
          {/* <button className="mt-auto text-yellow-400 font-medium hover:underline">
            Learn More
          </button> */}
        </div>
      </div>
    );
  };

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="block mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            Our Fit-Outs Engineering Services
          </span>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Transforming interior spaces into functional, compliant, and
            inspiring environments across commercial and retail projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {servicesData.map((service, index) =>
            renderServiceCard(service, index),
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
