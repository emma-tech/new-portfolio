import styled from "styled-components";
import ProfilePicture from "../assets/emma1.jpg";
import Emoji from "../components/Emoji";
import { motion } from "framer-motion";

// Styling
import { PageWrapper, PageTitle } from "../styling/GlobalStyling.js";

import DefaultFooter from "../components/DefaultFooter.jsx";

function About() {
  return (
    <>
      <PageWrapper>
        <PageTitle>About me</PageTitle>
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            y: 30,
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
          <AboutWrapper>
            <TextWrapper>
              <Intro>
                Hi there! Welcome to my portfolio{" "}
                <Emoji symbol="✨" label="stars" /> I&apos;m Emma, a UX designer
                with a background in frontend development and communication. My
                passion is to build inclusive, creative and problem-solving user
                experiences and products that makes sense to people.
              </Intro>

              <p>
                User experience and inclusive design have always been close to
                my heart, so after working with communication and frontend
                development for a few years I decided that it was time to turn
                this passion into a reality. So I added a final piece to my
                career puzzle and started a course with Technigo to deep dive
                into the world of UX design. I truly believe that having a
                background from communication and frontend development is what
                make me stand out as a UX designer, since I can understand and
                empathise with many different stakeholders when developing
                digital products. I&apos;m currently looking for a new role as a
                UX designer.
              </p>
              <Contact>
                Want to work with me? Feel free to contact me or just{" "}
                <a
                  href="https://www.linkedin.com/in/emmaurman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  say hello to me on LinkedIn{" "}
                  <Emoji symbol="👋" label="waving hand" />
                </a>
              </Contact>

              <h2>Skills</h2>
              <p>
                Design Thinking | Interaction design and usability | User
                analysis | User Experience and concept design | Wireframing &
                prototyping | Usability testing | User research and user
                interviews | Accessibility | Ethical design | Inclusive design |
                Brainstorming methods and facilitation | HTML | CSS | JavaScript
                | React | Web editing | Communication | Content creation |
                Writing for web & social media | UX writing
              </p>
              <h2>Toolbox</h2>
              <p>
                Figma and FigJam | Visual Studio Code | GitHub | Notion |
                Sitevision | WordPress | Bitbucket | Trello
              </p>
            </TextWrapper>
            <ImageWrapper>
              <AboutImg src={ProfilePicture} />
            </ImageWrapper>
          </AboutWrapper>
        </motion.div>
      </PageWrapper>
      <DefaultFooter />
    </>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  padding: 1rem 0;
`;

const Intro = styled.p`
  font-family: "Libre Baskerville", serif;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Contact = styled.p`
  font-weight: 500;
  margin-top: 1rem;

  a {
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-underline-offset: 0.6rem;
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
  }
`;

const AboutImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Emma profile picture",
}))`
  width: 40vw;
  height: auto;
  object-fit: cover;
  box-shadow: 10px 10px 0 var(--peach);

  @media screen and (max-width: 1024px) {
    width: 75%;
  }
`;

export default About;
