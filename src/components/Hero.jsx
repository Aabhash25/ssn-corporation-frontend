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
          <span className="block mt-[0.5rem]">
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
          <span className="block mt-[0.5rem]">
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
          <span className="block mt-[0.5rem]">
            Strong <span className="text-yellow-500">Construction</span>
          </span>
        </>
      ),
      subheadline:
        "Registered Professional Engineering • Unlimited General Contracting • Specialty Engineering Services",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-white overflow-hidden bg-black pt-[4rem] md:pt-[5rem] xl:pt-[6rem] pb-[1.5rem]">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Mobile */}
        <img
          src="/30-mobile.webp"
          alt="Hero mobile"
          className="absolute inset-0 w-full h-full object-cover brightness-75 md:hidden"
        />

        {/* Desktop */}
        <div className="hidden md:block absolute inset-0">
          {slides.map((slide, index) => (
            <motion.img
              key={index}
              src={slide.image}
              alt="Hero slide"
              className="absolute inset-0 w-full h-full object-cover brightness-75"
              initial={false}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center text-center max-w-[70rem] px-[1.5rem]">
        {/* Headline */}
        <motion.h1
          key={`headline-${currentIndex}`}
          className="
            uppercase font-extrabold font-playfair
            text-[2rem]
            sm:text-[2.4rem]
            md:text-[2.8rem]
            lg:text-[2.6rem]
            xl:text-[3.5rem]
            2xl:text-[4.2rem]
            leading-[1.15]
            mb-[1rem]
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {currentSlide.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          key={`sub-${currentIndex}`}
          className="
            mx-auto max-w-[48rem] text-white/90
            text-[0.9rem]
            sm:text-[1rem]
            md:text-[1.05rem]
            lg:text-[1rem]
            xl:text-[1.25rem]
            leading-[1.7]
            mb-[2rem]
          "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {currentSlide.subheadline}
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-[1rem]">
          <Link
            to="/portfolio"
            className="
              px-[2rem] py-[0.75rem]
              text-[0.95rem] sm:text-[1rem]
              font-bold rounded-full
              bg-yellow-500 text-gray-900
              hover:bg-yellow-600 transition hover:scale-105
            "
          >
            Explore Our Work
          </Link>

          <Link
            to="/contact"
            className="
              px-[2rem] py-[0.75rem]
              text-[0.95rem] sm:text-[1rem]
              font-bold rounded-full
              border-2 border-yellow-500 text-yellow-500
              hover:bg-yellow-500 hover:text-gray-900
              transition hover:scale-105
            "
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Bottom Tagline */}
      <motion.h2
        className="
          relative z-10 text-yellow-500 text-center
          text-[0.85rem]
          sm:text-[0.95rem]
          md:text-[1.05rem]
          xl:text-[1.3rem]
          pb-[1rem]
          px-[1rem]
        "
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
