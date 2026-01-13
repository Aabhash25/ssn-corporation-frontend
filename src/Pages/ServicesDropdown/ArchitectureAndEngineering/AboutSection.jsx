const AboutSection = () => {
  return (
    <section className="relative w-full pt-2 pb-8 sm:pt-4 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-5 w-48 h-48 bg-blue-200/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 w-64 h-64 bg-yellow-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <span className="block mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
              Designing Spaces That Inspire and Perform{" "}
            </span>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
              We provide integrated architectural and engineering services for
              tenant fit-out projects, guiding clients from concept to
              completion. Our team transforms interior spaces into functional,
              compliant, and inspiring environments with proven experience
              across branded commercial and large-scale retail projects.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              We combine creative design with engineering expertise to deliver
              efficient, adaptable spaces aligned with operational goals.
              Serving offices, retail, healthcare, hospitality, and
              institutional sectors, we deliver solutions that balance
              aesthetics, performance, and long-term value.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative h-80 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <img
                  src="/"
                  alt="Architectural Engineering  Engineering"
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
