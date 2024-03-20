// routes.js
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import ProjectDisplay from "../pages/ProjectDisplay";
import CaseDisplay from "../pages/CaseDisplay";
import Experience from "../pages/Experience";
import About from "../pages/About";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/work" element={<MyWork />} />
    <Route path="/work/project/:name/:id" element={<ProjectDisplay />} />
    <Route path="/work/casestudy/:name/:id" element={<CaseDisplay />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/about" element={<About />} />
  </>
);

export default routes;
