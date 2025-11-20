"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heading = [
    { text: "BUILDING", color: "text-white" },
    { text: "FUTURE", color: "text-yellow-500" },
    { text: "WITH", color: "text-white" },
    { text: "PRECISION", color: "text-yellow-500" },
  ];

  const images = [
    "/30.webp",
    "/21.webp",
    "/MorissvileGarden3.webp",
    "/14.webp",
  ]; // replace with your images

  // Auto slide every 3s (reduced from 5s for faster cycling)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const headingWords = heading.map((word, idx) => (
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      className={`inline-block mr-4 relative font-playfair font-extrabold uppercase`}
    >
      <span className={`z-10 relative ${word.color}`}>{word.text}</span>
      <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-md opacity-30 blur-sm"></span>
    </motion.span>
  ));

  return (
    <section className="relative h-screen flex flex-col justify-between items-center text-white overflow-hidden bg-black pt-20 md:pt-24 pb-6">
      {/* Background Slider */}
      <AnimatePresence initial={false}>
        {images.map((src, index) =>
          index === currentIndex ? (
            <motion.div
              key={src}
              className="absolute inset-0 w-full h-full"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={src}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl px-6 flex-1 flex flex-col justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 leading-tight md:leading-snug tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {headingWords}
        </motion.h1>

        <motion.p
          className="text-white text-base sm:text-lg md:text-xl lg:text-xl font-roboto mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          We deliver excellence in innovative planning, design, engineering, and
          construction for your dream project.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Link
            to="/portfolio"
            className="px-6 md:px-8 py-3 md:py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-3xl font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl font-roboto text-sm md:text-base"
          >
            Explore Our Work
          </Link>
          <Link
            to="/contact"
            className="px-6 md:px-8 py-3 md:py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 rounded-3xl font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl font-roboto text-sm md:text-base"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.h2
        className="relative z-10 w-full text-center text-sm sm:text-base md:text-lg lg:text-xl font-playfair font-bold text-yellow-500 drop-shadow-lg px-4 pb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Proudly serving for project planning, engineering design, and general
        construction in GA, NC, and VA{" "}
      </motion.h2>
    </section>
  );
};

export default Hero;
