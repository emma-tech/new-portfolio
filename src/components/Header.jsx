import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Water } from "react-bootstrap-icons";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: absolute;
  z-index: 2;
  min-width: 100vw;
`;

const StyledMenu = styled.nav`
  @media screen and (max-width: 1024px) {
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-100%")};
    background-color: var(--peach);
    width: 60%;
    height: 100vh;
    padding: 1rem 1.5rem;
    transition: right 0.7s ease;
    z-index: 1;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    padding-top: 4rem
  }
`;

const LogoLink = styled(NavLink)`
  font-family: "Libre Baskerville", serif;
  text-decoration: none;
`;

const StyledLink = styled(NavLink)`
  margin-bottom: 1.5rem;
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
    content: "";
    position: absolute;
    display: block;
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
    text-decoration-style: solid;
    color: var(--black);
  }

  @media screen and (max-width: 1024px) {
    margin: 0 0 1.5rem 0;
  }
`;

const StyledHamburger = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }
`;

function Header () {
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
      <LogoLink to="/">emma.</LogoLink>
      <StyledMenu open={open}>
        <StyledHamburger onClick={toggleMenu}>
          <Water size={40} />
        </StyledHamburger>
        <MenuLinks>
          <StyledLink to="/projects">My work</StyledLink>
          <StyledLink to="/experience">Experience</StyledLink>
          <StyledLink to="/about">About me</StyledLink>
        </MenuLinks>
      </StyledMenu>
    </StyledHeader>
  );
}

export default Header;
