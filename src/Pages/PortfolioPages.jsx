import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { PortfolioMapView } from "./MapComponents";

// ============================================
// GLOBAL CACHE (persists across component remounts)
// ============================================
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

const PortfolioLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <p className="text-gray-600 text-sm tracking-wide">
          Loading projects...
        </p>
      </motion.div>
    </div>
  );
};

// ============================================
// PROJECT CARD COMPONENT
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
      {project.image && (
        <img
          src={project.image}
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

// ============================================
// PAGINATION COMPONENT
// ============================================

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const showPages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2));
    let endPage = Math.min(totalPages, startPage + showPages - 1);

    if (endPage - startPage < showPages - 1) {
      startPage = Math.max(1, endPage - showPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

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

// ============================================
// MAIN COMPONENT
// ============================================

const MasonryPortfolio = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize state from global cache
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(
    globalCache.filters.currentPage
  );
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const [showMap, setShowMap] = useState(globalCache.filters.showMap);
  const [zoomProject, setZoomProject] = useState(null);
  const [hoveredMapProject, setHoveredMapProject] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const [selectedCategory, setSelectedCategory] = useState(
    globalCache.filters.selectedCategory
  );
  const [selectedStatus, setSelectedStatus] = useState(
    globalCache.filters.selectedStatus
  );
  const [selectedYear, setSelectedYear] = useState(
    globalCache.filters.selectedYear
  );
  const [searchKeyword, setSearchKeyword] = useState(
    globalCache.filters.searchKeyword
  );

  const [allCategories, setAllCategories] = useState([]);
  const [allStatuses, setAllStatuses] = useState([]);
  const [allYears, setAllYears] = useState([]);

  // Save scroll position before unmount
  useEffect(() => {
    const handleScroll = () => {
      globalCache.scrollPosition = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Restore scroll position on mount
  useEffect(() => {
    if (globalCache.scrollPosition > 0) {
      window.scrollTo(0, globalCache.scrollPosition);
    }
  }, []);

  // Save filter state to global cache whenever it changes
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

  // Fetch filter options once
  useEffect(() => {
    const fetchFilterOptions = async () => {
      // Check if we already have filter options cached
      if (globalCache.filterOptions) {
        setAllCategories(globalCache.filterOptions.categories);
        setAllStatuses(globalCache.filterOptions.statuses);
        setAllYears(globalCache.filterOptions.years);
        return;
      }

      const apiUrl = import.meta.env.VITE_API_URL || "";

      try {
        let allProjects = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const response = await fetch(`${apiUrl}projects/?page=${page}`);
          const data = await response.json();
          allProjects = [...allProjects, ...(data.results || [])];
          hasMore = data.next !== null;
          page++;
        }

        const categories = [
          ...new Set(allProjects.map((p) => p.category).filter(Boolean)),
        ];
        const statuses = [
          ...new Set(allProjects.map((p) => p.status).filter(Boolean)),
        ];
        const years = [
          ...new Set(allProjects.map((p) => p.year).filter(Boolean)),
        ].sort((a, b) => b - a);

        // Cache filter options globally
        globalCache.filterOptions = { categories, statuses, years };

        setAllCategories(categories);
        setAllStatuses(statuses);
        setAllYears(years);
      } catch (err) {
        console.error("Error fetching filter options:", err);
      }
    };

    fetchFilterOptions();
  }, []);

  // Fetch projects with global caching
  useEffect(() => {
    const fetchProjects = async () => {
      const apiUrl = import.meta.env.VITE_API_URL || "";
      const pageKey = `page-${currentPage}`;

      // Check global cache first
      if (globalCache.projects.has(pageKey)) {
        console.log("🚀 Using cached data for page:", currentPage);
        const cachedData = globalCache.projects.get(pageKey);
        setProjects(cachedData.formattedProjects);
        setTotalCount(cachedData.totalCount);
        setTotalPages(cachedData.totalPages);
        setLoading(false);
        return;
      }

      setLoading(true);

      try {
        const params = new URLSearchParams({
          page: currentPage.toString(),
        });

        console.log("📡 Fetching page", currentPage, "from API");
        const response = await fetch(`${apiUrl}projects/?${params}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

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

          return {
            ...project,
            image: imageUrl,
          };
        });

        const cacheData = {
          formattedProjects,
          totalCount: data.count || 0,
          totalPages: Math.ceil((data.count || 0) / 12),
        };

        // Store in global cache
        globalCache.projects.set(pageKey, cacheData);

        // Limit cache size
        if (globalCache.projects.size > 20) {
          const oldestKey = globalCache.projects.keys().next().value;
          globalCache.projects.delete(oldestKey);
        }

        setProjects(formattedProjects);
        setTotalCount(data.count || 0);
        setTotalPages(Math.ceil((data.count || 0) / 12));
        setLoading(false);
      } catch (err) {
        console.error("❌ Error fetching projects:", err);
        setProjects([]);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

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

      return matchesCategory && matchesStatus && matchesYear && matchesKeyword;
    });
  }, [projects, selectedCategory, selectedStatus, selectedYear, searchKeyword]);

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
    setCurrentPage(1);
    // Clear global cache
    globalCache.projects.clear();
    globalCache.filterOptions = null;
  }, []);

  const toggleView = useCallback(() => {
    setShowMap((prev) => !prev);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (loading && projects.length === 0) {
    return <PortfolioLoader />;
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
            {/* Mobile: Search at top */}
            <div className="block sm:hidden mb-4">
              <input
                type="text"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                placeholder="Search projects..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Desktop: All filters in row */}
            <div className="hidden sm:flex flex-wrap items-center gap-4 lg:gap-6 justify-center lg:justify-start">
              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Search:
                </label>
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  placeholder="Search by keyword..."
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[200px]"
                />
              </div>

              <div className="flex items-center space-x-3">
                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  Category:
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
                >
                  <option value="All">All Categories</option>
                  {allCategories.map((catName) => (
                    <option key={catName} value={catName}>
                      {catName}
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
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[120px]"
                >
                  <option value="All">All Status</option>
                  {allStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
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
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[100px]"
                >
                  <option value="All">All Years</option>
                  {allYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center ml-2 lg:ml-4">
                <button
                  onClick={handleReset}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-2 rounded-lg text-sm transition-colors duration-200 whitespace-nowrap"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Mobile: Filters in vertical stack */}
            <div className="space-y-4 sm:hidden">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="All">All Categories</option>
                    {allCategories.map((catName) => (
                      <option key={catName} value={catName}>
                        {catName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Status
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="All">All Status</option>
                    {allStatuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Year
                  </label>
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                  >
                    <option value="All">All Years</option>
                    {allYears.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-4 py-3 rounded-lg text-base transition-colors duration-200"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        {showMap ? (
          <PortfolioMapView
            projects={filteredProjects}
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

            {/* Pagination */}
            {!showMap && totalPages > 1 && (
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
