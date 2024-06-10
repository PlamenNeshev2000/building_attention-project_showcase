import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../components/css/VerticalCarouselComponent.css';

const projects = [
  {
    id: 'project-management',
    title: 'Project Management',
    image: 'https://www.celoxis.com/cassets/img/pmc/project-management.png',
    description: 'Detailed information about Project Management.',
  },
  {
    id: 'encrypted-image',
    title: 'Encrypted Image',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s',
    description: 'Detailed information about Encrypted Image.',
  },
  {
    id: 'other-image',
    title: 'Other Image',
    image: 'https://media.licdn.com/dms/image/C5612AQEjJmksJXLc2Q/article-cover_image-shrink_600_2000/0/1520159541026?e=2147483647&v=beta&t=FqFXevj_qrickAJtsWcMDi6gJ8hhaWu2N5qqPDRV1o8',
    description: 'Detailed information about Other Image.',
  },
  {
    id: 'project-management-2',
    title: 'Project Management 2',
    image: 'https://www.celoxis.com/cassets/img/pmc/project-management.png',
    description: 'Detailed information about Project Management 2.',
  },
  {
    id: 'new-project',
    title: 'New Project',
    image: 'https://newcognito.com/wp-content/uploads/2022/04/projects-head-img-01.jpg',
    description: 'Detailed information about New Project.',
  },
];

const VerticalCarouselComponent = ({ onProjectSelect }) => {
  const { projectId } = useParams();
  const [currentIndex, setCurrentIndex] = useState(projects.findIndex(p => p.id === projectId));

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    } else {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }
  };

  const handleClick = (index) => {
    setCurrentIndex(index);
    onProjectSelect(projects[index]);
  };

  return (
    <div className="vertical-carousel" onWheel={handleScroll}>
      {projects.map((project, index) => (
        <div
          key={project.id}
          className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        >
          <img src={project.image} alt={project.title} className="carousel-image" />
          <div className="carousel-item-title">{project.title}</div>
        </div>
      ))}
    </div>
  );
};

export default VerticalCarouselComponent;
