"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  UsersIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  CheckBadgeIcon,
  ArrowDownIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");

    body {
      font-family: "Inter", sans-serif;
      background-color: #fafafa;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

const AboutUs = () => {
  const whoWeAreRef = useRef(null);
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(false);

  const handleScrollToWhoWeAre = () => {
    if (whoWeAreRef.current) {
      const offset = -80;
      const top =
        whoWeAreRef.current.getBoundingClientRect().top +
        window.scrollY +
        offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // Lazy load video using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoVisible(true);
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      { threshold: 0.25 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <FontsStyle />

      <div className="overflow-x-hidden text-gray-800 relative">
        {/* === Hero Section with Video === */}
        <section className="relative h-screen flex items-center justify-center">
          <div ref={videoRef} className="absolute inset-0 w-full h-full z-[-1]">
            {videoVisible && (
              <>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  preload="metadata"
                  poster="/poster-image.jpg"
                >
                  <source src="/constructionvideo1.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/40"></div>
              </>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-6 max-w-4xl text-white"
          >
            <div className="mb-6 flex justify-center">
              <div className="h-1 w-20 bg-orange-500 rounded-full"></div>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-bold mb-4 leading-tight">
              Plan Smarter, <br /> Build Stronger
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 leading-relaxed text-gray-200 max-w-3xl mx-auto">
              We plan with expertise, design with precision, and deliver with
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleScrollToWhoWeAre}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 text-lg flex items-center"
              >
                Explore Our Story
                <ArrowDownIcon className="w-5 h-5 ml-2" />
              </motion.button>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300 text-lg"
                >
                  View Our Portfolio
                </motion.button>
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-8 border-r-2 border-b-2 border-white rotate-45"></div>
          </div>
        </section>

        {/* === Who We Are === */}
        <section
          ref={whoWeAreRef}
          className="relative  flex items-center py-12 bg-white"
        >
          <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-gray-900"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-orange-500 rounded-xl shadow-lg">
                  <UsersIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="ml-4 text-5xl md:text-6xl font-playfair font-bold">
                  Who We Are
                </h2>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-800">
                <span className="font-semibold text-orange-400">
                  SSN Corporation
                </span>{" "}
                is a visionary design and construction firm led by professionals
                with over two decades of excellence. Founded on principles of{" "}
                <span className="font-semibold text-orange-400">
                  innovation
                </span>
                ,{" "}
                <span className="font-semibold text-orange-400">precision</span>
                , and{" "}
                <span className="font-semibold text-orange-400">integrity</span>
                , we unite planners, architects, engineers, and construction
                experts to transform ideas into enduring construction solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  "Quality Assurance",
                  "Timely Delivery",
                  "Sustainable Practices",
                  "Client-Centric Approach",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-orange-50 hover:bg-orange-100 transition rounded-xl px-6 py-4 shadow-sm border border-orange-100"
                  >
                    <CheckBadgeIcon className="w-7 h-7 text-orange-500 flex-shrink-0" />
                    <span className="text-gray-900 font-semibold text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image (hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative group rounded-3xl overflow-hidden shadow-2xl h-[600px] hidden sm:block"
            >
              <img
                src="/about1.webp"
                alt="Modern Construction Team"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* === Our Vision & Values === */}
        <section className="relative  flex items-center py-12 bg-gradient-to-br from-gray-50 to-orange-50">
          <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-gray-900"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-orange-500 rounded-xl shadow-lg">
                  <LightBulbIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="ml-4 text-5xl md:text-6xl font-playfair font-bold">
                  Our Vision & Values
                </h2>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-800">
                We envision a future where design and construction redefine
                possibilities—creating spaces that inspire, sustain, and stand
                the test of time. Our foundation of innovation, precision, and
                integrity shaped by decades of expertise—guides every project as
                we transform ideas into purposeful, high-quality spaces. Drives
                every project we undertake.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  {
                    title: "Integrity",
                    icon: CheckBadgeIcon,
                    desc: "Honest & transparent practices",
                  },
                  {
                    title: "Innovation",
                    icon: LightBulbIcon,
                    desc: "Cutting-edge solutions",
                  },
                  {
                    title: "Sustainability",
                    icon: SparklesIcon,
                    desc: "Eco-friendly construction",
                  },
                  {
                    title: "Teamwork",
                    icon: UsersIcon,
                    desc: "Collaborative excellence",
                  },
                ].map((val, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 bg-white hover:bg-orange-50 transition rounded-xl px-6 py-5 shadow-md border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <val.icon className="w-7 h-7 text-orange-500 flex-shrink-0" />
                      <span className="text-gray-900 font-bold text-lg">
                        {val.title}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm ml-10">{val.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Image (hidden on mobile) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative group rounded-3xl overflow-hidden shadow-2xl h-[600px] hidden sm:block"
            >
              <img
                src="/about8.webp"
                alt="Modern Architecture Vision"
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </motion.div>
          </div>
        </section>

        {/* === What We Do === */}
        <section className="relative flex items-center py-12 bg-white">
          <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-gray-900"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 bg-orange-500 rounded-xl shadow-lg">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-white" />
                </div>
                <h2 className="ml-4 text-5xl md:text-6xl font-playfair font-bold">
                  What We Do
                </h2>
              </div>
              <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-800">
                From concept to completion, we deliver comprehensive engineering
                and construction solutions tailored to your needs. Our expertise
                spans architectural design, structural,geotechnical,water
                resources, elecctrical, mechanical, plumbing, and construction
                management engineering, project management, and sustainable
                construction solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  "Residential and Commercial Building Design and Construction",
                  "Land Planning, Permitting, and Site Development",
                  "Infrastructure and Facility Planning and Design",
                  "Commercial Renovation,Fit-out, and Maintenance",
                  "Construction Delivery, Design and Build, and Construction Management",
                  "Geotechnical Support, Construction Material Testing, and Construction Support",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-orange-50 hover:bg-orange-100 transition rounded-xl px-6 py-4 shadow-sm border border-orange-100"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckBadgeIcon className="w-7 h-7 text-orange-500" />
                    </div>
                    <span className="text-gray-900 font-semibold text-base leading-tight break-words">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 h-[600px]"
            >
              {[
                {
                  img: "./CommercialUpfit.webp",
                  // title: "Luxury Homes",
                },
                {
                  img: "./commUpfit.jpg",
                  // title: "Modern Offices",
                },
                {
                  img: "./seven-eleven.jpg",
                  // title: "Industrial",
                },
                {
                  img: "./BrassTap4.webp",
                  // title: "Sustainability",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-lg group relative h-full"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">
                      {project.title}
                    </h3>
                    <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
