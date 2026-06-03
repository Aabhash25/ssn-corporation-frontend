"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// Constants moved outside component
const TOP_LINKS = [
  { name: "News", to: "/news" },
  { name: "Gallery", to: "/gallery" },
  { name: "Business with Us", to: "/business" },
  { name: "Request a Proposal", to: "/request-proposal" },
  { name: "Open Resources", to: "/open-resources" },
];

const SOCIAL_LINKS = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/people/SSN-Corporation/61566782237516/",
  },
  { icon: FaYoutube, href: "https://www.youtube.com/@SSNBuildersMarketing" },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/ssn-corporation",
  },
  { icon: FaInstagram, href: "https://www.instagram.com/ssncorporation/" },
];

const ENGINEERING_SERVICES = [
  {
    name: "Building and Building Services System Design",
    to: "/building-service-design",
  },
  { name: "Land Planning, Development, and Permitting", to: "/land-planning" },
  { name: "Structural Engineering", to: "/structural-engineering" },
  { name: "Water Resources Engineering", to: "/water-resources-engineering" },
  { name: "Geotechnical Engineering", to: "/geotechnical-engineering" },
  {
    name: "Architectural and Engineering Services for Tenant Fit-Outs",
    to: "/architecture-engineering",
  },
  { name: "Construction Administration", to: "/construction-administration" },
];

const SPECIALTY_SERVICES = [
  { name: "Pavement Engineering Services", slug: "pavement-engineering" },
  {
    name: "Trenchless Design (HDD, Pipe Jacking, Microtunneling)",
    slug: "trenchless-design",
  },
  { name: "Traffic Engineering Services", slug: "traffic-engineering" },
  {
    name: "Mechanical, Electrical, and Plumbing (MEP) Design",
    slug: "mep-design",
  },
  {
    name: "Special Inspections Services (IBC Chapter 17)",
    slug: "special-inspections",
  },
  {
    name: "Instrumentation and Monitoring Services",
    slug: "instrumentation-monitoring",
  },
  { name: "Hydrology and Drainage Studies", slug: "hydrology-drainage" },
];

const MATERIAL_TESTING_SERVICES = [
  {
    name: "Soil and Aggregate Physical & Strength Testing",
    slug: "soil-aggregate-testing",
  },
  { name: "Fresh and Hardened Concrete Testing", slug: "concrete-testing" },
  { name: "Rock Testing", slug: "rock-testing" },
  { name: "Bitumen and Asphalt Mix Testing", slug: "bitumen-asphalt-testing" },
  {
    name: "Water Drainage & Permeability Testing",
    slug: "water-drainage-testing",
  },
  { name: "Environmental Sampling & Testing", slug: "environmental-testing" },
];

const CONSTRUCTION_SERVICES = [
  { name: "Pre Construction", to: "/pre-construction" },
  { name: "General Construction", to: "/general-construction" },
  { name: "Design plus Build", to: "/design-plus-build" },
  { name: "Construction Management", to: "/construction-management" },
];

const RND_PRODUCTS = [
  {
    title: "QTakeoff",
    to: "/qtakeoff-ai",
    description:
      "Our AI technology delivers measurable improvements with industry-leading accuracy and speed. Users experience higher efficiency, lower costs, and continuous 24/7 automated analysis.",
  },
  {
    title: "Real Estate Site Map",
    to: "/real-estate-site-analysis",
    description:
      "Analyze any location with AI-driven insights on nearby amenities and infrastructure. Generate interactive results and professional reports in seconds.",
  },
];

// Reusable Components
const ServiceLink = ({ to, children, onClick, isMobile = false }) => (
  <Link
    to={to}
    className={`hover:text-yellow-600 cursor-pointer transition-colors block ${
      isMobile ? "bg-transparent px-0" : "bg-gray-100 px-2"
    } py-1 rounded-md`}
    onClick={onClick}
  >
    {children}
  </Link>
);

const SectionHeader = ({ children, isXlScreen }) => (
  <h4
    className="text-yellow-600 font-oswald font-bold border-b-2 border-yellow-500 flex items-center"
    style={{
      fontSize: isXlScreen ? "1rem" : "0.6875rem",
      marginBottom: isXlScreen ? "0.75rem" : "0.375rem",
      paddingBottom: isXlScreen ? "0.5rem" : "0.25rem",
      gap: isXlScreen ? "0.5rem" : "0.25rem",
    }}
  >
    {children}
  </h4>
);

