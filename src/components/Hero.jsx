// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { FaVolumeUp, FaVolumeMute, FaPlay, FaPause } from "react-icons/fa";

// const Hero = () => {
//   const videoRef = useRef(null);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [showOverlay, setShowOverlay] = useState(false);
//   const [videoLoaded, setVideoLoaded] = useState(false);

//   const heading = [
//     { text: "BUILDING", color: "text-white" },
//     { text: "FUTURE", color: "text-red-600" },
//     { text: "WITH", color: "text-white" },
//     { text: "PRECISION", color: "text-yellow-500" },
//   ];

//   const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.2 } },
//   };

//   const textVariant = {
//     hidden: { opacity: 0, y: 20, scale: 0.98 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const headingWords = heading.map((word, idx) => (
//     <motion.span
//       key={idx}
//       variants={textVariant}
//       className={`inline-block mr-4 relative font-playfair font-extrabold uppercase`}
//     >
//       <span className={`z-10 relative ${word.color}`}>{word.text}</span>
//       <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-md opacity-30 blur-sm"></span>
//     </motion.span>
//   ));

//   useEffect(() => {
//     const videoElement = videoRef.current;
//     if (!videoElement) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             videoElement.play().catch(() => {});
//             setIsPlaying(true);
//           } else {
//             videoElement.pause();
//             setIsPlaying(false);
//           }
//         });
//       },
//       { threshold: 0.3 }
//     );

//     observer.observe(videoElement);
//     return () => observer.unobserve(videoElement);
//   }, [videoLoaded]);

//   useEffect(() => {
//     const video = document.createElement("video");
//     video.src = "/heroVideo-web.mp4";
//     video.preload = "auto";
//     video.onloadeddata = () => setVideoLoaded(true);
//     video.load();
//   }, []);

//   const toggleMute = () => {
//     const videoElement = videoRef.current;
//     if (videoElement) {
//       videoElement.muted = !videoElement.muted;
//       setIsMuted(videoElement.muted);
//     }
//   };

//   const togglePlay = () => {
//     const videoElement = videoRef.current;
//     if (!videoElement) return;

//     if (videoElement.paused) {
//       videoElement.play();
//       setIsPlaying(true);
//     } else {
//       videoElement.pause();
//       setIsPlaying(false);
//     }

//     setShowOverlay(true);
//     setTimeout(() => setShowOverlay(false), 800);
//   };

//   return (
//     <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-black">
//       {/* Background Video */}
//       {videoLoaded && (
//         <div
//           className="absolute inset-0 w-full h-full cursor-pointer"
//           onClick={togglePlay}
//         >
//           <motion.video
//             ref={videoRef}
//             src="/heroVideo-web.mp4"
//             poster="/heroPoster.jpg"
//             loop
//             muted={isMuted}
//             playsInline
//             autoPlay
//             preload="auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
//         </div>
//       )}

//       {/* Play/Pause Overlay */}
//       <AnimatePresence>
//         {showOverlay && (
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//           >
//             {isPlaying ? (
//               <FaPause size={60} className="text-yellow-500/90 animate-pulse" />
//             ) : (
//               <FaPlay size={60} className="text-yellow-500/90 animate-pulse" />
//             )}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Mute/Unmute Button */}
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           toggleMute();
//         }}
//         aria-label={isMuted ? "Unmute video" : "Mute video"}
//         className="absolute bottom-6 right-6 z-20 bg-gray-900/80 hover:bg-gray-900 p-3 rounded-full text-yellow-500 transition shadow-lg hover:shadow-xl"
//       >
//         {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
//       </button>

//       {/* Hero Content */}
//       <motion.div
//         className="relative z-10 text-center max-w-4xl px-6"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-snug tracking-wide">
//           {headingWords}
//         </motion.h1>

//         <motion.p
//           className="text-white text-lg sm:text-xl md:text-2xl font-roboto mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//         >
//           We deliver excellence in innovative planning,design,engineering and
//           construction for your dream project.
//         </motion.p>

//         <motion.div
//           className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
//           variants={textVariant}
//         >
//           <Link
//             to="/portfolio"
//             className="px-8 py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-3xl font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl font-roboto"
//           >
//             Explore Our Work
//           </Link>
//           <Link
//             to="/contact"
//             className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 rounded-3xl font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl font-roboto"
//           >
//             Get In Touch
//           </Link>
//         </motion.div>
//       </motion.div>

//       <style jsx>{`
//         .heading-shadow {
//           text-shadow: 0 3px 12px rgba(0, 0, 0, 0.7);
//           letter-spacing: 2px;
//           line-height: 1.1;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

//New Idea
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heading = [
    { text: "BUILDING", color: "text-white" },
    { text: "FUTURE", color: "text-red-600" },
    { text: "WITH", color: "text-white" },
    { text: "PRECISION", color: "text-yellow-500" },
  ];

  const images = [
    "/30.webp",
    "/21.webp",
    "/MorissvileGarden3.webp",
    "/14.webp",
  ]; // replace with your images

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const headingWords = heading.map((word, idx) => (
    <motion.span
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.2 }}
      className={`inline-block mr-4 relative font-playfair font-extrabold uppercase`}
    >
      <span className={`z-10 relative ${word.color}`}>{word.text}</span>
      <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-md opacity-30 blur-sm"></span>
    </motion.span>
  ));

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-black">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        {images.map((src, index) =>
          index === currentIndex ? (
            <motion.div
              key={src}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <img
                src={src}
                alt={`Hero Slide ${index + 1}`}
                className="w-full h-full object-cover brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-snug tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {headingWords}
        </motion.h1>

        <motion.p
          className="text-white text-lg sm:text-xl md:text-2xl font-roboto mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          We deliver excellence in innovative planning, design, engineering, and
          construction for your dream project.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Link
            to="/portfolio"
            className="px-8 py-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600 rounded-3xl font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl font-roboto"
          >
            Explore Our Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 rounded-3xl font-bold shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl font-roboto"
          >
            Get In Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
