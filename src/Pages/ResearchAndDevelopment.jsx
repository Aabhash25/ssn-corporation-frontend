"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaVectorSquare, FaDoorClosed } from "react-icons/fa";

const focusAreas = [
  {
    title: "AI-Powered Quantity Take-Off & Cost Estimation",
    desc: `Our AI enabled product automatically analyzes 2D building plan to extract building elements and generate accurate quantity takeoff. This reduces manual effort, minimizes errors, and speeds up project planning. By integrating with real time cost data, our product provides precise material and cost estimates in real-time, empowering construction teams to plan efficiently and make informed decisions.`,
    icon: <FaBrain className="text-orange-500 w-12 h-12 animate-pulse mb-4" />,
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&auto=format&fit=crop&q=60",
    link: "https://qtakeoff.ai",
    highlight: true,
  },
  {
    title: "Room & Object Recognition",
    desc: "Our segmentation AI identifies rooms, walls, and structural elements from floorplans, automating the measurement and categorization process for fast and accurate quantity take-off.",
    icon: <FaVectorSquare className="text-blue-500 w-10 h-10 animate-pulse" />,
    image:
      "https://images.unsplash.com/photo-1661335257817-4552acab9656?w=500&auto=format&fit=crop&q=60",
  },
  {
    title: "Door & Window Detection",
    desc: "The system detects and counts doors and windows from architectural drawings, ensuring accurate material requirements and compliance checks.",
    icon: <FaDoorClosed className="text-green-500 w-10 h-10 animate-pulse" />,
    image:
      "https://images.unsplash.com/photo-1542621334-a254cf47733d?w=500&auto=format&fit=crop&q=60",
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

const ResearchAndDevelopment = () => {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50">
      <motion.div
        className="max-w-7xl mx-auto px-6 py-16 text-gray-900 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Page Header */}
        <motion.h1
          className="text-5xl sm:text-6xl font-playfair font-bold mb-6 text-center text-gray-900"
          variants={itemVariants}
        >
          Research & Development
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl font-roboto text-gray-700 text-center mb-12 leading-relaxed max-w-4xl mx-auto"
          variants={itemVariants}
        >
          Our R&D team focuses on AI-driven solutions for quantity take-off,
          cost estimate, and efficient construction planning. We integrate
          computer vision, deep learning, and automation to deliver faster, more
          accurate, and cost-efficient construction projects.
        </motion.p>

        {/* Highlighted First Focus Area */}
        <motion.div
          className="flex flex-col md:flex-row items-center bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-8 mb-12 shadow-md"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/2 mb-6 md:mb-0 flex justify-center"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <img
              src={focusAreas[0].image}
              alt={focusAreas[0].title}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 md:pl-8"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="flex items-center mb-4">{focusAreas[0].icon}</div>
            <h3 className="text-3xl font-playfair font-bold mb-4 text-gray-900">
              {focusAreas[0].title}
            </h3>
            <p className="text-lg font-roboto text-gray-700 leading-relaxed mb-4">
              {focusAreas[0].desc}
            </p>
            <a
              href={focusAreas[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-700 font-bold underline hover:text-yellow-900 transition-colors"
            >
              Click Here to visit our Quantity Takeoff Solution.
            </a>
          </motion.div>
        </motion.div>

        {/* Other Focus Areas as Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
        >
          {focusAreas.slice(1).map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group h-72 flex flex-col justify-end transition-transform duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 pointer-events-none">
                <div className="mb-2">{item.icon}</div>
                <h3 className="text-white font-playfair font-bold text-lg leading-tight drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-white font-roboto text-sm mt-1 drop-shadow-lg">
                  {item.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
          variants={itemVariants}
        >
          <p className="text-lg sm:text-xl font-roboto text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            SSN Corporation’s R&D in AI-driven quantity take-off and cost
            estimation is transforming construction planning. By combining
            automation, computer vision, and deep learning, we help teams plan
            projects faster, reduce errors, and make informed decisions for
            smarter construction practices.
          </p>
        </motion.div>
      </motion.div>

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

export default ResearchAndDevelopment;
