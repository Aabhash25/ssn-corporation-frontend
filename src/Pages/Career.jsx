import { useLoaderData, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch, FaBriefcase } from "react-icons/fa";
import {
  UserGroupIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { getJobTags } from "../utils/jobTags";

const BASE_URL = "https://ssncorporation.com";

// Fetch every page of /jobs/ (follows DRF's "next" links).
// Also works if pagination is turned off and the API returns a plain list.
async function fetchAllJobs() {
  let url = `${import.meta.env.VITE_API_URL}jobs/`;
  const all = [];
  while (url) {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (Array.isArray(data)) {
      all.push(...data);
      url = null;
    } else {
      all.push(...(data.results || []));
      url = data.next || null;
    }
  }
  return all;
}

// Newest first, so new postings always appear at the top
const sortJobs = (list) =>
  [...list].sort((a, b) => {
    const da = a.posted_date || "";
    const db = b.posted_date || "";
    if (da !== db) return db.localeCompare(da);
    return b.id - a.id;
  });

function Career() {
  const { jobs: loaderJobs } = useLoaderData() || {};

  // Start with the build-time (SSG) jobs, then replace with live data
  const [jobs, setJobs] = useState(() => sortJobs(loaderJobs || []));
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let cancelled = false;
    fetchAllJobs()
      .then((live) => {
        if (!cancelled) setJobs(sortJobs(live));
      })
      .catch((err) => {
        // Keep showing the build-time jobs if the API is unreachable
        console.error("Failed to load live jobs:", err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Derived from jobs + searchTerm, so it updates when live jobs arrive
  const term = searchTerm.trim().toLowerCase();
  const filteredJobs = term
    ? jobs.filter((job) => (job.title || "").toLowerCase().includes(term))
    : jobs;

  const currentOpenings = filteredJobs.filter(
    (job) => job.role_filled === false,
  );
  const pastOpenings = filteredJobs.filter((job) => job.role_filled === true);

  // Structured data: list of all open jobs (not affected by search box)
  const openJobs = jobs.filter((job) => job.role_filled === false);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Careers & Job Openings | SSN Corporation",
        url: `${BASE_URL}/career`,
        isPartOf: {
          "@type": "WebSite",
          name: "SSN Corporation",
          url: BASE_URL,
        },
      },
      {
        "@type": "ItemList",
        itemListElement: openJobs.map((job, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${BASE_URL}/jobs/${job.id}`,
          name: job.title,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Careers",
            item: `${BASE_URL}/career`,
          },
        ],
      },
    ],
  };

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
      <Head>
        <title>Careers & Job Openings | SSN Corporation</title>
        <meta
          name="description"
          content="Explore current job openings at SSN Corporation, a Raleigh, NC engineering and construction firm. View open positions and apply online."
        />
        <link rel="canonical" href={`${BASE_URL}/career`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SSN Corporation" />
        <meta
          property="og:title"
          content="Careers & Job Openings | SSN Corporation"
        />
        <meta
          property="og:description"
          content="Explore current job openings at SSN Corporation, a Raleigh, NC engineering and construction firm. View open positions and apply online."
        />
        <meta property="og:url" content={`${BASE_URL}/career`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>

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
            aria-label="Search positions"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm bg-white text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
          />
        </div>

        {currentOpenings.length > 0 ? (
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
                initial="hidden"
                animate="visible"
                className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col hover:border-yellow-400 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-500 mb-4 group-hover:bg-yellow-100 transition">
                  <FaBriefcase className="text-base" />
                </div>

                <h3 className="font-playfair font-bold text-gray-900 text-lg leading-snug mb-3">
                  <Link
                    to={`/jobs/${job.id}`}
                    className="hover:text-yellow-600 transition-colors"
                  >
                    {job.title}
                  </Link>
                </h3>

                {/* Hidden automatically when a job has none of these */}
                <div className="flex flex-wrap gap-1.5 mb-3 empty:hidden">
                  {getJobTags(job).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-600 tracking-wide">
                    Open Position
                  </span>
                </div>

                {job.role_description && (
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-5">
                    {job.role_description
                      .replace(/^##\s*/gm, "")
                      .replace(/^[-•]\s*/gm, "")}
                  </p>
                )}

                <Link
                  to={`/jobs/${job.id}`}
                  className="mt-auto w-full flex items-center justify-center gap-2 py-2.5 bg-gray-900 hover:bg-yellow-500 text-white text-sm font-semibold rounded-xl transition-colors duration-200"
                >
                  View &amp; Apply →
                </Link>
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
                initial="hidden"
                animate="visible"
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
                <Link
                  to={`/jobs/${job.id}`}
                  className="shrink-0 px-4 py-2 border border-gray-200 rounded-lg text-xs font-semibold text-gray-500 hover:border-gray-400 hover:text-gray-700 transition"
                >
                  View Details
                </Link>
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
