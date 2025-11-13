"use client";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaCalendarAlt, FaMoneyBillWave, FaUsers } from "react-icons/fa";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true); // track loading state

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
    coverLetter: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}jobs/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!job || job.is_expired) {
      showMessage("Applications are closed for this job.", "error");
      return;
    }
    if (!formData.resume) {
      showMessage("Please upload your resume.", "error");
      return;
    }
    const fd = new FormData();
    fd.append("job", job.id);
    fd.append("name", formData.name);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("address", formData.address);
    fd.append("cover_letter", formData.coverLetter || "Applied via website");
    fd.append("resume", formData.resume);

    try {
      const res = await fetch("https://api.ssnbuilders.com/api/applications/", {
        method: "POST",
        body: fd,
      });

      if (res.ok) {
        showMessage(
          `Application submitted successfully for ${job.title}!`,
          "success"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          resume: null,
          coverLetter: "",
        });
      } else {
        showMessage("Failed to submit application. Please try again.", "error");
      }
    } catch (err) {
      console.error(err);
      showMessage("Failed to submit application. Please try again.", "error");
    }
  };

  const showMessage = (text, type = "success") => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => setMessage(""), 4000);
  };

  const expired = job?.is_expired;

  return (
    <div className="relative min-h-screen">
      {/* Full-page loader overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-white">
          <svg
            className="animate-spin h-12 w-12 text-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"
            ></path>
          </svg>
          <span className="mt-3 text-gray-500 text-lg">
            Loading job details...
          </span>
        </div>
      )}

      {/* Job Details & Form */}
      <div
        className={`max-w-7xl mx-auto px-6 py-10 pt-40 grid lg:grid-cols-2 gap-12 transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Left column: Job Details */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-3xl font-bold mb-2">{job?.title}</h2>
            <div className="flex flex-wrap items-center text-gray-500 mb-4 gap-4">
              <div className="flex items-center gap-1">
                <FaCalendarAlt /> <span>{job?.posted_date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMoneyBillWave /> <span>{job?.salary}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaUsers /> <span>Vacancies: {job?.vacancies}</span>
              </div>
            </div>
            {expired && (
              <p className="text-red-500 font-semibold mb-2">
                🚫 This job posting has expired
              </p>
            )}
            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Description
            </h3>
            <p className="text-gray-700">{job?.description}</p>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Requirements
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
              {job?.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-800">
              Key Responsibilities
            </h3>
            <ul className="list-disc ml-6 text-gray-700">
              {job?.key_responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>

            <Link
              to="/career"
              className="mt-6 inline-block bg-gray-200 hover:bg-gray-300 py-2 px-5 rounded-lg font-medium transition"
            >
              Back to Jobs
            </Link>
          </div>
        </div>

        {/* Right column: Application Form */}
        <div className="space-y-4">
          {message && (
            <div
              className={`px-4 py-3 rounded ${
                messageType === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message}
            </div>
          )}
          <form
            onSubmit={handleSubmit}
            className={`space-y-4 bg-white p-8 rounded-2xl shadow-md ${
              expired ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Apply for this Job
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleInputChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
            <textarea
              name="coverLetter"
              placeholder="Cover Letter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
