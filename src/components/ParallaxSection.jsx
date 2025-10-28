import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const ParallaxSection = ({ bgUrl, children, minHeight = "screen" }) => {
  const ref = useRef(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [offsetTop - 300, offsetTop + 300], [-30, 30]);
  const scale = useTransform(scrollY, [offsetTop - 300, offsetTop + 300], [1, 1.05]);
  const blur = useTransform(scrollY, [offsetTop - 300, offsetTop + 300], ["0px", "4px"]);

  useEffect(() => {
    if (ref.current) setOffsetTop(ref.current.offsetTop);
  }, [ref]);

  return (
    <section ref={ref} className={`relative flex items-center min-h-${minHeight}`}>
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${bgUrl})`,
          y,
          scale,
          filter: blur,
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

export default ParallaxSection;
