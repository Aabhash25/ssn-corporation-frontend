// src/pages/ProjectDescription.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";

const ProjectDescription = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (!project)
    return (
      <p className="pt-[100px] text-center text-gray-600">Project not found.</p>
    );

  // Auto-advance slider in hero
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
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* ==================== SMALL BACK BUTTON (TOP-LEFT) ==================== */}
      <Link
        to="/portfolio"
        className="fixed top-40 left-4 z-40 flex items-center gap-2 bg-white/90 backdrop-blur-md hover:bg-white 
                   text-gray-800 font-medium px-4 py-2.5 rounded-full shadow-lg transition-all 
                   border border-gray-200 hover:border-gray-300"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Portfolio
      </Link>

      <div className="min-h-screen bg-gray-50 pt-28 sm:pt-36 md:pt-48 lg:pt-56 font-sans text-gray-800">
        {/* ========================= HERO IMAGE SLIDER ========================= */}
        <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
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
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Slider arrows (only if more than one image) */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 
                               backdrop-blur-sm rounded-full p-3 transition"
                  >
                    <ChevronLeft className="w-6 h-6 text-white" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 
                               backdrop-blur-sm rounded-full p-3 transition"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* =============================== MAIN CONTENT =============================== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16 grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Description columns */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* Project Name + Short Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-l-4 border-yellow-500 pl-4 font-[Playfair_Display]">
                {project.name}
              </h2>
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4 text-justify">
                {project.description.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </motion.div>

            {/* Long Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-md border border-gray-200"
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-l-4 border-yellow-500 pl-4 font-[Playfair_Display]">
                Project Details
              </h2>
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                {project.longDescription.split("\n").map((line, idx) => (
                  <p key={idx}>{line.trim()}</p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Project Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:sticky lg:top-32"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-[Playfair_Display]">
                Project Info
              </h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Category:</span>
                  <span>{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Status:</span>
                  <span>{project.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Location:</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =================================== GALLERY =================================== */}
        {project.images.length > 1 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 border-l-4 border-yellow-500 pl-4 font-[Playfair_Display]">
              Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                  onClick={() => openImageModal(index)}
                >
                  <img
                    src={img}
                    alt={`${project.name} ${index + 1}`}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-medium text-lg">
                      View Image
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* =================================== IMAGE MODAL =================================== */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsImageModalOpen(false);
              }}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            >
              <X className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={project.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectDescription;
