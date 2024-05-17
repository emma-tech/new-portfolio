// Libraries
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components - Global styling

// Main wrapper
export const Wrapper = styled.main`
  padding: 8rem 1.5rem 4rem 1.5rem;

  @media screen and (min-width: 1024px) {
    padding: 14rem 6rem 6rem 6rem;
  }
`;

// Page title
export const PageTitle = styled.h1`
  font-size: 3.5rem;
  margin: 4rem 0 2rem 0;

  @media screen and (min-width: 1200px) {
    font-size: 5rem;
    text-underline-offset: 1.6rem;
    margin: 4rem 0;
  }
`;

// Text wrapper
export const TextWrapper = styled.div`
  padding: 0;

  @media screen and (min-width: 1200px) {
    padding: 0 8rem;
  }
`;

// Styling for internal links
export const InternalLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  text-underline-offset: 0.4rem;
  font-size: 2rem;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-underline-offset: 0.6rem;
  cursor: pointer;

  svg {
    margin-left: 1rem;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    text-decoration: none;
  }

  &:hover svg {
    transform: translateX(50%);
  }
`;

// Styling for external links
export const ExternalLink = styled.a`
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
