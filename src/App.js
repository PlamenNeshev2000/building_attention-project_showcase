import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoverflowComponent from './assets/components/CoverflowComponent';
import ProjectDetail from './assets/pages/ProjectDetail';
import logo from './assets/images/Logo.png'; // Import the logo
// import VerticalCarouselComponent from './assets/components/VerticalCarouselComponent';
// import { projectsData } from './data/ProjectsData';

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<CoverflowComponent />} />
        <Route path="/detail/:projectId" element={<ProjectDetail />} />
        <Route path="/detail/:projectId" element={<ProjectDetail/>} />
      </Routes>
     
    </div>
  </Router>
);

export default App;