import styled from "styled-components";


export const PageWrapper = styled.main`
  padding: 2.5rem;
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin: 16rem 0 4rem 0;
  font-size: 4rem;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-underline-offset: 1.6rem;
`;

export const TextWrapper= styled.div`
  padding: 0 8rem;

  @media screen and (max-width: 1200px) {
    padding: 0;
  }
`;