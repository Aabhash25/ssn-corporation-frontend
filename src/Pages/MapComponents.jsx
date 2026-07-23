import React, { useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix leaflet default markers
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.webp";
import markerIcon from "leaflet/dist/images/marker-icon.webp";
import markerShadow from "leaflet/dist/images/marker-shadow.webp";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// ============================================
// MAP CONTROLLER
// ============================================

export const MapController = React.memo(({ zoomProject }) => {
  const map = useMap();
  useEffect(() => {
    if (zoomProject) {
      map.flyTo([zoomProject.lat, zoomProject.lng], 15, {
        duration: 1.5,
        easeLinearity: 0.25,
      });
    }
  }, [map, zoomProject]);
  return null;
});

// ============================================
// HOVER MARKER
// ============================================

export const HoverMarker = React.memo(
  ({ project, onMarkerClick, onMarkerHover, onMarkerOut }) => {
    const markerRef = useRef(null);

    const handleMouseEnter = useCallback(() => {
      if (markerRef.current && onMarkerHover) {
        const marker = markerRef.current;
        const map = marker._map;
        if (map) {
          const containerPoint = map.latLngToContainerPoint([
            project.lat,
            project.lng,
          ]);
          const mapContainer = map.getContainer();
          const rect = mapContainer.getBoundingClientRect();

          onMarkerHover(project, {
            x: rect.left + containerPoint.x,
            y: rect.top + containerPoint.y - 40,
          });
        }
      }
    }, [project, onMarkerHover]);

    const handleClick = useCallback(() => {
      onMarkerClick(project);
    }, [project, onMarkerClick]);

    return (
      <Marker
        ref={markerRef}
        position={[project.lat, project.lng]}
        eventHandlers={{
          mouseover: handleMouseEnter,
          mouseout: onMarkerOut,
          click: handleClick,
        }}
      />
    );
  },
);

// ============================================
// MAP HOVER TOOLTIP
// ============================================

export const MapHoverTooltip = React.memo(({ project, position }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="fixed z-[9999] bg-white rounded-lg shadow-lg border p-3 sm:p-4 w-full max-w-xs sm:max-w-sm pointer-events-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -100%)",
        }}
      >
        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">
          {project.name}
        </h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>📍 {project.location}</span>
          <span>{project.year}</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
});

// ============================================
// MAIN MAP VIEW COMPONENT
// ============================================

export const PortfolioMapView = React.memo(
  ({
    projects,
    zoomProject,
    onMarkerClick,
    onMarkerHover,
    onMarkerOut,
    hoveredProject,
    hoverPosition,
  }) => {
    const validProjects = projects.filter(
      (p) => p.lat && p.lng && !isNaN(p.lat) && !isNaN(p.lng),
    );

    return (
      <div className="w-full relative" style={{ height: "60vh", zIndex: 1 }}>
        <MapContainer
          center={[39.8283, -98.5795]}
          zoom={5}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%", borderRadius: "16px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.webp"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <MapController zoomProject={zoomProject} />
          {validProjects.map((project) => (
            <HoverMarker
              key={project.id}
              project={project}
              onMarkerClick={onMarkerClick}
              onMarkerHover={onMarkerHover}
              onMarkerOut={onMarkerOut}
            />
          ))}
        </MapContainer>

        <MapHoverTooltip project={hoveredProject} position={hoverPosition} />
      </div>
    );
  },
);
