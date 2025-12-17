import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
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

// ============================================
// CACHING UTILITIES
// ============================================

/**
 * In-memory cache for API responses with sessionStorage persistence
 * Caches data for 5 minutes to reduce API calls
 */
const apiCache = {
  data: null,
  timestamp: null,
  maxAge: 5 * 60 * 1000, // 5 minutes

  set(data) {
    this.data = data;
    this.timestamp = Date.now();
    // Persist to sessionStorage for refresh resilience
    try {
      sessionStorage.setItem(
        "portfolio_cache",
        JSON.stringify({
          data,
          timestamp: this.timestamp,
        })
      );
      console.log("✓ Cache saved to sessionStorage");
    } catch (e) {
      console.warn("Failed to cache to sessionStorage:", e);
    }
  },

  get() {
    // Check in-memory cache first (fastest)
    if (
      this.data &&
      this.timestamp &&
      Date.now() - this.timestamp < this.maxAge
    ) {
      console.log("✓ Using in-memory cache");
      return this.data;
    }

    // Check sessionStorage (survives page refresh)
    try {
      const cached = sessionStorage.getItem("portfolio_cache");
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < this.maxAge) {
          console.log("✓ Restored cache from sessionStorage");
          this.data = data;
          this.timestamp = timestamp;
          return data;
        } else {
          console.log("✗ Cache expired");
        }
      }
    } catch (e) {
      console.warn("Failed to retrieve from sessionStorage:", e);
    }

    return null;
  },

  clear() {
    this.data = null;
    this.timestamp = null;
    try {
      sessionStorage.removeItem("portfolio_cache");
      console.log("✓ Cache cleared");
    } catch (e) {
      console.warn("Failed to clear sessionStorage:", e);
    }
  },

  getAge() {
    if (!this.timestamp) return null;
    return Math.floor((Date.now() - this.timestamp) / 1000);
  },
};

/**
 * Memoized filter results cache
 * Stores computed filter results to avoid re-filtering on every render
 */
const filterCache = new Map();
const MAX_FILTER_CACHE_SIZE = 50;

const getCacheKey = (projects, category, status, year, keyword) => {
  return `${category}|${status}|${year}|${keyword}|${projects.length}`;
};

// ============================================
// MAP COMPONENTS
// ============================================

const MapController = React.memo(({ zoomProject }) => {
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
});

const HoverMarker = React.memo(
  ({ project, onMarkerClick, onMarkerHover, onMarkerOut }) => {
    const markerRef = useRef(null);

    const handleMouseEnter = useCallback(() => {
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
            y: rect.top + containerPoint.y - 40,
          });
        }
      }
    }, [project, onMarkerHover]);

    const handleClick = useCallback(() => {
      onMarkerClick(project);
    }, [project, onMarkerClick]);

    return (
      <Marker
        ref={markerRef}
        position={[project.lat, project.lng]}
        eventHandlers={{
          mouseover: handleMouseEnter,
          mouseout: onMarkerOut,
          click: handleClick,
        }}
      />
    );
  }
);

// ============================================
// PROJECT CARD COMPONENT (Memoized)
// ============================================

const ProjectCard = React.memo(({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
        ease: "easeOut",
      }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[3/4] sm:aspect-square"
      onClick={onClick}
    >
      {project.images && project.images[0] && (
        <img
          src={project.images[0]}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      )}
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
          {project.category?.name || "Uncategorized"}
        </p>
        <div className="flex items-center gap-1 sm:gap-2 text-xs text-gray-300 justify-center">
          <span>{project.status}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>
      </motion.div>
    </motion.div>
  );
});

// ============================================
// MAIN COMPONENT
// ============================================

