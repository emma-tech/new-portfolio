import styled from "styled-components";
import Emoji from "../components/Emoji";
import ProfilePicture from "../assets/emma_img.jpg";
import { Github, Linkedin, Medium } from "react-bootstrap-icons";

function Home() {
  return (
    <>
      <HeroWrapper>
        <HeroSection1>
          <HeroHeading>
            Hi! <Emoji symbol="👋" label="waving hand" /> I'm Emma, 
           <br/><Bold> UX Designer</Bold> with <Italic>frontend skills</Italic>.
          </HeroHeading>
          <Icons>
          <a
            href="https://www.linkedin.com/in/emmaurman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color="#252525" size={40} title="LinkedIn"/>
          </a>
          <a
            href="https://github.com/emma-tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="#252525" size={40} title="GitHub"/>
          </a>
          <a
            href="https://medium.com/@emma-urman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Medium color="#252525" size={40} title="Medium"/>
          </a>
          </Icons>
        </HeroSection1>
        <HeroInnerWrapper>
          <HeroSection2>
            <AboutSection>
              <AboutImg src={ProfilePicture} />
            </AboutSection>
          </HeroSection2>
          <HeroSection3></HeroSection3>
        </HeroInnerWrapper>
      </HeroWrapper>
    </>
  );
}

// Styled components

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  min-height: 100vh;
  background-color: #fff0e5;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const HeroInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 50vw;
`;

const HeroSection1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`;

const HeroHeading = styled.h1`
  font-size: 4rem;
  padding-bottom: 4rem;
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

  a {
    margin-right: 2rem;
  }
`;

const HeroSection2 = styled.div`
  height: 55vh;
  background-color: #ffe2cc;
`;

const AboutSection = styled.div`
  width: 50%;
  height:100%;
`;

const AboutImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Emma profile picture",
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroSection3 = styled.div`
  height: 45vh;
  background-color: #ffbe98;
  padding: 1rem;
`;

export default Home;
