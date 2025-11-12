"use client";

import React from "react";

const News = ({ newsList }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {newsList && newsList.length > 0 ? (
        <div className="max-w-7xl w-full space-y-6">
          {newsList.map((newsItem) => (
            <div
              key={newsItem.id}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold">{newsItem.title}</h2>
              <p className="text-gray-600 mt-2">{newsItem.description}</p>
            </div>
          ))}
        </div>
      ) : (
        // Message when no news available
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            News Not Available
          </h1>
          <p className="text-gray-600">
            Sorry, we currently don’t have any news to show. Please check back
            later.
          </p>
        </div>
      )}
    </div>
  );
};

export default News;

// import React from "react";

// const News = () => {
//   const newsArticles = [
//     {
//       id: 1,
//       headline: "SSN Corporation Unveils Next-Generation Smart Infrastructure",
//       date: "November 3, 2025",
//       excerpt:
//         "SSN Corporation launches its latest smart building project, integrating AI-driven systems and sustainable materials to redefine urban living.",
//       category: "INNOVATION",
//       readTime: "5 min read",
//       featured: true,
//     },
//     {
//       id: 2,
//       headline: "SSN Expands Operations to Southeast Asia",
//       date: "October 28, 2025",
//       excerpt:
//         "New headquarters in Singapore will enhance the company’s presence in Asia and generate over 250 new jobs in engineering and operations.",
//       category: "BUSINESS",
//       readTime: "4 min read",
//     },
//     {
//       id: 3,
//       headline: "Quarterly Report: Strong Growth Amid Global Challenges",
//       date: "October 20, 2025",
//       excerpt:
//         "Despite global supply chain constraints, SSN reports 12% growth in Q3 revenues, demonstrating operational resilience and market leadership.",
//       category: "FINANCE",
//       readTime: "5 min read",
//     },
//     {
//       id: 4,
//       headline: "Collaborating with Universities to Drive Innovation",
//       date: "October 12, 2025",
//       excerpt:
//         "SSN partners with leading engineering universities to foster research programs focused on sustainable construction technologies.",
//       category: "EDUCATION",
//       readTime: "4 min read",
//     },
//   ];

//   const featuredArticle = newsArticles.find((article) => article.featured);
//   const regularArticles = newsArticles.filter((article) => !article.featured);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-12 bg-amber-50 border border-amber-200 shadow-lg">
//       {/* Newspaper Header */}
//       <div className="text-center mb-8 border-b-2 border-amber-800 pb-4">
//         <div className="font-playfair text-5xl font-bold text-gray-900 tracking-wide mb-2">
//           SSN CHRONICLE
//         </div>
//         <div className="font-playfair text-lg text-amber-800 italic">
//           DAILY EDITION •{" "}
//           {new Date().toLocaleDateString("en-US", {
//             weekday: "long",
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           })}
//         </div>
//         <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent mt-4"></div>
//       </div>

//       {/* Breaking News Banner */}
//       <div className="bg-red-600 text-white py-2 px-4 mb-8 transform -rotate-1 shadow-lg">
//         <div className="flex items-center justify-center space-x-4">
//           <span className="font-bold uppercase tracking-widest text-sm">
//             Breaking News
//           </span>
//           <span className="text-sm">
//             SSN launches AI-driven smart city pilot project in Kathmandu
//           </span>
//         </div>
//       </div>

//       {/* Featured Article */}
//       <div className="mb-12 border-b-2 border-double border-amber-600 pb-8">
//         <div className="inline-block bg-amber-600 text-white px-4 py-1 font-playfair font-bold text-sm tracking-widest mb-4 transform -skew-x-6">
//           EXCLUSIVE REPORT
//         </div>
//         <h1 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
//           {featuredArticle.headline}
//         </h1>
//         <div className="flex flex-wrap items-center justify-between mb-4 text-gray-600">
//           <div className="flex items-center space-x-4">
//             <span className="font-semibold">
//               By Corporate Communications Desk
//             </span>
//             <span className="text-sm italic">09:30 AM EST</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <span className="bg-gray-200 px-2 py-1 text-xs font-mono">
//               {featuredArticle.category}
//             </span>
//             <span className="text-sm">{featuredArticle.readTime}</span>
//           </div>
//         </div>
//         <p className="text-xl text-gray-700 leading-relaxed border-l-4 border-amber-500 pl-4 italic">
//           {featuredArticle.excerpt}
//         </p>
//       </div>

//       {/* News Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//         {regularArticles.map((article) => (
//           <article
//             key={article.id}
//             className="bg-white border border-amber-300 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
//           >
//             <div className="flex justify-between items-center mb-3">
//               <span className="font-playfair font-bold text-xs text-amber-600 tracking-widest uppercase">
//                 {article.category}
//               </span>
//               <span className="text-xs text-gray-500 font-mono">
//                 {article.readTime}
//               </span>
//             </div>

//             <h2 className="font-playfair text-2xl font-semibold text-gray-900 leading-tight mb-3">
//               {article.headline}
//             </h2>

//             <div className="flex items-center mb-4 text-sm text-gray-600">
//               <span className="italic">{article.date}</span>
//             </div>

//             <p className="text-gray-700 leading-relaxed mb-6">
//               {article.excerpt}
//             </p>

//             <button className="group flex items-center space-x-2 text-amber-700 hover:text-amber-800 font-playfair font-semibold transition-colors duration-200">
//               <span>Continue Reading</span>
//               <span className="transform group-hover:translate-x-1 transition-transform duration-200">
//                 →
//               </span>
//             </button>
//           </article>
//         ))}
//       </div>

//       {/* Newspaper Columns Section */}
//       <div className="bg-white border border-amber-300 p-8 mb-8 shadow-inner">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4 border-b border-amber-200 pb-2">
//               Industry Insights
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               SSN Corporation's latest initiatives in smart infrastructure and
//               sustainable design are setting new benchmarks for engineering
//               excellence. Analysts note that the company’s strategic focus on
//               renewable technology will drive growth over the next decade.
//             </p>
//           </div>
//           <div>
//             <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4 border-b border-amber-200 pb-2">
//               Leadership Commentary
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-justify">
//               "Innovation is at the core of every decision we make," said CEO
//               Alexandra Chen. "Our commitment to sustainability and smart
//               technology ensures that we are not just meeting industry
//               standards—we are shaping the future of engineering."
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Newspaper Footer */}
//       <div className="border-t-2 border-amber-800 pt-4">
//         <div className="text-center text-gray-600 text-sm italic">
//           <div className="font-playfair mb-2">
//             © 2025 SSN Chronicle. All rights reserved.
//           </div>
//           <div className="flex justify-center space-x-4 text-xs">
//             <span>Volume 3, Issue 44</span>
//             <span>•</span>
//             <span>Established 2023</span>
//             <span>•</span>
//             <span>Daily Edition</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;
