"use client";
import React from "react";
import { Link } from "react-router-dom";
import { newsData } from "../data/newsData";

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
  `}</style>
);

const News = () => {
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
              <img
                src={news.imageUrls[0]}
                alt={news.title}
                className="w-full h-52 sm:h-60 object-cover"
              />
              <div className="p-5 sm:p-6">
                <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                {/* <p className="text-gray-700 font-roboto text-sm sm:text-base line-clamp-3">
                  {news.content[0]}
                </p> */}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default News;
