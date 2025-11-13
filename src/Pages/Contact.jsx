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
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setModalOpen(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setAddress("");
        setState("");
        setCountry("");
        setZipCode("");
        setTimeout(() => setModalOpen(false), 4000);
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  };

  const offices = [
    {
      title: "Head Office",
      location: "5540 Centerview Dr, Ste 304 \n Raleigh, NC 27606",
      phone: "+1 (919) 703-0222",
      email: "contact@ssncorporation.com",
    },
    {
      title: "Virginia Office",
      location: "8401 Mayland Dr, Ste A,\n Richmond, VA 23294",
      phone: "+1 (919) 703-0222",
      email: "contact@ssncorporation.com",
    },
    {
      title: "Georgia Office",
      location: "1982 Side Branch Way,\n Lawrenceville, GA 30045",
      phone: "+1 (919) 703-0222",
      email: "contact@ssncorporation.com",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-18 pt-42">
        {/* Hero */}
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
            Our team is ready to provide you the support and guidance you need.
          </p>
        </motion.div>

        {/* Form + Offices */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Message Form */}
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

            {modalOpen && (
              <div className="mb-6 px-4 py-3 rounded bg-green-100 text-green-800 text-center transition-all">
                We have received your message and will reach back shortly.
                <button
                  className="ml-4 text-green-700 font-bold underline"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>
              </div>
            )}

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

              {/* Address + Zip Code */}
              <div className="flex gap-4 flex-wrap">
                <input
                  type="text"
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="flex-1 px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-32 px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                  required
                />
              </div>

              {/* State + Country */}
              <div className="flex gap-4 flex-wrap">
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="flex-1 px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="flex-1 px-5 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-orange-400 outline-none font-roboto text-lg"
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
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-2xl text-lg transition-colors"
              >
                Send Message
              </button>
            </form>
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

      <style jsx>{`
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </>
  );
};

export default Contact;
