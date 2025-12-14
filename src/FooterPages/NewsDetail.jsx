"use client";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

    .font-roboto {
      font-family: "Roboto", sans-serif !important;
    }
    .font-playfair {
      font-family: "Playfair Display", serif !important;
    }

    /* Style for links inside paragraphs */
    .news-link {
      color: #050200ff;
      font-weight: 600;
      text-decoration: underline;
    }
    .news-link:hover {
      text-decoration: underline;
    }
  `}</style>
);

// Utility function to convert keywords to links
const linkKeywords = (text) => {
  const links = {
    "SSN Corporation": "https://ssncorporation.com/engineers",
    "SSN Builders": "https://ssncorporation.com/contractors",
  };

  let linkedText = text;
  const sortedKeys = Object.keys(links).sort((a, b) => b.length - a.length);

  sortedKeys.forEach((key) => {
    const regex = new RegExp(`\\b${key}\\b`, "gi");
    linkedText = linkedText.replace(
      regex,
      `<a href="${links[key]}" class="news-link" target="_blank" rel="noopener noreferrer">${key}</a>`
    );
  });

  return linkedText;
};

const NewsDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [moreNews, setMoreNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch current news by ID
    fetch(`${import.meta.env.VITE_API_URL}news/${id}/`)
      .then((res) => res.json())
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news:", err));

    // Fetch all news for "More News" section
    fetch(`${import.meta.env.VITE_API_URL}news/`)
      .then((res) => res.json())
      .then((data) => {
        const others = data
          .filter((item) => item.id !== parseInt(id))
          .slice(0, 3);
        setMoreNews(others);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching more news:", err));
  }, [id]);

  if (loading) {
    return (
      <>
        <FontsStyle />
        <div className="min-h-[80vh] flex items-center justify-center">
          <p className="text-gray-500 text-lg font-roboto">Loading news...</p>
        </div>
      </>
    );
  }

  if (!news) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-playfair font-bold text-gray-800">
          News Not Found
        </h2>
        <Link
          to="/news"
          className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
        >
          Back to News
        </Link>
      </div>
    );
  }

  return (
    <>
      <FontsStyle />

      {/* MAIN SECTION */}
      <section className="py-10 sm:py-16 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-3">
            {news.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10">
            {new Date(news.published_date).toLocaleDateString()}
          </p>

          {/* LAYOUT */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* TEXT COLUMN */}
            <div className="lg:col-span-2 leading-relaxed">
              <div
                className="text-gray-700 font-roboto text-base sm:text-lg mb-6"
                dangerouslySetInnerHTML={{ __html: linkKeywords(news.content) }}
              />
            </div>

            {/* IMAGE COLUMN - Fixed to scale with zoom */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:sticky lg:top-28 w-full">
              {news.image1 && (
                <div className="w-full overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={news.image1}
                    alt={`${news.title} image 1`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              {news.image2 && (
                <div className="w-full overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={news.image2}
                    alt={`${news.title} image 2`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MORE NEWS */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8">
            More News
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {moreNews.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {item.image1 && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={item.image1}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-4 sm:p-5 flex-1 flex flex-col">
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm mb-3">
                    {new Date(item.published_date).toLocaleDateString()}
                  </p>
                  <div
                    className="text-gray-700 font-roboto text-sm line-clamp-3 flex-1"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Link
              to="/news"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 sm:px-8 rounded-full transition-all"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
