import React from "react";
import { Link } from "react-router-dom";
import Coverflow from "react-coverflow";

const fn = () => {
  console.log("Image clicked");
};

const CoverflowComponent = () => (
  <div className="coverflow-container">
    <Coverflow
      width="100%"
      height="100%"
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
      infiniteScroll={true}
      animationSpeed={0.8}
    >
      <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
        <Link to="/detail/project-management">
          <img
            src="https://www.celoxis.com/cassets/img/pmc/project-management.png"
            alt="title"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
      <div>
        <Link to="/detail/encrypted-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GQuewxLfMh2olMxwVIVsJmu1qFf5Q4dwZw&s"
            alt="title"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
      <div>
        <Link to="/detail/other-image">
          <img
            src="https://media.licdn.com/dms/image/C5612AQEjJmksJXLc2Q/article-cover_image-shrink_600_2000/0/1520159541026?e=2147483647&v=beta&t=FqFXevj_qrickAJtsWcMDi6gJ8hhaWu2N5qqPDRV1o8"
            alt="title"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
      <div>
        <Link to="/detail/project-management-2">
          <img
            src="https://www.celoxis.com/cassets/img/pmc/project-management.png"
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </Link>
      </div>
      <div>
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
