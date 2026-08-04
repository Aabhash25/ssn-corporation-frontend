"use client";

const AboutSection = () => {
  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      <div className="relative w-full max-w-[90rem] mx-auto">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-5 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl animate-pulse z-0" />
        <div className="absolute bottom-24 right-5 w-48 h-48 bg-yellow-200/40 rounded-full blur-3xl animate-pulse z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl z-0" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content Column */}
          <div>
            <span className="block mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
              Designing Spaces That Inspire and Perform
            </span>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed mb-4">
              We provide integrated interior designing and engineering services
              for tenant fit-out projects, guiding clients from concept to
              completion. Our team transforms interior spaces into functional,
              compliant, and inspiring environments with proven experience
              across branded commercial and retail projects.
            </p>

            <p className="text-gray-700 text-lg sm:text-xl leading-relaxed">
              We combine creative design with engineering expertise to deliver
              efficient, adaptable spaces aligned with operational goals.
              Serving offices, retail, healthcare, hospitality, and
              institutional sectors, we deliver the engineering solutions that
              balance aesthetics, performance, and long-term value.
            </p>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
              <img
                src="/DesigningSpacesThatInspireandPerform.webp"
                alt="Architectural & Engineering Services"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
