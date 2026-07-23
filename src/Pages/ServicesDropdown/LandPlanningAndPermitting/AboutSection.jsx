const AboutSection = () => {
  return (
    <section className="relative w-full pt-12 pb-24 sm:pt-16 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="relative w-full max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Content */}
        <div>
          <span className="block mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 font-playfair">
            Turning Land Potential into Approved, Buildable Projects
          </span>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
            We provide comprehensive land planning and permitting services that
            support successful project delivery from concept through approval.
            Our team combines technical expertise, regulatory knowledge, and
            disciplined project management to streamline the approval process,
            reduce risk, and keep developments moving efficiently.
          </p>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            We partner with owners and developers, mobilizing our architects and
            engineers to deliver practical, compliant, and constructible
            solutions for projects of all sizes and complexities. From
            single-lot residential developments to large multi-phase commercial
            projects, our commitment to quality and performance remains
            unwavering.
          </p>
        </div>

        {/* Visual Element */}
        <div className="relative">
          <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-700">
            <img
              src="/TurningLandPotentialintoApprovedBuildableProjects1.webp"
              alt="Land Planning And Permitting Engineering"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
