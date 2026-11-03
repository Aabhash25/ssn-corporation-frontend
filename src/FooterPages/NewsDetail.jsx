import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { buildNewsSeo } from "../utils/newsSeo";

// Google Fonts
const FontsStyle = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");

        .font-roboto {
          font-family: "Roboto", sans-serif !important;
        }

        .font-playfair {
          font-family: "Playfair Display", serif !important;
        }

        .news-link {
          color: #2563eb;
          font-weight: 600;
          text-decoration: underline;
        }

        .news-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }
      `,
    }}
  />
);

// Utility function to convert keywords to links
const linkKeywords = (text) => {
  if (!text || typeof text !== "string") return "";

  const links = {
    "SSN Corporation": "https://ssncorporation.com/engineers",
    "SSN Engineers": "https://ssncorporation.com/engineers",
    "SSN Builders": "https://ssncorporation.com/contractors",
    "City of Raleigh":
      "https://raleighnc.gov/fire/services/view-raleigh-fire-statistics",
    FEMA: "https://www.usfa.fema.gov/statistics/states/north-carolina.html",
    NCOSFM:
      "https://www.ncosfm.gov/news/press-releases/2025/01/21/new-report-highlights-nc-fire-fatalities-2024",
    "SSN AI": "https://qtakeoff.ai",
    "takeoff@ssncorporation.com": "mailto:takeoff@ssncorporation.com",
    "contact@ssncorporation.com": "mailto:contact@ssncorporation.com",
  };

  let linkedText = text;

  const sortedKeys = Object.keys(links).sort((a, b) => b.length - a.length);

  sortedKeys.forEach((key) => {
    const regex = new RegExp(
      `\\b${key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
      "gi",
    );

    linkedText = linkedText.replace(
      regex,
      (match) =>
        `<a href="${links[key]}" class="news-link" target="_blank" rel="noopener noreferrer">${match}</a>`,
    );
  });

  return linkedText;
};

const NewsDetail = () => {
  // Article and related articles come from the SSG loader.
  const loaderData = useLoaderData();

  const news = loaderData?.news || null;
  const moreNews = loaderData?.moreNews || [];

  // News not found
  if (!news) {
    return (
      <>
        <FontsStyle />

        <Head>
          <title>News not found | SSN Corporation</title>
          <meta name="robots" content="noindex" />
        </Head>

        <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4 text-center px-4">
          <h2 className="text-3xl font-playfair font-bold text-gray-800">
            😞 News Not Found
          </h2>

          <p className="text-gray-500 font-roboto">
            The news article you are looking for does not exist.
          </p>

          <Link
            to="/news"
            className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
          >
            Back to News
          </Link>
        </div>
      </>
    );
  }

  const seo = buildNewsSeo(news);

  return (
    <>
      <FontsStyle />

      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="SSN Corporation" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta
          name="twitter:card"
          content={seo.image ? "summary_large_image" : "summary"}
        />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <script type="application/ld+json">{JSON.stringify(seo.jsonLd)}</script>
      </Head>

      {/* MAIN SECTION */}
      <section className="py-10 sm:py-16 bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28">
          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-3">
            {news.title}
          </h1>

          {news.published_date && (
            <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10">
              {new Date(news.published_date).toLocaleDateString()}
            </p>
          )}

          {/* LAYOUT */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
            {/* TEXT COLUMN */}
            <div className="lg:col-span-2 leading-relaxed">
              <div
                className="text-gray-700 font-roboto text-base sm:text-lg mb-6"
                dangerouslySetInnerHTML={{
                  __html: linkKeywords(news.content),
                }}
              />
            </div>

            {/* IMAGE COLUMN */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreNews.map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="group bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* IMAGE */}
                {item.image1 && (
                  <div className="w-full aspect-[16/9] overflow-hidden">
                    <img
                      src={item.image1}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-playfair text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {item.title}
                  </h3>

                  {item.published_date && (
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {new Date(item.published_date).toLocaleDateString()}
                    </p>
                  )}
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
