"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFlask,
  FaLayerGroup,
  FaWater,
  FaCubes,
  FaCompressArrowsAlt,
  FaCheckCircle,
  FaLeaf,
  FaMicroscope,
  FaClipboardCheck,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FontsStyle = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;600;700&display=swap");
    .font-roboto {
      font-family: "Roboto", sans-serif;
    }
    .font-playfair {
      font-family: "Playfair Display", serif;
    }
  `}</style>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const testingServices = [
  {
    icon: <FaLayerGroup />,
    title: "Soil & Geotechnical Testing",
    desc: "Comprehensive soil classification, Atterberg limits, compaction (Proctor), CBR, consolidation, and shear strength tests to assess foundation suitability.",
    tests: [
      "Grain Size Analysis",
      "Standard & Modified Proctor",
      "CBR Testing",
      "Triaxial Shear Strength",
    ],
  },
  {
    icon: <FaCubes />,
    title: "Concrete Testing",
    desc: "Evaluation of fresh and hardened concrete including slump, air content, compressive strength, and mix design verification per ASTM & ACI standards.",
    tests: [
      "Compressive Strength (Cylinders)",
      "Slump & Air Content",
      "Flexural Strength",
      "Chloride Permeability",
    ],
  },
  {
    icon: <FaCompressArrowsAlt />,
    title: "Asphalt & Pavement Testing",
    desc: "Marshall stability, extraction, gradation, and density testing for asphalt mixes to ensure road performance and longevity.",
    tests: [
      "Marshall Stability & Flow",
      "Asphalt Content Extraction",
      "Bulk Specific Gravity",
      "Pavement Core Analysis",
    ],
  },
  {
    icon: <FaFlask />,
    title: "Aggregate & Rock Testing",
    desc: "Mechanical and physical property testing of coarse/fine aggregates and rock samples for use in structural and pavement construction.",
    tests: [
      "Los Angeles Abrasion",
      "Soundness Testing",
      "Specific Gravity & Absorption",
      "Unconfined Compressive Strength",
    ],
  },
  {
    icon: <FaWater />,
    title: "Water & Environmental Testing",
    desc: "Chemical and physical analysis of water samples for construction dewatering, groundwater monitoring, and environmental compliance.",
    tests: [
      "pH & Conductivity",
      "Total Dissolved Solids",
      "Heavy Metals Screening",
      "Sulfate & Chloride Content",
    ],
  },
  {
    icon: <FaMicroscope />,
    title: "Structural Material Testing",
    desc: "Mechanical testing of steel, masonry, and other structural materials to verify compliance with project specifications and safety codes.",
    tests: [
      "Tensile & Yield Strength (Steel)",
      "Masonry Block Strength",
      "Weld Inspection (NDT)",
      "Rebar Pull-Out Tests",
    ],
  },
];

const standards = [
  {
    label: "ASTM International",
    sub: "American Society for Testing and Materials",
  },
  { label: "AASHTO", sub: "American Association of State Highway Officials" },
  { label: "ACI 318 / ACI 301", sub: "American Concrete Institute" },
  { label: "OSHA & EPA", sub: "Safety & Environmental Compliance" },
  {
    label: "NC/GA/VA DOT",
    sub: "State Department of Transportation Standards",
  },
];

const whyUs = [
  "Accredited laboratory with certified technicians (ACI, NICET)",
  "Rapid turnaround — 24–72 hour reporting for most tests",
  "Field sampling + in-lab testing under one team",
  "Detailed digital reports with chain-of-custody documentation",
  "Serving NC, GA, and VA construction and infrastructure projects",
];

const serviceTypes = [
  "Soil & Geotechnical Testing",
  "Concrete Testing",
  "Asphalt & Pavement Testing",
  "Aggregate & Rock Testing",
  "Water & Environmental Testing",
  "Structural Material Testing",
  "Other / Not Sure",
];

const Laboratory = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    projectLocation: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen font-roboto">
      <FontsStyle />

      {/* Hero */}
      <div className="relative w-full h-[55vh] md:h-[55vh] bg-[url('/geotech.webp')] bg-cover bg-center flex items-center justify-center mt-[120px]">
        {" "}
        <div className="absolute inset-0 bg-black/65"></div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center px-4"
        >
          <div className="flex justify-center mb-4">
            <span className="bg-yellow-500/20 border border-yellow-400/40 text-yellow-300 text-sm font-roboto px-4 py-1.5 rounded-full tracking-wider uppercase">
              Accredited Testing Facility
            </span>
          </div>
          <h1 className="text-white text-5xl md:text-6xl font-playfair font-bold mb-4">
            Material Testing Laboratory
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-roboto max-w-2xl mx-auto">
            Precision-driven testing services supporting construction quality,
            safety, and compliance across the Southeast.
          </p>
        </motion.div>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* Intro */}
        <motion.section
          className="w-full max-w-[1400px] px-6 md:px-12 py-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto font-roboto"
          >
            At{" "}
            <span className="font-playfair font-semibold text-yellow-500">
              SSN Corporation
            </span>
            , our laboratory division delivers reliable, ASTM-compliant material
            testing services for civil, structural, and geotechnical projects.
            From soil compaction to concrete cylinder breaks, we provide the
            data your project depends on — fast, accurate, and thoroughly
            documented.
          </motion.p>
        </motion.section>

        {/* Testing Services */}
        <motion.section
          className="w-full bg-gradient-to-r from-yellow-50 via-white to-amber-50 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-4">
            Our Testing Services
          </h2>
          <p className="text-gray-500 text-center font-roboto mb-12 max-w-xl mx-auto px-4">
            Full-spectrum material testing from field sampling through certified
            lab analysis and reporting.
          </p>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testingServices.map((svc, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-3xl bg-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col space-y-4"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 text-2xl">
                  {svc.icon}
                </div>
                <h3 className="text-xl font-playfair font-semibold">
                  {svc.title}
                </h3>
                <p className="text-gray-600 font-roboto text-sm leading-relaxed">
                  {svc.desc}
                </p>
                <ul className="space-y-1 pt-2 border-t border-gray-100">
                  {svc.tests.map((t, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-500 font-roboto"
                    >
                      <FaCheckCircle className="text-green-500 text-xs shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Standards */}
        <motion.section
          className="w-full py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Standards We Follow
          </h2>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-wrap justify-center gap-4">
            {standards.map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-md text-center hover:border-yellow-300 hover:shadow-lg transition-all"
              >
                <p className="font-playfair font-semibold text-gray-800">
                  {s.label}
                </p>
                <p className="text-gray-500 text-xs font-roboto mt-1">
                  {s.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us */}
        <motion.section
          className="w-full bg-gradient-to-r from-yellow-50 to-amber-50 py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-center mb-12">
            Why Choose SSN Lab Services?
          </h2>
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((reason, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-start space-x-4 bg-white p-5 rounded-2xl shadow-md hover:scale-105 transition"
              >
                <FaClipboardCheck className="text-yellow-500 w-6 h-6 mt-0.5 shrink-0" />
                <p className="text-gray-700 font-roboto">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Request Form + Contact */}
        <motion.section
          className="w-full py-20 px-6 md:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Left: Info */}
            <div className="flex flex-col space-y-8">
              <div>
                <span className="text-yellow-500 font-roboto text-sm uppercase tracking-widest font-semibold">
                  Request a Service
                </span>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-4">
                  Let's Test Your Materials
                </h2>
                <p className="text-gray-600 font-roboto leading-relaxed">
                  Submit your testing request and our laboratory team will get
                  back to you within one business day to confirm scope,
                  scheduling, and pricing.
                </p>
              </div>

              <div className="flex flex-col space-y-5">
                {[
                  {
                    icon: <FaPhoneAlt className="text-yellow-500" />,
                    label: "Phone",
                    value: "+1 (919) 703-0222",
                  },
                  {
                    icon: <FaEnvelope className="text-yellow-500" />,
                    label: "Email",
                    value: "contact@ssncorporation.com",
                  },
                  {
                    icon: <FaMapMarkerAlt className="text-yellow-500" />,
                    label: "Headquarters",
                    value: "Raleigh, North Carolina",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-roboto uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-gray-700 font-roboto font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <FaLeaf className="text-green-500" />
                  <span className="font-playfair font-semibold text-gray-800">
                    Sustainability Commitment
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-roboto leading-relaxed">
                  Our lab minimizes waste through responsible sample disposal
                  and uses energy-efficient equipment aligned with SSN's green
                  construction initiatives.
                </p>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                  <FaCheckCircle className="text-green-500 text-5xl" />
                  <h3 className="text-2xl font-playfair font-bold text-gray-800">
                    Request Received!
                  </h3>
                  <p className="text-gray-500 font-roboto">
                    Thank you,{" "}
                    <span className="font-semibold text-gray-700">
                      {formData.name}
                    </span>
                    . Our lab team will reach out within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        service: "",
                        projectLocation: "",
                        message: "",
                      });
                    }}
                    className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2.5 rounded-full font-roboto font-medium transition"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col space-y-4"
                >
                  <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-2">
                    Testing Request Form
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-roboto uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-roboto uppercase tracking-wide">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Firm"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-roboto uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label className="text-xs text-gray-400 font-roboto uppercase tracking-wide">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (xxx) xxx-xxxx"
                        className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-xs text-gray-400 font-roboto uppercase tracking-wide">
                      Testing Service Needed *
                    </label>
                    <select
                      required
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-roboto text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 bg-white"
                    >
                      <option value="">Select a service...</option>
                      {serviceTypes.map((s, i) => (
                        <option key={i} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-xs text-gray-400 font-roboto uppercase tracking-wide">
                      Project Location
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      placeholder="City, State"
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-yellow-300"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="text-xs text-gray-400 font-roboto uppercase tracking-wide">
                      Project Details / Notes
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your testing needs, sample quantities, timeline, or any special requirements..."
                      className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-3 rounded-full font-roboto font-semibold text-base hover:opacity-90 transition mt-2"
                  >
                    Submit Testing Request
                  </button>
                  <p className="text-center text-xs text-gray-400 font-roboto">
                    We respond within 1 business day · Serving NC, GA & VA
                  </p>
                </form>
              )}
            </motion.div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Laboratory;
