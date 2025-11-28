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

      <section className="w-full relative flex flex-col items-center pt-10 pb-16 bg-white overflow-hidden font-roboto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 px-4 sm:px-8 md:px-14 lg:px-20 items-center">
          {/* LEFT — IMAGE */}
          <div className="w-full h-72 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="./whoweare.webp"
              alt={imageAlt}
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          </div>

          {/* RIGHT — IMPROVED TEXT + DESIGN */}
          <div className="space-y-10 relative">
            {/* Decorative floating blur circles */}
            <div className="absolute -top-10 -right-6 w-36 h-36 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-20"></div>

            {/* Title */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-3">
                Join Our Team
              </h2>

              {/* Gradient Divider */}
            </div>

            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-roboto relative z-10">
              We’re looking for passionate people who want to make a real impact
              in the construction industry. Here's why you should consider
              joining our growing team.
            </p>

            {/* Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
              {/* Card 1 */}
              <article className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-3 font-playfair text-gray-800">
                  Why Choose Us?
                </h3>
                <p className="text-base text-gray-700 font-roboto leading-relaxed">
                  As a leader in the construction industry, we offer exciting
                  opportunities for people passionate about creating meaningful
                  change.
                  <br />
                  <br />
                  We focus on innovation, teamwork, and long-term career
                  success.
                </p>
              </article>

              {/* Card 2 */}
              <article className="rounded-2xl p-6 bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                <h3 className="text-xl font-semibold mb-4 font-playfair text-gray-800">
                  What We Offer
                </h3>
                <ul className="space-y-3 text-base text-gray-700 leading-relaxed">
                  <li>
                    • Professional Growth — Continuous learning & development.
                  </li>
                  <li>• Team Collaboration — Work with industry experts.</li>
                  <li>• Career Advancement — Clear leadership paths.</li>
                  <li>
                    • Work-Life Balance — Flexible, supportive environment.
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
