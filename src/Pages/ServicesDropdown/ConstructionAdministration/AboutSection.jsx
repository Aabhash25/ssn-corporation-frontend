const AboutSection = () => {
  return (
    <section className="relative w-full pt-2 pb-16 sm:pt-4 sm:pb-24 px-2 sm:px-4 lg:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="w-full max-w-[90rem] mx-auto">
        {" "}
        {/* Wider max width */}
        {/* Background decorative elements */}
        <div className="absolute top-10 left-5 w-48 h-48 bg-blue-200/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="block mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
              Protecting Your Vision Throughout the Construction Process
            </span>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
              At SSN Engineers, our Construction Administration team provides
              end-to-end support to keep projects on track and built as
              intended. We guide clients through every stage of delivery—
              developing cost opinions, preparing bid packages, coordinating
              with contractors, and overseeing construction activities.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Our field engineers and inspection staff ensure that what is built
              matches the approved design documents and complies with all
              applicable requirements. With close collaboration across all
              engineering disciplines, we provide detailed reviews of
              construction drawings and engineering plans—identifying issues
              early and maintaining quality throughout the project lifecycle
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <img
                  src="/"
                  alt="Building Systems Design Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
