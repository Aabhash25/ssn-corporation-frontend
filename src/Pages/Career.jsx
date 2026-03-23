import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBriefcase } from "react-icons/fa";
import {
  UserGroupIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

function Career() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const navigate = useNavigate();

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";
    const date = new Date(dateStr);
    if (isNaN(date)) return "N/A";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}jobs/`)
      .then((res) => res.json())
      .then((data) => {
        const jobsArray = data.results || data;
        setJobs(jobsArray);
        setFilteredJobs(jobsArray);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredJobs(
      jobs.filter((job) => job.title.toLowerCase().includes(term)),
    );
  };

  const handleViewApply = (jobId) => {
    setButtonLoading(true);
    setSelectedJob(jobId);
    setTimeout(() => {
      setButtonLoading(false);
      navigate(`/jobs/${jobId}`);
    }, 1000);
  };

  const handleView = (jobId) => navigate(`/jobs/${jobId}`);

  const currentOpenings = filteredJobs.filter(
    (job) => job.role_filled === false,
  );
  const pastOpenings = filteredJobs.filter((job) => job.role_filled === true);

  const benefits = [
    {
      icon: AcademicCapIcon,
      title: "Professional Growth",
      description:
        "Continuous learning and development opportunities tailored to your career path.",
    },
    {
      icon: UserGroupIcon,
      title: "Team Collaboration",
      description:
        "Work alongside industry experts and innovative minds every day.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Career Advancement",
      description:
        "Clear pathways for promotion and leadership within the company.",
    },
    {
      icon: HandRaisedIcon,
      title: "Work-Life Balance",
      description:
        "Flexible schedules and a genuinely supportive work environment.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-gray-50">
      {/* ── Hero ── */}
      <div className="relative w-full bg-gray-100 pt-40 pb-12 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-yellow-500">
              We're Hiring
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 leading-tight mb-4"
          >
            Build Your Career at <span className="text-yellow-500">SSN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-gray-500 text-lg max-w-xl leading-relaxed"
          >
            Join a team of innovators shaping tomorrow's infrastructure. Explore
            opportunities and grow with us.
          </motion.p>
        </div>
      </div>

      {/* ── Current Openings ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-xs font-bold tracking-widest uppercase text-yellow-500 mb-1">
          Opportunities
        </p>
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
          Current Openings
        </h2>
        <div className="w-10 h-0.5 bg-yellow-500 rounded mb-10" />

        {/* search */}
        <div className="relative max-w-md mb-10">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search positions..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
          />
        </div>

        {loading ? (
          <div className="flex flex-col items-center py-16 gap-3">
            <div className="w-7 h-7 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-400 text-sm">Loading positions...</p>
          </div>
        ) : currentOpenings.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`grid gap-5 ${
              currentOpenings.length === 1
                ? "grid-cols-1 max-w-sm"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {currentOpenings.map((job) => (
              <motion.div
                key={job.id}
                variants={cardVariants}
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-yellow-400 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500 mb-4 group-hover:bg-yellow-100 transition">
                  <FaBriefcase className="text-base" />
                </div>

                <h3 className="font-playfair font-bold text-gray-900 text-lg leading-snug mb-1">
                  {job.title}
                </h3>

                <p className="text-xs text-gray-400 mb-2">
                  Posted {formatDate(job.posted_date)}
                </p>

                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-600 tracking-wide">
                    Open Position
                  </span>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1 mb-5">
                  {job.role_description
                    ?.replace(/^##\s*/gm, "")
                    .replace(/^[-•]\s*/gm, "") || ""}
                </p>

                <button
                  onClick={() => handleViewApply(job.id)}
                  disabled={buttonLoading && selectedJob === job.id}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-gray-900 hover:bg-yellow-500 text-white text-sm font-semibold rounded-xl transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {buttonLoading && selectedJob === job.id ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    "View & Apply →"
                  )}
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center py-16 gap-2 text-gray-400">
            <span className="text-4xl">🔍</span>
            <p className="text-sm">
              No positions found{searchTerm ? ` for "${searchTerm}"` : ""}.
            </p>
          </div>
        )}
      </div>

      {/* ── Past Openings ── */}
      {pastOpenings.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-yellow-500 mb-1">
            Previously Listed
          </p>
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
            Past Openings
          </h2>
          <div className="w-10 h-0.5 bg-yellow-500 rounded mb-10" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3"
          >
            {pastOpenings.map((job) => (
              <motion.div
                key={job.id}
                variants={cardVariants}
                className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center justify-between gap-4 opacity-75 hover:opacity-100 transition"
              >
                <div>
                  <p className="font-playfair font-bold text-gray-600 text-base">
                    {job.title}
                  </p>
                  <p className="text-xs font-semibold text-red-400 mt-0.5">
                    ● Position Filled
                  </p>
                </div>
                <button
                  onClick={() => handleView(job.id)}
                  className="shrink-0 px-4 py-2 border border-gray-200 rounded-lg text-xs font-semibold text-gray-500 hover:border-gray-400 hover:text-gray-700 transition"
                >
                  View Details
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* ── Benefits ── */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <p className="text-xs font-bold tracking-widest uppercase text-yellow-500 mb-1">
          Why SSN
        </p>
        <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-2">
          Why Work With Us
        </h2>
        <div className="w-10 h-0.5 bg-yellow-500 rounded mb-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-yellow-400 hover:shadow-md transition-all duration-200"
            >
              <div className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center mb-3">
                <benefit.icon className="w-5 h-5 text-yellow-500" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1.5">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Career;
