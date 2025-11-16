"use client";
import React, { useState } from "react";

const prequalificationDocs = [
  {
    doc: "W9",
    explanation: "With full legal name, signed and dated within the past year.",
  },
  {
    doc: "Sample Insurance Certificate",
    explanation: "With applicable endorsements.",
  },
  {
    doc: "OSHA 300 and 300A Forms",
    explanation:
      "For the past three years. If your company has ten (10) or fewer employees, provide the number of employees and total hours worked each year. Any work-related incident resulting in fatality, in-patient hospitalization, amputation, or loss of an eye must be reported to OSHA.",
  },
  {
    doc: "EMR Verification",
    explanation:
      "NCCI comparable form or letter from worker’s comp carrier showing EMR for the past 3 years. Your carrier can provide a letter if you do not qualify for EMR.",
  },
  {
    doc: "Letter from your Surety",
    explanation:
      "Dated within the past 6 months. State your single project bonding capacity, aggregate bonding capacity, and amount available. If no ongoing bond program, provide a document stating that.",
  },
  {
    doc: "Financial Statements",
    explanation:
      "Third-party prepared financial statements preferred. Include balance sheet and income statement. Internal statements accepted if third-party not available. Use accrual basis.",
  },
  { doc: "Experiences", explanation: "List of recently completed 3 projects." },
];

const Business = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    note: "",
    file: null,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData();
    Object.keys(formData).forEach(
      (key) => formData[key] && fd.append(key, formData[key])
    );

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}submit/`, {
        method: "POST",
        body: fd,
      });
      if (res.ok) {
        setModalMessage("Prequalification form submitted successfully!");
        setModalOpen(true);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          company: "",
          note: "",
          file: null,
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
    <div className="w-full px-4 sm:px-6 lg:px-12 py-24 text-gray-900 pt-42">
      {/* Page Header */}
      <h1 className="text-5xl sm:text-6xl font-playfair font-bold mb-6 text-center">
        Work With SSN Corporation
      </h1>
      <p className="text-lg sm:text-xl font-roboto mb-12 leading-relaxed text-center">
        SSN Corporation values our relationships with subcontractors, suppliers,
        and collaborators/partners
      </p>

      {/* Full-width Two-column Layout */}
      <div className="flex flex-col lg:flex-row gap-12 w-full">
        {/* Table Container */}
        <div className="flex-1">
          <h2 className="text-3xl font-playfair font-bold mb-4 text-center lg:text-left">
            Prequalification Documents
          </h2>
          <div className="overflow-x-auto rounded-2xl shadow-lg">
            <table className="min-w-full table-auto bg-white/90 text-gray-900">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left font-playfair">
                    Document
                  </th>
                  <th className="px-4 py-3 text-left font-playfair">
                    Explanation
                  </th>
                </tr>
              </thead>
              <tbody>
                {prequalificationDocs.map((item, idx) => (
                  <tr
                    key={idx}
                    className="border-t border-gray-300 hover:bg-gray-100 transition-colors"
                  >
                    <td className="px-4 py-3 font-roboto font-semibold">
                      {item.doc}
                    </td>
                    <td className="px-4 py-3 font-roboto">
                      {item.explanation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-center lg:text-left">
            Prequalification Form
          </h2>
          <form
            className="bg-white/90 p-8 rounded-2xl shadow-lg grid gap-6"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-roboto font-semibold mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-roboto font-semibold mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 md:max-w-sm">
                <label className="block font-roboto font-semibold mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>

              <div className="flex-1 md:max-w-sm">
                <label className="block font-roboto font-semibold mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-roboto font-semibold mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-roboto font-semibold mb-2">
                Note*
              </label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                rows={4}
              ></textarea>
            </div>

            <div>
              <label className="block font-roboto font-semibold mb-2">
                File
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                className="block w-full text-gray-700 bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 cursor-pointer"
              />
              <p className="text-sm text-gray-500 mt-1">
                Max. file size: 25 MB.
              </p>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-orange-600 text-white font-roboto font-semibold rounded-xl hover:bg-orange-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
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
    </div>
  );
};

export default Business;
