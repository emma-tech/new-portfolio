// Libraries
import styled from "styled-components";
import { motion } from "framer-motion";

// Assets
import ProfilePicture from "../assets/emma1.jpg";

// Components
import Emoji from "../components/Emoji";

// Global styling
import { PageTitle } from "../styling/GlobalStyling.js";

// Styling
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

  h2 {
    margin: 2rem 0 0.5rem 0;
  }
`;

const TextWrapper = styled.div`
  p {
    margin: 1.2rem 0;
  }
`;

const Intro = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Contact = styled.p`
  font-weight: 700;

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
  box-shadow: 10px 10px 0 var(--lightpurple);

  @media screen and (max-width: 1024px) {
    width: 75%;
  }
`;

function About() {
  return (
    <>
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
              Hi and welcome to my portfolio!{" "}
              <Emoji symbol="👋" label="waving hand" /> I&apos;m Emma, a UX
              designer & frontend developer with a background in communication
              and marketing.
            </Intro>
            <p>
              User experience and inclusive design have always been close to my
              heart, so after working with communication and frontend
              development for a few years I decided that it was time to turn
              this passion into a reality. So I added a final piece to my career
              puzzle and started a course with Technigo to deep dive into the
              world of UX design. I truly believe that having a background from
              communication and frontend development is what make me stand out
              as a UX designer, since I can understand and empathise with many
              different stakeholders when developing digital products.{" "}
            </p>
            <p>
              If you can&apos;t find me at my computer I&apos;m spending almost
              all of my spare time with my 1.5 year old son, who&apos;s always
              my greatest source of inspiration{" "}
              <Emoji symbol="✨" label="stars" /> When having some alone-time, I
              like spending it with friends, go swimming, walking or playing
              X-box <Emoji symbol="🎮" label="gaming controller" />
            </p>

            <Contact>
              I&apos;m currently looking for a new role or projects/consulting
              opportunities as a UX designer and/or frontend developer. Want to
              work with me? Feel free to contact me or just{" "}
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
              UX/UI design | Design Thinking | User analysis | Branding &
              concept design | Wireframing & prototyping | Interaction design &
              usability | User research & user interviews | Accessibility |
              Ethical design | Inclusive design | Brainstorming methods &
              facilitation | HTML | CSS | JavaScript | React | Web editing |
              Communication | Content creation | UX writing
            </p>
            <h2>Toolbox</h2>
            <p>
              Figma and FigJam | Visual Studio Code | Sitevision | WordPress |
              GitHub | Bitbucket | Jira | Trello | Notion
            </p>
          </TextWrapper>
          <ImageWrapper>
            <AboutImg src={ProfilePicture} />
          </ImageWrapper>
        </AboutWrapper>
      </motion.div>
    </>
  );
}

export default About;
