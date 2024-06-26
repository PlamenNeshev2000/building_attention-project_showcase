import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VerticalCarouselComponent from '../components/VerticalCarouselComponent';
import { projects } from '../../data/ProjectsData.js';
import '../css/ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const project = projects.find(p => p.id === projectId);
    setCurrentProject(project);
  }, [projectId]);

  console.log("Current Project:", currentProject);

  if (!currentProject) {
    return <div>Project not found</div>;
  }

  const openGallery = (index) => {
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % currentProject.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + currentProject.gallery.length) % currentProject.gallery.length);
  };

  return (
    <div className="project-detail-container">
      <div className="carousel-container">
        <VerticalCarouselComponent onProjectSelect={setCurrentProject} projects={projects} />
      </div>
      <div className="project-info-container">
        <div className="project-header">
          <div className="project-title-info">{currentProject.title}</div>
          <img src={currentProject.image} alt={currentProject.title} className="project-image" />
        </div>
        <div className="project-details">
          <div className="project-specialization">
            <strong>Semester programme:</strong>
            {currentProject.specialization}
          </div>
          <div className="project-client">
            <strong>Client:</strong>
            {currentProject.client}
          </div>
          <div className="project-group-members">
            <strong>Project group members:</strong>
            <ul>
              {currentProject.groupMembers.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="project-description-section">
          <h3 className="section-title">Project Overview</h3>
          <p className="section-content">{currentProject.description}</p>
        </div>
        <div className="project-objectives-section">
          <h3 className="section-title">Project Objectives</h3>
          <p className="section-content">{currentProject.objectives}</p>
        </div>
        <div className="project-impact-section">
          <h3 className="section-title">Results & Impact</h3>
          <p className="section-content">Here students will list the impacat their project had in their respective company and the most important insights that
             came out of the projects</p>
        </div>

        <div className="project-objective-section">
          <h3 className="section-title">Git Repository</h3>
          <p className="section-content">
          <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer">
              GitHub Repository Link // GitHub Repository Link // GitHub Repository Link 
            </a></p>
        </div>

        <div className="project-prototype-section">
          <h3 className="section-title">Prototype/Proof of Concept</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" /* Replace with actual video URL */
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        
        <div className="project-gallery">
          <h3 className="section-title">Gallery</h3>
          <div className="gallery-images">
            {currentProject.gallery.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                onClick={() => openGallery(index)} 
                className="gallery-thumbnail" 
              />
            ))}
          </div>
        </div>
      </div>

      {galleryOpen && (
        <div className="gallery-modal">
          <button className="gallery-close" onClick={closeGallery}>X</button>
          <button className="gallery-prev" onClick={prevImage}>&lt;</button>
          <img src={currentProject.gallery[currentImageIndex]} alt={`Gallery ${currentImageIndex + 1}`} className="gallery-full-image" />
          <button className="gallery-next" onClick={nextImage}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