const ServiceList = ({ items, isXlScreen, renderItem }) => (
  <ul
    className="font-oswald"
    style={{
      fontSize: isXlScreen ? "0.875rem" : "0.5625rem",
      lineHeight: "1.4",
    }}
  >
    {items.map((item, idx) => (
      <li
        key={idx}
        style={{
          marginBottom: isXlScreen ? "0.375rem" : "0.25rem",
        }}
      >
        {renderItem(item)}
      </li>
    ))}
  </ul>
);

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isXlScreen, setIsXlScreen] = useState(window.innerWidth >= 1440);
  const [isRnDOpen, setIsRnDOpen] = useState(false);

  const rndDropdownTimeout = useRef(null);
  const servicesDropdownTimeout = useRef(null);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  // Event handlers
  const handleDropdownToggle = (setter, timeoutRef) => ({
    onMouseEnter: () => {
      clearTimeout(timeoutRef.current);
      setter(true);
    },
    onMouseLeave: () => {
      timeoutRef.current = setTimeout(() => setter(false), 100);
    },
  });

  const closeAllMenus = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsRnDOpen(false);
  };

  // Effects
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setIsXlScreen(window.innerWidth >= 1440);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    closeAllMenus();
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  // Styles
  const navBg =
    isLandingPage && !scrolled
      ? "bg-transparent text-white"
      : "bg-white/95 backdrop-blur-md shadow-lg text-gray-900";

  const linkStyle =
    isLandingPage && !scrolled
      ? "text-white hover:text-yellow-500"
      : "text-gray-900 hover:text-yellow-600";

  const getDropdownTop = () => {
    if (!isDesktop) return "96px";
    if (isLandingPage && !scrolled) {
      return isXlScreen ? "152px" : "136px";
    }
    return isXlScreen ? "96px" : "80px";
  };

  // Render Services Dropdown Content
  const renderServicesDropdown = () => (
    <div
      className="fixed left-0 right-0 mx-auto shadow-2xl border-t-4 border-yellow-500 bg-gray-50 text-gray-800 z-50 rounded-lg overflow-hidden"
      style={{
        top: getDropdownTop(),
        maxWidth: isXlScreen ? "72rem" : "64rem",
        padding: isXlScreen ? "0.5rem 0.75rem" : "0.375rem 0.5rem",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0"
        style={{ padding: isXlScreen ? "0.375rem 0" : "0.25rem 0" }}
      >
        {/* Company Motto */}
        <div
          className="bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center"
          style={{ padding: isXlScreen ? "0.75rem" : "0.5rem" }}
        >
          <div
            className="border-l-4 border-yellow-500"
            style={{ paddingLeft: isXlScreen ? "1rem" : "0.75rem" }}
          >
            <p
              className="text-yellow-500 font-semibold tracking-wider"
              style={{
                fontSize: isXlScreen ? "0.75rem" : "0.5625rem",
                marginBottom: isXlScreen ? "0.5rem" : "0.25rem",
              }}
            >
              OUR COMMITMENT
            </p>
            <h3
              className="text-white font-bold font-oswald leading-tight"
              style={{
                fontSize: isXlScreen ? "1.125rem" : "0.6875rem",
                marginBottom: isXlScreen ? "0.75rem" : "0.375rem",
              }}
            >
              Building Excellence, Engineering Innovation
            </h3>
            <p
              className="text-gray-300 font-oswald leading-tight"
              style={{ fontSize: isXlScreen ? "0.875rem" : "0.5625rem" }}
            >
              From first sketches to final construction, SSN Corporation offers
              integrated engineering, specialty technical services, and complete
              design-build delivery for projects of any scale.
            </p>
          </div>
        </div>

        {/* Engineering Services */}
        <div
          className="border-r border-gray-200"
          style={{ padding: isXlScreen ? "0.5rem" : "0.375rem" }}
        >
          <SectionHeader isXlScreen={isXlScreen}>
            Engineering Services
          </SectionHeader>
          <ServiceList
            items={ENGINEERING_SERVICES}
            isXlScreen={isXlScreen}
            renderItem={(service) => (
              <ServiceLink to={service.to}>{service.name}</ServiceLink>
            )}
          />
        </div>

        {/* Specialty Engineering */}
        <div
          className="border-r border-gray-200"
          style={{ padding: isXlScreen ? "0.5rem" : "0.375rem" }}
        >
          <SectionHeader isXlScreen={isXlScreen}>
            Specialty Engineering Services
          </SectionHeader>
          <ServiceList
            items={SPECIALTY_SERVICES}
            isXlScreen={isXlScreen}
            renderItem={(service) => (
              <ServiceLink to={`/specialty-services#${service.slug}`}>
                {service.name}
              </ServiceLink>
            )}
          />
        </div>

        {/* Material Testing */}
        <div
          className="border-r border-gray-200"
          style={{ padding: isXlScreen ? "0.5rem" : "0.375rem" }}
        >
          <SectionHeader isXlScreen={isXlScreen}>
            Material Testing Services
          </SectionHeader>
          <ServiceList
            items={MATERIAL_TESTING_SERVICES}
            isXlScreen={isXlScreen}
            renderItem={(service) => (
              <ServiceLink to={`/material-testing#${service.slug}`}>
                {service.name}
              </ServiceLink>
            )}
          />
        </div>
        {/* Construction Services */}
        <div style={{ padding: isXlScreen ? "0.5rem" : "0.375rem" }}>
          <SectionHeader isXlScreen={isXlScreen}>
            Construction Services
          </SectionHeader>

          {/* Flashy General Contractor callout */}
          <div
            className="mb-3 px-3 py-2 rounded-lg bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-gray-900 font-bold font-oswald tracking-wide shadow-md animate-pulse-slow"
            style={{
              fontSize: isXlScreen ? "0.95rem" : "0.65rem",
              lineHeight: "1.3",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow: "0 4px 15px -3px rgba(234, 179, 8, 0.5)",
            }}
          >
            <span className="inline-block">★ GENERAL CONTRACTOR ★</span>
            <br />
            Unlimited License • Full-service • Design-Build Experts
          </div>

          <ServiceList
            items={CONSTRUCTION_SERVICES}
            isXlScreen={isXlScreen}
            renderItem={(service) => (
              <ServiceLink to={service.to} onClick={closeAllMenus}>
                {service.name}
              </ServiceLink>
            )}
          />
        </div>
      </div>
    </div>
  );

  // Render R&D Dropdown
  const renderRnDDropdown = () => (
    <div
      className="fixed left-0 right-0 mx-auto shadow-2xl border-t-4 border-yellow-500 bg-gray-50 text-gray-800 z-50 rounded-lg overflow-hidden"
      style={{
        top: getDropdownTop(),
        maxWidth: isXlScreen ? "60rem" : "52rem",
        padding: isXlScreen ? "0.5rem 0.75rem" : "0.375rem 0.5rem",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0"
        style={{ padding: isXlScreen ? "0.375rem 0" : "0.25rem 0" }}
      >
        {/* Motto */}
        <div
          className="bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col justify-center"
          style={{ padding: isXlScreen ? "0.75rem" : "0.5rem" }}
        >
          <div
            className="border-l-4 border-yellow-500"
            style={{ paddingLeft: isXlScreen ? "1rem" : "0.75rem" }}
          >
            <p
              className="text-yellow-500 font-semibold tracking-wider"
              style={{
                fontSize: isXlScreen ? "0.75rem" : "0.5625rem",
                marginBottom: isXlScreen ? "0.5rem" : "0.25rem",
              }}
            >
              INNOVATION
            </p>
            <h3
              className="text-white font-bold font-oswald leading-tight"
              style={{
                fontSize: isXlScreen ? "1.125rem" : "0.6875rem",
                marginBottom: isXlScreen ? "0.75rem" : "0.375rem",
              }}
            >
              Intelligence that Builds the Future
            </h3>
            <p
              className="text-gray-300 font-oswald leading-tight"
              style={{ fontSize: isXlScreen ? "0.875rem" : "0.5625rem" }}
            >
              We build AI technology our clients can trust. Our commitment is to
              deliver consistent accuracy and exceptional performance.
            </p>
          </div>
        </div>

        {/* Team */}
        <div
          className="border-r border-gray-200"
          style={{ padding: isXlScreen ? "0.5rem" : "0.375rem" }}
        >
          <SectionHeader isXlScreen={isXlScreen}>Our Team</SectionHeader>
          <p
            className="text-gray-800 font-oswald leading-tight"
            style={{ fontSize: isXlScreen ? "0.875rem" : "0.5625rem" }}
          >
            With over 20 years of combined experience, our leadership team
            brings expertise in civil engineering and AI. Supported by seven
            skilled engineers, we drive research and development. Together, we
            unite civil engineering and AI to deliver smarter, more efficient
            construction solutions.
          </p>
        </div>

        {/* Products */}
        <div style={{ padding: isXlScreen ? "0.5rem" : "0.375rem" }}>
          <SectionHeader isXlScreen={isXlScreen}>Our Products</SectionHeader>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isXlScreen ? "1rem" : "0.5rem",
            }}
          >
            {RND_PRODUCTS.map((product, idx) => (
              <div
                key={idx}
                style={
                  idx > 0
                    ? {
                        paddingTop: isXlScreen ? "0.75rem" : "0.375rem",
                        borderTop: "1px solid #e5e7eb",
                      }
                    : {}
                }
              >
                <Link
                  to={product.to}
                  className="font-bold text-gray-900 hover:text-yellow-600 font-oswald block transition-colors"
                  style={{
                    fontSize: isXlScreen ? "1rem" : "0.6875rem",
                    marginBottom: isXlScreen ? "0.5rem" : "0.25rem",
                  }}
                  onClick={() => setIsRnDOpen(false)}
                >
                  {product.title}
                </Link>
                <p
                  className="text-gray-700 font-oswald leading-tight"
                  style={{ fontSize: isXlScreen ? "0.875rem" : "0.5625rem" }}
                >
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Top Bar */}
      {isDesktop && (
        <div className="fixed top-0 left-0 w-full flex justify-between items-center h-12 xl:h-14 px-4 lg:px-6 xl:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm lg:text-base xl:text-lg font-sans z-50">
          {/* Contact */}
          <div className="flex space-x-3 lg:space-x-4 xl:space-x-6">
            <a
              href="mailto:contact@ssncorporation.com"
              className="flex items-center gap-1.5 lg:gap-2 hover:text-yellow-400 transition-colors"
            >
              <FaEnvelope className="text-xs lg:text-sm xl:text-base" />
              <span className="hidden lg:inline">
                contact@ssncorporation.com
              </span>
              <span className="lg:hidden">Email</span>
            </a>
            <span className="flex items-center gap-1.5 lg:gap-2">
              <FaPhoneAlt className="text-xs lg:text-sm xl:text-base" />
              <span className="text-xs lg:text-sm xl:text-base">
                (919) 703-0222
              </span>
            </span>
          </div>

          {/* Top Links — scrollable on mid-size screens, all visible on xl */}
          <div className="flex items-center overflow-x-auto scrollbar-none space-x-3 lg:space-x-4 xl:space-x-8 text-xs lg:text-sm xl:text-lg font-semibold flex-shrink min-w-0 px-2">
            {TOP_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`whitespace-nowrap hover:text-yellow-400 transition-colors ${
                  link.name === "Gallery"
                    ? "text-yellow-400 border border-yellow-500/50 px-2 lg:px-3 py-0.5 rounded-full hover:bg-yellow-500/10 hover:text-yellow-300"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-shrink-0 space-x-3 lg:space-x-4 xl:space-x-6 text-base lg:text-lg xl:text-xl">
            {SOCIAL_LINKS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition-colors"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`fixed w-full transition-all duration-500 ${navBg} z-40`}
        style={{ top: isDesktop ? (isXlScreen ? "56px" : "48px") : "0px" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-16 lg:h-20 xl:h-24 px-4 md:px-6 xl:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center font-playfair text-xl lg:text-2xl xl:text-4xl font-bold -ml-2 lg:-ml-4 xl:-ml-6 mt-2 md:mt-0"
            onClick={() => {
              closeAllMenus();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img
              src="/logo.webp"
              alt="SSN Logo"
              className="h-12 lg:h-14 xl:h-20 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 lg:space-x-5 xl:space-x-10 font-oswald text-sm lg:text-base xl:text-2xl">
            <Link className={`transition-colors ${linkStyle}`} to="/about">
              About Us
            </Link>
            <Link className={`transition-colors ${linkStyle}`} to="/portfolio">
              Portfolio
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              {...handleDropdownToggle(
                setIsServicesOpen,
                servicesDropdownTimeout,
              )}
            >
              <button
                className={`flex items-center gap-1 ${linkStyle} font-oswald`}
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isServicesOpen && renderServicesDropdown()}
            </div>

            {/* R&D Dropdown */}
            <div
              className="relative group"
              {...handleDropdownToggle(setIsRnDOpen, rndDropdownTimeout)}
            >
              <button
                className={`flex items-center gap-1 ${linkStyle} font-oswald`}
              >
                Research & Development
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isRnDOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isRnDOpen && renderRnDDropdown()}
            </div>

            <Link className={`transition-colors ${linkStyle}`} to="/career">
              Careers
            </Link>
            <Link
              className={`transition-colors ${linkStyle} font-oswald`}
              to="/contact"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none p-3 rounded-md transition-all duration-300 ${linkStyle}`}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-11/12 max-w-md bg-gray-900/95 backdrop-blur-md shadow-xl z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} rounded-l-3xl`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-yellow-400 p-2"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="h-full overflow-y-auto px-6 py-8 flex flex-col justify-start space-y-6">
          {/* Contact Info */}
          <div className="flex flex-col space-y-2 text-white">
            <a
              href="mailto:contact@ssncorporation.com"
              className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors"
            >
              <FaEnvelope /> contact@ssncorporation.com
            </a>
            <span className="flex items-center gap-2 text-white">
              <FaPhoneAlt /> (919) 703-0222
            </span>
          </div>

          {/* Main Navigation */}
          <div className="flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-lg md:text-xl text-white hover:text-yellow-400 font-semibold"
              onClick={closeAllMenus}
            >
              About Us
            </Link>
            <Link
              to="/portfolio"
              className="text-lg md:text-xl text-white hover:text-yellow-400 font-semibold"
              onClick={closeAllMenus}
            >
              Portfolio
            </Link>

            {/* Services Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-lg md:text-xl text-white hover:text-yellow-400 font-semibold gap-2"
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="flex flex-col mt-2 space-y-4 pl-4 border-l-2 border-yellow-500">
                  {/* Engineering Services */}
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-yellow-500 font-bold text-lg font-oswald">
                      Engineering Services
                    </h4>
                    <ul className="flex flex-col pl-4 space-y-1 text-white font-oswald text-base">
                      {ENGINEERING_SERVICES.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={service.to}
                            className="hover:text-yellow-400 block"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialty Engineering Services */}
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-yellow-500 font-bold text-lg font-oswald">
                      Specialty Engineering Services
                    </h4>
                    <ul className="flex flex-col pl-4 space-y-1 text-white font-oswald text-base">
                      {SPECIALTY_SERVICES.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/specialty-services#${service.slug}`}
                            className="hover:text-yellow-400 block"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Material Testing Services */}
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-yellow-500 font-bold text-lg font-oswald">
                      Material Testing Services
                    </h4>
                    <ul className="flex flex-col pl-4 space-y-1 text-white font-oswald text-base">
                      {MATERIAL_TESTING_SERVICES.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/material-testing#${service.slug}`}
                            className="hover:text-yellow-400 block"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Construction Services */}
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-yellow-500 font-bold text-lg font-oswald">
                      Construction Services
                    </h4>
                    <ul className="flex flex-col pl-4 space-y-1 text-white font-oswald text-base">
                      {CONSTRUCTION_SERVICES.map((service, idx) => (
                        <li key={idx}>
                          <Link
                            to={service.to}
                            className="hover:text-yellow-400 block"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Research & Development Dropdown */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsRnDOpen(!isRnDOpen)}
                className="flex items-center justify-between w-full py-2 text-lg md:text-xl text-white hover:text-yellow-400 font-semibold"
              >
                Research & Development
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isRnDOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isRnDOpen && (
                <div className="flex flex-col mt-2 space-y-3 pl-4 border-l-2 border-yellow-500">
                  {RND_PRODUCTS.map((product, idx) => (
                    <Link
                      key={idx}
                      to={product.to}
                      className="text-white hover:text-yellow-400 text-base"
                      onClick={closeAllMenus}
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/career"
              className="text-lg md:text-xl text-white hover:text-yellow-400 font-semibold"
              onClick={closeAllMenus}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="text-lg md:text-xl text-yellow-500 font-bold hover:text-yellow-400"
              onClick={closeAllMenus}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Links — includes Gallery */}
          <div className="flex flex-col space-y-2 border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400 font-semibold">Quick Links</p>
            {TOP_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`text-sm hover:text-yellow-400 transition-colors ${
                  link.name === "Gallery"
                    ? "text-yellow-400 font-semibold"
                    : "text-white"
                }`}
                onClick={closeAllMenus}
              >
                {link.name === "Gallery" ? "📷 " + link.name : link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-auto text-xl">
            {SOCIAL_LINKS.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar;
