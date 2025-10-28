import React, { useEffect, useState } from "react";
import {
  FaHardHat,
  FaTools,
  FaTruck,
  FaExclamationTriangle,
} from "react-icons/fa";

const ConstructionLayout = ({
  children,
  variant = "industrial",
  className = "",
  fullScreen = true, // NEW: control min-height
  paddingY = "py-24", // NEW: optional padding
}) => {
  const [dust, setDust] = useState([]);

  const variants = {
    industrial: "bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900",
    light: "bg-gradient-to-br from-amber-50 via-orange-100 to-yellow-50",
  };

  useEffect(() => {
    const newDust = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
      duration: Math.random() * 8 + 6,
    }));
    setDust(newDust);
  }, []);

  return (
    <section
      className={`relative ${fullScreen ? "min-h-screen" : ""} ${paddingY} ${
        variants[variant]
      } overflow-hidden ${className}`}
    >
      {/* Warning Banner */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-yellow-400 text-black px-5 py-2 rounded-lg shadow-lg animate-bounce z-20">
        <FaExclamationTriangle className="text-red-600" />
        <span className="font-bold text-sm">UNDER CONSTRUCTION</span>
      </div>

      {/* Bottom Construction Tape */}
      <div
        className="absolute bottom-0 left-0 w-full h-12 opacity-80"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #fbbf24 0px, #fbbf24 20px, #000000 20px, #000000 40px)",
        }}
      ></div>

      {/* Floating Dust */}
      {dust.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-amber-200/70 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `dustFloat ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
            transform: `scale(${particle.size})`,
          }}
        ></div>
      ))}

      {/* Key Construction Icons */}
      <div className="absolute top-24 left-12 text-amber-400 text-5xl opacity-40 animate-iconFloat">
        <FaHardHat />
      </div>
      <div className="absolute top-1/2 right-16 text-gray-400 text-5xl opacity-40 animate-iconFloat-slow">
        <FaTools />
      </div>

      {/* Moving Truck */}
      <div className="absolute bottom-16 w-16 text-orange-500 text-4xl animate-truck">
        <FaTruck className="drop-shadow-lg" />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        @keyframes dustFloat {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px) scale(1.2);
            opacity: 0.7;
          }
        }

        @keyframes truck-move {
          0% {
            transform: translateX(-120%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 120%));
            opacity: 0;
          }
        }
        .animate-truck {
          animation: truck-move 25s linear infinite;
        }

        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-iconFloat {
          animation: iconFloat 6s ease-in-out infinite;
        }
        .animate-iconFloat-slow {
          animation: iconFloat 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ConstructionLayout;
