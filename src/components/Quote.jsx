"use client";
import React, { useState } from "react";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request:", formData);
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl">
        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6 text-center">
          Request a Quote
        </h2>
        <p className="text-lg font-roboto text-gray-700 mb-10 text-center">
          Fill out the form below and our team will get back to you with a detailed estimate.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 font-roboto rounded-md text-center">
            Thank you! Your request has been submitted.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-roboto"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-roboto"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-roboto"
            />
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-roboto"
            >
              <option value="">Select Project Type</option>
              <option value="commercial">Commercial Building</option>
              <option value="residential">Residential Building</option>
              <option value="construction-management">Construction Management</option>
              <option value="pre-construction">Pre Construction Services</option>
              <option value="utility">Utility Construction</option>
              <option value="site-development">Site Development</option>
              <option value="renovation">Commercial Space Uplift</option>
            </select>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Additional Details / Message"
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 font-roboto"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition duration-300 font-roboto"
          >
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Quote;
