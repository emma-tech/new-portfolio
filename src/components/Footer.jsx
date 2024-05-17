// Libraries
import styled from "styled-components";

// Icons
import { Github, Linkedin, Medium } from "react-bootstrap-icons";

// Styling
const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--lightpurple);
  margin-top: 2rem;
  padding: 6rem 2rem 2rem;
  clip-path: polygon(0px 25%, 100% 0px, 100% 100%, 0% 100%);
  width: 100%;
`;

const FooterHeading = styled.h2`
  font-size: 1rem;
  border-bottom: 1px solid var(--purple);
  width: 160px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  svg {
    height: 25px;
    width: 25px;
  }

  a {
    margin-right: 1rem;
  }
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <FooterHeading>Emma Urman - 2024</FooterHeading>

        <Icons>
          <a
            href="https://www.linkedin.com/in/emmaurman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color="#252525" size={40} title="LinkedIn" />
          </a>
          <a
            href="https://github.com/emma-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="#252525" size={40} title="GitHub" />
          </a>
          <a
            href="https://medium.com/@emma-urman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Medium color="#252525" size={40} title="Medium" />
          </a>
        </Icons>
      </StyledFooter>
    </>
  );
}

export default Footer;
