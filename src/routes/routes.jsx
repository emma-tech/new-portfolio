// routes.js
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Experience from "../pages/Experience";
import Projects from "../pages/Projects";
import ProjectDisplay from "../pages/ProjectDisplay";
import About from "../pages/About";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/project/:id" element={<ProjectDisplay />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/about" element={<About />} />
  </>
);

export default routes;
