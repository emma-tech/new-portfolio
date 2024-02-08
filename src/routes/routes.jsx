// routes.js
import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import ProjectDisplay from "../pages/ProjectDisplay";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/project/:id" element={<ProjectDisplay />} />
  </>
);

export default routes;
