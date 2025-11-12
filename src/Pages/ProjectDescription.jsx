// src/pages/ProjectDescription.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ProjectDescription = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!project)
    return (
      <p className="pt-[100px] text-center text-gray-600">Project not found.</p>
    );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.images.length]);

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const nextImage = () => {
    const total = project.images.length;
    setCurrentImageIndex((prev) => (prev + 1) % total);
  };

  const prevImage = () => {
    const total = project.images.length;
    setCurrentImageIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 pt-28 sm:pt-36 md:pt-48 lg:pt-56 font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-b-3xl border-2 sm:border-4 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-xl">
          <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] relative">
            <AnimatePresence>
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={project.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9 }}
                className="absolute inset-0 w-full h-full object-cover rounded-b-3xl will-change-transform"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent rounded-b-3xl"></div>

            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Descriptions */}
          <div className="lg:col-span-2 flex flex-col gap-8 sm:gap-10">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4 font-[Playfair_Display]">
                Overview
              </h2>
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify space-y-4">
                {project.description.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4 font-[Playfair_Display]">
                Project Details
              </h2>
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify space-y-4">
                {project.longDescription.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl space-y-4 sm:space-y-6 sticky top-[90px] sm:top-[120px] border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-[Playfair_Display]">
                Project Info
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-700 text-sm sm:text-base">
                <div className="flex justify-between">
                  <span className="font-semibold">Category:</span>{" "}
                  <span>{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Client:</span>{" "}
                  <span>{project.client || "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Status:</span>{" "}
                  <span>{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Year:</span>{" "}
                  <span>{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Location:</span>{" "}
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        {project.images.length > 1 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 border-l-4 border-blue-500 pl-4 font-[Playfair_Display]">
              Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  onClick={() => openImageModal(index)}
                >
                  <img
                    src={img}
                    alt={`${project.name} - ${index + 1}`}
                    className="w-full h-36 sm:h-52 md:h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out will-change-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm sm:text-lg font-medium tracking-wide">
                      View Image
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white hover:text-gray-400 transition-colors z-50"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-400 transition-colors z-50"
            >
              <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>

            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={project.images[currentImageIndex]}
              alt={project.name}
              className="max-h-[75vh] sm:max-h-[85vh] max-w-[90vw] sm:max-w-[95vw] object-contain rounded-lg shadow-2xl will-change-transform"
            />

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-400 transition-colors z-50"
            >
              <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDescription;
