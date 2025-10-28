"use client";
import React, { useState } from "react";
import ConstructionLayout from "./ConstructionLayout";

// Sample initial portfolio data
const initialProjects = [
  {
    id: 1,
    name: "Custom Vacation Home",
    image: "/CustomVacationHome.jpg",
    description: "A modern commercial skyscraper with cutting-edge design.",
    startedYear: 2022,
    status: "Completed",
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Games Day Mens Health Construction",
    image: "/GamesDayMensHealthConstruction.jpg",
    description:
      "Luxury residential villa emphasizing sustainable architecture.",
    startedYear: 2023,
    status: "In Progress",
    location: "California, USA",
  },
  {
    id: 3,
    name: "Park Rest Room Building",
    image: "/ParkRestRoomBuilding.jpg",
    description:
      "Luxury residential villa emphasizing sustainable architecture.",
    startedYear: 2023,
    status: "In Progress",
    location: "California, USA",
  },
];

const Portfolio = () => {
  const [projects, setProjects] = useState(initialProjects);

  const handleUpdate = (id, field, value) => {
    setProjects((prev) =>
      prev.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      )
    );
  };

  return (
    <ConstructionLayout variant="default">
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-roboto max-w-2xl mx-auto">
            Explore some of our most remarkable projects and their journey from
            concept to completion.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transition-transform transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover"
              />

              {/* Project Details */}
              <div className="p-6">
                {/* Editable Name */}
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) =>
                    handleUpdate(project.id, "name", e.target.value)
                  }
                  className="w-full font-playfair text-xl sm:text-2xl font-bold text-gray-900 mb-2 border-b border-gray-200 focus:outline-none focus:border-orange-500"
                />

                {/* Editable Description */}
                <textarea
                  value={project.description}
                  onChange={(e) =>
                    handleUpdate(project.id, "description", e.target.value)
                  }
                  className="w-full text-gray-700 font-roboto mb-4 resize-none border-b border-gray-200 focus:outline-none focus:border-blue-500"
                  rows={3}
                />

                {/* Editable Additional Info */}
                <div className="flex justify-between text-gray-600 font-roboto text-sm mb-2">
                  <input
                    type="text"
                    value={project.startedYear}
                    onChange={(e) =>
                      handleUpdate(project.id, "startedYear", e.target.value)
                    }
                    className="border-b border-gray-200 focus:outline-none focus:border-green-500 w-1/2 mr-2 text-center"
                  />
                  <input
                    type="text"
                    value={project.status}
                    onChange={(e) =>
                      handleUpdate(project.id, "status", e.target.value)
                    }
                    className="border-b border-gray-200 focus:outline-none focus:border-red-500 w-1/2 ml-2 text-center"
                  />
                </div>

                <input
                  type="text"
                  value={project.location}
                  onChange={(e) =>
                    handleUpdate(project.id, "location", e.target.value)
                  }
                  className="w-full border-b border-gray-200 focus:outline-none focus:border-indigo-500 text-gray-600 font-roboto text-sm text-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Fonts */}
      <style jsx>{`
        .font-roboto {
          font-family: "Roboto", sans-serif;
        }
        .font-playfair {
          font-family: "Playfair Display", serif;
        }
      `}</style>
    </ConstructionLayout>
  );
};

export default Portfolio;
