const logos = [
  { src: "/bbb.webp", alt: "BBB Accredited", info: "BBB Accredited Business" },
  {
    src: "/ncdot.webp",
    alt: "NCDOT Pre-Qualified",
    info: "NCDOT Pre-Qualified",
    showTextBelow: true, // text below logo
  },
  { src: "/sam.webp", alt: "SAM Registered", info: "SAM Registered Entity" },
  {
    src: "/minority.webp",
    alt: "Minority Business",
    info: "Certified Minority Business",
  },
  {
    src: "/NMSDC.webp",
    alt: "National Small Business",
    info: "Member of National Small Business Council",
  },
];

const AffiliationRibbon = () => {
  return (
    <div className="w-full bg-white py-6 relative">
      <style>{`
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 20s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>

      <div className="flex animate-scroll overflow-visible">
        {[...logos, ...logos, ...logos].map((logo, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer flex-shrink-0 mx-8 flex flex-col items-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            {logo.showTextBelow && (
              <p className="text-sm font-bold text-blue-700 mt-2 tracking-wide">
                Prequalified
              </p>
            )}
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-800 text-white text-xs px-3 py-1 rounded whitespace-nowrap z-50 shadow-lg">
              {logo.info}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffiliationRibbon;
