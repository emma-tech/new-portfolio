// Libraries
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Helpers
import { CurrentProjects } from "../helpers/ProjectList";

// Components
import BackButton from "../components/BackButton";

// Icons
import { ArrowRight } from "react-bootstrap-icons";

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
  margin: 3rem 0 2rem 0;
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
  margin-bottom: 0.5rem;
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

function UpcomingProjectPage() {
  const { id } = useParams();
  const upcomingProject = CurrentProjects[id];

  return (
    <>
      <ProjectWrapper>
        <PageTitle> {upcomingProject.name}</PageTitle>
        <ProjectImg
          src={upcomingProject.image}
          alt={upcomingProject.imageAlt}
        />
        <ProjectText>{upcomingProject.text}</ProjectText>
        <ProjectHeading>Skills</ProjectHeading>
        <ProjectSkills>{upcomingProject.skills}</ProjectSkills>

        <ProjectLinks>
          <ProjectHeading>Links</ProjectHeading>
          {upcomingProject.links.map((link, index) => (
            <ProjectLink key={index} href={link.url}>
              {link.name}
              <ArrowRight color="#252525" size={20} title="Arrow" />
            </ProjectLink>
          ))}
        </ProjectLinks>
        <ProjectImg
          src={upcomingProject.image2}
          alt={upcomingProject.image2Alt}
        />
      </ProjectWrapper>
      <BackButton></BackButton>
    </>
  );
}

export default UpcomingProjectPage;
