import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/VerticalCarouselComponent.css';

const VerticalCarouselComponent = () => {
  const carouselRef = useRef(null);
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const itemHeight = 270; // Adjusted height of each item including margin

  useEffect(() => {
    const initialProjects = [
      { id: 0, title: 'Project #1', specialization: 'ICT & Media', imgSrc: 'https://www.celoxis.com/cassets/img/pmc/project-management.png', link: '/detail/project-management' },
      { id: 1, title: 'Project #2', specialization: 'ICT & Software', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s', link: '/detail/encrypted-image' },
      { id: 2, title: 'Project #3', specialization: 'ICT & Infrastructure', imgSrc: 'https://media.licdn.com/dms/image/C5612AQEjJmksJXLc2Q/article-cover_image-shrink_600_2000/0/1520159541026?e=2147483647&v=beta&t=FqFXevj_qrickAJtsWcMDi6gJ8hhaWu2N5qqPDRV1o8', link: '/detail/other-image' },
      { id: 3, title: 'Project #4', specialization: 'Management', imgSrc: 'https://www.celoxis.com/cassets/img/pmc/project-management.png', link: '/detail/project-management-2' },
      { id: 4, title: 'Project #5', specialization: 'Innovation', imgSrc: 'https://newcognito.com/wp-content/uploads/2022/04/projects-head-img-01.jpg', link: '/detail/new-project' }
    ];

    // Duplicate projects to create an infinite loop effect
    setProjects([...initialProjects, ...initialProjects, ...initialProjects]);
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    container.scrollTop = container.scrollHeight / 3;
  }, [projects]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % (projects.length / 3);
    scrollToProject(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length / 3) % (projects.length / 3);
    scrollToProject(prevIndex);
  };

  const handleClick = (index, link) => {
    const actualIndex = index % (projects.length / 3);
    navigate(link);
    scrollToProject(actualIndex);
  };

  const scrollToProject = (index) => {
    const container = carouselRef.current;
    const itemOffsetTop = (index + projects.length / 3) * itemHeight; // Offset by one set of projects
    const scrollPosition = itemOffsetTop - container.clientHeight / 2 + itemHeight / 2;

    setCurrentIndex(index);

    container.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    const itemsLength = projects.length / 3;

    if (container.scrollTop <= 0) {
      container.scrollTop = container.scrollHeight / 3;
    } else if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      container.scrollTop = container.scrollHeight / 3 - container.clientHeight;
    }
  };

  return (
    <div className="vertical-carousel">
      <button className="carousel-button top" onClick={handlePrev}></button>
      <div className="carousel-container" ref={carouselRef} onScroll={handleScroll}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`carousel-item ${index % (projects.length / 3) === currentIndex ? 'active' : ''}`}
            onClick={() => handleClick(index, project.link)}
          >
            <img src={project.imgSrc} alt={project.title} />
            <div className="project-title-vertical">{project.title}</div>
            <div className="project-specialization-vertical">{project.specialization}</div>
          </div>
        ))}
      </div>
      <button className="carousel-button bottom" onClick={handleNext}></button>
    </div>
  );
};

export default VerticalCarouselComponent;
