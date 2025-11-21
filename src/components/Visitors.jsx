"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDraftingCompass, FaHardHat } from "react-icons/fa";

const Visitors = () => {
  const cards = [
    {
      title: "Planner And Engineer",
      description:
        "Our multidisciplinary Planner and Engineer team unites creative planning with practical engineering. We deliver integrated, sustainable, and buildable solutions-from concept to construction-optimizing land use, infrastructure, and site design for every project",
      img: "/about7.webp",
      icon: <FaDraftingCompass className="text-lg" />,
      link: "/engineers",
    },
    {
      title: "General Contractor",

      description:
        "We deliver high-quality residential and commercial construction with precision and reliability-from planning to completion. We turn visions into lasting,buildable results with efficiency and craftsmanship.",
      img: "/GeneralContractor.webp",
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
            Who We Are
          </h2>
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
              {/* Title at the top (smaller height) */}
              <div className="px-5 sm:px-6 py-3 flex flex-col items-center text-center bg-white/80 backdrop-blur-md">
                <h3
                  id={`card-title-${idx}`}
                  className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-gray-900"
                >
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-500 mt-1 sm:mt-2">
                  {card.subtitle}
                </p>
                <div className="w-12 h-1 sm:w-14 bg-yellow-500 rounded-full mt-2 sm:mt-3 mb-0" />
              </div>

              {/* Image + hover overlay (bigger) */}
              <div className="w-full h-80 sm:h-96 md:h-[28rem] relative overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                />

                {/* Slide-up overlay (description on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center justify-center text-center text-white px-6 transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0">
                  <h4 className="text-lg sm:text-xl font-playfair font-semibold mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm sm:text-base font-roboto max-w-xl mb-4">
                    {card.description}
                  </p>
                  <Link
                    to={card.link}
                    className="inline-block px-6 py-3 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg shadow-md hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
                  >
                    Explore {card.title}
                  </Link>
                </div>

                {/* Icon badge */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/10 text-white p-2.5 sm:p-3 rounded-full shadow-lg ring-1 ring-white/20">
                  {card.icon}
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
