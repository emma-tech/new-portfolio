// Components
import Project from "../components/Project";
import UpcomingProjectsList from "../components/UpcomingProjectsList";

// Helpers
import { Projects } from "../helpers/ProjectList";

// Global styling
import { PageTitle } from "../styling/GlobalStyling";

// Global styling projects
import { ProjectList } from "../styling/ProjectStyling";


function Portfolio() {
  return (
    <>
      <PageTitle>Portfolio</PageTitle>
        <ProjectList>
          {Projects.map((project, idx) => {
            return (
              <Project
                key={idx}
                id={idx}
                name={project.name}
                tags={project.tags}
                image={project.image}
              />
            );
          })}
        </ProjectList>
      <UpcomingProjectsList></UpcomingProjectsList>
    </>
  );
}

export default Portfolio;
