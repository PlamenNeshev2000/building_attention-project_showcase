import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import '../css/VerticalCarouselComponent.css';

const VerticalCarouselComponent = ({ onProjectSelect, projects }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemHeight = 290; // Adjusted height of each item including margin

  useEffect(() => {
    const container = carouselRef.current;
    container.scrollTop = container.scrollHeight / 3;
  }, [projects]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    scrollToProject(nextIndex);
    handleProjectChange(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    scrollToProject(prevIndex);
    handleProjectChange(prevIndex);
  };

  const handleClick = (index) => {
    const actualIndex = index % projects.length;
    setCurrentIndex(actualIndex);
    scrollToProject(actualIndex);
    handleProjectChange(actualIndex);
  };

  const handleProjectChange = (index) => {
    const project = projects[index];
    if (!project) {
      console.error(`No project found at index: ${index}`);
      return;
    }
    navigate(`/detail/${project.id}`);
    onProjectSelect(project);
  };

  const scrollToProject = (index) => {
    const container = carouselRef.current;
    const itemOffsetTop = (index + projects.length) * itemHeight; // Offset by one set of projects
    const scrollPosition = itemOffsetTop - container.clientHeight / 2 + itemHeight / 2;
    setCurrentIndex(index);
    container.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (container.scrollTop <= 0) {
      container.scrollTop = container.scrollHeight / 3;
    } else if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      container.scrollTop = container.scrollHeight / 3 - container.clientHeight;
    }
  };

  const handleSwiping = (eventData) => {
    const { deltaY } = eventData;
    const threshold = 50; // Minimum swipe distance to register a change

    if (Math.abs(deltaY) > threshold) {
      const newIndex = deltaY < 0
        ? (currentIndex + 1) % projects.length
        : (currentIndex - 1 + projects.length) % projects.length;
      setCurrentIndex(newIndex);
      scrollToProject(newIndex);
      handleProjectChange(newIndex);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwiping: handleSwiping,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: false // Disable mouse tracking to focus on touch interaction
  });

  return (
    <div className="outside-carousel" {...swipeHandlers} ref={carouselRef}>
      <div className="vertical-carousel">
        <div className="carousel-container" onScroll={handleScroll}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`carousel-item ${index % projects.length === currentIndex ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-title-vertical">{project.title}</div>
              <div className="project-specialization-vertical">{project.specialization}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button top" onClick={handlePrev}></button>
      <button className="carousel-button bottom" onClick={handleNext}></button>
    </div>
  );
};

export default VerticalCarouselComponent;
