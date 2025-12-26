import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Google Fonts
const FontsStyle = () => (
  <style>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

    .font-roboto {
      font-family: "Roboto", sans-serif !important;
    }
    .font-playfair {
      font-family: "Playfair Display", serif !important;
    }
  `}</style>
);

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}news/?page=${currentPage}`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();

        console.log("News API response:", data);

        // Handle paginated response
        if (data.results) {
          setNewsData(data.results);
          setTotalCount(data.count || 0);
          setTotalPages(Math.ceil((data.count || 0) / 12));
        } else {
          // Fallback for non-paginated response
          setNewsData(Array.isArray(data) ? data : []);
          setTotalCount(Array.isArray(data) ? data.length : 0);
          setTotalPages(1);
        }
      } catch (err) {
        console.error("Error fetching news:", err);
        setNewsData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Pagination component
  const Pagination = () => {
    if (totalPages <= 1) return null;

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
      <div className="flex items-center justify-center gap-2 py-8 mt-8">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        {/* First Page */}
        {getPageNumbers()[0] > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              className="px-4 py-2 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              1
            </button>
            {getPageNumbers()[0] > 2 && (
              <span className="text-gray-500">...</span>
            )}
          </>
        )}

        {/* Page Numbers */}
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              page === currentPage
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Last Page */}
        {getPageNumbers()[getPageNumbers().length - 1] < totalPages && (
          <>
            {getPageNumbers()[getPageNumbers().length - 1] < totalPages - 1 && (
              <span className="text-gray-500">...</span>
            )}
            <button
              onClick={() => handlePageChange(totalPages)}
              className="px-4 py-2 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
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

  // Skeleton loader for the news page
  if (loading) {
    return (
      <>
        <FontsStyle />
        <section className="py-10 sm:py-16 bg-gray-50 w-full px-4 sm:px-6 lg:px-12 min-h-[80vh]">
          {/* Header skeleton */}
          <div className="text-center mb-12 sm:mb-16 pt-30">
            <div className="h-10 sm:h-12 bg-gray-300 rounded w-1/3 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 sm:h-5 bg-gray-300 rounded w-2/3 mx-auto animate-pulse"></div>
          </div>

          {/* News cards skeleton */}
          <div className="flex flex-wrap justify-start gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[31%] bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="w-full h-52 sm:h-60 bg-gray-300 animate-pulse" />
                <div className="p-5 sm:p-6">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2 mb-3 animate-pulse"></div>
                  <div className="h-3 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-3 bg-gray-300 rounded w-5/6 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <FontsStyle />
      <section className="py-10 sm:py-16 bg-gray-50 w-full px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 pt-30">
          <h2 className="text-3xl sm:text-5xl font-playfair font-bold text-gray-800 mb-3">
            Latest News
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-roboto text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects, milestones, and corporate updates.
            {totalCount > 0 && ` (${totalCount} total articles)`}
          </p>
        </div>

        {/* News cards */}
        {newsData.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No news articles found.
          </p>
        ) : (
          <>
            <div className="flex flex-wrap justify-start gap-8">
              {newsData.map((news) => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="w-full sm:w-[48%] lg:w-[31%] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Only first image */}
                  {news.image1 && (
                    <img
                      src={news.image1}
                      alt={news.title}
                      className="w-full h-52 sm:h-60 object-cover"
                    />
                  )}

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {new Date(news.published_date).toLocaleDateString()}
                    </p>
                    <div
                      className="text-gray-700 font-roboto text-sm sm:text-base line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html:
                          typeof news.content === "string" ? news.content : "",
                      }}
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <Pagination />
          </>
        )}
      </section>
    </>
  );
};

export default News;
