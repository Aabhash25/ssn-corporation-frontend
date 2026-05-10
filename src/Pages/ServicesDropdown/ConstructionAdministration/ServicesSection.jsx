"use client";

const ServicesSection = ({ servicesData }) => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-semibold text-yellow-400">
            Our Construction Administration Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto mt-4">
            Providing oversight, coordination, and quality assurance to ensure
            your construction projects are delivered efficiently, safely, and
            according to design intent.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 hover:border-gray-300 flex flex-col"
            >
              {/* Subtle index */}
              <span className="absolute top-6 right-8 text-sm text-gray-300 font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-playfair font-semibold text-gray-900 mb-4 leading-snug">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-px bg-yellow-400 mb-4 transition-all duration-300 group-hover:w-20" />

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base md:text-lg flex-1">
                {service.description}
              </p>

              {/* Optional CTA (future) */}
              {/* <button className="mt-4 text-yellow-400 font-medium hover:underline">
                Learn More
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
