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

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();

    Object.keys(formData).forEach((key) => {
      if (formData[key]) fd.append(key, formData[key]);
    });

    try {
      const res = await fetch(
        "https://api.ssnbuilders.com/api/proposal/submit/",
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
  };

  return (
    <ConstructionLayout variant="default">
      <div className="max-w-5xl mx-auto px-6 py-24 text-gray-900 relative z-10">
        {/* Page Header */}
        <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-6 text-center">
          Submit Your Proposal
        </h1>
        <p className="text-lg sm:text-xl font-roboto mb-12 leading-relaxed text-center">
          We welcome your project proposals. Please fill out the form below.
        </p>

        {/* Proposal Form */}
        <form
          className="bg-white/90 p-8 rounded-2xl shadow-lg grid gap-6"
          onSubmit={handleSubmit}
        >
          {/* Your Information */}
          <h2 className="text-3xl font-playfair font-bold mb-6">
            Your Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-roboto font-semibold mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                required
              />
            </div>
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Project Information */}
          <h2 className="text-3xl font-playfair font-bold mb-6 mt-8">
            Your Project
          </h2>
          <div>
            <label className="block font-roboto font-semibold mb-2">
              Project Name
            </label>
            <input
              type="text"
              name="project_name"
              value={formData.project_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-roboto font-semibold mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
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
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block font-roboto font-semibold mb-2">
              Project Description
            </label>
            <textarea
              rows="4"
              name="project_description"
              value={formData.project_description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            ></textarea>
          </div>

          {/* Attachment */}
          <div>
            <label className="block font-roboto font-semibold mb-2">
              Attachment Name
            </label>
            <input
              type="text"
              name="attachment_name"
              value={formData.attachment_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
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

          {/* Referral */}
          <div>
            <label className="block font-roboto font-semibold mb-2">
              How did you hear about us?
            </label>
            <select
              name="referral_source"
              value={formData.referral_source}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            >
              <option value="">Select Referral Source</option>
              <option>Friend</option>
              <option>Colleague</option>
              <option>Advertisement</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block font-roboto font-semibold mb-2">
              Who did you refer us?
            </label>
            <input
              type="text"
              name="referred_by"
              value={formData.referred_by}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="px-6 py-3 bg-orange-600 text-white font-roboto font-semibold rounded-xl hover:bg-orange-700 transition"
          >
            Submit Proposal
          </button>
        </form>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm">
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

      {/* Fonts */}
      <style jsx>{`
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </ConstructionLayout>
  );
};

export default ProposalPage;
