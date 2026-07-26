import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PortfolioMapView } from "./MapComponents";

const globalCache = {
  projects: new Map(),
  filterOptions: null,
  scrollPosition: 0,
  filters: {
    selectedCategory: "All",
    selectedStatus: "All",
    selectedYear: "All",
    searchKeyword: "",
    currentPage: 1,
    showMap: false,
  },
};

const PortfolioLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-4"
    >
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin"></div>
      </div>
      <p className="text-gray-600 text-sm tracking-wide">Loading projects...</p>
    </motion.div>
  </div>
);

const ProjectCard = React.memo(({ project, index, onClick }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: Math.min(index * 0.03, 0.3),
        duration: 0.4,
        ease: "easeOut",
      }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[3/4] sm:aspect-square bg-gray-200"
      onClick={onClick}
    >
      {/* ✅ Skeleton shimmer shown while image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
      )}

      {project.image && (
        <img
          src={project.image}
          alt={project.name}
          loading={index < 4 ? "eager" : "lazy"} // ← first 4 load immediately
          fetchPriority={index < 4 ? "high" : "auto"} // ← browser prioritizes them
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
          }`}
        />
      )}

      {/* Name bar — always visible */}
      <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-md rounded-t-2xl shadow-md px-2 sm:px-3 py-1 sm:py-2 transition-transform duration-300 group-hover:translate-y-[-5px]">
        <h3
          className="text-gray-900 font-semibold text-center truncate text-xs sm:text-sm"
          style={{ fontFamily: "Playfair Display, serif" }}
          title={project.name}
        >
          {project.name}
        </h3>
      </div>

      {/* Hover overlay */}
      <motion.div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white p-2 sm:p-4">
        <h3
          className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-center"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {project.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2 text-center">
          {project.category || "Uncategorized"}
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

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);
    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Previous
      </button>
      {getPageNumbers()[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="px-4 py-2 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            1
          </button>
          {getPageNumbers()[0] > 2 && (
            <span className="text-gray-500">...</span>
          )}
        </>
      )}
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            page === currentPage
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}
      {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
        <>
          {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
            <span className="text-gray-500">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-4 py-2 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 text-gray-700"
          >
            {totalPages}
          </button>
        </>
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Next
      </button>
    </div>
  );
};

