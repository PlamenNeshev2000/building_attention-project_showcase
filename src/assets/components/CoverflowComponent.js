import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Coverflow from "react-coverflow";
import logo from '../images/Logo.png';
import GraduationImage from '../images/Graduation Session Image.jpg'

const CoverflowComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set the component as mounted after the component is fully loaded
    setIsMounted(true);

    // Cleanup on unmount
    return () => {
      setIsMounted(false);
    };
  }, []);

  const handleClick = (index, link) => {
    console.log(`Clicked on project index: ${index}, link: ${link}`);
    if (currentIndex === index) {
      // Navigate to the detail page if the item is already centered
      navigate(link);
    } else {
      // Otherwise, set the item to be centered
      setCurrentIndex(index);
    }
 
  };

  if (!isMounted) {
    return null; // Render nothing while the component is mounting
  }

  const projects = [
    { link: '/detail/project-management', title: 'Project to be added', imgSrc: 'https://dygtyjqp7pi0m.cloudfront.net/noimage.jpg' },
    { link: '/detail/encrypted-image', title: 'AI Project', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s' },
    { link: '/detail/other-image', title: 'Student Project Showcase', imgSrc: GraduationImage },
    { link: '/detail/project-management-2', title: 'Software Project', imgSrc: 'https://www.celoxis.com/cassets/img/pmc/project-management.png' },
    { link: '/detail/new-project', title: 'New Project', imgSrc: 'https://newcognito.com/wp-content/uploads/2022/04/projects-head-img-01.jpg' },
  ];

  return (
    <div className="coverflow-container">
      
      {isMounted && (
        <Coverflow
          width="100%"
          height="60%"
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          infiniteScroll={true}
          animationSpeed={0.8}
          active={currentIndex} // Set active index to the current index
          clickable={true}
          onChange={(index) => setCurrentIndex(index)}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleClick(index, project.link)}
              onKeyDown={() => handleClick(index, project.link)}
              role="menuitem"
              tabIndex="0"
              className={`project-container ${currentIndex === index ? 'active' : 'inactive'}`}
            >
              {/* 3D Title */}
              <div className="project-title">{project.title}</div>
              <img
                src={project.imgSrc}
                alt={project.title}
                style={{ display: "block", width: "100%", color: "#000000" }}
              />
            </div>
          ))}
        </Coverflow>
      )}
      <div className="app-logo">
        <img src={logo} alt="Logo" className="app-logo" />
      </div>
    </div>
  );
};

export default CoverflowComponent;
