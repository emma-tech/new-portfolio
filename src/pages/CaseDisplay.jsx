import { useParams } from "react-router-dom";
import { CaseStudys } from "../helpers/ProjectList";
/*import BackButton from "../components/BackButton";*/
import { PageWrapper, PageTitle } from "../styling/GlobalStyling";
import DefaultFooter from "../components/DefaultFooter";
import { ArrowRight } from "react-bootstrap-icons";
import styled from "styled-components";

function CaseDisplay() {
  const { id } = useParams();
  const caseStudy = CaseStudys[id];

  return (
    <>
      <PageWrapper>
        <ProjectWrapper>
          <PageTitle> {caseStudy.name}</PageTitle>
          <ProjectText>{caseStudy.text}</ProjectText>
          <ProjectImg src={caseStudy.image} alt={caseStudy.imageAlt} />
          <ProjectHeading>Skills</ProjectHeading>
          <ProjectSkills>
            {caseStudy.skills}
          </ProjectSkills>

          <ProjectLinks>
          <ProjectHeading>Links</ProjectHeading>
            {caseStudy.links.map((link, index) => (
              <ProjectLink key={index} href={link.url}>
                {link.name}
                <ArrowRight color="#252525" size={20} title="Arrow" />
              </ProjectLink>
            ))}
          </ProjectLinks>
        </ProjectWrapper>
        
      </PageWrapper>
      <DefaultFooter />
    </>
  );
}

// Styled components
const ProjectWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  padding: 4rem 8rem;
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

export default CaseDisplay;
