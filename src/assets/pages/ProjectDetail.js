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

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="project-detail-container">
      <div className="carousel-container">
        <button className="back-button" onClick={handleBackClick}>
          &#8592;
        </button>
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
showcasing the benefits and contributions it has made. For example,regarding the aformentioned secure image encryption algorithm - it has successfully enhanced data protection 
for users. By efficiently handling large image files and providing robust security against vulnerabilities, the algorithm has significantly reduced the risk 
of data breaches. Keep it concise, highlighting key insights and their impact.</p>
        </div>
        <div className="project-prototype-section">
          <h3 className="section-title">Prototype/Proof of Concept</h3>
          <iframe
            width="720" /* Updated width */
            height="405" /* Updated height */
            src={currentProject.video} /* Replace with actual video URL */
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
         <div className="project-git-section">
          <h3 className="section-title">Git Repository</h3>
          <p className="section-content">
             <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="white-text"> 
              This is where students can leave their other git links for other students to see.
             </a> 
          </p>
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
