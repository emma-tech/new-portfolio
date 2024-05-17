// Libraries
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Icons
import { ArrowRight } from "react-bootstrap-icons";

// Components
import BackButton from "../components/BackButton";

// Helpers
import { Projects } from "../helpers/ProjectList";

// Global styling
import { PageTitle } from "../styling/GlobalStyling";

// Styling
const ProjectWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding: 4rem 8rem;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  margin: 1rem 0 2rem 0;
`;

const ProjectHeading = styled.h2`
  text-align: left;
  margin-top: 1.5rem;
`;

const ProjectText = styled.p`
  text-align: left;
`;

const ProjectSkills = styled.p`
  text-align: left;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0 0 1rem 0;
  text-underline-offset: 0.4rem;

  svg {
    margin-left: 0.5rem;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    text-decoration: none;
  }

  &:hover svg {
    transform: translateX(50%);
  }
`;

function ProjectPage() {
  const { id } = useParams();
  const project = Projects[id];

  return (
    <>
      <BackButton></BackButton>
      <ProjectWrapper>
        <PageTitle> {project.name}</PageTitle>
        <ProjectImg src={project.image} alt={project.imageAlt} />
        <ProjectText>{project.text}</ProjectText>
        <ProjectHeading>Skills</ProjectHeading>
        <ProjectSkills>{project.skills}</ProjectSkills>

        <ProjectLinks>
          <ProjectHeading>Links</ProjectHeading>
          {project.links.map((link, index) => (
            <ProjectLink key={index} href={link.url}>
              {link.name}
              <ArrowRight color="#252525" size={20} title="Arrow" />
            </ProjectLink>
          ))}
        </ProjectLinks>
        <ProjectImg src={project.image2} alt={project.image2Alt} />
      </ProjectWrapper>
    </>
  );
}

export default ProjectPage;
