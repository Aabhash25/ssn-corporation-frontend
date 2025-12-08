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

// Utility function to convert keywords (single or multi-word) to links
const linkKeywords = (text) => {
  const links = {
    "SSN Corporation": "https://ssncorporation.com/engineers",
    "SSN Builders": "https://ssncorporation.com/contractors",
    // ssncorporation: "https://ssncorporation.com",
    // ssnbuilders: "https://ssnbuilders.com",
    // add more keywords or phrases here
  };

  let linkedText = text;

  // Sort keys by length descending so multi-word phrases are replaced first
  const sortedKeys = Object.keys(links).sort((a, b) => b.length - a.length);

  sortedKeys.forEach((key) => {
    const regex = new RegExp(`\\b${key}\\b`, "gi"); // whole word/phrase match
    linkedText = linkedText.replace(
      regex,
      `<a href="${links[key]}" class="news-link" target="_blank" rel="noopener noreferrer">${key}</a>`
    );
  });

  return linkedText;
};

const NewsDetail = () => {
  const { id } = useParams();
  const newsId = parseInt(id);
  const news = newsData.find((item) => item.id === newsId);

  const moreNews = newsData.filter((item) => item.id !== newsId).slice(0, 3);

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
        <div className="w-full px-6 sm:px-10 lg:px-14 pt-28">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-3">
            {news.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mb-10">
            {news.date}
          </p>

          {/* LAYOUT */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* TEXT COLUMN */}
            <div className="lg:col-span-2 leading-relaxed">
              {news.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="indent-8 text-gray-700 font-roboto text-lg mb-6"
                  dangerouslySetInnerHTML={{ __html: linkKeywords(paragraph) }}
                />
              ))}
            </div>

            {/* IMAGE COLUMN */}
            <div className="flex flex-col gap-6 lg:pl-4 items-start w-full">
              {news.imageUrls.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={news.title}
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MORE NEWS */}
      <section className="py-14 bg-white px-6 sm:px-10 lg:px-14">
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-8">
          More News
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {moreNews.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-gray-50 rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.imageUrls[0]}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{item.date}</p>
                <p className="text-gray-700 font-roboto text-sm line-clamp-3">
                  {item.content[0].replace(/<[^>]+>/g, "")}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/news"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-8 rounded-full transition-all"
          >
            View All News
          </Link>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
