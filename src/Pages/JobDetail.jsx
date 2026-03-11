"use client";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  { key: "overview", label: "Overview" },
  { key: "responsibilities", label: "Responsibilities" },
  { key: "requirements", label: "Requirements" },
  { key: "perks", label: "Perks & More" },
];

const renderBullets = (text) => {
  if (!text) return null;
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  return (
    <ul className="space-y-2 mt-2">
      {lines.map((line, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed"
        >
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
          {line}
        </li>
      ))}
    </ul>
  );
};

const renderOthers = (others) => {
  if (!others) return null;
  const items = Array.isArray(others)
    ? others
    : others
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean);
  if (!items.length) return null;
  return (
    <ul className="space-y-2 mt-2">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed"
        >
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
};

const SectionBlock = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-base font-playfair font-bold text-gray-900 mb-2">
      {title}
    </h3>
    {children}
  </div>
);

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
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
  const isPastDeadline = job?.deadline && new Date(job.deadline) < new Date();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}jobs/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files ? files[0] : value }));
  };

  const showModalMessage = (text, type = "success") => {
    setModalMessage(text);
    setModalType(type);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!job) return showModalMessage("Job not found.", "error");
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    )
      return showModalMessage("Please fill in all required fields.", "error");
    if (!formData.resume)
      return showModalMessage("Please upload your resume.", "error");

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
        showModalMessage(
          data?.message || "Failed to submit. Please try again.",
          "error",
        );
      }
    } catch {
      showModalMessage("Network error. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  // Tab content map
  const tabContent = job
    ? {
        overview: (
          <div>
            {job.company_description && (
              <SectionBlock title="About the Company">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {job.company_description}
                </p>
              </SectionBlock>
            )}
            {job.role_description && (
              <SectionBlock title="Role Overview">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {job.role_description}
                </p>
              </SectionBlock>
            )}
            {job.deadline && (
              <SectionBlock title="Application Deadline">
                <p className="text-gray-700 text-sm">
                  {new Date(job.deadline).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </SectionBlock>
            )}
          </div>
        ),
        responsibilities: (
          <div>
            {job.key_responsibilities ? (
              <SectionBlock title="Key Responsibilities">
                {renderBullets(job.key_responsibilities)}
              </SectionBlock>
            ) : (
              <p className="text-gray-400 text-sm">
                No responsibilities listed.
              </p>
            )}
            {job.physical_requirements && (
              <SectionBlock title="Physical Requirements">
                {renderBullets(job.physical_requirements)}
              </SectionBlock>
            )}
          </div>
        ),
        requirements: (
          <div>
            {job.requirements && (
              <SectionBlock title="Requirements">
                {renderBullets(job.requirements)}
              </SectionBlock>
            )}
            {job.qualification_experience && (
              <SectionBlock title="Qualifications & Experience">
                {renderBullets(job.qualification_experience)}
              </SectionBlock>
            )}
          </div>
        ),
        perks: (
          <div>
            {job.perks_benefits && (
              <SectionBlock title="Perks & Benefits">
                {renderBullets(job.perks_benefits)}
              </SectionBlock>
            )}
            {job.others && renderOthers(job.others) && (
              <SectionBlock title="Additional Info">
                {renderOthers(job.others)}
              </SectionBlock>
            )}
            {job.equal_opportunity_employer && (
              <SectionBlock title="Equal Opportunity Employer">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {job.equal_opportunity_employer}
                </p>
              </SectionBlock>
            )}
          </div>
        ),
      }
    : {};

  return (
    <div className="relative min-h-screen bg-gray-50 font-roboto pt-25">
      <style>{`
        .font-roboto { font-family: 'Roboto', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
      `}</style>

      {/* Loading */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-gray-500 text-sm">
              Loading job details...
            </span>
          </div>
        </div>
      )}

      {!loading && job && (
        <>
          {/* Sticky Header Bar */}
          <div className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
              <Link
                to="/career"
                className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition text-sm font-medium"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Jobs
              </Link>
              <span className="text-gray-800 font-semibold text-sm truncate max-w-xs hidden sm:block font-playfair">
                {job.title}
              </span>
              <a
                href="#apply-form"
                className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-[1fr_420px] gap-8 items-start">
            {/* LEFT: Job Info with Tabs */}
            <div>
              {/* Job Title Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 mb-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 leading-tight">
                      {job.title}
                    </h1>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-medium">
                        SSN Corporation
                      </span>
                      {job.posted_date && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                          Posted{" "}
                          {new Date(job.posted_date).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric", year: "numeric" },
                          )}
                        </span>
                      )}
                      {job.deadline && (
                        <span className="text-xs bg-orange-50 text-orange-500 px-3 py-1 rounded-full">
                          Deadline{" "}
                          {new Date(job.deadline).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Tab Nav */}
                <div className="flex border-b border-gray-100 overflow-x-auto">
                  {TABS.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`px-5 py-3.5 text-sm font-playfair font-bold whitespace-nowrap transition-colors border-b-2 ${
                        activeTab === tab.key
                          ? "border-orange-500 text-orange-500 bg-orange-50"
                          : "border-transparent text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="p-7 min-h-[260px]"
                  >
                    {tabContent[activeTab]}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            {/* RIGHT: Sticky Application Form */}
            <motion.div
              id="apply-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:sticky lg:top-24"
            >
              {isPastDeadline ? (
                /* Closed notice */
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 text-center">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-7 h-7 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-playfair font-bold text-gray-700 mb-2">
                    Applications Closed
                  </h2>
                  <p className="text-gray-500 text-sm mb-2">
                    The deadline for this position was{" "}
                    <span className="font-semibold text-gray-700">
                      {new Date(job.deadline).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    .
                  </p>
                  <p className="text-gray-400 text-xs mb-6">
                    This position is no longer accepting applications.
                  </p>
                  <Link
                    to="/career"
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm transition"
                  >
                    View Open Positions
                  </Link>
                </div>
              ) : (
                /* Application form */
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-5">
                    Apply for this Position
                  </h2>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-400 focus:outline-none transition"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-400 focus:outline-none transition"
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-400 focus:outline-none transition"
                    />
                    <input
                      type="text"
                      name="address"
                      placeholder="Address *"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-400 focus:outline-none transition"
                    />
                    <label className="block w-full border-2 border-dashed border-gray-200 rounded-xl px-4 py-4 text-center cursor-pointer hover:border-orange-300 transition group">
                      <input
                        type="file"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleInputChange}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center gap-1">
                        <svg
                          className="w-6 h-6 text-gray-300 group-hover:text-orange-400 transition"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                        <span className="text-xs text-gray-400 group-hover:text-orange-500 transition">
                          {formData.resume
                            ? formData.resume.name
                            : "Upload Resume (PDF, DOC, DOCX) *"}
                        </span>
                      </div>
                    </label>
                    <textarea
                      name="coverLetter"
                      placeholder="Cover Letter (optional)"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-300 focus:border-orange-400 focus:outline-none transition resize-none"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={submitting}
                      className={`w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${
                        submitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {submitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      By submitting, you agree to our privacy policy.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}

      {!loading && !job && (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
          <p className="text-gray-500 text-lg">Job not found.</p>
          <Link
            to="/career"
            className="text-orange-500 hover:underline text-sm"
          >
            Back to Jobs
          </Link>
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl border border-gray-100 mx-4"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  modalType === "success" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {modalType === "success" ? (
                  <svg
                    className="w-6 h-6 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <h3
                className={`text-xl font-playfair font-bold mb-2 ${modalType === "success" ? "text-green-600" : "text-red-600"}`}
              >
                {modalType === "success"
                  ? "Application Sent!"
                  : "Something went wrong"}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition text-sm font-semibold"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default JobDetail;
