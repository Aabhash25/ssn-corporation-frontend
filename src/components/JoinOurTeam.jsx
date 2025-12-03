"use client";
import React from "react";

// Inject Google Fonts
const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");
    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

export default function JoinOurTeam({
  imageSrc = "https://plus.unsplash.com/premium_photo-1661405543210-4a20cbcf5aed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwbWVtYmVyc3xlbnwwfHwwfHx8MA%3D%3D",
  imageAlt = "Team on a construction site",
}) {
  return (
    <>
      <FontsStyle />

      {/* MAIN SECTION */}
      <section className="w-full relative flex flex-col items-center pt-28 pb-16 bg-white overflow-hidden font-roboto">
        {/* ABSOLUTE HEADING */}
        <h2 className="absolute top-6 left-1/2 -translate-x-1/2 text-4xl sm:text-5xl font-playfair font-bold text-gray-900 z-20">
          Join Our Team
        </h2>

        {/* MAIN GRID */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 px-4 sm:px-8 md:px-14 lg:px-20 items-center">
          {/* LEFT — IMAGE */}
          <div className="w-full h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="./whoweare.webp"
              alt={imageAlt}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          </div>

          {/* RIGHT — TEXT */}
          <div className="space-y-10 relative">
            {/* Decorative Circles */}
            <div className="absolute -top-10 -right-6 w-36 h-36 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-20"></div>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-roboto relative z-10">
              We’re looking for passionate people who want to make a real impact
              in the construction industry. Here's why you should consider
              joining our growing team.
            </p>

            {/* ⭐ ONLY THE FOUR BOXES — CLEAN VERSION */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {/* Box 1 */}
              <article className="rounded-2xl p-6 bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-2 font-playfair text-gray-900">
                  Professional Growth
                </h3>
                <p className="text-sm text-gray-700 font-roboto">
                  Continuous training & development.
                </p>
              </article>

              {/* Box 2 */}
              <article className="rounded-2xl p-6 bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-2 font-playfair text-gray-900">
                  Collaboration
                </h3>
                <p className="text-sm text-gray-700 font-roboto">
                  Work with top industry professionals.
                </p>
              </article>

              {/* Box 3 */}
              <article className="rounded-2xl p-6 bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-2 font-playfair text-gray-900">
                  Career Advancement
                </h3>
                <p className="text-sm text-gray-700 font-roboto">
                  Clear and achievable growth paths.
                </p>
              </article>

              {/* Box 4 */}
              <article className="rounded-2xl p-6 bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                <h3 className="text-lg font-semibold mb-2 font-playfair text-gray-900">
                  Work-Life Balance
                </h3>
                <p className="text-sm text-gray-700 font-roboto">
                  Flexible hours & supportive environment.
                </p>
              </article>
            </div>

            <div className="pt-8">
              <a
                href="/careers" // change to your careers page
                className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-500 text-gray-900 font-medium rounded-xl shadow-lg hover:bg-yellow-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Join Our Team
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            {/* ←←← END OF NEW PART →→→ */}
          </div>
        </div>
      </section>
    </>
  );
}
