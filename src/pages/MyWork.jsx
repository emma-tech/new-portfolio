import ProjectItem from "../components/ProjectItem";
import CaseItem from "../components/CaseItem";

import { Projects, CaseStudys } from "../helpers/ProjectList";

import "../styling/Projects.css";
import { PageWrapper, PageTitle } from "../styling/GlobalStyling";
import DefaultFooter from "../components/DefaultFooter";

function MyWork() {
  return (
    <>
      <PageWrapper>
        <PageTitle>My Work</PageTitle>
        <div className="projects">
          <div className="projectList">
            {CaseStudys.map((project, idx) => {
              return (
                <CaseItem
                  key={idx}
                  id={idx}
                  name={project.name}
                  skills={project.skills}
                  image={project.image}
                />
              );
            })}
          </div>

          <div className="projectList">
            {Projects.map((project, idx) => {
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
      <DefaultFooter />
    </>
  );
}

export default MyWork;
