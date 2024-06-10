import React from "react";
import { useParams } from "react-router-dom";

const images = {
  "project-management": "https://www.celoxis.com/cassets/img/pmc/project-management.png",
  "encrypted-image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s",
  "project-management-2": "https://www.celoxis.com/cassets/img/pmc/project-management.png"
};

const ProjectInfo = () => {
  const { imageId } = useParams();
  const imageUrl = images[imageId];

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ width: "200px", padding: "1rem", background: "#f0f0f0" }}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </nav>
      <div style={{ flex: 1, padding: "1rem" }}>
        <img src={imageUrl} alt={imageId} style={{ maxWidth: "100%" }} />
      </div>
    </div>
  );
};

export default ProjectInfo;
