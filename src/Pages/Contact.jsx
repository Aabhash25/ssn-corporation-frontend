"use client";
import React, { useState } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [loading, setLoading] = useState(false); // NEW
  const [showSuccessModal, setShowSuccessModal] = useState(false); // NEW

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name,
      email,
      subject,
      message,
      address,
      state,
      country,
      zip_code: zipCode,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setShowSuccessModal(true);

        // Reset form
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setAddress("");
        setState("");
        setCountry("");
        setZipCode("");

        // Auto close modal
        setTimeout(() => setShowSuccessModal(false), 3500);
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }

    setLoading(false);
  };

  const offices = [
    {
      title: "Corporate Office",
      location: "5540 Centerview Dr, Ste 304 \n Raleigh, NC 27606",
      phone: "(919) 703-0222",
      email: "contact@ssncorporation.com",
    },
    {
      title: "Virginia Office",
      location: "8401 Mayland Dr, Ste A,\n Richmond, VA 23294",
      phone: "(919) 703-0222",
      email: "contact@ssncorporation.com",
    },
    {
      title: "Georgia Office",
      location: "1982 Side Branch Way,\n Lawrenceville, GA 30045",
      phone: "(919) 703-0222",
      email: "contact@ssncorporation.com",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* SUCCESS MODAL */}
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
              onClick={() => setShowSuccessModal(false)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-18 pt-42">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
            Contact SSN Corporation
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-roboto text-gray-700 max-w-3xl mx-auto">
            Reach out for inquiries, collaborations, or project consultations.
            Our team is ready to provide the support and guidance you need.
          </p>
        </motion.div>

        {/* Form + Offices */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-xl p-8 sm:p-12"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold mb-6 text-gray-900">
              Send Us a Message
            </h2>

            {/* FORM START */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                required
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                required
              />

              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                required
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                />

                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                  required
                />

                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                  required
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                required
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg h-40 resize-none"
                required
              />

              {/* BUTTON WITH LOADING SPINNER */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl text-lg transition-colors ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
            {/* FORM END */}
          </motion.div>

          {/* Offices */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
          >
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-4">
                  {office.title}
                </h3>

                <p className="flex items-center text-gray-700 font-roboto text-lg mb-2">
                  <MapPinIcon className="h-5 w-5 text-orange-400 mr-3" />
                  <span className="whitespace-pre-line">{office.location}</span>
                </p>

                <p className="flex items-center text-gray-700 font-roboto text-lg mb-2">
                  <PhoneIcon className="h-5 w-5 text-orange-400 mr-3" />
                  {office.phone}
                </p>

                <p className="flex items-center text-gray-700 font-roboto text-lg">
                  <EnvelopeIcon className="h-5 w-5 text-orange-400 mr-3" />
                  {office.email}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </>
  );
};

export default Contact;
