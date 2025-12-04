"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Your same images (NO MOBILE VERSION NEEDED)
  const images = [
    "/30.webp",
    "/21.webp",
    "/MorissvileGarden3.webp",
    "/14.webp",
  ];

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Lazy load next image (makes loading much faster on mobile)
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex];
    img.onload = () => {
      setLoadedImages((prev) => ({ ...prev, [nextIndex]: true }));
    };
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-white overflow-hidden bg-black pt-16 md:pt-20 pb-6">
      {/* Background Slider */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Blur placeholder (makes loading feel faster) */}
          {!loadedImages[currentIndex] && (
            <div className="absolute inset-0 bg-black/50 blur-xl"></div>
          )}

          <img
            src={images[currentIndex]}
            alt="Hero slide"
            className="w-full h-full object-cover brightness-75 transition-all duration-700"
            loading={currentIndex === 0 ? "eager" : "lazy"}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <motion.div
        className="relative z-10 text-center max-w-4xl px-6 flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl
     mb-4 leading-tight tracking-wide font-playfair font-extrabold uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-white block">
            BUILDING <span className="text-yellow-500">FUTURE</span>
          </span>
          <span className="text-white block mt-2">
            WITH <span className="text-yellow-500">PRECISION</span>
          </span>
        </motion.h1>

        <motion.p className="text-white text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-normal">
          We deliver excellence in innovative planning, design, engineering, and
          construction for your dream project.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6">
          <Link
            to="/portfolio"
            className="px-6 md:px-8 py-3 md:py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-3xl font-bold shadow-lg transition-all transform hover:scale-105"
          >
            Explore Our Work
          </Link>
          <Link
            to="/contact"
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 rounded-3xl font-bold shadow-lg transition-all transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      <motion.h2 className="relative z-10 text-center text-sm sm:text-base md:text-lg font-playfair font-bold text-yellow-500 px-4 pb-4">
        Proudly Serving in Planning, Design, Engineering, and Construction in
        GA, NC, and VA
      </motion.h2>
    </section>
  );
};

export default Hero;
