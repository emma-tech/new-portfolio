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
          <ProjectIntro>{caseStudy.about}</ProjectIntro>
          <ProjectImg src={caseStudy.image} alt={caseStudy.imageAlt} />
          <ProjectHeading>Background</ProjectHeading>
          <ProjectText>{caseStudy.background}</ProjectText>
          <ProjectHeading>Solution</ProjectHeading>
          <ProjectText>{caseStudy.solution}</ProjectText>
          <ProjectFeedback>{caseStudy.feedback1}</ProjectFeedback>
          <ProjectHeading>Process</ProjectHeading>
          <ProjectText>{caseStudy.process}</ProjectText>
          <ProjectImg src={caseStudy.image2} alt={caseStudy.imageAlt2} />
          <ProjectFeedback>{caseStudy.feedback2}</ProjectFeedback>
          <ProjectHeading>Timeline</ProjectHeading>
          <ProjectText>{caseStudy.timeline}</ProjectText>
          <ProjectHeading>Role</ProjectHeading>
          <ProjectText>{caseStudy.role}</ProjectText>
          <ProjectHeading>Tools</ProjectHeading>
          <ProjectText>{caseStudy.tools}</ProjectText>
          <ProjectHeading>Skills</ProjectHeading>
          <ProjectText>{caseStudy.skills}</ProjectText>

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

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;

const ProjectIntro = styled.p`
  font-family: "Libre Baskerville", serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
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

const ProjectFeedback = styled.p`
  margin: 6rem;
  padding: 4rem 6rem;
  text-align: center;
  font-family: "Libre Baskerville", serif;
  font-size: 1.2rem;
  font-style: italic;
  box-shadow: 10px 10px 0 var(--peach);
  border: 2px solid var(--black);

  @media screen and (max-width: 1200px) {
    padding: 2rem;
    margin: 3rem 2rem;
  }
`;

/*
const ProjectSkills = styled.p`
  text-align: left;
`;
*/
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
