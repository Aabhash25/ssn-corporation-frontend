"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectPromises = [4, 14, 8].map((id) =>
          fetch(`https://api.ssnbuilders.com/api/projects/${id}/`).then((res) =>
            res.json(),
          ),
        );

        const projectData = await Promise.all(projectPromises);
        setProjects(projectData);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setProjectsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="relative w-full py-16 px-6 lg:px-12 bg-white">
      <div className="max-w-[90rem] mx-auto">
        <div className="text-center mb-10">
          <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 font-playfair">
            View Related Projects
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projectsLoading
            ? Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden animate-pulse shadow-lg"
                >
                  <div className="h-56 bg-gray-300"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-3 bg-gray-300 rounded mb-1"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </div>
              ))
            : projects.map((project, index) => (
                <div
                  key={project.id}
                  onClick={() =>
                    (window.location.href = `/project-description/${project.id}`)
                  }
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Project Image */}
                  {project.images && project.images.length > 0 && (
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.images[0].image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-sm font-medium text-gray-900">
                            View Project
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Project #{String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-xs text-gray-400 font-medium">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                        {project.name}
                      </h3>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center text-xs text-gray-500 mt-auto">
                      <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
