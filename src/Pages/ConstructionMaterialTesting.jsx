"use client";
import React from "react";
import { motion } from "framer-motion";

// Fonts Component
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

    .font-playfair {
      font-family: "Playfair Display", serif;
    }
    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
  `}</style>
);

// Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ConstructionMaterialTesting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 font-roboto">
      <FontsStyle />

      {/* Hero Section */}
      <div
        className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('/10.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-white text-5xl md:text-6xl font-playfair font-extrabold text-center px-4"
        >
          Construction Material Testing
        </motion.h1>
      </div>

      {/* Content Section */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-center mb-8 font-roboto"
        >
          At{" "}
          <span className="font-playfair font-semibold text-orange-500">
            SSN Corporation
          </span>
          , our Construction Material Testing division ensures the quality and
          durability of every material used in your project. We provide
          comprehensive testing services to guarantee safety, compliance, and
          long-lasting performance.
        </motion.p>

        {/* Testing Cards */}
        <motion.div
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: "Concrete Testing",
              desc: "Compression, slump, and strength tests to ensure concrete quality.",
            },
            {
              title: "Soil & Foundation Testing",
              desc: "Analysis of soil properties for safe and stable foundations.",
            },
            {
              title: "Steel & Reinforcement Testing",
              desc: "Tensile, bending, and chemical analysis for all structural steel.",
            },
          ].map((test, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-white/80 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-playfair font-semibold mb-2">
                {test.title}
              </h3>
              <p className="text-gray-600">{test.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-10 shadow-2xl text-center"
        >
          <h3 className="text-3xl font-playfair font-bold mb-4">
            Ensure Material Quality
          </h3>
          <p className="text-lg mb-6">
            Partner with SSN Corporation to guarantee that your construction
            materials meet the highest standards of quality and safety.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Request a Test
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ConstructionMaterialTesting;
