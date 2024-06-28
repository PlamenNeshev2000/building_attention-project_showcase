import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Coverflow from "react-coverflow";
import { useSwipeable } from "react-swipeable"; // Import react-swipeable
import logo from '../images/Logo.png';
import GraduationImage from '../images/Graduation Session Image.jpg';

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

  const handleSwipeLeft = () => {
    console.log('Swiped right');
    const nextIndex = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIndex);
  };

  const handleSwipeRight = () => {
    console.log('Swiped left');
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventDefaultTouchmoveEvent: true,
    //trackMouse: false
  });

  if (!isMounted) {
    return null; // Render nothing while the component is mounting
  }

  const projects = [
    { link: '/detail/project-management', title: 'Project to be added', imgSrc: 'https://dygtyjqp7pi0m.cloudfront.net/noimage.jpg' },
    { link: '/detail/encrypted-image', title: 'AI Project', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s' },
    { link: '/detail/other-image', title: 'Student Project Showcase', imgSrc: GraduationImage },
    { link: '/detail/project-management-2', title: 'Project #4', imgSrc: 'https://www.celoxis.com/cassets/img/pmc/project-management.png' },
    { link: '/detail/new-project', title: 'Project #5', imgSrc: 'https://newcognito.com/wp-content/uploads/2022/04/projects-head-img-01.jpg' },
  ];

  return (
    <div className="coverflow-container">
      {/* <h1 className="coverflow-title">Student Project Showcase</h1> */}
      {isMounted && (
        <div {...swipeHandlers}>
          <Coverflow
            width="80%"
            height="60%"
            displayQuantityOfSide={2}
            navigation={false}
            enableHeading={false}
            infiniteScroll={true}
            animationSpeed={0.8}
            active={currentIndex}
            clickable={true}
            onClick={() => handleClick(currentIndex, projects[currentIndex].link)}
            media={{
              '@media (max-width: 900px)': {
                width: '100%',
                height: '300px'
              },
              '@media (min-width: 900px)': {
                width: '100%',
                height: '1000px'
              }
            }}
            style={{ touchAction: 'pan-y', WebkitOverflowScrolling: 'touch' }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleClick(index, project.link)}
                onKeyDown={() => handleClick(index, project.link)}
                role="menuitem"
                tabIndex="0"
                className={`project-container ${currentIndex === index ? 'active' : 'inactive'} custom-project-container`}
              >
                <div className="project-title">{project.title}</div>
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  style={{ display: "block", width: "100%", color: "#000000" }}
                />
              </div>
            ))}
          </Coverflow>
        </div>
      )}
      <div className="app-logo">
        <img src={logo} alt="Logo" className="app-logo" />
      </div>
    </div>
  );
};

export default CoverflowComponent;
