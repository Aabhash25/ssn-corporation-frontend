import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Grid3x3, ArrowLeft } from "lucide-react";

export default function ProjectDescription() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Fetch project by ID from API
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "";
    setLoading(true);

    fetch(`${apiUrl}projects/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const imageUrls =
          data.images && Array.isArray(data.images)
            ? data.images.map((img) => {
                const imgUrl = img.image || img;
                return imgUrl.startsWith("http")
                  ? imgUrl
                  : `${apiUrl.replace("/api/", "")}${imgUrl}`;
              })
            : [];

        setProject({
          ...data,
          images: imageUrls,
          category: data.category || { name: "Uncategorized" },
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching project:", err);
        setLoading(false);
      });
  }, [id]);

  // Reset image slider when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageModalOpen(false);
  }, [project]);

  // Auto slider for gallery
  useEffect(() => {
    if (!project?.images || project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent mb-4"></div>
          <p className="text-gray-600 font-medium">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 bg-gray-50">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Project not found
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-200 rounded-md text-sm sm:text-base"
            >
              Go Back
            </button>
            <Link
              to="/portfolio"
              className="text-blue-600 underline text-sm sm:text-base"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const images = Array.isArray(project.images) ? project.images : [];

  const openImageModal = (index) => {
    setCurrentImageIndex(index);
    setIsImageModalOpen(true);
  };
  const closeImageModal = () => setIsImageModalOpen(false);
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
      {/* Back to Projects Button */}
      <div className="fixed top-16 sm:top-20 md:top-24 left-2 sm:left-4 lg:left-6 z-50">
        <button
          onClick={() => {
            navigate("/portfolio");
            // Small delay to ensure navigation completes
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }, 100);
          }}
          className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span className="hidden sm:inline">Back to Projects</span>
          <span className="sm:hidden">Back</span>
        </button>
      </div>

      {/* HERO / IMAGE SLIDER */}
      {images.length > 0 && (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div className="w-full aspect-[16/9] relative">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={project.description || "Project image"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  onClick={() => openImageModal(currentImageIndex)}
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => prevImage(e)}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 sm:p-3 transition"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                  <button
                    onClick={(e) => nextImage(e)}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 sm:p-3 transition"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6 sm:gap-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-[Playfair_Display] font-bold text-gray-900 leading-tight">
            {project.description}
          </h1>
          {project.long_description && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-white/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200"
            >
              <div
                className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: project.long_description }}
              ></div>
            </motion.div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:sticky lg:top-24 h-fit">
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl border border-gray-100">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-4">
              Project Info
            </h3>
            <div className="text-gray-700 space-y-2 sm:space-y-3">
              {project.category && (
                <div className="flex justify-between text-xs sm:text-sm md:text-base">
                  <span className="font-medium">Category</span>
                  <span className="text-right">{project.category.name}</span>
                </div>
              )}
              {project.status && (
                <div className="flex justify-between text-xs sm:text-sm md:text-base">
                  <span className="font-medium">Status</span>
                  <span className="text-right">{project.status}</span>
                </div>
              )}
              {project.location && (
                <div className="flex justify-between text-xs sm:text-sm md:text-base">
                  <span className="font-medium">Location</span>
                  <span className="text-right">{project.location}</span>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                to="/portfolio"
                className="flex items-center justify-center gap-2 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2.5 sm:py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <Grid3x3 className="w-4 h-4 sm:w-5 sm:h-5" />
                View All Projects
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Gallery */}
      {images.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 border-l-4 border-yellow-500 pl-3 sm:pl-4 font-[Playfair_Display]">
            Gallery
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {images.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => openImageModal(idx)}
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={src}
                    alt={project.description || `Image ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base font-medium">
                    View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Image Modal */}
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
              className="absolute top-4 sm:top-6 right-4 sm:right-6 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage(e);
              }}
              className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </button>
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={project.description || "Project image"}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-h-[85vh] sm:max-h-[90vh] max-w-[90vw] sm:max-w-[95vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage(e);
              }}
              className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
