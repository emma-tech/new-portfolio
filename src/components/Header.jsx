// Libraries
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

// Assets
import Logo from "../assets/logo.svg";

// Icons
import {
  Water,
  Github,
  Linkedin,
  Medium,
  ArrowRight,
} from "react-bootstrap-icons";

// Global styling
import { ExternalLink } from "../styling/GlobalStyling";

// Styling
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  z-index: 2;
  clip-path: initial;
  width: 100%;

  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--lightpurple);
    padding: 1rem 2rem 4rem;
    clip-path: polygon(0px 0px, 100% 0px, 100% 70%, 0px 100%);
    width: 100%;
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    background-color: var(--lightpurple);
    width: 60%;
    height: 100vh;
    padding: 6rem 2rem;
    transition: right 0.6s ease-in-out;
    z-index: 2;
  }
`;

const LogoLink = styled(NavLink)`
  margin: 0;
  padding: 0;
`;

const LogoImg = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Logo",
}))`
  width: 80px;
  height: 100%;
  object-fit: cover;
`;

const StyledLink = styled(NavLink)`
  margin: 0 0 3rem 0;
  max-width: fit-content;
  color: var(--black);
  font-size: 1.5rem;
  position: relative;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-underline-offset: 0.6rem;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: var(--black);
  }

  &::before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--black);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: scaleX(1);
    color: var(--black);
  }

  &.active {
    color: var(--black);
    font-weight: 700;
    text-decoration-style: solid;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 0 0 4rem;
  }
`;

const StyledHamburger = styled.div`
  display: block;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Space Grotesk", sans-serif;
    font-weight: 700;
    margin: 1rem 0 0 0;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0 0 0;
`;

const IconLink = styled.a`
  margin-right: 1.5rem;

  svg {
    height: 30px;
    width: 30px;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <StyledHeader>
      <LogoLink to="/">
        <LogoImg src={Logo} />
      </LogoLink>
      <StyledMenu open={open} /*ref={menuRef}*/>
        <StyledHamburger onClick={toggleMenu}>
          <Water size={40} />
        </StyledHamburger>

        <StyledLink to="/portfolio">Portfolio</StyledLink>
        <StyledLink to="/experience">Experience</StyledLink>
        <StyledLink to="/about">About me</StyledLink>

        <Contact>
          <p>Contact me</p>
          <ExternalLink href="mailto:emma.urman@gmail.com">
            Send an email
            <ArrowRight color="#252525" size={20} title="Arrow" />
          </ExternalLink>
          <Icons>
            <IconLink
              href="https://www.linkedin.com/in/emmaurman/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin color="#252525" size={40} title="LinkedIn" />
            </IconLink>
            <IconLink
              href="https://github.com/emma-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github color="#252525" size={40} title="GitHub" />
            </IconLink>
            <IconLink
              href="https://medium.com/@emma-urman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Medium color="#252525" size={40} title="Medium" />
            </IconLink>
          </Icons>
        </Contact>
      </StyledMenu>
    </StyledHeader>
  );
}

export default Header;
