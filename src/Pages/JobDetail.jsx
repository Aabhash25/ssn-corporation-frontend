"use client";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    resume: null,
    coverLetter: "",
  });

  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success");
  const [showModal, setShowModal] = useState(false);

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

    if (!job) {
      showModalMessage("Job not found.", "error");
      return;
    }

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      showModalMessage("Please fill in all required fields.", "error");
      return;
    }

    if (!formData.resume) {
      showModalMessage("Please upload your resume.", "error");
      return;
    }

    setSubmitting(true);

    const fd = new FormData();
    fd.append("job", job.id);
    fd.append("name", formData.name);
    fd.append("email", formData.email);
    fd.append("phone", formData.phone);
    fd.append("address", formData.address);
    fd.append("cover_letter", formData.coverLetter || "Applied via website");
    fd.append("resume", formData.resume);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}applications/`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (res.ok) {
        showModalMessage(
          `Application submitted successfully for ${job.title}!`,
          "success",
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
        let errorMsg =
          data?.message || "Failed to submit application. Please try again.";
        showModalMessage(errorMsg, "error");
      }
    } catch (err) {
      console.error(err);
      showModalMessage("Network error. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const showModalMessage = (text, type = "success") => {
    setModalMessage(text);
    setModalType(type);
    setShowModal(true);
  };

  // Function to render bullet points for plain text
  const renderBullets = (text) => {
    if (!text) return null;

    const lines = text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line);

    return (
      <ul className="list-disc pl-6 space-y-1">
        {lines.map((line, idx) => (
          <li key={idx}>{line}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="relative min-h-screen">
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-white">
          <span className="text-gray-500 text-lg">Loading job details...</span>
        </div>
      )}

      {!loading && job && (
        <div className="max-w-7xl mx-auto px-6 py-10 pt-40 grid lg:grid-cols-2 gap-12">
          {/* Left column: Job Details */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h2 className="text-3xl font-bold mb-4">{job.title}</h2>

              {job.company_description && (
                <>
                  <h3 className="font-semibold text-lg">Company Description</h3>
                  <p className="text-gray-700">{job.company_description}</p>
                </>
              )}

              {job.role_description && (
                <>
                  <h3 className="font-semibold text-lg mt-4">
                    Role Description
                  </h3>
                  <p className="text-gray-700">{job.role_description}</p>
                </>
              )}

              {job.key_responsibilities && (
                <>
                  <h3 className="font-semibold text-lg mt-4">
                    Key Responsibilities
                  </h3>
                  {renderBullets(job.key_responsibilities)}
                </>
              )}

              {job.requirements && (
                <>
                  <h3 className="font-semibold text-lg mt-4">Requirements</h3>
                  {renderBullets(job.requirements)}
                </>
              )}

              {job.qualification_experience && (
                <>
                  <h3 className="font-semibold text-lg mt-4">
                    Qualification & Experience
                  </h3>
                  {renderBullets(job.qualification_experience)}
                </>
              )}

              {job.physical_requirements && (
                <>
                  <h3 className="font-semibold text-lg mt-4">
                    Physical Requirements
                  </h3>
                  {renderBullets(job.physical_requirements)}
                </>
              )}

              {job.perks_benefits && (
                <>
                  <h3 className="font-semibold text-lg mt-4">
                    Perks & Benefits
                  </h3>
                  {renderBullets(job.perks_benefits)}
                </>
              )}

              {job.equal_opportunity_employer && (
                <>
                  <h3 className="font-semibold text-lg mt-4">
                    Equal Opportunity Employer
                  </h3>
                  <p className="text-gray-700">
                    {job.equal_opportunity_employer}
                  </p>
                </>
              )}

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
            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-white p-8 rounded-2xl shadow-md"
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
                disabled={submitting}
                className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition ${
                  submitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-lg border border-gray-200">
            <h3
              className={`text-xl font-bold mb-4 ${
                modalType === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {modalType === "success" ? "Success!" : "Error!"}
            </h3>
            <p className="text-gray-700 mb-6">{modalMessage}</p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobDetail;
