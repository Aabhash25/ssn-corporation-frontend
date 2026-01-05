import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // ✅ smooth scroll
    });
  }, [pathname]);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      // Small delay to ensure page has loaded
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 100);
    };

    // Listen for popstate events (back/forward button clicks)
    window.addEventListener("popstate", handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return null;
}
