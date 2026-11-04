import React, { useState } from "react";

const initialValues = {
  name: "",
  email: "",
  address: "",
  state: "",
  country: "",
  zipCode: "",
  subject: "",
  message: "",
};

/**
 * Reusable contact form (form + success modal only).
 *
 * Props:
 *  - title:      heading shown above the form. Pass null/"" to hide it.
 *  - compact:    smaller padding, inputs and message box.
 *  - className:  classes for the outer wrapper. Defaults to the white card style.
 *  - onSuccess:  optional callback fired after a successful submit.
 */
const ContactForm = ({
  title = "Send Us a Message",
  compact = false,
  className,
  onSuccess,
}) => {
  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const inputClass = compact
    ? "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-base"
    : "w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg";

  const wrapperClass =
    className ??
    (compact
      ? "bg-white rounded-3xl shadow-xl p-6 sm:p-8"
      : "bg-white rounded-3xl shadow-xl p-8 sm:p-12");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
      address: values.address,
      state: values.state,
      country: values.country,
      zip_code: values.zipCode,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setShowSuccessModal(true);
        setValues(initialValues);
        setTimeout(() => setShowSuccessModal(false), 3500);
        if (onSuccess) onSuccess();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <>
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm text-center">
            <h2 className="text-2xl font-playfair font-bold text-green-600 mb-3">
              Message Sent!
            </h2>
            <p className="text-gray-700 font-roboto mb-6">
              We have received your message. Our team will contact you shortly.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className={wrapperClass}>
        {title && (
          <h2
            className={`font-playfair font-bold text-gray-900 ${
              compact ? "text-xl sm:text-2xl mb-4" : "text-2xl sm:text-3xl mb-6"
            }`}
          >
            {title}
          </h2>
        )}

        <form
          className={compact ? "space-y-4" : "space-y-6"}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <div className={`grid grid-cols-3 ${compact ? "gap-3" : "gap-4"}`}>
            <input
              type="text"
              name="state"
              placeholder="State"
              value={values.state}
              onChange={handleChange}
              className={inputClass}
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={values.country}
              onChange={handleChange}
              className={inputClass}
              required
            />

            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={values.zipCode}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={values.subject}
            onChange={handleChange}
            className={inputClass}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            className={`${inputClass} resize-none ${compact ? "h-28" : "h-40"}`}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold transition-colors ${
              compact ? "py-3 rounded-xl text-base" : "py-4 rounded-2xl text-lg"
            } ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .font-roboto { font-family: "Roboto", sans-serif; }
        .font-playfair { font-family: "Playfair Display", serif; }
      `,
        }}
      />
    </>
  );
};

export default ContactForm;
