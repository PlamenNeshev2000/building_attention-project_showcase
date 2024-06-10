import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Coverflow from "react-coverflow";
import logo from '../images/Logo.png'

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

  return (
    <div className="coverflow-container">
      <Coverflow
        width="80%"
        height="60%"
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
        infiniteScroll={true}
        animationSpeed={0.8}
        currentFigureScale={1.2} // Increase scale for centered item
        active={currentIndex} // Set active index to the current index
        clickable={true}
        onChange={(index) => setCurrentIndex(index)}
      >
        <div
          onClick={() => handleClick(0, '/detail/project-management')}
          onKeyDown={() => handleClick(0, '/detail/project-management')}
          role="menuitem"
          tabIndex="0"
          className="project-container"
        >
          {/* 3D Title */}
          <div className="project-title">Project Management</div>
          <img
            src="https://www.celoxis.com/cassets/img/pmc/project-management.png"
            alt="Project Management"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div
          onClick={() => handleClick(1, '/detail/encrypted-image')}
          onKeyDown={() => handleClick(1, '/detail/encrypted-image')}
          className="project-container"
        >
          {/* 3D Title */}
          <div className="project-title">Encrypted Image</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s"
            alt="Encrypted Image"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div
          onClick={() => handleClick(2, '/detail/other-image')}
          onKeyDown={() => handleClick(2, '/detail/other-image')}
          className="project-container"
        >
          {/* 3D Title */}
          <div className="project-title">Other Image</div>
          <img
            src="https://media.licdn.com/dms/image/C5612AQEjJmksJXLc2Q/article-cover_image-shrink_600_2000/0/1520159541026?e=2147483647&v=beta&t=FqFXevj_qrickAJtsWcMDi6gJ8hhaWu2N5qqPDRV1o8"
            alt="Other Image"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div
          onClick={() => handleClick(3, '/detail/project-management-2')}
          onKeyDown={() => handleClick(3, '/detail/project-management-2')}
          className="project-container"
        >
          {/* 3D Title */}
          <div className="project-title">Project Management 2</div>
          <img
            src="https://www.celoxis.com/cassets/img/pmc/project-management.png"
            alt="Project Management 2"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div
          onClick={() => handleClick(4, '/detail/new-project')}
          onKeyDown={() => handleClick(4, '/detail/new-project')}
          className="project-container"
        >
          {/* 3D Title */}
          <div className="project-title">New Project</div>
          <img
            src="https://newcognito.com/wp-content/uploads/2022/04/projects-head-img-01.jpg"
            alt="New Project"
            style={{ display: "block", width: "100%" }}
          />
        </div>
      </Coverflow>
      <div className="app-logo">
    {/* Use the imported PNG as an image source */}
    <img src={logo} alt="Logo" className="app-logo" />
    {/* Other components and content */}
  </div>


    </div>
  );
};

export default CoverflowComponent;

   
