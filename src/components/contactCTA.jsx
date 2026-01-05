"use client";

import { ArrowRight } from "lucide-react";

const ContactCTA = ({
  title = "Ready to Start Your Project?",
  description = "Let’s discuss how our geotechnical expertise can support your next development.",
  buttonText = "Contact Us",
  link = "/contact",
}) => {
  return (
    <section className="relative w-full py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-5xl">
        <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-8 py-8">
            {/* Text */}
            <div className="max-w-2xl text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight mb-2">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {description}
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => (window.location.href = link)}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              {buttonText}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
