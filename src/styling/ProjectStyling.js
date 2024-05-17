// Libraries
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components for projects

export const ProjectList = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const ProjectCard = styled.div``;

export const ProjectImg = styled.img.attrs(({ src, alt }) => ({
  src: src,
  alt: alt,
}))`
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;

export const ProjectTags = styled.p`
  text-transform: uppercase;
  font-size: 0.875rem;
`;

export const ProjectHeading = styled(Link)`
  display: inline-block;
  margin: 0.5rem 0;
  text-decoration: none;
`;
