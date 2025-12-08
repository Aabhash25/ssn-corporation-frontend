// src/pages/ProjectDescription.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";

/**
 * ProjectDescription page
 * - Shows ONLY a single top title using `project.description`
 * - Does NOT repeat project.name or project.description elsewhere
 * - Shows longDescription / shortDetails (if provided) in a single description card
 * - Image hero slider + gallery + modal
 */

export default function ProjectDescription() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    // reset index when project changes
    setCurrentImageIndex(0);
    setIsImageModalOpen(false);
  }, [project]);

  useEffect(() => {
    if (!project || !project.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project not found
          </h2>
          <div className="space-x-3">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-200 rounded-md"
            >
              Go Back
            </button>
            <Link to="/portfolio" className="text-blue-600 underline">
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images =
    Array.isArray(project.images) && project.images.length > 0
      ? project.images
      : [];

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      {/* Back button (left) */}
      <Link
        to="/portfolio"
        className="fixed top-20 left-4 z-40 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-sm border border-gray-200 hover:bg-white"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>

      <div className="min-h-screen bg-gray-50 pt-28 sm:pt-36 md:pt-44 lg:pt-52 pb-16">
        {/* HERO / IMAGE SLIDER */}
        {images.length > 0 && (
          <div className="w-full px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] relative">
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={project.description || "Project image"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full object-cover"
                    onClick={() => openImageModal(currentImageIndex)}
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(e);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(e);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-3 transition"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Left column (main) */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            {/* MAIN TITLE (only shows project.description) */}
            <h1 className="text-4xl sm:text-5xl font-[Playfair_Display] font-bold text-gray-900 leading-tight">
              {project.description}
            </h1>

            {/* DESCRIPTION CARD - show either longDescription or shortDetails if available.
                Do NOT repeat project.name or project.description elsewhere. */}
            {(project.longDescription ||
              project.shortDetails ||
              project.details) && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow border border-gray-200"
              >
                <div className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
                  {project.longDescription
                    ? project.longDescription
                        .split("\n")
                        .map((line, i) => <p key={i}>{line}</p>)
                    : (project.shortDetails || project.details)
                        .split("\n")
                        .map((line, i) => <p key={i}>{line}</p>)}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right column (sidebar) */}
          <aside className="lg:sticky lg:top-32">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Project Info
              </h3>
              <div className="text-gray-700 space-y-3">
                {project.category && (
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Category</span>
                    <span>{project.category}</span>
                  </div>
                )}
                {project.status && (
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Status</span>
                    <span>{project.status}</span>
                  </div>
                )}
                {project.location && (
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Location</span>
                    <span>{project.location}</span>
                  </div>
                )}
                {/* Add other info fields as needed, but DO NOT repeat title/description here */}
              </div>
            </div>
          </aside>
        </div>

        {/* GALLERY (thumbnails) */}
        {images.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 border-l-4 border-yellow-500 pl-4 font-[Playfair_Display]">
              Gallery
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((src, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
                  onClick={() => openImageModal(idx)}
                >
                  <img
                    src={src}
                    alt={project.description || `Image ${idx + 1}`}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white">View</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {isImageModalOpen && images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeImageModal();
              }}
              className="absolute top-6 right-6 text-white"
              aria-label="Close"
            >
              <X className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage(e);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>

            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={project.description || "Project image"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage(e);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white"
              aria-label="Next"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
