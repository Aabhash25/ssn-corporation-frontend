"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaDraftingCompass,
  FaCogs,
  FaLeaf,
  FaProjectDiagram,
} from "react-icons/fa";

const expertiseList = [
  {
    title: "Architectural Design & Planning",
    desc: "From commercial complexes to residential developments, we create spaces that blend aesthetics, utility, and sustainability.",
    icon: <FaDraftingCompass className="text-orange-500 w-10 h-10" />,
  },
  {
    title: "Civil & Structural Engineering",
    desc: "Ensuring robust foundation, durability, and safety in every project through advanced engineering techniques.",
    icon: <FaBuilding className="text-blue-500 w-10 h-10" />,
  },
  {
    title: "Mechanical, Electrical & Plumbing (MEP) Systems",
    desc: "Comprehensive MEP design and integration for smart and energy-efficient buildings.",
    icon: <FaCogs className="text-green-500 w-10 h-10" />,
  },
  {
    title: "Sustainable & Green Building Solutions",
    desc: "We incorporate eco-friendly materials and renewable technologies to meet global sustainability standards.",
    icon: <FaLeaf className="text-teal-500 w-10 h-10" />,
  },
  {
    title: "Project Management & Consultancy",
    desc: "End-to-end support from feasibility studies to construction supervision, ensuring timely delivery within budget.",
    icon: <FaProjectDiagram className="text-red-500 w-10 h-10" />,
  },
];

const industriesList = [
  {
    name: "Residential & Commercial Real Estate",
    image:
      "https://images.unsplash.com/photo-1506092309076-af15fb0051e3?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Healthcare & Educational Infrastructure",
    image:
      "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Industrial & Manufacturing Facilities",
    image:
      "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=800&auto=format&fit=crop&q=60",
  },
  {
    name: "Government & Public Sector Projects",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const EngineeringArchitecture = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] md:h-[80vh] bg-[url('/GroceryDurham1.png')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-4xl md:text-6xl font-bold text-center px-4"
        >
          Engineering & Architecture
        </motion.h1>
      </div>

      {/* Main Content Sections */}
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
            className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            At SSN Corporation, our Engineering and Architecture division
            delivers innovative, sustainable, and future-ready solutions
            tailored to modern infrastructure and development.
          </motion.p>
        </motion.section>

        {/* Expertise Cards */}
        <motion.section
          className="w-full bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseList.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-3xl bg-white/90 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-start space-y-4"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-3xl">
                  {item.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Industries Section */}
        <motion.section
          className="w-full py-16"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Industries We Serve
          </h2>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industriesList.map((industry, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 flex items-end justify-center p-4 pointer-events-none">
                  <h3 className="text-white font-semibold text-lg md:text-xl text-center drop-shadow-lg">
                    {industry.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Closing Statement */}
        <motion.section className="w-full py-16 bg-white/80 backdrop-blur-md">
          <p className="max-w-[1400px] mx-auto px-6 md:px-12 text-gray-700 text-lg md:text-xl text-center leading-relaxed">
            Our commitment lies in excellence — designing tomorrow's
            infrastructure with today's innovation. Whether it's a high-rise
            building or an industrial complex, SSN Corporation ensures every
            blueprint becomes a benchmark in quality and performance.
          </p>
        </motion.section>
      </div>
    </div>
  );
};

export default EngineeringArchitecture;
