// Libraries
import styled from "styled-components";

// Components
import UpcomingProject from "./UpcomingProject";

// Helpers
import { CurrentProjects } from "../helpers/ProjectList";

// Icons
import { Arrow90degDown } from "react-bootstrap-icons";

// Global styling projects
import { ProjectList } from "../styling/ProjectStyling";

// Styling
const TeaserSection = styled.div`
  padding: 5rem 0 3rem 0;
`;

const TeaserHeading = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    margin: 0 1rem 0 0;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-end;

    svg {
      transform: rotateY(180deg);
    }
  }
`;

function UpcomingProjectsList() {
  return (
    <>
      <TeaserSection>
        <TeaserHeading>
          <h2>I&apos;m currently working on</h2>
          <Arrow90degDown color="#252525" size={40} title="ArrowDown" />
        </TeaserHeading>

        <ProjectList>
          {CurrentProjects.map((currentProject, idx) => {
            return (
              <UpcomingProject
                key={idx}
                id={idx}
                name={currentProject.name}
                tags={currentProject.tags}
                image={currentProject.image}
              />
            );
          })}
        </ProjectList>
      </TeaserSection>
    </>
  );
}
export default UpcomingProjectsList;
