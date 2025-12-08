import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PreLandingPage({ onFinish }) {
  const [show, setShow] = useState(true);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const canvasRef = useRef(null);
  const constructionElementsRef = useRef(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Load logo and trigger finish
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

  // DESKTOP ONLY: Canvas animation
  useEffect(() => {
    if (isMobile) return; // ← BLOCK MOBILE

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

    for (let i = 0; i < 18; i++) {
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

      // grid
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

      // particles
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

      // icons
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
  }, [isMobile]);

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
          background: isMobile
            ? "#0f172a"
            : "linear-gradient(135deg, #0a1128 0%, #1a2a4c 50%, #0f172a 100%)",
          zIndex: 9999,
          overflow: "hidden",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {!isMobile && (
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
        )}

        {!isMobile && (
          <div
            ref={constructionElementsRef}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
        )}

        {/* CENTER BOX */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: isMobile ? "2rem" : "3.5rem 5rem",
            borderRadius: "18px",
            background: isMobile ? "transparent" : "rgba(15, 23, 42, 0.65)",
            backdropFilter: isMobile ? "none" : "blur(12px)",
            maxWidth: "90%",
          }}
        >
          {/* FIXED LOGO BOX (no stretching) */}
          <div
            style={{
              width: 260,
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.img
              src="/logo.webp"
              alt="SSN CORPORATION"
              fetchPriority="high"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain", // ← FIX: keeps original ratio
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: logoLoaded ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            />
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: isMobile ? "1.4rem" : "2.2rem",
              fontWeight: 700,
              color: "rgba(255,255,255,0.92)",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Building the Future through Innovation
          </p>

          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5 }}
            style={{
              height: "6px",
              background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
              borderRadius: "10px",
              width: "100%",
              marginTop: "1.4rem",
            }}
          />

          <span
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "0.9rem",
              marginTop: "0.4rem",
            }}
          >
            Preparing your experience...
          </span>
        </motion.div>

        <span
          style={{
            position: "absolute",
            bottom: "15px",
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.8rem",
            zIndex: 4,
          }}
        >
          © {new Date().getFullYear()} SSN CORPORATION
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
