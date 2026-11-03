import { Outlet, useLocation, useMatches } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Seo from "./components/Seo";

export default function Layout() {
  const matches = useMatches();
  const { pathname } = useLocation();

  // Use the SEO info (title/description) of the deepest matched route.
  const seo = [...matches].reverse().find((m) => m.handle?.seo)?.handle.seo;

  return (
    <>
      {seo && <Seo {...seo} path={pathname} />}
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
