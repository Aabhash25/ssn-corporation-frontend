"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heading = [
    { text: "BUILDING", color: "text-white" },
    { text: "FUTURE", color: "text-red-600" },
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
    <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-black">
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
        className="relative z-10 text-center max-w-4xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-snug tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {headingWords}
        </motion.h1>

        <motion.p
          className="text-white text-lg sm:text-xl md:text-2xl font-roboto mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          We deliver excellence in innovative planning, design, engineering, and
          construction for your dream project.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Link
            to="/portfolio"
            className="px-8 py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-3xl font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl font-roboto"
          >
            Explore Our Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 rounded-3xl font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl font-roboto"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>

      <motion.h2
        className="absolute bottom-16 w-full text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-yellow-400 drop-shadow-lg px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Proudly serving design and construction in GA, NC, and VA.
      </motion.h2>
    </section>
  );
};

export default Hero;
