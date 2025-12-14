"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { specialities } from "../data/specialities";
import { services } from "../data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Engineers = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const location = useLocation();
  const highlightedCardRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        // Add highlighting effect
        element.classList.add("highlight-card");
        highlightedCardRef.current = element;

        // Remove highlight after a few seconds
        setTimeout(() => {
          if (highlightedCardRef.current === element) {
            // Ensure we are removing the highlight from the correct element
            highlightedCardRef.current.classList.remove("highlight-card");
            highlightedCardRef.current = null;
          }
        }, 3000);
      }
    }
  }, [location]);

  const openModal = (speciality) => {
    setSelectedSpeciality(speciality);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const openServiceModal = (service) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsServiceModalOpen(false);
    setTimeout(() => {
      setSelectedSpeciality(null);
      setSelectedService(null);
    }, 300);
    document.body.style.overflow = "unset";
  };

  /**
   * Renders the descriptive content for Specialities.
   * Standardized to use the exact same visual style as services.
   */
  const renderDescription = (description) => {
    // Determine the list items from the array or nested arrays
    let listItems = [];
    let paragraphs = [];

    description.forEach((item) => {
      if (Array.isArray(item)) {
        listItems = listItems.concat(item);
      } else {
        paragraphs.push(item);
      }
    });

    return (
      <>
        {/* Render paragraphs first */}
        {paragraphs.map((item, index) => (
          <motion.p
            key={`p-${index}`}
            className="mt-4 text-gray-700 text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {item}
          </motion.p>
        ))}

        {/* Render all list items with unified style */}
        {listItems.length > 0 && (
          <ul className="space-y-3 mt-6">
            {listItems.map((listItem, listIndex) => (
              <motion.li
                key={`li-${listIndex}`}
                className="flex items-center space-x-3 text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-200"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: paragraphs.length * 0.1 + listIndex * 0.05,
                }}
              >
                {/* Bullet */}
                <span className="text-orange-500 flex-shrink-0 text-xl font-bold">
                  •
                </span>
                {/* Text */}
                <span className="text-base font-medium">{listItem}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </>
    );
  };

  /**
   * Renders the features for Services.
   * Standardized to use the exact same visual style as specialities.
   */
  const renderServiceFeatures = (features) => {
    return (
      <ul className="space-y-3 mt-6">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            // UNIFIED STYLING FOR BOTH SECTIONS
            className="flex items-center space-x-3 text-gray-700 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-200"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* UNIFIED ORANGE CIRCLE BULLET */}
            <span className="text-orange-500 flex-shrink-0 mt-1.5 text-xl font-bold">
              •
            </span>
            <span className="text-base font-medium">{feature}</span>
          </motion.li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 w-full min-h-screen">
      {/* Modern Hero Section - (Content omitted for brevity) */}
      <section className="relative w-full pt-[160px] pb-[80px] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/22.webp"
            alt="Modern Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/30"></div>
        </div>

        {/* Hero Content - (Content omitted for brevity) */}
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
                Premium Engineering Solutions
              </motion.span>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-playfair font-bold text-white leading-snug">
                We Are Building <br />
                <motion.span
                  className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  A Better World
                </motion.span>
              </h1>
            </motion.div>

            {/* Paragraphs */}
            <motion.div
              className="space-y-6 text-gray-200 leading-relaxed"
              variants={fadeUp}
            >
              <div className="border-l-4 border-orange-400/70 pl-4 space-y-4">
                <p className="text-xl sm:text-2xl font-light tracking-wide">
                  We are a multidisciplinary engineering firm.
                </p>

                <p className="text-xl sm:text-2xl font-light tracking-wide">
                  We bring expertise, resources, and creative problem-solving
                  skills that transform your dream project into a built reality.
                </p>

                <p className="text-xl sm:text-2xl font-light tracking-wide">
                  Our team connects innovation with precision — ensuring your
                  vision moves forward with clarity and confidence.
                </p>
              </div>
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

              {/* Updated to Link for Portfolio */}
              <Link
                to="/portfolio"
                className="px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white border-2 border-white/30 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Box - (Content omitted for brevity) */}
          <motion.div
            className="hidden lg:block relative w-[450px] xl:w-[600px] aspect-square rounded-xl overflow-hidden shadow-2xl mt-12 lg:mt-0 transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <img
              src="/21.webp"
              alt="Engineering Preview"
              className="w-full h-full object-cover"
            />

            {/* Overlay Text at Bottom */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <div className="bg-white px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/95">
                <span className="text-lg lg:text-xl font-semibold text-gray-900">
                  Innovation in Action
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              className="inline-block px-6 py-3  bg-orange-200/40 text-orange-800 
             rounded-full text-lg font-semibold backdrop-blur-sm
             shadow-sm border border-orange-300/40"
              variants={fadeUp}
            >
              Our Services
            </motion.span>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4 pt-4">
              Design Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As a multidisciplinary engineering firm, we can connect you to the
              resources, expertise and creative problem solving to address your
              challenges and move your project forward.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const slug = service.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
                <motion.div
                  key={index}
                  id={slug}
                  className="group cursor-pointer"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => openServiceModal(service)}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-gray-100 flex flex-col">
                    <div className="relative overflow-hidden flex-shrink-0">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="font-playfair font-bold text-xl sm:text-2xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 mb-4 flex-grow">
                          {service.description}
                        </p>
                      </div>

                      {/* NEW SIMPLE BUTTON FOR SERVICES */}
                      <button className="w-full mt-3 py-2 text-base font-semibold text-orange-600 border-2 border-orange-200 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300">
                        Explore Service
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section className="py-12 px-6 sm:px-12 lg:px-16 xl:px-20 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
              variants={fadeUp}
            >
              Our Expertise
            </motion.span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
              Design Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We Have the Expert In-House Team Specializing in Architecture,
              Engineering, and Comprehensive Design Solutions
            </p>
          </motion.div>

          {/* Specialities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {specialities.map((speciality, index) => {
              const slug = speciality.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
                <motion.div
                  key={index}
                  id={slug}
                  className="group cursor-pointer"
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => openModal(speciality)}
                >
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full border border-gray-100 flex flex-col">
                    <div className="relative overflow-hidden flex-shrink-0">
                      <img
                        src={speciality.image}
                        alt={speciality.title}
                        className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                        <span className="text-2xl">{speciality.icon}</span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="font-playfair font-bold text-xl sm:text-2xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                          {speciality.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2 mb-4 flex-grow">
                          {typeof speciality.description[0] === "string"
                            ? speciality.description[0]
                            : "Click to explore our comprehensive services..."}
                        </p>
                      </div>

                      {/* NEW SIMPLE BUTTON FOR SPECIALITIES */}
                      <button className="w-full mt-3 py-2 text-base font-semibold text-orange-600 border-2 border-orange-200 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300">
                        Explore Service
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Unified Modal Component for Specialities & Services - (Content omitted for brevity) */}
      <AnimatePresence>
        {(isModalOpen && selectedSpeciality) ||
        (isServiceModalOpen && selectedService) ? (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />

            {/* Modal Box */}
            <motion.div
              className="fixed inset-4 md:inset-10 lg:inset-20 z-50 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
                {/* Modal Header with Image */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={
                      selectedSpeciality
                        ? selectedSpeciality.image
                        : selectedService.image
                    }
                    alt={
                      selectedSpeciality
                        ? selectedSpeciality.title
                        : selectedService.title
                    }
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Top Right Close Button */}
                  <motion.button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
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
                </div>

                {/* Modal Content - Unified Structure */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 md:p-8">
                    {/* Title */}
                    <h2 className="font-playfair font-bold text-3xl md:text-4xl text-gray-900 mb-4">
                      {selectedSpeciality
                        ? selectedSpeciality.title
                        : selectedService.title}
                    </h2>

                    {/* Description / Features */}
                    <motion.div
                      className="prose prose-lg max-w-none"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedSpeciality
                        ? renderDescription(selectedSpeciality.description)
                        : renderServiceFeatures(selectedService.features)}
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
                        Get Started
                      </Link>
                      <button
                        onClick={closeModal}
                        className="px-8 py-3 text-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        Close
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      {/* Fonts */}
      <style>{`
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .highlight-card {
          box-shadow: 0 0 0 4px rgba(251, 146, 60, 0.8), 0 0 20px rgba(251, 146, 60, 0.6);
          transition: box-shadow 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Engineers;
