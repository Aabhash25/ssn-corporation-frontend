const AboutSection = () => {
  return (
    <section className="relative w-full pt-2 pb-16 sm:pt-4 sm:pb-24 px-2 sm:px-4 lg:px-6 bg-white overflow-hidden">
      <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <span className="block mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            Designing Buildings That Perform, Endure, and Inspire
          </span>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-4">
            We provide comprehensive building system design services that cover
            every stage of your project — from planning to construction-ready
            documentation.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Our multidisciplinary team combines advanced engineering, code
            compliance, and constructability experience to deliver safe,
            functional, and high-performing solutions.
          </p>
        </div>
        <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-700">
          <img
            src="/DesigningBuildingsThatPerformEndureandInspire.jpg"
            alt="Building Systems Design Engineering"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
