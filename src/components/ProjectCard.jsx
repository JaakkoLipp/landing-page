import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div key={project} className="group cursor-pointer">
      <div className="flex justify-between items-baseline border-b border-gray-200 py-8">
        <h3 className="text-2xl md:text-4xl font-light group-hover:opacity-50 transition-opacity">
          {project}
        </h3>
        <span className="text-sm text-gray-400 group-hover:opacity-50 transition-opacity">
          (from card component) View Project →
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
