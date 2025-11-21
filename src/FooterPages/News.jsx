import React, { useState } from "react";
import { newsData } from "../data/newsData";

export default function App() {
  const [selectedNewsId, setSelectedNewsId] = useState(newsData[0].id);
  const selectedNews = newsData.find((news) => news.id === selectedNewsId);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap");
        .font-inter {
          font-family: "Inter", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
      `}</style>

      <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row pt-20 font-inter">
        {/* Sidebar */}
        <aside className="w-full lg:w-96 bg-white shadow-lg flex-shrink-0">
          <div className="p-6 lg:p-10 sticky top-0">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6 lg:mb-10 font-playfair">
              All News
            </h2>
            <nav className="space-y-3 lg:space-y-4">
              {newsData.map((news) => (
                <button
                  key={news.id}
                  onClick={() => setSelectedNewsId(news.id)}
                  className={`w-full text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl transition-all duration-300 text-base lg:text-lg border-2 ${
                    selectedNewsId === news.id
                      ? "bg-blue-50 border-blue-300 shadow-lg text-blue-900 font-semibold"
                      : "border-transparent hover:bg-gray-50 hover:border-gray-200 text-gray-700"
                  }`}
                >
                  <div className="text-sm text-gray-500 mb-1">{news.date}</div>
                  <div className="leading-tight">{news.title}</div>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* News Content */}
        <main className="flex-1">
          {selectedNews && (
            <article className="bg-white w-full min-h-screen">
              <div className="px-4 sm:px-8 lg:px-20 py-12 lg:py-24">
                <header className="max-w-5xl mb-10 lg:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight font-playfair mb-4 text-left">
                    {selectedNews.title}
                  </h2>
                  <time className="text-base sm:text-xl text-gray-500 block text-left">
                    {selectedNews.date}
                  </time>
                </header>

                {/* Desktop images floated right */}
                <div className="hidden lg:block float-right ml-6 xl:ml-12 mb-6 xl:mb-12 w-full max-w-[420px] xl:max-w-[480px] space-y-4 xl:space-y-8">
                  {selectedNews.imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`${selectedNews.title} - Image ${index + 1}`}
                      className="w-full h-48 sm:h-56 xl:h-72 object-cover rounded-2xl shadow-md border border-gray-100"
                    />
                  ))}
                </div>

                {/* Text content */}
                <div className="max-w-prose text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mr-0 lg:mr-6 paragraph-indent">
                  {" "}
                  {/* for first line indent ,we have custom css at index,html */}
                  {selectedNews.content.map((paragraph, i) => (
                    <p
                      key={i}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    ></p>
                  ))}
                </div>

                <div className="clear-both" />

                {/* Mobile images */}
                <div className="lg:hidden mt-8 sm:mt-12 space-y-4 sm:space-y-6">
                  {selectedNews.imageUrls.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`${selectedNews.title} - Image ${index + 1}`}
                      className="w-full h-48 sm:h-56 object-cover rounded-2xl"
                    />
                  ))}
                </div>

                <footer className="mt-16 sm:mt-24 pt-8 border-t border-gray-200 text-center text-gray-500 max-w-4xl mx-auto">
                  SSN Corporation © 2025 • Raleigh, North Carolina
                </footer>
              </div>
            </article>
          )}
        </main>
      </div>
    </>
  );
}
