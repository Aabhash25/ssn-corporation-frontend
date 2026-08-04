"use client";

const TeamSection = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-block mb-4">
            <span className="text-lg font-semibold uppercase tracking-widest text-green-600">
              Meet Our Team
            </span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="relative mb-5 w-full h-64 rounded-lg bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image Placeholder</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Team Member Name
            </h3>
            <p className="text-sm font-medium text-gray-700 mb-2">Job Title</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Brief description of experience, expertise, or role within the
              organization goes here.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="relative mb-5 w-full h-64 rounded-lg bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image Placeholder</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Team Member Name
            </h3>
            <p className="text-sm font-medium text-gray-700 mb-2">Job Title</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Brief description of experience, expertise, or role within the
              organization goes here.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-6">
            <div className="relative mb-5 w-full h-64 rounded-lg bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image Placeholder</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              Team Member Name
            </h3>
            <p className="text-sm font-medium text-gray-700 mb-2">Job Title</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Brief description of experience, expertise, or role within the
              organization goes here.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-600 mb-6">
            Want to work with our expert team?
          </p>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
