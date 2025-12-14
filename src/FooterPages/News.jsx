"use client";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}news/`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setNewsData(data);
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
          </p>
        </div>

        {/* News cards */}
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
      </section>
    </>
  );
};

export default News;
