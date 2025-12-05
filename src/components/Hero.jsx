"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Desktop image list
  const images = [
    "/30.webp",
    "/21.webp",
    "/MorissvileGarden3.webp",
    "/14.webp",
  ];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  // Preload next image
  useEffect(() => {
    const next = (currentIndex + 1) % images.length;
    const img = new Image();
    img.src = images[next];
    img.onload = () => setLoadedImages((prev) => ({ ...prev, [next]: true }));
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-white overflow-hidden bg-black pt-16 md:pt-20 pb-6">
      {/* Background Slider */}
      <picture className="absolute inset-0 w-full h-full">
        {/* MOBILE - uses your -mobile.webp files */}
        <source
          srcSet={images[currentIndex].replace(".webp", "-mobile.webp")}
          media="(max-width: 768px)"
          type="image/webp"
        />

        {/* DESKTOP with fade animation */}
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt="Hero slide"
            className="w-full h-full object-cover brightness-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </picture>

      {/* Blur placeholder before load */}
      {!loadedImages[currentIndex] && (
        <div className="absolute inset-0 bg-black/40 blur-xl"></div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl px-6 flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase font-playfair leading-tight mb-4">
          <span className="block text-white">
            BUILDING <span className="text-yellow-500">FUTURE</span>
          </span>
          <span className="block mt-2 text-white">
            WITH <span className="text-yellow-500">PRECISION</span>
          </span>
        </motion.h1>

        <motion.p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed mb-6">
          We deliver excellence in innovative planning, design, engineering, and
          construction for your dream project.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6">
          <Link
            to="/portfolio"
            className="px-6 md:px-8 py-3 md:py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-3xl shadow-lg font-bold transition hover:scale-105"
          >
            Explore Our Work
          </Link>
          <Link
            to="/contact"
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 rounded-3xl shadow-lg font-bold transition hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </motion.div>

      {/* Bottom tagline */}
      <motion.h2 className="relative z-10 text-yellow-500 font-playfair font-bold text-xs sm:text-sm md:text-base lg:text-lg pb-4 px-4 text-center">
        Proudly Serving in Planning, Design, Engineering, and Construction in
        GA, NC, and VA
      </motion.h2>
    </section>
  );
};

export default Hero;
