import React from "react";
import { Link } from "react-router-dom";
import Coverflow from "react-coverflow";

/* Function to handle image click events */
const fn = () => {
  console.log("Image clicked");
};

const CoverflowComponent = () => (
  <div className="coverflow-container">
    <Coverflow
      width="80%" /* Coverflow width */
      height="60%" /* Coverflow height */
      displayQuantityOfSide={2} /* Number of items displayed on each side */
      navigation={false} /* Disable navigation */
      enableHeading={false} /* Disable heading */
      infiniteScroll={true} /* Enable infinite scroll */
      animationSpeed={0.8} /* Animation speed */
    >
      <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
        className="project-container" /* Use the project-container class for positioning */
      >
        {/* 3D Title */}
        <div className="project-title">Project Management</div>
        <Link to="/detail/project-management">
          <img
            src="https://www.celoxis.com/cassets/img/pmc/project-management.png"
            alt="title"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
      <div className="project-container">
        {/* 3D Title */}
        <div className="project-title">Encrypted Image</div>
        <Link to="/detail/encrypted-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s"
            alt="title"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
      <div className="project-container">
        {/* 3D Title */}
        <div className="project-title">Other Image</div>
        <Link to="/detail/other-image">
          <img
            src="https://media.licdn.com/dms/image/C5612AQEjJmksJXLc2Q/article-cover_image-shrink_600_2000/0/1520159541026?e=2147483647&v=beta&t=FqFXevj_qrickAJtsWcMDi6gJ8hhaWu2N5qqPDRV1o8"
            alt="title"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
      <div className="project-container">
        {/* 3D Title */}
        <div className="project-title">Project Management 2</div>
        <Link to="/detail/project-management-2">
          <img
            src="https://www.celoxis.com/cassets/img/pmc/project-management.png"
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
      <div className="project-container">
        {/* 3D Title */}
        <div className="project-title">New Project</div>
        <Link to="/detail/new-project">
          <img
            src="https://newcognito.com/wp-content/uploads/2022/04/projects-head-img-01.jpg"
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
    </Coverflow>
  </div>
);

export default CoverflowComponent;
