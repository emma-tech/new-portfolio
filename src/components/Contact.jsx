// Libraries
import styled from "styled-components";

// Components
import Emoji from "../components/Emoji";

// Icons
import { ArrowRight } from "react-bootstrap-icons";

// Styling
const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 5rem;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactHeading = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.4rem;

  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  text-underline-offset: 0.4rem;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
  }

  svg {
    margin-left: 0.5rem;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    text-decoration: none;
  }

  &:hover svg {
    transform: translateX(50%);
  }
`;

function Contact() {
  return (
    <>
      <ContactDiv>
        <ContactContent>
          <ContactHeading>
            <Emoji symbol="🪩" label="disco" /> Do you want to work with me or
            collaborate on a project? <Emoji symbol="🪩" label="disco" />
          </ContactHeading>
          <ContactLink href="mailto:emma.urman@gmail.com">
            Send me an email
            <ArrowRight color="#252525" size={20} title="Arrow" />
          </ContactLink>
          <ContactLink
            href="https://www.linkedin.com/in/emmaurman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
            <ArrowRight color="#252525" size={20} title="Arrow" />
          </ContactLink>
        </ContactContent>
      </ContactDiv>
    </>
  );
}

export default Contact;
