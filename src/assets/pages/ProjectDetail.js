import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import VerticalCarouselComponent from '../components/VerticalCarouselComponent';
import { projects } from '../../data/ProjectsData.js';
import '../css/ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [currentProject, setCurrentProject] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const project = projects.find(p => p.id === projectId);
    setCurrentProject(project);
  }, [projectId]);

  if (!currentProject) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
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
      <div className="overlay"></div>
      <div className="carousel-container">
        <VerticalCarouselComponent onProjectSelect={setCurrentProject} projects={projects} />
      </div>
      <div className="project-info-container">
        <div className="project-header">
          <div className="project-details">
            <div className="project-title-info">{currentProject.title}</div>
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
          <img src={currentProject.image} alt={currentProject.title} className="project-image" />
        </div>
        <div className="project-description-section">
          <h3 className="section-title">Project Overview</h3>
          <p className="section-content">In the Project Overview section, students will provide a brief, yet comprehensive description of their project.
             Think of this as your project's snapshot, capturing its essence and significance in a few concise sentences.</p>
        </div>
        <div className="project-objectives-section">
          <h3 className="section-title">Project Objectives</h3>
          <p className="section-content">In the Project Objectives section, student will define the specific goals their project aimed to achieve. 
            Guidelines: Think of this as your project's roadmap, creating measurable, realistic, and time-bound milestones. For example, you might aim to develop a 
            secure image encryption algorithm, for that your goals would be: ensuring handling large files efficiently, testing against security vulnerabilities, and integrating it into an app, 
            all by the semester's end. Keep them focused, achievable, and aligned with your project's purpose.
          </p>
        </div>
        <div className="project-impact-section">
          <h3 className="section-title">Results & Impact</h3>
          <p className="section-content">
            In the Results & Impact section, students will describe the outcomes and significance of their project. Think of this as your project's reflection, 
            showcasing the benefits and contributions it has made. For example, regarding the aforementioned secure image encryption algorithm - it has successfully enhanced data protection 
            for users. By efficiently handling large image files and providing robust security against vulnerabilities, the algorithm has significantly reduced the risk 
            of data breaches. Keep it concise, highlighting key insights and their impact.
          </p>
        </div>
        <div className="project-prototype-section">
          <h3 className="section-title">Prototype/Proof of Concept</h3>
          <iframe
            width="720"
            height="405"
            src={currentProject.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
          <img src={currentImageIndex >= 0 && currentImageIndex < currentProject.gallery.length ? currentProject.gallery[currentImageIndex] : ""} alt={`Gallery ${currentImageIndex + 1}`} className="gallery-full-image" />
          <button className="gallery-next" onClick={nextImage}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
