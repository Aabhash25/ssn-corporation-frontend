"use client";
import React, { useState } from "react";
import { newsData } from "../data/newsData";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaClock,
  FaParking,
  FaArrowRight,
  FaCalendarAlt,
} from "react-icons/fa";

// Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap");
    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

const NewsPage = () => {
  const [selectedNews, setSelectedNews] = useState(newsData[0]);

  return (
    <>
      <FontsStyle />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row w-full px-4 sm:px-6 lg:px-12 gap-8 pt-12">
          {/* Sidebar - News Navigation */}
          <aside className="lg:w-1/3 xl:w-1/4">
            <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-32">
              <h2 className="text-2xl font-playfair font-bold mb-6 text-center text-gray-800 border-b pb-3 tracking-wide">
                Latest Updates
              </h2>
              <ul className="space-y-3 font-roboto">
                {newsData.map((news) => (
                  <li key={news.id}>
                    <button
                      onClick={() => setSelectedNews(news)}
                      className={`w-full text-left p-4 rounded-2xl transition-all duration-300 hover:shadow-md border-2 ${
                        selectedNews.id === news.id
                          ? "bg-orange-50 border-orange-300 shadow-md transform scale-[1.02]"
                          : "bg-white border-gray-200 hover:border-orange-200"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex-1">
                          <h3
                            className={`font-semibold leading-snug mb-2 text-base md:text-lg ${
                              selectedNews.id === news.id
                                ? "text-orange-700"
                                : "text-gray-800"
                            }`}
                          >
                            {news.title}
                          </h3>
                          <div className="flex items-center text-xs md:text-sm text-gray-500 mb-1">
                            <FaCalendarAlt className="mr-1" size={12} />
                            {news.date}
                          </div>
                          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                            {news.excerpt}
                          </p>
                        </div>
                        <FaArrowRight
                          className={`mt-1 flex-shrink-0 ${
                            selectedNews.id === news.id
                              ? "text-orange-500"
                              : "text-gray-400"
                          }`}
                          size={14}
                        />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-2/3 xl:w-3/4">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full">
              {/* Article Header */}
              <div className="relative bg-gradient-to-r from-blue-900 to-gray-900 text-white p-6 md:p-12">
                <div className="absolute inset-0 bg-black opacity-25"></div>
                <div className="relative z-10">
                  <div className="flex items-center text-blue-200 text-sm md:text-base font-roboto mb-3">
                    <FaCalendarAlt className="mr-2" />
                    {selectedNews.date}
                  </div>
                  <h1 className="text-3xl md:text-5xl font-playfair font-bold leading-snug mb-3">
                    {selectedNews.title}
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100 font-roboto max-w-4xl leading-relaxed">
                    {selectedNews.excerpt}
                  </p>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6 md:p-12 space-y-10">
                {selectedNews.content.map((section, idx) => (
                  <div key={idx} className="space-y-6">
                    {section.image && (
                      <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                        <img
                          src={section.image}
                          alt={`News ${selectedNews.id} image ${idx + 1}`}
                          className="w-full h-auto object-cover max-h-[500px] transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      </div>
                    )}

                    {/* Check if section.text is JSX or string */}
                    <div className="font-roboto text-gray-900 text-xl md:text-2xl leading-relaxed">
                      {typeof section.text === "string"
                        ? section.text
                        : section.text}
                    </div>

                    {/* Project Portfolio Styled */}
                    {section.list && (
                      <div className="mt-4 space-y-4">
                        {section.list.map((item, i) => {
                          const [title, desc] = item.split(": ");
                          return (
                            <div
                              key={i}
                              className="bg-gray-50 p-4 md:p-6 rounded-2xl shadow-sm"
                            >
                              <h4 className="font-playfair text-lg md:text-xl font-semibold text-orange-700 mb-2">
                                {title}:
                              </h4>
                              <p className="text-gray-800 font-roboto text-lg md:text-xl leading-relaxed">
                                {desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                {/* Office Info */}
                {selectedNews.officeInfo && (
                  <div className="mt-10 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-inner p-6 md:p-10 border border-gray-200">
                    <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-6 text-center text-gray-800 tracking-wide">
                      Visit Our New Office
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                      <div className="space-y-3">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-roboto tracking-wide">
                          Contact Information
                        </h3>
                        <div className="space-y-2">
                          <p className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm text-gray-700 font-roboto">
                            <FaMapMarkerAlt
                              className="text-red-500 flex-shrink-0"
                              size={18}
                            />
                            {selectedNews.officeInfo.location}
                          </p>
                          <p className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm text-gray-700 font-roboto">
                            <FaEnvelope
                              className="text-blue-500 flex-shrink-0"
                              size={18}
                            />
                            {selectedNews.officeInfo.email}
                          </p>
                          <p className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm text-gray-700 font-roboto">
                            <FaPhone
                              className="text-green-500 flex-shrink-0"
                              size={18}
                            />
                            {selectedNews.officeInfo.phone}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 font-roboto tracking-wide">
                          Office Hours & Amenities
                        </h3>
                        <div className="space-y-2">
                          <p className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm text-gray-700 font-roboto">
                            <FaClock
                              className="text-yellow-500 flex-shrink-0"
                              size={18}
                            />
                            {selectedNews.officeInfo.hours}
                          </p>
                          <p className="flex items-center gap-3 p-2 bg-white rounded-lg shadow-sm text-gray-700 font-roboto">
                            <FaParking
                              className="text-gray-600 flex-shrink-0"
                              size={18}
                            />
                            {selectedNews.officeInfo.parking}
                          </p>
                        </div>
                        <a
                          href={selectedNews.officeInfo.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-roboto font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-3"
                        >
                          <FaMapMarkerAlt />
                          Open in Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
