import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet default markers
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Map zoom controller
const MapController = ({ zoomProject }) => {
  const map = useMap();
  useEffect(() => {
    if (zoomProject) {
      map.flyTo([zoomProject.lat, zoomProject.lng], 15, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [map, zoomProject]);
  return null;
};

// Custom marker with hover tooltip
const HoverMarker = ({
  project,
  onMarkerClick,
  onMarkerHover,
  onMarkerOut,
}) => {
  const markerRef = useRef(null);

  const handleMouseEnter = () => {
    if (markerRef.current && onMarkerHover) {
      const marker = markerRef.current;
      const map = marker._map;
      if (map) {
        const containerPoint = map.latLngToContainerPoint([
          project.lat,
          project.lng,
        ]);
        const mapContainer = map.getContainer();
        const rect = mapContainer.getBoundingClientRect();

        onMarkerHover(project, {
          x: rect.left + containerPoint.x,
          y: rect.top + containerPoint.y - 40, // above marker
        });
      }
    }
  };

  return (
    <Marker
      ref={markerRef}
      position={[project.lat, project.lng]}
      eventHandlers={{
        mouseover: handleMouseEnter,
        mouseout: () => onMarkerOut && onMarkerOut(),
        click: () => onMarkerClick(project),
      }}
    />
  );
};

const MasonryPortfolio = () => {
  const navigate = useNavigate();

  // Projects state
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Map / hover states
  const [showMap, setShowMap] = useState(false);
  const [zoomProject, setZoomProject] = useState(null);
  const [hoveredMapProject, setHoveredMapProject] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState(""); // ✅ Search state

  // Fetch projects from Django API
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/`)
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((project) => ({
          ...project,
          images: project.images.map((img) => img.image), // full URLs already
        }));
        setProjects(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white" style={{ paddingTop: "140px" }}>
        {/* Header */}
        <div className="bg-white border-b border-gray-100 relative z-10">
          <div className="max-w-[90vw] mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="h-8 sm:h-10 bg-gray-300 rounded w-40 sm:w-56 mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-64 sm:w-80 animate-pulse"></div>
          </div>
        </div>

        {/* Filters Row */}
        <div className="bg-white border-b border-gray-100 py-3 sm:py-4 shadow-sm">
          <div className="max-w-[90vw] mx-auto px-4 sm:px-6 flex flex-wrap items-center gap-4">
            {/* Search */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <div className="h-3 w-12 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-9 w-40 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <div className="h-3 w-14 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-9 w-32 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>

            {/* Status */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <div className="h-3 w-12 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-9 w-32 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>

            {/* Year */}
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <div className="h-3 w-10 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-9 w-28 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>

            {/* Reset */}
            <div className="h-9 w-24 bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="py-6 sm:py-10 max-w-[90vw] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 animate-pulse aspect-[3/4] flex flex-col"
              >
                {/* Image section */}
                <div className="w-full h-[75%] bg-gray-300"></div>

                {/* Title footer */}
                <div className="bg-white/95 h-[25%] px-3 flex flex-col justify-center">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  const filteredProjects = [...projects]
    .sort((a, b) => {
      // Sort by display_order first (ascending)
      if (a.display_order !== b.display_order) {
        return a.display_order - b.display_order;
      }
      // Fallback: newest ID first
      return b.id - a.id;
    })
    .filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "All" || project.status === selectedStatus;
      const matchesYear =
        selectedYear === "All" || project.year === parseInt(selectedYear);

      const keywordList = project.keywords ? project.keywords.split(",") : [];
      const matchesKeyword =
        project.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        project.description
          .toLowerCase()
          .includes(searchKeyword.toLowerCase()) ||
        keywordList.some((k) =>
          k.toLowerCase().includes(searchKeyword.toLowerCase())
        );

      return matchesCategory && matchesStatus && matchesYear && matchesKeyword;
    });

  // Handlers
  const handleProjectClick = (p) => navigate(`/project-description/${p.id}`);
  const handleMarkerHover = (p, pos) => {
    setHoverPosition(pos);
    setHoveredMapProject(p);
  };
  const handleMarkerOut = () => setHoveredMapProject(null);
  const handleMarkerClick = (p) => {
    setZoomProject(p);
    setTimeout(() => navigate(`/project-description/${p.id}`), 1800);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <div
        className="min-h-screen bg-white"
        style={{ fontFamily: "Inter, sans-serif", paddingTop: "140px" }}
      >
        {/* Header */}
        <div className="bg-white border-b border-gray-100 relative z-10">
          <div className="max-w-[90vw] mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Portfolio
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Explore our ongoing and completed projects (
                {filteredProjects.length} projects)
              </p>
            </div>
            <button
              onClick={() => setShowMap(!showMap)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition w-full sm:w-auto"
            >
              {showMap ? "Grid View" : "Map View"}
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-100 py-3 sm:py-4 shadow-sm">
          <div className="max-w-[90vw] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 justify-start sm:justify-between">
            {/* Search */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Search:
              </label>
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search by keyword..."
                className="border border-gray-300 rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none min-w-[150px]"
              />
            </div>

            {/* Category */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Category:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none min-w-[120px]"
              >
                <option value="All">All</option>
                {[...new Set(projects.map((p) => p.category))].map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Status:
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none min-w-[120px]"
              >
                <option value="All">All</option>
                {[...new Set(projects.map((p) => p.status))].map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            {/* Year */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
              <label className="text-xs sm:text-sm font-medium text-gray-700">
                Year:
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="border border-gray-300 rounded-lg px-2 sm:px-3 py-1 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 flex-1 sm:flex-none min-w-[120px]"
              >
                <option value="All">All</option>
                {[...new Set(projects.map((p) => p.year))]
                  .sort((a, b) => b - a)
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select>
            </div>

            {/* Reset */}
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedStatus("All");
                setSelectedYear("All");
                setSearchKeyword("");
              }}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm w-full sm:w-auto"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Main Content */}
        {showMap ? (
          // Map View
          <div
            className="w-full relative"
            style={{ height: "60vh", zIndex: 1 }}
          >
            <MapContainer
              center={[39.8283, -98.5795]}
              zoom={5}
              scrollWheelZoom={true}
              style={{ height: "100%", width: "100%", borderRadius: "16px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              />
              <MapController zoomProject={zoomProject} />
              {filteredProjects
                .filter((p) => p.lat && p.lng && !isNaN(p.lat) && !isNaN(p.lng))
                .map((p) => (
                  <HoverMarker
                    key={p.id}
                    project={p}
                    onMarkerClick={handleMarkerClick}
                    onMarkerHover={handleMarkerHover}
                    onMarkerOut={handleMarkerOut}
                  />
                ))}
            </MapContainer>

            {/* Hover Tooltip */}
            <AnimatePresence>
              {hoveredMapProject && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="fixed z-[9999] bg-white rounded-lg shadow-lg border p-3 sm:p-4 w-full max-w-xs sm:max-w-sm pointer-events-none"
                  style={{
                    left: `${hoverPosition.x}px`,
                    top: `${hoverPosition.y}px`,
                    transform: "translate(-50%, -100%)",
                  }}
                >
                  <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
                    {hoveredMapProject.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                    {hoveredMapProject.description}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>📍 {hoveredMapProject.location}</span>
                    <span>{hoveredMapProject.year}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          // Grid View
          <div className="py-6 sm:py-10 max-w-[90vw] mx-auto px-2 sm:px-4 lg:px-6">
            {filteredProjects.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No projects match your selected filters.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[3/4] sm:aspect-square"
                    onClick={() => handleProjectClick(project)}
                  >
                    <img
                      src={project.images[0]}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md rounded-t-2xl shadow-md px-2 sm:px-3 py-1 sm:py-2 transition-transform duration-300 group-hover:translate-y-[-5px]">
                      <h3
                        className="text-gray-900 font-semibold text-center truncate text-xs sm:text-sm"
                        style={{ fontFamily: "Playfair Display, serif" }}
                        title={project.name}
                      >
                        {project.name}
                      </h3>
                    </div>
                    <motion.div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-2 sm:p-4">
                      <h3
                        className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-center"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {project.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2 text-center">
                        {project.category}
                      </p>
                      <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-300 justify-center">
                        <span>{project.status}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MasonryPortfolio;
