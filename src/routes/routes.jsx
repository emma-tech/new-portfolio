// routes.js
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import ProjectPage from "../pages/ProjectPage";
import UpcomingProjectPage from "../pages/UpcomingProjectPage";
import Experience from "../pages/Experience";
import About from "../pages/About";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/portfolio/project/:name/:id" element={<ProjectPage />} />
    <Route path="/portfolio/upcomingproject/:name/:id" element={<UpcomingProjectPage />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/about" element={<About />} />
  </>
);

export default routes;
