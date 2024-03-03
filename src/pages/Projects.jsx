import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styling/Projects.css";
import { PageWrapper, PageTitle } from "../styling/GlobalStyling";

function Projects() {
  return (
    <PageWrapper>
       <PageTitle>My Work</PageTitle>
      <div className="projects">
       
        <div className="projectList">
          {ProjectList.map((project, idx) => {
            return (
              <ProjectItem
                key={idx}
                id={idx}
                name={project.name}
                skills={project.skills}
                image={project.image}
              />
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}

export default Projects;
