"use client";

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaHardHat,
  FaTools,
  FaFlask,
  FaInstagram,
  FaRulerCombined,
} from "react-icons/fa";

const topLinks = [
  { name: "News", to: "/news" },
  { name: "Business with Us", to: "/business" },
  { name: "Request a Proposal", to: "/request-proposal" },
  { name: "Open Resources", to: "/open-resources" },
];

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1280);
  const [isRnDOpen, setIsRnDOpen] = useState(false);
  const rndDropdownTimeout = useRef(null);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const handleRnDMouseEnter = () => {
    clearTimeout(rndDropdownTimeout.current);
    setIsRnDOpen(true);
  };

  const handleRnDMouseLeave = () => {
    rndDropdownTimeout.current = setTimeout(() => {
      setIsRnDOpen(false);
    }, 100);
  };

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update isDesktop on resize
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
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

  const servicesDropdownTimeout = useRef(null);

  const handleServicesMouseEnter = () => {
    clearTimeout(servicesDropdownTimeout.current);
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesDropdownTimeout.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 100);
  };

  const navBg =
    isLandingPage && !scrolled
      ? "bg-transparent text-white"
      : "bg-white/95 backdrop-blur-md shadow-lg text-gray-900";
  const linkStyle =
    isLandingPage && !scrolled
      ? "text-white hover:text-yellow-500"
      : "text-gray-900 hover:text-yellow-600";

  return (
    <>
      {/* Top Contact + Links Bar */}
      {isDesktop && (
        <div className="fixed top-0 left-0 w-full flex justify-between items-center h-14 px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-lg font-sans z-50">
          {/* Left: Contact Info */}
          <div className="flex space-x-6">
            <a
              href="mailto:contact@ssncorporation.com"
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <FaEnvelope /> contact@ssncorporation.com
            </a>

            <span className="flex items-center gap-2">
              <FaPhoneAlt /> (919) 703-0222
            </span>
          </div>

          {/* Center: Top Links */}
          <div className="flex space-x-8 text-lg font-semibold">
            {topLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex space-x-6 text-xl">
            <a
              href="https://www.facebook.com/people/SSN-Corporation/61566782237516/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@SSNBuildersMarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/company/ssn-corporation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/ssncorporation/" // replace with actual IG link
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`fixed w-full transition-all duration-500 ${navBg} z-40`}
        style={{
          top: isDesktop ? "56px" : "0px",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-20 md:h-20 xl:h-24 px-4 md:px-6 xl:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center font-playfair text-2xl xl:text-4xl font-bold -ml-2 xl:-ml-6 mt-2 md:mt-0"
            onClick={() => {
              setIsOpen(false);
              setIsServicesOpen(false);
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img
              src="/logo.webp"
              alt="SSN Logo"
              className="h-16 md:h-16 xl:h-20 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center space-x-6 xl:space-x-10 font-oswald text-lg xl:text-2xl">
            <Link className={`transition-colors ${linkStyle}`} to="/about">
              About Us
            </Link>
            <Link className={`transition-colors ${linkStyle}`} to="/portfolio">
              Portfolio
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <button
                className={`flex items-center gap-1 ${linkStyle} font-oswald`}
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
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
                <div
                  className="fixed left-0 right-0 mx-auto max-w-7xl shadow-2xl border-t-4 border-yellow-500 bg-white text-gray-800 z-50 rounded-lg overflow-hidden"
                  style={{
                    top: isDesktop
                      ? isLandingPage && !scrolled
                        ? "152px"
                        : "96px"
                      : "96px",
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 py-4 px-6">
                    {/* Left Column - Company Motto */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col justify-center">
                      <div className="border-l-4 border-yellow-500 pl-6">
                        <p className="text-yellow-500 text-xs font-semibold mb-2 tracking-wider">
                          OUR COMMITMENT
                        </p>
                        <h3 className="text-white text-lg font-bold font-oswald leading-tight mb-3">
                          Building Excellence, Engineering Innovation
                        </h3>
                        <p className="text-gray-300 text-base font-oswald leading-relaxed">
                          From first sketches to final construction, SSN
                          Corporation offers integrated engineering, specialty
                          technical services, and complete design-build delivery
                          for projects of any scale.
                        </p>
                      </div>
                    </div>

                    {/* Engineering Services */}
                    <div className="p-5 border-r border-gray-200">
                      <h4 className="text-yellow-600 font-oswald font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 flex items-center gap-2">
                        {/* <FaHardHat className="text-xl" /> */}
                        Engineering Services
                      </h4>

                      <ul className="space-y-2 text-base font-oswald">
                        <li>
                          <Link
                            to="/design-engineering"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Building and Building Services System Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/land-planning"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Land Planning, Development, and Permitting
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/structural-engineering"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Structural Engineering
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/water-resources-engineering"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Water Resources Engineering
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/geotechnical-engineering"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Geotechnical Engineering
                          </Link>
                        </li>
                        {/* <li>
                          <Link
                            to="/material-testing"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Construction Material Survey and Testing
                          </Link>
                        </li> */}

                        <li>
                          <Link
                            to="/construction-engineering"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Architectural and Engineering Services for Tenant
                            Fit-Outs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/construction-administration"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Construction Administration
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Specialty Engineering Services */}
                    <div className="p-5 border-r border-gray-200">
                      <h4 className="text-yellow-600 font-oswald font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 flex items-center gap-2">
                        {/* <FaTools className="text-xl" /> */}
                        Specialty Engineering Services
                      </h4>
                      <ul className="space-y-2 text-base font-oswald">
                        {[
                          "Mechanical, Electrical, and Plumbing Design",
                          "Pavement Design",
                          "Traffic Engineering Services",
                          // "Specialty Structural Design",
                          "Special Inspections Services (IBC Chapter 17)",
                          "Trenchless Design (HDD, Pipe Jacking, Micro Tunneling)",
                          "3D Modeling/Rendering",
                          // "BIM Modeling",
                          "Geotechnical Instrumentation Engineering",
                          "Stormwater Impact and Erosion Control Analysis",
                          "Hydrology and drainage study",
                        ].map((service, index) => (
                          <li key={index}>
                            <Link
                              to="/specialty-services" // You can change this to separate routes if needed
                              className="hover:text-yellow-600 cursor-pointer transition-colors block"
                            >
                              {service}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Construction Services */}
                    <div className="p-5">
                      <h4 className="text-yellow-600 font-oswald font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 flex items-center gap-2">
                        {/* <FaFlask className="text-xl" /> */}
                        Construction Services
                      </h4>
                      <ul className="space-y-2 text-base font-oswald">
                        <li>
                          <Link
                            to="/pre-construction"
                            className="hover:text-yellow-400 block"
                            onClick={() => setIsOpen(false)}
                          >
                            Pre Construction
                          </Link>
                        </li>
                        <li className="transition-colors">
                          <Link
                            to="/general-construction"
                            className="block hover:text-yellow-600 cursor-pointer"
                          >
                            General Construction
                          </Link>
                        </li>
                        <li className="transition-colors">
                          <Link
                            to="/design-plus-build"
                            className="block hover:text-yellow-600 cursor-pointer"
                          >
                            Design plus Build
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/construction-management"
                            className="hover:text-yellow-400 block"
                            onClick={() => setIsOpen(false)}
                          >
                            Construction Management
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Material Testing Services */}
                    <div className="p-5">
                      <h4 className="text-yellow-600 font-oswald font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500 flex items-center gap-2">
                        {/* <FaFlask className="text-xl" /> */}
                        Material Testing Services
                      </h4>
                      <ul className="space-y-2 text-base font-oswald">
                        <li>
                          <Link
                            to="/material-testing"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Soil and Aggregate Physical and Strength Tests
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/material-testing"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Fresh and Hardened Concrete Tests
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/material-testing"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Bitumen and Asphalt Mix Tests
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/material-testing"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Water Drainage and Permeability Tests
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/material-testing"
                            className="hover:text-yellow-600 cursor-pointer transition-colors block"
                          >
                            Environmental Sampling and Tests
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Research & Development Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleRnDMouseEnter}
              onMouseLeave={handleRnDMouseLeave}
            >
              <button
                className={`flex items-center gap-1 ${linkStyle} font-oswald`}
              >
                Research & Development
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isRnDOpen ? "rotate-180" : ""
                  }`}
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
                <div
                  className="fixed left-0 right-0 mx-auto max-w-7xl shadow-2xl border-t-4 border-yellow-500 bg-white text-gray-800 z-50 rounded-lg overflow-hidden"
                  style={{
                    top: isDesktop
                      ? isLandingPage && !scrolled
                        ? "152px"
                        : "96px"
                      : "96px",
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0 py-4 px-6">
                    {/* Left Column - Motto */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col justify-center">
                      <div className="border-l-4 border-yellow-500 pl-6">
                        <p className="text-yellow-500 text-xs font-semibold mb-2 tracking-wider">
                          INNOVATION
                        </p>
                        <h3 className="text-white text-lg font-bold font-oswald leading-tight mb-3">
                          Intelligence that Builds the Future
                        </h3>
                        <p className="text-gray-300 text-base font-oswald leading-relaxed">
                          We build AI technology our clients can trust. Our
                          commitment is to deliver consistent accuracy and
                          exceptional performance.
                        </p>
                      </div>
                    </div>

                    {/* Our Team */}
                    <div className="p-5 border-r border-gray-200">
                      <h4 className="text-yellow-600 font-oswald font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500">
                        Our Team
                      </h4>
                      <p className="text-gray-800 text-base font-oswald leading-relaxed">
                        With over 20 years of combined experience, our
                        leadership team brings expertise in civil engineering
                        and AI. Supported by seven skilled engineers, we drive
                        research and development. Together, we unite civil
                        engineering and AI to deliver smarter, more efficient
                        construction solutions.
                      </p>
                    </div>

                    {/* Our Products */}
                    <div className="p-5">
                      <h4 className="text-yellow-600 font-oswald font-bold text-xl mb-3 pb-2 border-b-2 border-yellow-500">
                        Our Products
                      </h4>

                      <div className="space-y-4">
                        {/* QTakeoff */}
                        <div>
                          <Link
                            to="/qtakeoff-ai"
                            className="text-lg font-bold text-gray-900 hover:text-yellow-600 font-oswald block mb-2 transition-colors"
                            onClick={() => setIsRnDOpen(false)}
                          >
                            QTakeoff
                          </Link>
                          <p className="text-sm text-gray-700 font-oswald leading-snug">
                            Our AI technology delivers measurable improvements
                            with industry-leading accuracy and speed. Users
                            experience higher efficiency, lower costs, and
                            continuous 24/7 automated analysis.
                          </p>
                        </div>

                        {/* Real Estate Site Map */}
                        <div className="pt-3 border-t border-gray-200">
                          <Link
                            to="/real-estate-site-analysis"
                            className="text-lg font-bold text-gray-900 hover:text-yellow-600 font-oswald block mb-2 transition-colors"
                            onClick={() => setIsRnDOpen(false)}
                          >
                            Real Estate Site Map
                          </Link>
                          <p className="text-sm text-gray-700 font-oswald leading-snug">
                            Analyze any location with AI-driven insights on
                            nearby amenities and infrastructure. Generate
                            interactive results and professional reports in
                            seconds.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
          <div className="xl:hidden flex items-center">
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-11/12 max-w-md bg-gray-900/95 backdrop-blur-md shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } rounded-l-3xl`}
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
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/portfolio"
              className="text-lg md:text-xl text-white hover:text-yellow-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>

            {/* Hard-coded Mobile Services */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-lg md:text-xl text-white hover:text-yellow-400 font-semibold gap-2"
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
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
                    <h4 className="text-yellow-500 font-bold text-lg font-oswald flex items-center gap-2">
                      Engineering Services
                    </h4>
                    <ul className="flex flex-col pl-4 space-y-1 text-white font-oswald text-base">
                      <li>
                        <Link
                          to="/design-engineering"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Building and Building Services System
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/land-planning"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Land Planning, Development, and Permitting
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/structural-engineering"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Structural Engineering
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/water-resources-engineering"
                          className="hover:text-yellow-600 cursor-pointer transition-colors block"
                        >
                          Water Resources Engineering
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/geotechnical-engineering"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Geotechnical Engineering
                        </Link>
                      </li>
                      {/* <li>
                        <Link
                          to="/material-testing"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Construction Material Survey and Testing
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          to="/construction-engineering"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Architectural and Engineering Services for Tenant
                          Fit-Outs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/construction-administration"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Construction Administration
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Specialty Engineering Services */}
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-yellow-500 font-bold text-lg font-oswald flex items-center gap-2">
                      Specialty Engineering Services
                    </h4>
                    <ul className="flex flex-col pl-4 space-y-1 text-white font-oswald text-base">
                      {[
                        "Mechanical, Electrical, and Plumbing Design",
                        "Pavement Design",
                        "Traffic Engineering Services",
                        // "Specialty Structural Design",
                        "Special Inspections Services (IBC Chapter 17)",
                        "Trenchless Design (HDD, Pipe Jacking, Micro Tunneling)",
                        "3D Modeling/Rendering",
                        // "BIM Modeling",
                        "Geotechnical Instrumentation Engineering",
                        "Stormwater Impact and Erosion Control Analysis",
                        "Hydrology and drainage study",
                      ].map((service, index) => (
                        <li key={index}>
                          <Link
                            to="/specialty-services"
                            className="hover:text-yellow-400 block"
                            onClick={() => setIsOpen(false)}
                          >
                            {service}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Construction Services */}
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-yellow-500 font-bold text-lg font-oswald flex items-center gap-2">
                      Construction Services
                    </h4>
                    <ul className="flex flex-col pl-4 space-y-1 text-white font-oswald text-base">
                      <li>
                        <Link
                          to="/pre-construction"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Pre Construction
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/general-construction"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          General Construction
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/design-plus-build"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Design plus Build
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/construction-management"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Construction Management
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Material Testing Services */}
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-yellow-500 font-bold text-lg font-oswald flex items-center gap-2">
                      Material Testing Services
                    </h4>
                    <ul className="flex flex-col pl-4 space-y-1 text-white font-oswald text-base">
                      <li>
                        <Link
                          to="/material-testing"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Soil and Aggregate Physical and Strength Tests
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/material-testing"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Fresh and Hardened Concrete Tests
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/material-testing"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Bitumen and Asphalt Mix Tests
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/material-testing"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Water Drainage and Permeability Tests
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/material-testing"
                          className="hover:text-yellow-400 block"
                          onClick={() => setIsOpen(false)}
                        >
                          Environmental Sampling and Tests
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Research & Development (Mobile Dropdown) */}
            <div className="flex flex-col">
              <button
                onClick={() => setIsRnDOpen(!isRnDOpen)}
                className="flex items-center justify-between w-full py-2 text-lg md:text-xl text-white hover:text-yellow-400 font-semibold"
              >
                Research & Development
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isRnDOpen ? "rotate-180" : ""
                  }`}
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
                  <Link
                    to="/qtakeoff-ai"
                    className="text-white hover:text-yellow-400 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    QTakeoff
                  </Link>

                  <Link
                    to="/real-estate-site-analysis"
                    className="text-white hover:text-yellow-400 text-base"
                    onClick={() => setIsOpen(false)}
                  >
                    Real Estate Site Map
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/career"
              className="text-lg md:text-xl text-white hover:text-yellow-400 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="text-lg md:text-xl text-yellow-500 font-bold hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2 border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400 font-semibold">Quick Links</p>
            {topLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm text-white hover:text-yellow-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-auto text-xl">
            <a
              href="https://www.facebook.com/people/SSN-Corporation/61566782237516/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.youtube.com/@SSNBuildersMarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.linkedin.com/company/ssn-corporation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/ssncorporation/" // replace with real Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar;
