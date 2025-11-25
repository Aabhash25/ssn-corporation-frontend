"use client";
import React from "react";
import { useParams, Link } from "react-router-dom";
import { newsData } from "../data/newsData";

// Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

    .font-roboto {
      font-family: "Roboto", sans-serif !important;
    }
    .font-playfair {
      font-family: "Playfair Display", serif !important;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span {
      font-style: normal !important;
    }
  `}</style>
);

const NewsDetail = () => {
  const { id } = useParams();
  const newsId = parseInt(id);
  const news = newsData.find((item) => item.id === newsId);

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
      <section className="py-10 sm:py-16 bg-gray-50 w-full">
        <div className="px-4 sm:px-6 w-full pt-32">
          {/* Back Link */}
          <div className="mb-6">
            <Link
              to="/news"
              className="text-orange-500 hover:text-orange-600 font-semibold"
            >
              &larr; Back to News
            </Link>
          </div>

          {/* News Title */}
          <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-800 mb-2">
            {news.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mb-6">{news.date}</p>

          {/* Layout: text left, images right */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* Text */}
            <div className="flex-[3]">
              {news.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="indent-8 text-gray-700 font-roboto text-base sm:text-lg leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            {/* Images */}
            <div className="flex-[1] flex flex-col gap-4">
              {news.imageUrls.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={news.title}
                  className="w-full h-48 sm:h-60 object-cover rounded-xl shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