const MasonryPortfolio = () => {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    globalCache.filters.currentPage,
  );
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [showMap, setShowMap] = useState(globalCache.filters.showMap);
  const [zoomProject, setZoomProject] = useState(null);
  const [hoveredMapProject, setHoveredMapProject] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const [selectedCategory, setSelectedCategory] = useState(
    globalCache.filters.selectedCategory,
  );
  const [selectedStatus, setSelectedStatus] = useState(
    globalCache.filters.selectedStatus,
  );
  const [selectedYear, setSelectedYear] = useState(
    globalCache.filters.selectedYear,
  );
  const [searchKeyword, setSearchKeyword] = useState(
    globalCache.filters.searchKeyword,
  );

  const [allCategories, setAllCategories] = useState([]);
  const [allStatuses, setAllStatuses] = useState([]);
  const [allYears, setAllYears] = useState([]);

  // Save scroll position
  useEffect(() => {
    const handleScroll = () => {
      globalCache.scrollPosition = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore scroll position
  useEffect(() => {
    if (globalCache.scrollPosition > 0) {
      window.scrollTo(0, globalCache.scrollPosition);
    }
  }, []);

  // Sync filters to global cache
  useEffect(() => {
    globalCache.filters = {
      selectedCategory,
      selectedStatus,
      selectedYear,
      searchKeyword,
      currentPage,
      showMap,
    };
  }, [
    selectedCategory,
    selectedStatus,
    selectedYear,
    searchKeyword,
    currentPage,
    showMap,
  ]);

  // Reset page to 1 when any filter changes
  useEffect(() => {
    setCurrentPage(1);
    globalCache.projects.clear(); // clear cache when filters change
  }, [selectedCategory, selectedStatus, selectedYear, searchKeyword]);

  // Fetch filter options once
  useEffect(() => {
    const fetchFilterOptions = async () => {
      if (globalCache.filterOptions) {
        setAllCategories(globalCache.filterOptions.categories || []);
        setAllStatuses(globalCache.filterOptions.statuses || []);
        setAllYears(globalCache.filterOptions.years || []);
        return;
      }
      const apiUrl = import.meta.env.VITE_API_URL || "";
      try {
        const response = await fetch(`${apiUrl}projects/filter_options/`);
        if (!response.ok) throw new Error(`status: ${response.status}`);
        const data = await response.json();
        globalCache.filterOptions = data;
        setAllCategories(data?.categories || []);
        setAllStatuses(data?.statuses || []);
        setAllYears(data?.years || []);
      } catch (err) {
        console.error("Error fetching filter options:", err);
      }
    };
    fetchFilterOptions();
  }, []);

  // Fetch projects — filters now sent to API, not done in JS
  useEffect(() => {
    const fetchProjects = async () => {
      const apiUrl = import.meta.env.VITE_API_URL || "";

      // Cache key includes all active filters
      const cacheKey = `${currentPage}-${selectedCategory}-${selectedStatus}-${selectedYear}-${searchKeyword}`;

      if (globalCache.projects.has(cacheKey)) {
        const cachedData = globalCache.projects.get(cacheKey);
        setProjects(cachedData.formattedProjects);
        setTotalCount(cachedData.totalCount);
        setTotalPages(cachedData.totalPages);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        // Build params — only add filter if not "All" / empty
        const params = new URLSearchParams({ page: currentPage.toString() });
        if (selectedCategory !== "All")
          params.append("category", selectedCategory);
        if (selectedStatus !== "All") params.append("status", selectedStatus);
        if (selectedYear !== "All") params.append("year", selectedYear);
        if (searchKeyword.trim()) params.append("search", searchKeyword.trim());

        const response = await fetch(`${apiUrl}projects/?${params}`);
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();

        const formattedProjects = (data.results || []).map((project) => {
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
          return { ...project, image: imageUrl };
        });

        const totalPagesCalc = Math.ceil((data.count || 0) / 12);
        const cacheData = {
          formattedProjects,
          totalCount: data.count || 0,
          totalPages: totalPagesCalc,
        };

        globalCache.projects.set(cacheKey, cacheData);
        if (globalCache.projects.size > 20) {
          globalCache.projects.delete(globalCache.projects.keys().next().value);
        }

        setProjects(formattedProjects);
        setTotalCount(data.count || 0);
        setTotalPages(totalPagesCalc);
      } catch (err) {
        console.error("❌ Error fetching projects:", err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [
    currentPage,
    selectedCategory,
    selectedStatus,
    selectedYear,
    searchKeyword,
  ]);

  const handleProjectClick = useCallback(
    (p) => navigate(`/project-description/${p.id}-${p.slug}`),
    [navigate],
  );
  const handleMarkerHover = useCallback((p, pos) => {
    setHoverPosition(pos);
    setHoveredMapProject(p);
  }, []);
  const handleMarkerOut = useCallback(() => setHoveredMapProject(null), []);
  const handleMarkerClick = useCallback(
    (p) => {
      setZoomProject(p);
      setTimeout(
        () => navigate(`/project-description/${p.id}-${p.slug}`),
        1800,
      );
    },
    [navigate],
  );

  const handleReset = useCallback(() => {
    setSelectedCategory("All");
    setSelectedStatus("All");
    setSelectedYear("All");
    setSearchKeyword("");
    setCurrentPage(1);
    globalCache.projects.clear();
    globalCache.filterOptions = null;
  }, []);

  const toggleView = useCallback(() => setShowMap((prev) => !prev), []);
  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading && projects.length === 0) return <PortfolioLoader />;

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
                projects)
              </p>
            </div>
            <button
              onClick={toggleView}
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105"
            >
              {showMap ? "Grid View" : "Map View"}
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b border-gray-100 py-4 sm:py-6 shadow-sm">
          <div className="max-w-[95vw] sm:max-w-[90vw] mx-auto px-4 sm:px-6">
            {/* Mobile */}
            <div className="block sm:hidden space-y-4">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search projects..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
              >
                <option value="All">All Categories</option>
                {allCategories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
              >
                <option value="All">All Status</option>
                {allStatuses.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-3 text-base bg-white"
              >
                <option value="All">All Years</option>
                {allYears.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
              <button
                onClick={handleReset}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-3 rounded-lg text-base"
              >
                Reset Filters
              </button>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex flex-wrap items-center gap-4 lg:gap-6">
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Search:
                </label>
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Search by keyword..."
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 min-w-[200px]"
                />
              </div>
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Category:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm min-w-[140px]"
                >
                  <option value="All">All Categories</option>
                  {allCategories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Status:
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm min-w-[120px]"
                >
                  <option value="All">All Status</option>
                  {allStatuses.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Year:
                </label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm min-w-[100px]"
                >
                  <option value="All">All Years</option>
                  {allYears.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleReset}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg text-sm"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {showMap ? (
          <PortfolioMapView
            projects={projects}
            zoomProject={zoomProject}
            onMarkerClick={handleMarkerClick}
            onMarkerHover={handleMarkerHover}
            onMarkerOut={handleMarkerOut}
            hoveredProject={hoveredMapProject}
            hoverPosition={hoverPosition}
          />
        ) : (
          <>
            <div className="py-6 sm:py-10 max-w-[90vw] mx-auto px-2 sm:px-4 lg:px-6">
              {loading ? (
                <div className="flex justify-center py-20">
                  <div className="w-10 h-10 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin" />
                </div>
              ) : projects.length === 0 ? (
                <p className="text-center text-gray-500 py-10">
                  No projects match your selected filters.
                </p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                  {projects.map((project, index) => (
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

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MasonryPortfolio;
