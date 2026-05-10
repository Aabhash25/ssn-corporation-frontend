"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const slides = [
    {
      image: "/30.webp",
      mobileImage: "/30-mobile.webp",
      headline: (
        <>
          <span>
            BUILDING <span className="text-yellow-500">FUTURE</span>
          </span>
          <span className="block mt-1 sm:mt-[0.5rem]">
            WITH <span className="text-yellow-500">PRECISION</span>
          </span>
        </>
      ),
      subheadline:
        "We deliver excellence in innovative planning, design, engineering, and construction for your dream project.",
    },
    {
      image: "/21.webp",
      mobileImage: "/21-mobile.webp", // Add mobile-optimized image
      headline: (
        <>
          <span>
            One <span className="text-yellow-500">Company</span>
          </span>
          <span className="block mt-1 sm:mt-[0.5rem]">
            Complete <span className="text-yellow-500">Solutions</span>
          </span>
        </>
      ),
      subheadline:
        "Registered Professional Engineering • Unlimited General Contracting • Specialty Engineering Services",
    },
    {
      image: "/MorissvileGarden3.webp",
      mobileImage: "/MorissvileGarden3-mobile.webp", // Add mobile-optimized image
      headline: (
        <>
          <span>
            Smart <span className="text-yellow-500">Engineering</span>
          </span>
          <span className="block mt-1 sm:mt-[0.5rem]">
            Strong <span className="text-yellow-500">Construction</span>
          </span>
        </>
      ),
      subheadline:
        "Registered Professional Engineering • Unlimited General Contracting • Specialty Engineering Services",
    },
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-white overflow-hidden bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-6">
      {/* Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={isMobile ? currentSlide.mobileImage : currentSlide.image}
              alt="Hero"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover brightness-75"
            />
          </motion.div>
        </AnimatePresence>

        {/* Preload next image */}
        <img
          src={
            isMobile
              ? slides[(currentIndex + 1) % slides.length].mobileImage
              : slides[(currentIndex + 1) % slides.length].image
          }
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center text-center max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          key={`headline-${currentIndex}`}
          className="uppercase font-extrabold font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {currentSlide.headline}
        </motion.h1>

        <motion.p
          key={`sub-${currentIndex}`}
          className="mx-auto max-w-2xl text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {currentSlide.subheadline}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to="/portfolio"
            className="px-6 sm:px-8 py-3 text-sm sm:text-base font-bold rounded-full bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Our Work
          </Link>
          <Link
            to="/contact"
            className="px-6 sm:px-8 py-3 text-sm sm:text-base font-bold rounded-full border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-500 w-6 sm:w-8"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <motion.h2
        className="relative z-10 text-yellow-500 text-center font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pb-4 sm:pb-6 px-4 tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Proudly Serving in Georgia, North Carolina, and Virginia
      </motion.h2>
    </section>
  );
};

export default Hero;
