"use client";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  UserGroupIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  SparklesIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

// Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

const JoinOurTeam = () => {
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
    <>
      <FontsStyle />
      <div className="overflow-x-hidden text-gray-800 relative">
        <section className="relative flex flex-col justify-start py-6 sm:py-8 lg:py-10 bg-gradient-to-br from-white via-gray-50 to-orange-50 min-h-screen">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-3/4 left-1/2 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 bg-purple-500/8 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>

          <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                  <BriefcaseIcon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                  Join Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Team
                  </span>
                </h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 font-roboto max-w-3xl mx-auto leading-snug">
                At{" "}
                <span className="font-bold text-orange-500">
                  SSN Corporation
                </span>
                , we are always looking for
                <span className="font-semibold text-gray-900">
                  {" "}
                  talented, motivated individuals
                </span>{" "}
                to join our growing team.
              </p>
            </motion.div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 sm:mb-8">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="bg-white backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg">
                  <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4">
                    Why Choose SSN Corporation?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-snug mb-2 sm:mb-3">
                    As a leader in the construction industry, we offer exciting
                    career opportunities for people passionate about making a
                    real impact.
                  </p>
                  <p className="text-sm sm:text-base text-gray-700 leading-snug">
                    Our team thrives on{" "}
                    <span className="font-semibold text-orange-500">
                      collaboration
                    </span>
                    ,{" "}
                    <span className="font-semibold text-blue-500">
                      integrity
                    </span>
                    , and a shared commitment to{" "}
                    <span className="font-semibold text-purple-500">
                      excellence
                    </span>
                    .
                  </p>
                </div>

                {/* Call to Action */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-4 sm:p-6 text-center shadow-xl"
                >
                  <h4 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold text-white mb-2 sm:mb-3">
                    Ready to Build Your Future?
                  </h4>
                  <p className="text-sm sm:text-base md:text-lg text-white/95 mb-3 sm:mb-4">
                    Explore our current openings and become part of a company
                    where your skills, passion, and ideas can shape the future
                    of construction.
                  </p>
                  <Link
                    to="/career"
                    className="inline-flex items-center gap-2 sm:gap-3 bg-white text-orange-600 font-bold py-2 px-4 sm:py-3 sm:px-5 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-md text-sm sm:text-base"
                  >
                    <BriefcaseIcon className="w-5 sm:w-6 h-5 sm:h-6" />
                    View Open Positions
                    <ArrowRightIcon className="w-4 sm:w-5 h-4 sm:h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Content - Benefits Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.03, y: -1 }}
                    className="bg-white backdrop-blur-lg rounded-xl p-3 sm:p-4 border border-gray-200 hover:border-orange-300 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div
                      className={`inline-flex p-2 sm:p-3 bg-gradient-to-r ${benefit.color} rounded-lg mb-2 sm:mb-3 shadow-md`}
                    >
                      <benefit.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                    </div>
                    <h5 className="text-lg sm:text-xl font-playfair font-bold text-gray-900 mb-1">
                      {benefit.title}
                    </h5>
                    <p className="text-sm sm:text-base text-gray-600 leading-snug">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-6 sm:mb-8"
            >
              <div className="bg-white backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-xl">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-3">
                  Join Our Growing Family
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">
                      50+
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      Team Members
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-500 mb-1">
                      15+
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      Years Experience
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-bold text-purple-500 mb-1">
                      100+
                    </p>
                    <p className="text-sm sm:text-base text-gray-600">
                      Projects Completed
                    </p>
                  </div>
                </div>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2 sm:mt-3 max-w-3xl mx-auto font-playfair italic">
                  "Apply today and take the first step toward an enriching
                  career with us!"
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default JoinOurTeam;
