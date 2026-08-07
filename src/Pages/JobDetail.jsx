"use client";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// ─── Render helpers ───────────────────────────────────────────────────────────

const isBullet = (line) => /^[-•]/.test(line.trim());
const isHeading = (line) => /^##\s+/.test(line.trim());

const renderList = (lines) => (
  <ul className="space-y-2 mt-2">
    {lines.map((line, i) => (
      <li
        key={i}
        className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed"
      >
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
        {line.replace(/^[-•]\s*/, "")}
      </li>
    ))}
  </ul>
);

const renderField = (text) => {
  if (!text?.trim()) return null;
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  // Group lines into typed segments; headings always get their own segment
  const segments = [];
  let current = null;
  for (const line of lines) {
    const type = isHeading(line)
      ? "heading"
      : isBullet(line)
        ? "list"
        : "paragraph";
    if (type === "heading") {
      segments.push({ type: "heading", lines: [line] });
      current = null;
      continue;
    }
    if (!current || current.type !== type) {
      current = { type, lines: [] };
      segments.push(current);
    }
    current.lines.push(line);
  }

  return (
    <div className="space-y-2">
      {segments.map((seg, i) => {
        if (seg.type === "heading") {
          return (
            <h4
              key={i}
              className="text-sm font-semibold text-gray-800 mt-4 mb-1 first:mt-0"
            >
              {seg.lines[0].replace(/^##\s*/, "")}
            </h4>
          );
        }
        if (seg.type === "list") {
          return <div key={i}>{renderList(seg.lines)}</div>;
        }
        return (
          <div key={i} className="space-y-3">
            {seg.lines.map((line, j) => (
              <p key={j} className="text-gray-700 text-sm leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
};

// ─── Section wrapper ──────────────────────────────────────────────────────────

const SectionBlock = ({ title, children }) => (
  <div className="mb-6 last:mb-0">
    <h3 className="text-base font-playfair font-bold text-gray-900 mb-2">
      {title}
    </h3>
    {children}
  </div>
);

// ─── All Job Content (shared between mobile & desktop) ────────────────────────

const JobContent = ({ job }) => (
  <>
    {job.company_description && (
      <SectionBlock title="About the Company">
        {renderField(job.company_description)}
      </SectionBlock>
    )}
    {job.role_description && (
      <SectionBlock title="Role Overview">
        {renderField(job.role_description)}
      </SectionBlock>
    )}
    {job.key_responsibilities && (
      <SectionBlock title="Key Responsibilities">
        {renderField(job.key_responsibilities)}
      </SectionBlock>
    )}
    {job.physical_requirements && (
      <SectionBlock title="Physical Requirements">
        {renderField(job.physical_requirements)}
      </SectionBlock>
    )}
    {job.requirements && (
      <SectionBlock title="Requirements">
        {renderField(job.requirements)}
      </SectionBlock>
    )}
    {job.qualification_experience && (
      <SectionBlock title="Qualifications & Experience">
        {renderField(job.qualification_experience)}
      </SectionBlock>
    )}
    {job.perks_benefits && (
      <SectionBlock title="Perks & Benefits">
        {renderField(job.perks_benefits)}
      </SectionBlock>
    )}
    {job.others && (
      <SectionBlock title="Additional Info">
        {renderField(job.others)}
      </SectionBlock>
    )}
    {job.equal_opportunity_employer && (
      <SectionBlock title="Equal Opportunity Employer">
        {renderField(job.equal_opportunity_employer)}
      </SectionBlock>
    )}
    {job.sections?.length > 0 &&
      job.sections.map((section) => (
        <SectionBlock key={section.id} title={section.title}>
          {renderField(section.content)}
        </SectionBlock>
      ))}
  </>
);

// ─── Apply form (Defined Outside) ─────────────────────────────────────────────

const ApplyForm = ({ formData, handleInputChange, handleSubmit, submitting }) => (
  <div className="space-y-3">
    <input
      type="text"
      name="name"
      placeholder="Full Name *"
      value={formData.name}
      onChange={handleInputChange}
      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 focus:outline-none transition"
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address *"
      value={formData.email}
      onChange={handleInputChange}
      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 focus:outline-none transition"
    />
    <input
      type="text"
      name="phone"
      placeholder="Phone Number *"
      value={formData.phone}
      onChange={handleInputChange}
      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 focus:outline-none transition"
    />
    <input
      type="text"
      name="address"
      placeholder="Address *"
      value={formData.address}
      onChange={handleInputChange}
      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 focus:outline-none transition"
    />
    <label className="block w-full border-2 border-dashed border-gray-200 rounded-xl px-4 py-4 text-center cursor-pointer hover:border-yellow-300 transition group">
      <input
        type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleInputChange}
        className="hidden"
      />
      <div className="flex flex-col items-center gap-1">
        <svg
          className="w-6 h-6 text-gray-300 group-hover:text-yellow-400 transition"
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
        <span className="text-xs text-gray-400 group-hover:text-yellow-500 transition">
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
      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-yellow-300 focus:border-yellow-400 focus:outline-none transition resize-none"
    />
    <button
      onClick={handleSubmit}
      disabled={submitting}
      className={`w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${
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
);

// ─── Component ────────────────────────────────────────────────────────────────

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

  const isClosed = job?.role_filled === true;

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

  // ── Closed panel (shared) ────────────────────────────────────────────────────
  const ClosedPanel = ({ compact = false }) => (
    <div
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm text-center ${compact ? "p-6" : "p-7"}`}
    >
      <div
        className={`rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3 ${compact ? "w-10 h-10" : "w-14 h-14"}`}
      >
        <svg
          className={`text-gray-400 ${compact ? "w-5 h-5" : "w-7 h-7"}`}
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
      <h2
        className={`font-playfair font-bold text-gray-700 mb-1 ${compact ? "text-lg" : "text-2xl"}`}
      >
        Position Filled
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        This role is no longer accepting applications.
      </p>
      <Link
        to="/career"
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition"
      >
        View Open Positions
      </Link>
    </div>
  );

  // ── Render ───────────────────────────────────────────────────────────────────
  return (
    <div className="relative min-h-screen bg-gray-50 pt-20">
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            <span className="text-gray-500 text-sm">
              Loading job details...
            </span>
          </div>
        </div>
      )}

      {!loading && job && (
        <>
          {/* Sticky header — desktop only */}
          <div className="hidden lg:block fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-3">
              <Link
                to="/career"
                className="flex items-center gap-1.5 text-gray-500 hover:text-yellow-500 transition text-sm font-medium shrink-0"
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
              <span className="text-gray-800 font-semibold text-sm truncate font-playfair flex-1 text-center">
                {job.title}
              </span>
              {!isClosed && (
                <a
                  href="#apply-form"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition shrink-0"
                >
                  Apply Now
                </a>
              )}
              {isClosed && (
                <span className="text-xs bg-red-50 text-red-400 px-3 py-1.5 rounded-full font-medium shrink-0">
                  Position Filled
                </span>
              )}
            </div>
          </div>

          {/* ── Mobile layout ── */}
          <div className="lg:hidden max-w-2xl mx-auto px-4 pt-6 pb-10 space-y-4">
            {/* Title card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <h1 className="text-2xl font-playfair font-bold text-gray-900 leading-tight mb-2">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full font-medium">
                  SSN Corporation
                </span>
                {job.posted_date && (
                  <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                    Posted{" "}
                    {new Date(job.posted_date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                )}
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    isClosed
                      ? "bg-red-50 text-red-400"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {isClosed ? "Position Filled" : "Open"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <JobContent job={job} />
            </div>

            {/* Apply / Closed */}
            {isClosed ? (
              <ClosedPanel compact />
            ) : (
              <div
                id="apply-form"
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              >
                <h2 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                  Apply for this Position
                </h2>
                <ApplyForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  submitting={submitting}
                />
              </div>
            )}
          </div>

          {/* ── Desktop layout ── */}
          <div className="hidden lg:grid max-w-6xl mx-auto px-6 pt-24 pb-16 grid-cols-[1fr_420px] gap-8 items-start">
            {/* Left column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7 mb-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 text-yellow-500"
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
                      <span className="text-xs bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full font-medium">
                        SSN Corporation
                      </span>
                      {job.posted_date && (
                        <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                          Posted{" "}
                          {new Date(job.posted_date).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </span>
                      )}
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          isClosed
                            ? "bg-red-50 text-red-400"
                            : "bg-green-50 text-green-600"
                        }`}
                      >
                        {isClosed ? "Position Filled" : "Open"}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* All sections — no tabs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7"
              >
                <JobContent job={job} />
              </motion.div>
            </div>

            {/* Right column — sticky apply form or closed panel */}
            <motion.div
              id="apply-form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              className="lg:sticky lg:top-24"
            >
              {isClosed ? (
                <ClosedPanel />
              ) : (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-5">
                    Apply for this Position
                  </h2>
                  <ApplyForm
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    submitting={submitting}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}

      {!loading && !job && (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
          <p className="text-gray-500 text-lg">Job not found.</p>
          <Link
            to="/career"
            className="text-yellow-500 hover:underline text-sm"
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
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20 px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl border border-gray-100"
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
                className={`text-xl font-playfair font-bold mb-2 ${
                  modalType === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {modalType === "success"
                  ? "Application Sent!"
                  : "Something went wrong"}
              </h3>
              <p className="text-gray-600 text-sm mb-6">{modalMessage}</p>
              <button
                onClick={() => setShowModal(false)}
                className="px-6 py-2.5 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition text-sm font-semibold"
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