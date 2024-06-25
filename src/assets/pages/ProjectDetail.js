import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VerticalCarouselComponent from '../components/VerticalCarouselComponent';
import { projects } from '../../data/ProjectsData.js'; // Updated import
import '../css/ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    const project = projects.find(p => p.id === projectId);
    setCurrentProject(project);
  }, [projectId]);

  console.log("Current Project:", currentProject); // Debugging line to check if the project is loaded

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail-container">
      <div className="carousel-container">
        <VerticalCarouselComponent onProjectSelect={setCurrentProject} projects={projects} />
      </div>
      <div className="project-info-container">
        <h2>{currentProject.title}</h2>
        <img src={currentProject.image} alt={currentProject.title} className="project-image" />
        <p>{currentProject.description}</p>
        {currentProject.content}
      </div>
    </div>
  );
};

export default ProjectDetail;
