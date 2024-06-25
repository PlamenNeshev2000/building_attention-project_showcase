import React from 'react';
import '../css/ProjectDetailComponent.css';

const ProjectDetailComponent = ({ project }) => {
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <h2 className="project-title">{project.title}</h2>
      <div className="project-info">
        <div className="project-client">
          <h3>Client</h3>
          <p>{project.client}</p>
        </div>
        <div className="project-specialization">
          <h3>Specialization</h3>
          <p>{project.specialization}</p>
        </div>
        <div className="project-group-members">
          <h3>Project group members</h3>
          <ul>
            {project.groupMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="project-description">
        <h3>Project Description</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-objectives">
        <h3>Project Objectives</h3>
        <p>{project.objectives}</p>
      </div>
    </div>
  );
};

export default ProjectDetailComponent;
