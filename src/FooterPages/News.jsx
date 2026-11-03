import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

// Google Fonts
const FontsStyle = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

        .font-roboto {
          font-family: "Roboto", sans-serif !important;
        }

        .font-playfair {
          font-family: "Playfair Display", serif !important;
        }
      `,
    }}
  />
);

const News = () => {
  // Initial news data is provided by the SSG loader.
  const initialData = useLoaderData();

  const [newsData, setNewsData] = useState(initialData.newsData || []);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(initialData.totalPages || 1);
  const [totalCount, setTotalCount] = useState(initialData.totalCount || 0);

  // Fetch additional pages only when the visitor changes the page.
  // Page 1 is already available from the SSG loader.
  useEffect(() => {
    if (currentPage === 1) return;

    const fetchNews = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}news/?page=${currentPage}&page_size=12`,
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const json = await res.json();

        if (json.results) {
          setNewsData(json.results);
          setTotalCount(json.count || 0);
          setTotalPages(Math.ceil((json.count || 0) / 12));
        } else {
          const results = Array.isArray(json) ? json : [];

          setNewsData(results);
          setTotalCount(results.length);
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
    if (page < 1 || page > totalPages || page === currentPage) {
      return;
    }

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

    const pageNumbers = getPageNumbers();

    return (
      <div className="flex items-center justify-center gap-2 py-8 mt-8">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            currentPage === 1 || loading
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        {/* First Page */}
        {pageNumbers[0] > 1 && (
          <>
            <button
              onClick={() => handlePageChange(1)}
              disabled={loading}
              className="px-4 py-2 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              1
            </button>

            {pageNumbers[0] > 2 && <span className="text-gray-500">...</span>}
          </>
        )}

        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={loading}
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
        {pageNumbers[pageNumbers.length - 1] < totalPages && (
          <>
            {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
              <span className="text-gray-500">...</span>
            )}

            <button
              onClick={() => handlePageChange(totalPages)}
              disabled={loading}
              className="px-4 py-2 rounded-lg font-medium bg-gray-100 hover:bg-gray-200 text-gray-700"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            currentPage === totalPages || loading
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    );
  };

  // Loading state for subsequent pages.
  if (loading) {
    return (
      <>
        <FontsStyle />
        <div className="flex justify-center items-center min-h-[80vh]">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </>
    );
  }

  return (
    <>
      <FontsStyle />

      <section className="py-10 sm:py-16 bg-gray-50 w-full px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 pt-30">
          <h1 className="text-3xl sm:text-5xl font-playfair font-bold text-gray-800 mb-3">
            Latest News
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-roboto text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects, milestones, and corporate updates.
            {totalCount > 0 && ` (${totalCount} total articles)`}
          </p>
        </div>

        {/* News Cards */}
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
                  {/* News Image */}
                  {news.image1 && (
                    <img
                      loading="lazy"
                      src={news.image1}
                      alt={news.title || "SSN Corporation news"}
                      className="w-full h-52 sm:h-60 object-cover"
                    />
                  )}

                  {/* News Content */}
                  <div className="p-5 sm:p-6">
                    <h2 className="font-playfair text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                      {news.title}
                    </h2>

                    {news.published_date && (
                      <p className="text-sm text-gray-500 mb-3">
                        {new Date(news.published_date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </p>
                    )}

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
