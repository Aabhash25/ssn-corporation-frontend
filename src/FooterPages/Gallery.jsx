import { useState, useEffect } from "react";
import {
  items as galleryItems,
  categories as galleryCategories,
} from "../data/galleryData";

const FontsStyle = () => (
  <style>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");
    .font-roboto   { font-family: "Roboto", sans-serif !important; }
    .font-playfair { font-family: "Playfair Display", serif !important; }
  `}</style>
);

const getYouTubeId = (url = "") => {
  const m = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
  );
  return m ? m[1] : null;
};

const useYouTubeSrc = (url) => {
  const id = getYouTubeId(url);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`,
    )
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setSrc(d.thumbnail_url))
      .catch(() => setSrc(`https://img.youtube.com/vi/${id}/hqdefault.jpg`));
  }, [id]);

  return src;
};

const GalleryItem = ({ item, index }) => {
  const isVideo = item.media_type === "video";
  const thumbSrc = useYouTubeSrc(isVideo ? item.youtube_url : null);
  const isEven = index % 2 === 0;

  const handleVideoClick = () => {
    if (isVideo) window.open(item.youtube_url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="py-10 sm:py-14 border-b border-gray-100 last:border-b-0"
      style={{ background: !isEven ? "#f9fafb" : "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* TEXT COLUMN */}
          <div className={isEven ? "lg:order-1" : "lg:order-2"}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-yellow-700">
                {item.category_name}
              </span>
              {isVideo && (
                <>
                  <span className="text-yellow-300">·</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-yellow-600">
                    Video
                  </span>
                </>
              )}
            </div>

            <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5">
              {item.title}
            </h2>

            <p className="font-roboto text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-5 sm:mb-6">
              {item.description}
            </p>

            {isVideo && (
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleVideoClick}
                  className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 hover:shadow-md"
                  style={{ background: "#facc15", color: "#1a1a00" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#eab308")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#facc15")
                  }
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="#1a1a00"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch on YouTube
                </button>

                {item.website_url && (
                  <a
                    href={item.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border-2 transition-all duration-200 hover:shadow-md"
                    style={{
                      borderColor: "#facc15",
                      color: "#713f12",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fef9c3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#713f12"
                      strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    www.qtakeoff.ai
                  </a>
                )}
              </div>
            )}
          </div>

          {/* VIDEO / IMAGE COLUMN */}
          <div className={isEven ? "lg:order-2" : "lg:order-1"}>
            {isVideo && (
              <div
                className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md hover:shadow-xl transition-shadow duration-300 w-full"
                style={{
                  aspectRatio: "16/9",
                  background: "#1a1a1a",
                  minHeight: "180px",
                }}
                onClick={handleVideoClick}
              >
                {thumbSrc && (
                  <img
                    src={thumbSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                {/* Ring glow */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ background: "#facc15", filter: "blur(16px)" }}
                />
                {/* Play button */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110"
                  style={{ background: "#facc15" }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="#1a1a00"
                    style={{ marginLeft: "3px" }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            )}

            {!isVideo && item.image && (
              <div
                className="overflow-hidden rounded-2xl shadow-md w-full"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default function Gallery() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setItems(galleryItems);
    setCategories(galleryCategories);
    setLoading(false);
  }, []);

  const filtered =
    filter === "all" ? items : items.filter((i) => i.category_slug === filter);

  return (
    <div className="font-roboto min-h-screen">
      <FontsStyle />

      {/* PAGE HEADER */}
      <section className="pt-20 sm:pt-32 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#a16207" }}
          >
            Portfolio
          </p>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3">
                Our Gallery
              </h1>
              <p className="font-roboto text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                A curated look at our engineering projects, construction
                milestones, and the technology we are building to shape the
                future of construction.
              </p>
            </div>
            <span
              className="text-sm font-semibold px-4 py-1.5 rounded-full border"
              style={{
                background: "#fef08a",
                color: "#713f12",
                borderColor: "#fde047",
              }}
            >
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="border-b border-gray-200 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto">
          {[
            { slug: "all", name: "All Works", count: items.length },
            ...categories.map((c) => ({
              slug: c.slug,
              name: c.name,
              count: c.item_count,
            })),
          ].map((tab) => {
            const active = filter === tab.slug;
            return (
              <button
                key={tab.slug}
                onClick={() => setFilter(tab.slug)}
                className="whitespace-nowrap px-4 py-4 text-sm font-semibold border-b-2 transition-colors duration-150"
                style={{
                  borderBottomColor: active ? "#eab308" : "transparent",
                  color: active ? "#713f12" : "#6b7280",
                }}
              >
                {tab.name}
                <span
                  className="ml-2 text-xs px-2 py-0.5 rounded-full"
                  style={{
                    background: active ? "#fde047" : "#f3f4f6",
                    color: active ? "#713f12" : "#6b7280",
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-4 sm:px-6 lg:px-8">
        {loading && (
          <div className="flex items-center gap-3 py-20 max-w-7xl mx-auto">
            <div
              className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
              style={{ borderColor: "#eab308", borderTopColor: "transparent" }}
            />
            <p className="text-gray-500">Loading...</p>
          </div>
        )}

        {!loading && filtered.length === 0 && (
          <p className="py-20 text-center text-gray-400 text-lg max-w-7xl mx-auto">
            No items found in this category.
          </p>
        )}

        {!loading &&
          filtered.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
      </section>
    </div>
  );
}
