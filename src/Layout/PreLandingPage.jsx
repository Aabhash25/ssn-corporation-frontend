import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PreLandingPage({ onFinish }) {
  const [show, setShow] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const canvasRef = useRef(null);
  const constructionElementsRef = useRef(null);

  // Load logo and trigger finish (NO VIDEO PRELOAD)
  useEffect(() => {
    const img = new Image();
    img.onload = () => setLogoLoaded(true);
    img.src = "/logo.webp";

    const endTimer = setTimeout(() => {
      setShow(false);
      if (onFinish) onFinish();
    }, 3500);

    return () => clearTimeout(endTimer);
  }, [onFinish]);

  // Canvas particles & construction icons
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const constructionIcons = [];
    const iconTypes = ["🛠️", "🔧", "⚒️", "🏗️", "📐", "🔨", "⛏️", "🪚"];
    const particleCount = 18;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        radius: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    for (let i = 0; i < 6; i++) {
      constructionIcons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        type: iconTypes[Math.floor(Math.random() * iconTypes.length)],
        size: Math.random() * 22 + 18,
        opacity: Math.random() * 0.5 + 0.3,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.03,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Subtle grid
      ctx.strokeStyle = "rgba(100, 180, 255, 0.05)";
      ctx.lineWidth = 0.5;
      const gridSize = 70;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 180, 255, ${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      // Construction icons
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      constructionIcons.forEach((icon) => {
        ctx.save();
        ctx.translate(icon.x, icon.y);
        ctx.rotate(icon.rotation);
        ctx.font = `600 ${icon.size}px "Segoe UI Emoji", sans-serif`;
        ctx.globalAlpha = icon.opacity;
        ctx.fillText(icon.type, 0, 0);
        ctx.restore();

        icon.x += icon.vx;
        icon.y += icon.vy;
        icon.rotation += icon.rotationSpeed;

        if (icon.x < -50) icon.x = canvas.width + 50;
        if (icon.x > canvas.width + 50) icon.x = -50;
        if (icon.y < -50) icon.y = canvas.height + 50;
        if (icon.y > canvas.height + 50) icon.y = -50;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // Floating emojis
  useEffect(() => {
    const container = constructionElementsRef.current;
    if (!container) return;

    const floatingElements = [
      { emoji: "🏗️", top: "12%", right: "12%", delay: 0 },
      { emoji: "🔧", bottom: "18%", left: "12%", delay: 0.8 },
      { emoji: "📐", top: "40%", right: "10%", delay: 1.6 },
      { emoji: "⚙️", bottom: "25%", right: "20%", delay: 2.4 },
    ];

    floatingElements.forEach((el) => {
      const div = document.createElement("div");
      div.innerHTML = el.emoji;
      div.style.cssText = `
        position: absolute;
        top: ${el.top || "auto"};
        bottom: ${el.bottom || "auto"};
        left: ${el.left || "auto"};
        right: ${el.right || "auto"};
        font-size: 28px;
        opacity: 0.7;
        z-index: 2;
        pointer-events: none;
        animation: float 4s infinite ease-in-out ${el.delay}s;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      `;
      container.appendChild(div);
    });

    return () => {
      container.innerHTML = "";
    };
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0a1128 0%, #1a2a4c 50%, #0f172a 100%)",
          zIndex: 9999,
          overflow: "hidden",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />

        <div
          ref={constructionElementsRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* Center box */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          style={{
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3.5rem 5rem",
            borderRadius: "18px",
            background: "rgba(15, 23, 42, 0.65)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            maxWidth: "90%",
          }}
        >
          <motion.img
            src="/logo.webp"
            alt="SSA CORPORATION"
            style={{ width: "320px", height: "auto" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: logoLoaded ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.2rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.92)",
              textAlign: "center",
              lineHeight: 1.4,
              margin: "1.8rem 0 1.2rem 0",
              textShadow: "0 2px 6px rgba(0,0,0,0.35)",
            }}
          >
            Building the Future through Innovation
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            style={{
              height: "6px",
              background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
              borderRadius: "10px",
              boxShadow: "0 0 12px rgba(79,172,254,0.6)",
              width: "100%",
              marginBottom: "0.6rem",
            }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            style={{
              fontFamily: "'Roboto', sans-serif",
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.9rem",
              marginTop: "0.3rem",
              fontWeight: 400,
            }}
          >
            Preparing your experience...
          </motion.span>
        </motion.div>

        {/* Footer */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.5 }}
          style={{
            position: "absolute",
            bottom: "18px",
            fontFamily: "'Roboto', sans-serif",
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.8rem",
            letterSpacing: "0.3px",
          }}
        >
          © {new Date().getFullYear()} SSA CORPORATION. All rights reserved.
        </motion.span>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-14px) rotate(6deg);
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
}
