"use client";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DoorAnimation = ({ isOpen, targetPath = "/career" }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        navigate(targetPath);
      }, 800); // Must match CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [isOpen, navigate, targetPath]);

  if (!isOpen) return null;

  return (
    <div className="door-container fixed inset-0 z-50 overflow-hidden">
      {/* Full background to hide current page */}
      <div className="door-backdrop absolute inset-0 bg-black"></div>

      {/* Doors */}
      <div className="door-overlay flex w-full h-full">
        <div className="door left-door"></div>
        <div className="door right-door"></div>
      </div>
    </div>
  );
};

export default DoorAnimation;
