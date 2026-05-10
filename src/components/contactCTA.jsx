const ContactCTA = ({
  title = "Ready to Start Your Project?",
  description = "We are ready to assist you with reliable, data-driven, and optimized engineering solutions. Our team of experts is dedicated to providing you with the best possible service and support from concept to completion.",
  buttonText = "Contact Us",
  link = "/contact",
}) => {
  return (
    <section className="px-4 py-10 sm:py-14 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-50 to-white px-6 py-10 sm:px-10 sm:py-12 md:px-16 md:py-14 shadow-lg border border-yellow-400">
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 text-center lg:text-left">
            {/* Text Section */}
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500 font-playfair leading-tight">
                {title}
              </h3>

              {/* Paragraph hidden on mobile */}
              <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed hidden sm:block">
                {description}
              </p>
            </div>

            {/* Button */}
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => (window.location.href = link)}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
