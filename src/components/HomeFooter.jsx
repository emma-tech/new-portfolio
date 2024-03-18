import styled from "styled-components";
import { ArrowRight } from "react-bootstrap-icons";
import Blob from "../assets/blob.svg";
import Emoji from "./Emoji";

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    background-color: var(--peachextralight);
  }
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;

  @media screen and (max-width: 1024px) {
    right: 4rem;
  }
`;

const FooterHeading = styled.h2`
  font-size: 1.2rem;
  padding-bottom: 0.5rem;
`;

const FooterImg = styled.img`
  position: relative;
  z-index: -1;
  right: 1rem;
  width: 300px;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  text-underline-offset: 0.2rem;

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

function HomeFooter() {

  return (
    <>
      <Footer>
        <FooterImg src={Blob} alt="Blob" />
        <FooterText>
          <FooterHeading> Contact me <Emoji symbol="📲" label="iPhone" /></FooterHeading>
          <FooterLink href="mailto:emma.urman@gmail.com">
            Send me an email
            <ArrowRight color="#252525" size={20} title="Arrow" />
          </FooterLink>
          <FooterLink
            href="https://www.linkedin.com/in/emmaurman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
            <ArrowRight color="#252525" size={20} title="Arrow" />
          </FooterLink>
        </FooterText>
      </Footer>
    </>
  );
}

export default HomeFooter;