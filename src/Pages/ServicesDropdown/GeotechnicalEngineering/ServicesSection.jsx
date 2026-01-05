import { ChevronDown, ChevronUp, X } from "lucide-react";

const ServicesSection = ({
  servicesDataRow1,
  servicesDataRow2,
  activeService,
  setActiveService,
  getColorClasses,
  getTextColor,
}) => {
  const renderServiceRow = (servicesData) => (
    <div className="relative h-[450px] sm:h-[550px] lg:h-[600px] bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            className={`relative overflow-hidden cursor-pointer service-transition
              ${
                activeService === service.id
                  ? "flex-[3] lg:flex-[4] z-10"
                  : "flex-1 hover:opacity-90"
              }
              ${
                activeService && activeService !== service.id
                  ? "opacity-60"
                  : "opacity-100"
              }
            `}
            onClick={() =>
              setActiveService(activeService === service.id ? null : service.id)
            }
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${service.image}')`,
                transform:
                  activeService === service.id ? "scale(1.08)" : "scale(1)",
                transition: "transform 0.7s ease-out",
                backgroundPosition: "center center",
              }}
            />

            {/* Overlay Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${getColorClasses(
                service.color
              )}
              ${activeService === service.id ? "opacity-85" : "opacity-65"}
              transition-opacity duration-500`}
            />

            {/* Content */}
            <div className="relative h-full flex flex-col p-4 sm:p-6 lg:p-8">
              {/* Title - Always Visible */}
              <div className="mt-auto">
                <h3
                  className={`text-white text-lg sm:text-xl lg:text-2xl font-bold font-playfair leading-tight
                  ${
                    activeService === service.id ? "mb-3 lg:mb-4" : "mb-0"
                  } transition-all duration-300`}
                >
                  {service.title}
                </h3>

                {/* Arrow Indicator */}
                <div
                  className={`flex items-center justify-between mt-3 content-transition
                  ${
                    activeService === service.id
                      ? "opacity-100 visible"
                      : "opacity-0 invisible h-0"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <div
                      className={`p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm ${getTextColor(
                        service.color
                      )}`}
                    >
                      {activeService === service.id ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                  </div>

                  {activeService === service.id && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveService(null);
                      }}
                      className="p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                  )}
                </div>

                {/* Description - Only shown when active */}
                <div
                  className={`overflow-hidden content-transition
                  ${
                    activeService === service.id
                      ? "max-h-[400px] opacity-100 mt-4 lg:mt-6"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-3 lg:space-y-4 pr-2">
                    <p
                      className={`text-sm sm:text-base lg:text-lg leading-relaxed ${getTextColor(
                        service.color
                      )}`}
                    >
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3 mt-3 lg:mt-4">
                      {service.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 lg:space-x-3"
                        >
                          <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white/60 mt-1.5 lg:mt-2 flex-shrink-0"></div>
                          <span
                            className={`text-xs sm:text-sm ${getTextColor(
                              service.color
                            )} opacity-90`}
                          >
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 lg:pt-6 mt-4 lg:mt-6 border-t border-white/20"></div>
                  </div>
                </div>
              </div>

              {/* Expand Indicator (only when not active) */}
              {activeService !== service.id && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="flex flex-col items-center space-y-1.5 sm:space-y-2 p-4">
                    <div className="p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-sm">
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-bounce" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Separator (only for inactive states) */}
            {activeService !== service.id &&
              index < servicesData.length - 1 && (
                <div className="absolute top-1/2 -right-[1px] transform -translate-y-1/2 w-[1px] sm:w-[2px] h-12 sm:h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent z-20"></div>
              )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto w-full sm:w-[90%] lg:w-[80%]">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-lg font-semibold uppercase tracking-widest text-green-600">
              SEE OUR WORK IN GEOTECHNICAL, TUNNELS, AND DAMS
            </span>
          </div>
        </div>

        {/* Services Row 1 */}
        {renderServiceRow(servicesDataRow1)}

        {/* Spacing between rows */}
        <div className="h-6"></div>

        {/* Services Row 2 */}
        {renderServiceRow(servicesDataRow2)}
      </div>
    </section>
  );
};

export default ServicesSection;