const MasonryPortfolio = () => {
  const navigate = useNavigate();

  // Projects state
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [cacheAge, setCacheAge] = useState(null);

  // Map / hover states
  const [showMap, setShowMap] = useState(false);
  const [zoomProject, setZoomProject] = useState(null);
  const [hoveredMapProject, setHoveredMapProject] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");

  // Fetch projects with intelligent caching
  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL || "";
    console.log("🔍 Fetching from:", `${apiUrl}projects/`);

    // Check cache first
    const cachedData = apiCache.get();
    if (cachedData) {
      const age = apiCache.getAge();
      console.log(`✓ Using cached data (${age}s old)`);
      setCacheAge(age);
      setProjects(cachedData.projects);
      setTotalCount(cachedData.count);
      setTotalPages(1);
      setLoading(false);
      return;
    }

    // Fetch from API
    console.log("⚡ Fetching fresh data from API");
    setLoading(true);

    fetch(`${apiUrl}projects/`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("📦 Raw API data received:", data);

        const projectsArray = Array.isArray(data) ? data : data.results || [];
        const count = Array.isArray(data) ? data.length : data.count || 0;

        const formattedData = projectsArray.map((project) => {
          let imageUrl = "";
          if (project.image) {
            if (project.image.startsWith("http")) {
              imageUrl = project.image;
            } else {
              const baseUrl = apiUrl.replace("/api/", "/").replace(/\/$/, "");
              const imagePath = project.image.startsWith("/")
                ? project.image
                : `/${project.image}`;
              imageUrl = `${baseUrl}${imagePath}`;
            }
          }

          return {
            ...project,
            images: imageUrl ? [imageUrl] : [],
            category: { name: project.category || "Uncategorized" },
          };
        });

        console.log(`✓ Formatted ${formattedData.length} projects`);

        // Cache the results
        apiCache.set({
          projects: formattedData,
          count: count,
        });

        setCacheAge(0);
        setProjects(formattedData);
        setTotalCount(count);
        setTotalPages(1);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching projects:", err);
        setProjects([]);
        setLoading(false);
      });
  }, []);

  // Memoized filtered projects with intelligent caching
  const filteredProjects = useMemo(() => {
    const cacheKey = getCacheKey(
      projects,
      selectedCategory,
      selectedStatus,
      selectedYear,
      searchKeyword
    );

    // Check filter cache
    if (filterCache.has(cacheKey)) {
      console.log("✓ Using cached filter results");
      return filterCache.get(cacheKey);
    }

    console.log("🔄 Computing filtered results");
    const startTime = performance.now();

    const result = [...projects]
      .sort((a, b) => {
        if (a.display_order !== b.display_order) {
          return a.display_order - b.display_order;
        }
        return b.id - a.id;
      })
      .filter((project) => {
        const matchesCategory =
          selectedCategory === "All" ||
          project.category?.name === selectedCategory;

        const matchesStatus =
          selectedStatus === "All" || project.status === selectedStatus;
        const matchesYear =
          selectedYear === "All" || project.year === parseInt(selectedYear);

        const keywordList = project.keywords ? project.keywords.split(",") : [];
        const matchesKeyword =
          searchKeyword === "" ||
          project.name.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) ||
          keywordList.some((k) =>
            k.toLowerCase().includes(searchKeyword.toLowerCase())
          );

        return (
          matchesCategory && matchesStatus && matchesYear && matchesKeyword
        );
      });

    const endTime = performance.now();
    console.log(
      `✓ Filtered to ${result.length} projects in ${(
        endTime - startTime
      ).toFixed(2)}ms`
    );

    // Cache the filtered results
    filterCache.set(cacheKey, result);

    // Limit cache size to prevent memory issues
    if (filterCache.size > MAX_FILTER_CACHE_SIZE) {
      const firstKey = filterCache.keys().next().value;
      filterCache.delete(firstKey);
      console.log(`🧹 Filter cache cleaned (size: ${filterCache.size})`);
    }

    return result;
  }, [projects, selectedCategory, selectedStatus, selectedYear, searchKeyword]);

  // Memoized unique categories, statuses, and years
  const categories = useMemo(() => {
    const cats = [
      ...new Set(projects.map((p) => p.category?.name).filter(Boolean)),
    ];
    console.log(`📁 ${cats.length} unique categories`);
    return cats;
  }, [projects]);

  const statuses = useMemo(() => {
    const stats = [...new Set(projects.map((p) => p.status).filter(Boolean))];
    console.log(`📊 ${stats.length} unique statuses`);
    return stats;
  }, [projects]);

  const years = useMemo(() => {
    const yrs = [...new Set(projects.map((p) => p.year).filter(Boolean))].sort(
      (a, b) => b - a
    );
    console.log(`📅 ${yrs.length} unique years`);
    return yrs;
  }, [projects]);

  // Memoized event handlers to prevent unnecessary re-renders
  const handleProjectClick = useCallback(
    (p) => {
      navigate(`/project-description/${p.id}`);
    },
    [navigate]
  );

  const handleMarkerHover = useCallback((p, pos) => {
    setHoverPosition(pos);
    setHoveredMapProject(p);
  }, []);

  const handleMarkerOut = useCallback(() => {
    setHoveredMapProject(null);
  }, []);

  const handleMarkerClick = useCallback(
    (p) => {
      setZoomProject(p);
      setTimeout(() => navigate(`/project-description/${p.id}`), 1800);
    },
    [navigate]
  );

  const handleReset = useCallback(() => {
    setSelectedCategory("All");
    setSelectedStatus("All");
    setSelectedYear("All");
    setSearchKeyword("");
  }, []);

  const toggleView = useCallback(() => {
    setShowMap((prev) => !prev);
  }, []);

  const handleClearCache = useCallback(() => {
    if (window.confirm("Clear cached data and reload from API?")) {
      apiCache.clear();
      filterCache.clear();
      window.location.reload();
    }
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white" style={{ paddingTop: "140px" }}>
        <div className="bg-white border-b border-gray-100 relative z-10 animate-pulse">
          <div className="max-w-[90vw] mx-auto px-4 sm:px-6 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <div className="h-8 sm:h-10 bg-gray-300 rounded w-48 sm:w-64 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-80 sm:w-96"></div>
            </div>
            <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        <div className="bg-white border-b border-gray-100 py-3 sm:py-4 shadow-sm animate-pulse">
          <div className="max-w-[90vw] mx-auto px-4 sm:px-6 flex flex-wrap items-center gap-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-9 w-24 bg-gray-300 rounded-lg"></div>
            ))}
            <div className="h-9 w-24 bg-gray-300 rounded-lg"></div>
          </div>
        </div>

        <div className="py-6 sm:py-10 max-w-[90vw] mx-auto px-2 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-[3/4] flex flex-col animate-pulse"
              >
                <div className="w-full h-[60%] bg-gray-300 relative">
                  <div className="absolute bottom-2 left-2 h-3 w-12 bg-gray-400 rounded animate-pulse"></div>
                </div>
                <div className="bg-white/90 flex-1 p-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

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
                Explore our ongoing and completed projects ({totalCount} total
                projects, showing page {currentPage} of {totalPages})
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={toggleView}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
              >
                {showMap ? "Grid View" : "Map View"}
              </button>
              {cacheAge !== null && (
                <button
                  onClick={handleClearCache}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-3 rounded-lg text-sm"
                  title="Clear cache and reload"
                >
                  🔄
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-100 py-3 sm:py-4 shadow-sm">
          <div className="max-w-[90vw] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 justify-start sm:justify-between">
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
                {categories.map((catName) => (
                  <option key={catName} value={catName}>
                    {catName}
                  </option>
                ))}
              </select>
            </div>

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
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

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
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleReset}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 sm:px-4 py-1 rounded-lg text-xs sm:text-sm w-full sm:w-auto"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Main Content */}
        {showMap ? (
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
          <div className="py-6 sm:py-10 max-w-[90vw] mx-auto px-2 sm:px-4 lg:px-6">
            {filteredProjects.length === 0 ? (
              <p className="text-center text-gray-500 py-10">
                No projects match your selected filters.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onClick={() => handleProjectClick(project)}
                  />
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
