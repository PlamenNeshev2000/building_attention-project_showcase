import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoverflowComponent from './components/CoverflowComponent';
import ProjectInfo from './components/ProjectInfo';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<CoverflowComponent />} />
      <Route path="/detail/:imageId" element={<ProjectInfo />} />
    </Routes>
  </Router>
);

export default App;
