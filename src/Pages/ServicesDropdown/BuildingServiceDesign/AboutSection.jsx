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
              Designing Buildings That Perform, Endure, and Inspire
            </span>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
              We provide comprehensive building system design services that
              cover every stage of your project — from initial planning to
              detailed construction-ready documentation. Our expertise spans
              mechanical, electrical, plumbing, fire protection, and life safety
              systems, ensuring that each system is efficient, reliable, and
              fully integrated.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              Our multidisciplinary team combines advanced engineering, code
              compliance knowledge, and practical constructability experience to
              deliver solutions that are safe, functional, and high-performing.
              Whether your project is residential, commercial, industrial, or
              institutional, our designs are tailored to optimize performance,
              reduce risks, and ensure long-term operational efficiency.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <img
                  src="/DesigningBuildingsThatPerformEndureandInspire.jpg"
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
