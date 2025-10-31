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
    <footer className="bg-gray-900 text-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info with Logo and BBB */}
        <div>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/logo.png"
              alt="SSN Corporation Logo"
              className="h-20 w-auto object-contain"
            />
            <a
              href="https://www.bbb.org/us/nc/your-company-bbb-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/bbb.png"
                alt="BBB Accredited Business"
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>

          <h2 className="text-2xl font-playfair font-bold mb-2">
            SSN Corporation
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Delivering innovative engineering and construction solutions across
            the nation with integrity and excellence.
          </p>

          <div className="flex items-center gap-3 text-gray-400 mb-2">
            <FaPhoneAlt className="text-orange-400" />{" "}
            <span>(919) 579-1490</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 mb-2">
            <FaEnvelope className="text-orange-400" />{" "}
            <span>contact@ssncorporation.com</span>
          </div>

          {/* Location Section */}
          <div className="flex items-start gap-3 text-gray-400 mt-2">
            <FaMapMarkerAlt className="text-orange-400 mt-1" />
            <div>
              <address className="not-italic">
                <p>5540 Centerview Dr, Ste #304</p>
                <p>Raleigh, NC 27606 NC</p>
              </address>
              <a
                href="https://www.google.com/maps?q=5540+Centerview+Dr+Raleigh+NC+27606"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 text-sm hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.facebook.com/people/SSN-Corporation/61566782237516/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/company/ssn-corporation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@SSNBuildersMarketing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaYoutube />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Design Expertise */}
        <div>
          <h3 className="text-xl font-playfair font-bold mb-4">
            Design Expertise
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
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
          <h3 className="text-xl font-playfair font-bold mb-4">
            Design Capabilities
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
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
          <h3 className="text-xl font-playfair font-bold mb-4">
            Construction Capabilities
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
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
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6">
        <h3 className="text-xl font-playfair font-bold mb-4">Explore</h3>
        <ul className="flex flex-wrap gap-6 text-gray-400 text-sm">
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

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()}, SSN Corporation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
