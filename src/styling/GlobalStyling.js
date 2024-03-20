import styled from "styled-components";

export const PageWrapper = styled.main`
  padding: 2rem;
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin: 16rem 0 4rem 0;
  font-size: 4rem;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-offset: 1.6rem;

  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
    text-underline-offset: 1rem;
    margin: 12rem 0 2rem 0;
  }
`;

export const TextWrapper= styled.div`
  padding: 0 8rem;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;
