"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-8 md:pb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14">
        {/* Company Info */}
        {/* Company Info */}
        <div>
          <img
            src="/logo.webp"
            alt="SSN Corporation Logo"
            className="h-16 sm:h-20 w-auto object-contain mb-4 sm:mb-6"
          />

          <h2 className="text-lg sm:text-xl md:text-2xl font-playfair font-bold mb-3 sm:mb-4">
            Corporate Office
          </h2>

          <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-[15px]">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-400" />
              <span>(919) 703-0222</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" />
              <span>contact@ssncorporation.com</span>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-400 mt-1" />
              <div>
                <address className="not-italic leading-tight">
                  <p>5540 Centerview Dr, Ste #304</p>
                  <p>Raleigh, NC 27606</p>
                </address>
                <a
                  href="https://www.google.com/maps/place/SSN+Engineers+PLLC/@35.7631477,-78.7319232,17z/data=!4m6!3m5!1s0x2c87c20ddc801e11:0x376efaf8d3e32d33!8m2!3d35.7629976!4d-78.7321878!16s%2Fg%2F11yq030k1b?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 text-sm hover:underline inline-block mt-1"
                >
                  View on Google Maps
                </a>

                {/* Office Hours */}
                <p className="mt-2 text-gray-300 text-sm">
                  Open Hours : Monday– Friday
                  <br /> 8:00 AM – 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Icons Centered & Styled */}
          <div className="mt-6 sm:mt-8">
            <p className="text-gray-300 font-semibold mb-3 uppercase tracking-wide text-xs sm:text-sm">
              Follow Us
            </p>
            <div className="flex gap-3 sm:gap-5">
              <a
                href="https://www.facebook.com/people/SSN-Corporation/61566782237516/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FaFacebookF className="text-white text-base sm:text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/company/ssn-corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FaLinkedinIn className="text-white text-base sm:text-lg" />
              </a>

              <a
                href="https://www.youtube.com/@SSNBuildersMarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FaYoutube className="text-white text-base sm:text-lg" />
              </a>

              <a
                href="https://www.instagram.com/ssncorporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 sm:p-3 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FaInstagram className="text-white text-base sm:text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-playfair font-bold mb-4 sm:mb-5">
            Design Expertise
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-[15px] leading-relaxed">
            {[
              "Architectural Design",
              "Structural Design",
              "Site Civil Design",
              "Geotechnical Evaluation & Design",
              "MEP Design",
              "Water Resources Engineering",
              "Pavement Engineering",
            ].map((item, index) => {
              const slug = item
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
                <li key={index}>
                  <Link
                    to={`/engineers#${slug}`}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-playfair font-bold mb-4 sm:mb-5">
            Design Capabilities
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-[15px] leading-relaxed">
            {[
              "Land Planning and Development",
              "Residential, Commercial, and Institutional Building Design",
              "Facility Planning and Design",
              "Specialty Engineering Services",
              "SubSurface Investigation and Geotechnical Engineering",
              "Instrumentation and Monitoring",
              "Construction Administration and Construction Engineering",
              "Construction Support and Material Testing",
            ].map((item, index) => {
              const slug = item
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
                <li key={index}>
                  <Link
                    to={`/engineers#${slug}`}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-playfair font-bold mb-4 sm:mb-5">
            Construction Capabilities
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-[15px] leading-relaxed">
            {[
              "Pre-Construction Services",
              "Construction Management",
              "Residential Construction",
              "Commercial Construction",
              "Commercial Space Upfit",
              "Site Development & Construction",
              "Utility Construction",
            ].map((item, index) => {
              const slug = item
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
                <li key={index}>
                  <Link
                    to={`/contractors#${slug}`}
                    className="hover:text-white cursor-pointer transition"
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Explore Section */}
      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 border-t border-gray-700 pt-6 sm:pt-8">
        <h3 className="text-lg sm:text-xl font-playfair font-bold mb-4 sm:mb-6">
          Explore
        </h3>
        <ul className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-gray-400 text-sm sm:text-[15px]">
          <li>
            <Link to="/open-resources" className="hover:text-white">
              Open Resources
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-white">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-white">
              News
            </Link>
          </li>
          <li>
            <Link to="/business" className="hover:text-white">
              Business with Us
            </Link>
          </li>
          <li>
            <Link to="/request-proposal" className="hover:text-white">
              Request a Proposal
            </Link>
          </li>
        </ul>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()}, SSN Corporation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
