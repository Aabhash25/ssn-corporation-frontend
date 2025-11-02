"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDraftingCompass, FaHardHat } from "react-icons/fa";

const Visitors = () => {
  const cards = [
    {
      title: " Design Engineer",
      subtitle: "Smart construction tools & CAD workflows",
      description:
        "Discover smart construction solutions, accurate estimations, and AI-powered tools tailored to streamline engineering workflows.",
      img: "/DesignEngineer.jpg",
      icon: <FaDraftingCompass className="text-lg" />,
      link: "/engineers",
    },
    {
      title: "General Contractor",
      subtitle: "Real-time estimates & project coordination",
      description:
        "Gain real-time project insights, accurate material estimates, and optimized workflows designed to simplify contractor project management.",
      img: "/GeneralContractor.png",
      icon: <FaHardHat className="text-lg" />,
      link: "/contractors",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.16, duration: 0.7, ease: "easeOut" },
    }),
  };

  return (
    <section className="w-full pt-4 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-b from-gray-50 via-white to-gray-100 relative overflow-hidden">
      <div className="w-full max-w-full px-4 sm:px-8 lg:px-12 space-y-12 md:space-y-16">
        {/* Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-playfair font-bold text-gray-900 mb-3 sm:mb-4">
            Who We{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Are
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-roboto text-gray-600">
            <span className="font-semibold text-orange-600">
              {" "}
              Design Engineer
            </span>{" "}
            and{" "}
            <span className="font-semibold text-orange-600">
              Contractors
            </span>{" "}
            with smarter tools, real-time insights, and streamlined workflows.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {cards.map((card, idx) => (
            <motion.article
              key={idx}
              className="group relative flex flex-col bg-white/95 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden border border-gray-200 transition-shadow duration-300 hover:shadow-2xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              viewport={{ once: true, amount: 0.3 }}
              aria-labelledby={`card-title-${idx}`}
            >
              {/* Image + overlay */}
              <div className="w-full h-64 sm:h-72 md:h-80 relative overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />

                {/* Slide-up overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent flex flex-col items-center justify-center text-center text-white px-6 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">
                  <h4 className="text-lg sm:text-xl font-playfair font-semibold mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm sm:text-base font-roboto max-w-xl mb-4">
                    {card.description}
                  </p>
                  <Link
                    to={card.link}
                    className="inline-block px-6 py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Explore {card.title}
                  </Link>
                </div>

                {/* Icon badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/10 text-white p-2.5 sm:p-3 rounded-full shadow-lg ring-1 ring-white/20">
                  {card.icon}
                </div>
              </div>

              {/* Title + subtitle + excerpt */}
              <div className="px-5 sm:px-6 py-5 sm:py-6 flex flex-col items-center text-center">
                <h3
                  id={`card-title-${idx}`}
                  className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gray-900"
                >
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
                  {card.subtitle}
                </p>
                <div className="w-12 h-1 sm:w-14 bg-orange-500 rounded-full mt-3 sm:mt-4 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base md:text-base text-gray-700 font-roboto leading-relaxed max-w-xl">
                  {card.description.length > 120
                    ? card.description.slice(0, 120) + "..."
                    : card.description}
                </p>
                <div className="mt-3 sm:mt-5">
                  <Link
                    to={card.link}
                    className="inline-block px-4 sm:px-5 py-2 text-sm sm:text-sm font-medium text-orange-600 border border-orange-200 rounded-lg hover:bg-orange-50 transition"
                    aria-label={`Open ${card.title}`}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Fonts */}
      <style jsx>{`
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </section>
  );
};

export default Visitors;
