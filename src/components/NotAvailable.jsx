"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotAvailable = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-semibold text-gray-700"
        >
          Page Not Available
        </motion.h2>

        <p className="mt-3 text-gray-600 text-lg max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all"
          >
            Back to Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotAvailable;
