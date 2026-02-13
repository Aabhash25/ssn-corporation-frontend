"use client";

const ServicesSection = ({ servicesData }) => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        {/* Section Title */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-playfair font-semibold text-gray-900">
            Our Construction Administration Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group relative border border-gray-200 rounded-xl p-8 bg-white transition-all duration-300 hover:border-gray-300 hover:shadow-sm"
            >
              {/* Subtle index */}
              <span className="absolute top-6 right-8 text-sm text-gray-300 font-medium">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="text-xl font-playfair font-medium text-gray-900 mb-4 leading-snug">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-px bg-gray-200 mb-4 transition-all duration-300 group-hover:w-16" />

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
