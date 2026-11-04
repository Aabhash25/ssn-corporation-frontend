import React from "react";
import ContactForm from "./ContactForm";

/**
 * Section that shows a heading + description next to the reusable ContactForm.
 *
 * Props:
 *  - title, description: the text content
 *  - formTitle: heading shown at the top of the form card in the split
 *               layout (default "Send Us a Message"; pass null to hide)
 *  - layout:  "stacked" (text above form, centered) or
 *             "split"   (form on the left, text on the right)
 *  - compact: use the smaller form
 *  - className: extra classes for the <section>
 */
const ContactFormSection = ({
  title,
  description,
  formTitle = "Send Us a Message",
  layout = "stacked",
  compact = false,
  className = "",
}) => {
  if (layout === "split") {
    // Styled to match the AboutSection on the Building Service Design page
    return (
      <section
        className={`relative w-full pt-2 pb-16 sm:pt-4 sm:pb-24 px-2 sm:px-4 lg:px-6 bg-white overflow-hidden ${className}`}
      >
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text: first on mobile, right column on desktop */}
          <div className="order-1 lg:order-2">
            <span className="block mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
              {title}
            </span>
            {description && (
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Form: second on mobile, left column on desktop */}
          <div className="order-2 lg:order-1">
            <ContactForm
              title={formTitle}
              compact={compact}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`px-6 sm:px-12 py-16 ${className}`}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg sm:text-xl font-roboto text-gray-700">
              {description}
            </p>
          )}
        </div>

        <ContactForm title={null} compact={compact} />
      </div>
    </section>
  );
};

export default ContactFormSection;
