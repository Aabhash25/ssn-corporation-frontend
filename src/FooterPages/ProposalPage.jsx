"use client";
import React, { useState } from "react";
import ConstructionLayout from "../Layout/ConstructionLayout";

const ProposalPage = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company_name: "",
    company_website: "",
    project_name: "",
    address: "",
    city: "",
    state: "",
    zip_code: "",
    project_owner: "",
    project_description: "",
    attachment_name: "",
    attachment_file: null,
    referral_source: "",
    referred_by: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // 🔥 Added loading state

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // ⏳ Start loading

    const fd = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) fd.append(key, formData[key]);
    });

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}proposal/submit/`,
        {
          method: "POST",
          body: fd,
        }
      );

      if (res.ok) {
        setModalMessage("Proposal submitted successfully!");
        setModalOpen(true);

        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          company_name: "",
          company_website: "",
          project_name: "",
          address: "",
          city: "",
          state: "",
          zip_code: "",
          project_owner: "",
          project_description: "",
          attachment_name: "",
          attachment_file: null,
          referral_source: "",
          referred_by: "",
        });
      } else {
        setModalMessage("Failed to submit. Please try again.");
        setModalOpen(true);
      }
    } catch (err) {
      console.error(err);
      setModalMessage("Failed to submit. Please try again.");
      setModalOpen(true);
    }

    setIsLoading(false); // ⏳ Stop loading
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 text-gray-900 relative z-10 pt-42">
      {/* Page Header */}
      <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-4 text-center">
        Submit For Proposal
      </h1>
      <p className="text-lg sm:text-xl font-roboto mb-12 leading-relaxed text-center text-gray-700">
        We welcome your project proposals. Please fill out the form below.
      </p>

      {/* Proposal Form */}
      <form
        className="bg-white/95 p-8 rounded-3xl shadow-xl grid gap-6 sm:gap-8"
        onSubmit={handleSubmit}
      >
        {/* Your Information */}
        <h2 className="text-3xl font-playfair font-bold mb-6">
          Your Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block font-roboto font-semibold mb-2">
              First Name *
            </label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Last Name *
            </label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Company Website
            </label>
            <input
              type="text"
              name="company_website"
              value={formData.company_website}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>
        </div>

        {/* Project Information */}
        <h2 className="text-3xl font-playfair font-bold mb-6 mt-8">
          Your Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block font-roboto font-semibold mb-2">
              Project Name
            </label>
            <input
              type="text"
              name="project_name"
              value={formData.project_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              State
            </label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            >
              <option value="">Select State</option>
              <option>North Carolina</option>
              <option>Georgia</option>
              <option>Virginia</option>
            </select>
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Zip Code
            </label>
            <input
              type="text"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Project Owner/Developer *
            </label>
            <input
              type="text"
              name="project_owner"
              value={formData.project_owner}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
              required
            />
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <label className="block font-roboto font-semibold mb-2">
              Project Description
            </label>
            <textarea
              rows="4"
              name="project_description"
              value={formData.project_description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            ></textarea>
          </div>
        </div>

        {/* Attachment and Referral */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          <div>
            <label className="block font-roboto font-semibold mb-2">
              Attachment Name
            </label>
            <input
              type="text"
              name="attachment_name"
              value={formData.attachment_name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              Attachment File
            </label>
            <input
              type="file"
              name="attachment_file"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-roboto font-semibold mb-2">
              How did you hear about us?
            </label>
            <select
              name="referral_source"
              value={formData.referral_source}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
            >
              <option value="">Select Referral Source</option>
              <option>Friend</option>
              <option>Colleague</option>
              <option>Advertisement</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Submit Button with Loading */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full md:w-auto px-6 py-3 text-white font-roboto font-semibold rounded-2xl transition text-center mt-6
            ${
              isLoading
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-orange-600 hover:bg-orange-700"
            }
          `}
        >
          {isLoading ? "Submitting..." : "Submit for Proposal"}
        </button>
      </form>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm mx-4">
            <h2 className="text-xl font-bold mb-2">Notification</h2>
            <p className="mb-4">{modalMessage}</p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </div>
  );
};

export default ProposalPage;
