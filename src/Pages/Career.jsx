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

  useEffect(() => {
    fetch("https://api.ssnbuilders.com/api/jobs/")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(term)
    );
    setFilteredJobs(filtered);
  };

  const handleViewApply = (jobId) => {
    setButtonLoading(true);
    setSelectedJob(jobId);
    setTimeout(() => {
      setButtonLoading(false);
      navigate(`/jobs/${jobId}`);
    }, 1000);
  };

  const handleView = (jobId) => {
    navigate(`/jobs/${jobId}`);
  };

  // Split jobs based on is_expired
  const currentOpenings = filteredJobs.filter((job) => !job.is_expired);
  const pastOpenings = filteredJobs.filter((job) => job.is_expired);

  // Redesigned benefits array
  const benefits = [
    {
      icon: AcademicCapIcon,
      title: "Professional Growth",
      description: "Continuous learning and development opportunities",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: UserGroupIcon,
      title: "Team Collaboration",
      description: "Work with industry experts and innovative minds",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: RocketLaunchIcon,
      title: "Career Advancement",
      description: "Clear pathways for promotion and leadership roles",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: HandRaisedIcon,
      title: "Work-Life Balance",
      description: "Flexible schedules and supportive work environment",
      color: "from-orange-400 to-red-500",
    },
  ];

  return (
    <section className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] bg-gray-100 text-gray-900 flex flex-col justify-center items-center text-center px-6 pt-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-playfair font-bold mb-4"
        >
          Build Your Career at <span className="text-orange-500">SSN</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg md:text-xl"
        >
          Join a team of innovators shaping tomorrow’s infrastructure. Explore
          opportunities and grow with us.
        </motion.p>
      </div>

      {/* Current Openings Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-8">
          Current Openings
        </h2>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 flex items-center border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm">
          <FaSearch className="text-gray-400 mr-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search jobs by title..."
            className="flex-1 outline-none bg-transparent text-gray-700"
          />
        </div>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Loading jobs...</p>
        ) : currentOpenings.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentOpenings.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-3xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-xl font-playfair font-bold mb-2 text-gray-900 flex items-center gap-2">
                    <FaBriefcase /> {job.title}
                  </h3>
                  <p className="text-gray-500 mb-2 text-sm">
                    Posted: {job.posted_date}
                  </p>
                  <p className="text-gray-700 text-sm line-clamp-4 font-roboto">
                    {job.description}
                  </p>
                </div>

                <button
                  onClick={() => handleViewApply(job.id)}
                  disabled={buttonLoading && selectedJob === job.id}
                  className="mt-4 block text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-semibold transition flex justify-center items-center gap-2"
                >
                  {buttonLoading && selectedJob === job.id ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                  ) : (
                    "View & Apply"
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg">
            🚀 No current openings found for "{searchTerm}".
          </p>
        )}
      </div>

      {/* Past Openings Section */}
      {pastOpenings.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-8">
            Past Openings
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastOpenings.map((job) => (
              <motion.div
                key={job.id}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-100 rounded-3xl shadow-sm p-6 flex flex-col justify-between opacity-90"
              >
                <div>
                  <h3 className="text-xl font-playfair font-bold mb-2 text-gray-700 flex items-center gap-2">
                    <FaBriefcase /> {job.title}
                  </h3>
                  <p className="text-gray-500 mb-2 text-sm">
                    Closed: {job.deadline}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-4 font-roboto">
                    {job.description}
                  </p>
                </div>

                <button
                  onClick={() => handleView(job.id)}
                  className="mt-4 block text-center bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-full font-semibold transition"
                >
                  View
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Redesigned Benefits Section like JoinOurTeam */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-10">
          Why Work With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -1 }}
              className="bg-white backdrop-blur-lg rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`inline-flex p-3 bg-gradient-to-r ${benefit.color} rounded-lg mb-3 shadow-md`}
              >
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-playfair font-bold text-gray-900 mb-1">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-snug">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}

export default Career;
