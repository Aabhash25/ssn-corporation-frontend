"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaIndustry,
} from "react-icons/fa";

const capabilitiesList = [
  {
    title: "Turnkey Construction Services",
    desc: "From site prep to handover, we manage every construction phase.",
    icon: <FaTools />,
  },
  {
    title: "Project Scheduling & Cost Control",
    desc: "Efficient planning & resource management to stay within budget.",
    icon: <FaClock />,
  },
  {
    title: "Skilled Workforce & Modern Equipment",
    desc: "Trained teams with state-of-the-art machinery for precise execution.",
    icon: <FaUsers />,
  },
  {
    title: "Quality Assurance & Safety Compliance",
    desc: "Adhering to international standards for safety and quality.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Infrastructure & Industrial Construction",
    desc: "Specializing in roads, bridges, factories, warehouses & large projects.",
    icon: <FaIndustry />,
  },
];

const reasonsList = [
  "Proven track record of delivering projects on time and within budget",
  "Strong emphasis on sustainability and innovation",
  "Transparent communication and client-centric approach",
  "In-house teams spanning engineering, architecture, and construction",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Construction = () => (
  <div className="w-full min-h-screen">
    {/* Hero Section */}
    <div className="relative w-full h-[70vh] md:h-[80vh] bg-[url('https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?w=1500&auto=format&fit=crop&q=80')] bg-cover bg-center flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative text-white text-5xl md:text-6xl font-bold text-center px-4"
      >
        Construction Excellence
      </motion.h1>
    </div>

    <div className="w-full flex flex-col items-center">
      {/* Intro */}
      <motion.section
        className="w-full max-w-[1400px] px-6 md:px-12 py-16 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg md:text-xl leading-relaxed md:leading-loose max-w-3xl lg:max-w-4xl mx-auto text-center px-4 sm:px-6"
        >
          At SSN Corporation, we transform blueprints into reality. With
          precision, safety, and innovation, we deliver construction projects
          that stand the test of time.
        </motion.p>
      </motion.section>

      {/* Capabilities */}
      <motion.section
        className="w-full bg-gradient-to-r from-blue-50 via-white to-orange-50 py-16"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Capabilities
        </h2>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesList.map((cap, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-3xl bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-start space-y-4"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-3xl">
                {cap.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold">{cap.title}</h3>
              <p className="text-gray-600">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="w-full py-16"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {reasonsList.map((reason, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-start space-x-4 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-md hover:scale-105 transition"
            >
              <FaCheckCircle className="text-green-600 w-6 h-6 mt-1" />
              <p className="text-gray-700 text-lg">{reason}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="w-full py-16"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="max-w-[1400px] mx-auto px-6 md:px-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-12 shadow-2xl text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Build Together
          </h3>
          <p className="text-lg md:text-xl mb-6">
            Partner with SSN Corporation for construction that blends
            reliability, innovation, and excellence.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Start Your Project
          </button>
        </motion.div>
      </motion.section>
    </div>
  </div>
);

export default Construction;
