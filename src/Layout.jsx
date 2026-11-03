import {
  Outlet,
  useLocation,
  useMatches,
  useNavigation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Seo from "./components/Seo";

export default function Layout() {
  const matches = useMatches();
  const { pathname } = useLocation();
  const navigation = useNavigation();
  const isNavigating = navigation.state !== "idle";

  const seo = [...matches].reverse().find((m) => m.handle?.seo)?.handle.seo;

  return (
    <>
      {seo && <Seo {...seo} path={pathname} />}

      {/* Top progress bar: appears the moment a link is clicked */}
      <div
        className={`fixed top-0 left-0 z-[9999] h-1 w-full bg-yellow-500 origin-left transition-all duration-300 ${
          isNavigating
            ? "opacity-100 scale-x-100 animate-pulse"
            : "opacity-0 scale-x-0"
        }`}
      />

      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
