"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/30.webp",
      headline: (
        <>
          <span>
            BUILDING <span className="text-yellow-500">FUTURE</span>
          </span>
          <span className="mt-2 block">
            WITH <span className="text-yellow-500">PRECISION</span>
          </span>
        </>
      ),
      subheadline:
        "We deliver excellence in innovative planning, design, engineering, and construction for your dream project.",
    },
    {
      image: "/21.webp",
      headline: (
        <>
          <span>
            One <span className="text-yellow-500">Company</span>
          </span>
          <span className="mt-2 block">
            Complete <span className="text-yellow-500">Solutions</span>
          </span>
        </>
      ),
      subheadline:
        "Registered Professional Engineering • Unlimited General Contracting • Specialty Engineering Services",
    },
    {
      image: "/MorissvileGarden3.webp",
      headline: (
        <>
          <span>
            Smart <span className="text-yellow-500">Engineering</span>
          </span>
          <span className="mt-2 block">
            Strong <span className="text-yellow-500">Construction</span>
          </span>
        </>
      ),
      subheadline:
        "Registered Professional Engineering • Unlimited General Contracting • Specialty Engineering Services",
    },
    // {
    //   image: "/14.webp",
    //   headline: (
    //     <>
    //       <span>
    //         SPECIALTY <span className="text-yellow-500">ENGINEERING</span>
    //       </span>
    //       <span className="mt-2 block">
    //         <span className="text-yellow-500">SERVICES PROVIDER</span>
    //       </span>
    //     </>
    //   ),
    //   subheadline:
    //     "Delivering advanced engineering solutions tailored to complex projects across multiple states.",
    // },
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-white overflow-hidden bg-black pt-16 md:pt-20 pb-6">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile */}
        <img
          src="/30-mobile.webp"
          alt="Hero mobile"
          className="w-full h-full object-cover brightness-75 md:hidden absolute inset-0 opacity-100 transition-opacity duration-1000"
        />

        {/* Desktop/Laptop */}
        <div className="hidden md:block absolute inset-0">
          {slides.map((slide, index) => {
            const isCurrent = index === currentIndex;
            return (
              <motion.img
                key={index}
                src={slide.image}
                alt="Hero slide"
                className="w-full h-full object-cover brightness-75 absolute inset-0"
                initial={false}
                animate={{ opacity: isCurrent ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            );
          })}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none"></div>

      {/* Text Content */}
      <div className="relative z-10 text-center max-w-5xl px-6 flex-1 flex flex-col justify-center">
        {/* Headline */}
        <motion.h1
          key={`headline-${currentIndex}`}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase font-playfair leading-snug sm:leading-tight md:leading-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {currentSlide.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          key={`sub-${currentIndex}`}
          className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed mb-8 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {currentSlide.subheadline}
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Link
            to="/portfolio"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-3xl shadow-lg font-bold text-base sm:text-lg transition hover:scale-105"
          >
            Explore Our Work
          </Link>
          <Link
            to="/contact"
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 rounded-3xl shadow-lg font-bold text-base sm:text-lg transition hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Bottom tagline */}
      <motion.h2
        className="relative z-10 text-yellow-500 font-roboto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pb-6 px-4 text-center whitespace-normal sm:whitespace-nowrap leading-snug"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Proudly Serving in Georgia, North Carolina, and Virginia
      </motion.h2>
    </section>
  );
};

export default Hero;
