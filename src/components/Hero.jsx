import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    mobileImage: "/21-mobile.webp",
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
    mobileImage: "/MorissvileGarden3-mobile.webp",
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

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-white overflow-hidden bg-black pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 pb-6">
      {/* Background: all slides stacked, only opacity changes (no black gap) */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <picture key={i}>
            <source media="(max-width: 767px)" srcSet={slide.mobileImage} />
            <img
              src={slide.image}
              alt={i === 0 ? "SSN Corporation project" : ""}
              aria-hidden={i !== 0}
              fetchpriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover brightness-75 transition-opacity duration-1000 ease-in-out ${
                i === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          </picture>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center text-center max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <h1
          key={`headline-${currentIndex}`}
          className="hero-fade-up uppercase font-extrabold font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight mb-4 sm:mb-6"
        >
          {currentSlide.headline}
        </h1>

        <p
          key={`sub-${currentIndex}`}
          className="hero-fade-up mx-auto max-w-2xl text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0"
          style={{ animationDelay: "0.15s" }}
        >
          {currentSlide.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
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
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-yellow-500 w-6 sm:w-8"
                  : "bg-white/50 hover:bg-white/80 w-2 sm:w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <h2 className="hero-fade-up relative z-10 text-yellow-500 text-center font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pb-4 sm:pb-6 px-4 tracking-wide">
        Proudly Serving in Georgia, North Carolina, and Virginia
      </h2>
    </section>
  );
};

export default Hero;
