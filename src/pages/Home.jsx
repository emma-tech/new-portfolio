import styled from "styled-components";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";
import Emoji from "../components/Emoji";
import ProfilePicture from "../assets/emma1.jpg";
import { Github, Linkedin, Medium } from "react-bootstrap-icons";
import HomeFooter from "../components/HomeFooter";

function Home() {
  return (
    <motion.div
    className="card"
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
      <HomeWrapper>
        <HeroSection1>
          <HeroHeading>
            Hi! <Emoji symbol="👋" label="waving hand" /> I&apos;m Emma,
            <br />
            <Bold> UX Designer</Bold> with <Italic>frontend skills</Italic>.
          </HeroHeading>
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
        </HeroSection1>
        <HeroInnerWrapper>
          <HeroSection2>
          <Buttons>
          <StyledButton to="/work">My work</StyledButton>
          <StyledButton to="/about" role="button">About me</StyledButton>
          </Buttons>
          </HeroSection2>
          <HeroSection3>
            <AboutImg src={ProfilePicture} />
          </HeroSection3>
        </HeroInnerWrapper>
      </HomeWrapper>
      <HomeFooter />
    </motion.div>
  );
}

// Styled components

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  height: 100vh;
  overflow: hidden;
  background-color: var(--peachextralight);

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    height: auto;
  }
`;

const HeroSection1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;

  @media screen and (max-width: 1024px) {
    margin: 4rem 0 1rem 0;
    width: 100%;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  padding: 0 1rem 4rem 2rem;

  @media screen and (max-width: 1024px) {
    font-size: 2.5rem;
    padding: 4rem 0 2rem 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Bold = styled.span`
  font-weight: 700;
`;

const Italic = styled.span`
  font-style: Italic;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 2rem 2rem;

  a {
    margin-right: 2rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 0;

    svg {
      height: 30px;
      width: 30px;
    }

    a {
      margin-right: 1rem;
    }
  }
`;

const HeroInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 50vw;

  @media screen and (max-width: 1024px) { 
    width: 100%;
    height: 100%;
  }
`;

const HeroSection2 = styled.div`
  height: 40vh;
  width: 50vw;
  background-color: var(--peach);

  @media screen and (max-width: 1024px) { 
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: auto;
   margin: 6rem 0;
   background-color: transparent;
  }
`;

const Buttons = styled.div`
  display: none;

  @media screen and (max-width: 1024px) { 
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  }
`;

const StyledButton = styled(Link)`
  display: none;

  @media screen and (max-width: 1024px) { 
   display: flex;
   align-items: center;
   justify-content: center;
   border: 2px solid var(--black);
   border-radius: 2.5rem;
   margin: 1.5rem;
   padding: 0.5rem 3rem;
   text-decoration: none;
   font-size: 1.5rem;
   transition: all 0.5s ease;
   cursor: pointer;
   box-shadow: 5px 5px 0 var(--peach);

   &:hover {
    background-color: var(--black);
    color: var(--peachextralight);
    box-shadow: 2px 2px 0 var(--peach);
   }
  }
`;

const HeroSection3 = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 60vh;
  width: 50vw;
  background-color: var(--peachlight);

  @media screen and (max-width: 1024px) {
    /*justify-content: center; 
    margin: 2rem 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    */
    display: none;
  }
`;

const AboutImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Emma profile picture",
}))`
  width: 50%;
  height: auto;
  object-fit: cover;

  @media screen and (max-width: 1024px) { 
   /*box-shadow: 10px 10px 0 var(--peach);*/
   display: none;
  }
`;

export default Home;
