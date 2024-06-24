// src/components/ProjectDetailComponent.js
import React from 'react';

const ProjectDetailComponent = ({ project }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-image" />
      <p>{project.description}</p>
      {project.content}
    </div>
  );
};

export default ProjectDetailComponent;
