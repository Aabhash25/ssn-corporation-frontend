"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { contractorServices } from "../data/contractorServices";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Contractors = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsServiceModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
    document.body.style.overflow = "unset";
  };

  // Kept renderDescription for consistency, though it's unused now.
  const renderDescription = (description) => {
    return description.map((item, index) => {
      if (Array.isArray(item)) {
        return (
          <ul key={index} className="space-y-3 mt-6">
            {item.map((listItem, listIndex) => (
              <motion.li
                key={listIndex}
                className="flex items-start space-x-3 text-gray-700 leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + listIndex * 0.05 }}
              >
                <span className="text-orange-500 flex-shrink-0 mt-1.5">•</span>
                <span className="text-base">{listItem}</span>
              </motion.li>
            ))}
          </ul>
        );
      } else {
        return (
          <motion.p
            key={index}
            className="mt-4 text-gray-700 text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item}
          </motion.p>
        );
      }
    });
  };

  const renderServiceFeatures = (features) => {
    return (
      <div className="space-y-3 mt-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-orange-50 transition-colors duration-300 border border-gray-200"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-1.5"></div>
            <span className="text-gray-700 text-base leading-relaxed font-medium">
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full min-h-screen">
      {/* Modern Hero Section - (Content omitted for brevity) */}
      <section className="relative w-full pt-[160px] pb-[80px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/contractorback.jpg"
            alt="Construction Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 gap-10 lg:gap-20">
          {/* Left Content */}
          <motion.div
            className="space-y-6 lg:space-y-8 max-w-xl z-10 flex-shrink-0 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {/* Badge + Heading */}
            <motion.div variants={fadeUp}>
              <motion.span
                className="inline-block px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-semibold mb-4 border border-orange-500/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Premium Contracting Solutions
              </motion.span>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-white leading-snug">
                Where Craft Meets <br />
                <motion.span
                  className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Commitment
                </motion.span>
              </h1>
            </motion.div>

            {/* Paragraphs */}
            <motion.div
              className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed"
              variants={fadeUp}
            >
              <p>
                We have strong in-house engineering support for all aspects of
                construction.
              </p>
              <p>
                From building strong foundations to restoring the past and
                shaping the future, we bring your vision to life while
                overcoming any challenges that arise.
              </p>
              <p>
                Our commitment to quality, creative problem-solving, and
                unmatched value ensures every project is built on trust and
                designed to last.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start"
              variants={fadeUp}
            >
              <Link
                to="/contact"
                className="group relative px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  Start Your Project
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </Link>

              <button className="px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1">
                View Our Work
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image Box */}
          <motion.div
            className="hidden lg:block relative w-[450px] xl:w-[600px] aspect-square rounded-xl overflow-hidden shadow-2xl mt-12 lg:mt-0 transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <img
              src="/contractor.jpg"
              alt="Contracting Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-white px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/95">
                <span className="text-lg lg:text-xl font-semibold text-gray-900">
                  Craft in Action
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4"
              variants={fadeUp}
            >
              Our Services
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
              Comprehensive Contracting Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final construction, we deliver innovative
              solutions that exceed expectations and stand the test of time.
            </p>
          </motion.div>

          {/* Service Cards Grid (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {contractorServices.map((service, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openServiceModal(service)}
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full flex flex-col">
                  {/* Card Image and Title Area */}
                  <div className="relative overflow-hidden flex-shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-playfair font-bold text-xl sm:text-2xl text-white mb-1 line-clamp-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content (Description and New Simple Button) */}
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* NEW SIMPLE BUTTON */}
                    <button className="w-full mt-3 py-2 text-base font-semibold text-orange-600 border-2 border-orange-200 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300">
                      Explore Service
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal (Retained with Top-Right Red Close Button) */}
      <AnimatePresence>
        {isServiceModalOpen && selectedService && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            <motion.div
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col relative">
                {/* Close Button at Top Right */}
                <motion.button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-20 bg-red-600 text-white rounded-full p-2.5 shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-red-700"
                  whileHover={{ rotate: 90 }}
                >
                  <svg
                    className="w-6 h-6"
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
                </motion.button>

                {/* Modal Header with Image */}
                <div className="relative h-64">
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 inline-block mb-3">
                          <span className="text-3xl">
                            {selectedService.icon}
                          </span>
                        </div>
                        <h2 className="font-playfair font-bold text-3xl md:text-4xl text-white">
                          {selectedService.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        {selectedService.description}
                      </p>

                      <h3 className="font-playfair font-bold text-2xl text-gray-900 mb-4">
                        Key Features & Services
                      </h3>
                      {renderServiceFeatures(selectedService.features)}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-gray-200"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Link
                        to="/contact"
                        className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        onClick={closeModal}
                      >
                        Start Your Project
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fonts */}
      <style>{`
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .line-clamp-3 { /* Changed from line-clamp-2 for slightly more description */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Contractors;
