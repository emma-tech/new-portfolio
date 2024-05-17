// Libraries
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import Emoji from "../components/Emoji";
import UpcomingProjectsList from "../components/UpcomingProjectsList";

// Icons
import { Github, Linkedin, Medium, ArrowRightCircleFill } from "react-bootstrap-icons";

// Global styling
import { InternalLink } from "../styling/GlobalStyling";

// Styling
const Hero = styled.div`
  border-bottom: 6px solid var(--purple);
  margin-bottom: 2rem;

  @media (min-width: 1200px) {
    max-width: 60vw;
  }
`;

const HeroHeadingContainer = styled.div`
  display: flex;
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  margin: 3.5rem 0 0.5rem 0;

  @media (min-width: 1200px) {
    font-size: 6rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.2rem;

  @media (min-width: 1200px) {
    font-size: 1.4rem;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2.5rem 0 1.5rem 0;

  a {
    margin-right: 2rem;
  }

  svg {
    height: 40px;
    width: 40px;
  }
`;
const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`;

function Home() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <Hero>
          <HeroHeadingContainer>
            <HeroHeading>
              Hi, I&apos;m Emma <Emoji symbol="👋" label="waving hand" />
            </HeroHeading>
          </HeroHeadingContainer>
          <HeroText>
            UX designer & Frontend developer with a background in marketing and
            communication. Passionate about using code and design to create user
            centered and inclusive digital experiences.
          </HeroText>
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
        </Hero>
        <UpcomingProjectsList></UpcomingProjectsList>

        <Section>
          <InternalLink to="/portfolio">
            Portfolio
            <ArrowRightCircleFill color="#252525" size={40} title="ArrowRight" />
          </InternalLink>
          <InternalLink to="/about">
            About me
            <ArrowRightCircleFill color="#252525" size={40} title="ArrowRight" />
          </InternalLink>
        </Section>
      </motion.div>
    </>
  );
}

export default Home;
