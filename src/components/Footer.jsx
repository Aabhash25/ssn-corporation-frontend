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
    <footer className="bg-gray-900 text-gray-200 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-14">
        {/* Company Info */}
        {/* Company Info */}
        <div>
          <img
            src="/logo.webp"
            alt="SSN Corporation Logo"
            className="h-20 w-auto object-contain mb-6"
          />

          <h2 className="text-2xl font-playfair font-bold mb-4">
            Corporate Office
          </h2>

          <div className="space-y-3 text-gray-400 text-[15px]">
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
                  href="https://www.google.com/maps?q=5540+Centerview+Dr+Raleigh+NC+27606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 text-sm hover:underline inline-block mt-1"
                >
                  View on Google Maps
                </a>

                {/* Office Hours */}
                <p className="mt-2 text-gray-300 text-sm">
                  Open Hours: M – F, 8 AM – 5 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social Media Icons Centered & Styled */}
          <div className="mt-8">
            <p className="text-gray-300 font-semibold mb-3 uppercase tracking-wide text-sm">
              Follow Us
            </p>
            <div className="flex gap-5">
              <a
                href="https://www.facebook.com/people/SSN-Corporation/61566782237516/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FaFacebookF className="text-white text-lg" />
              </a>

              <a
                href="https://www.linkedin.com/company/ssn-corporation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </a>

              <a
                href="https://www.youtube.com/@SSNBuildersMarketing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FaYoutube className="text-white text-lg" />
              </a>

              <a
                href="https://www.instagram.com/ssncorporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition duration-300"
              >
                <FaInstagram className="text-white text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Design Expertise */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-5">
            Design Expertise
          </h3>
          <ul className="space-y-3 text-gray-400 text-[15px] leading-relaxed">
            <li>Architectural Design</li>
            <li>Structural Design</li>
            <li>Site Civil Design</li>
            <li>Subsurface Investigation & Geotechnical Testing</li>
            <li>Geotechnical Evaluation & Design</li>
            <li>MEP Design</li>
            <li>Construction Support & Material Testing</li>
            <li>Instrumentation & Monitoring</li>
          </ul>
        </div>

        {/* Design Capabilities */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-5">
            Design Capabilities
          </h3>
          <ul className="space-y-3 text-gray-400 text-[15px] leading-relaxed">
            <li>Land Development & Planning</li>
            <li>Residential Building</li>
            <li>Commercial Building</li>
            <li>Infrastructure Planning & Design</li>
            <li>Commercial Space Uplift & Permitting</li>
            <li>Pavement Design</li>
            <li>Trenchless Pipe Design</li>
          </ul>
        </div>

        {/* Construction Capabilities */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-5">
            Construction Capabilities
          </h3>
          <ul className="space-y-3 text-gray-400 text-[15px] leading-relaxed">
            <li>Residential Building Construction</li>
            <li>Commercial Building Construction</li>
            <li>Commercial Space Upfits</li>
            <li>Site Development - Construction</li>
            <li>Construction Management</li>
            <li>Pre Construction Services</li>
          </ul>
        </div>
      </div>

      {/* Explore Section */}
      <div className="max-w-7xl mx-auto mt-14 border-t border-gray-700 pt-8">
        <h3 className="text-xl font-playfair font-bold mb-6">Explore</h3>
        <ul className="flex flex-wrap gap-8 text-gray-400 text-[15px]">
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
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()}, SSN Corporation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
