import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Water } from "react-bootstrap-icons";
/*Navigation

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100vw;
  position: absolute;
  padding: 1.5rem;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
`;


export const StyledLink = styled(Link)`
  margin-bottom: 1rem;
  max-width: fit-content;
  color: #252525;
  font-size: 1.3rem;
  position: relative;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-underline-offset: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #b36f6a;
  }

  &::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #b36f6a;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
&:hover::before {
  transform: scaleX(1);
  color: #b36f6a;
}
`;
*/
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  position: absolute;
  min-width: 100vw;
`;

const StyledMenu = styled.nav`
  @media screen and (max-width: 768px) {
    align-items: flex-start;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    background-color: var(--peach);
    width: 40%;
    height: 100vh;
    padding: 1rem 1.5rem;
    transition: right 0.7s ease;
  }
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem 0 0;

  @media screen and (max-width: 768px) {
    padding: 4rem 0 0 0;
  }
`;

const LogoLink = styled(Link)`
  font-family: "Libre Baskerville", serif;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  margin-bottom: 1rem;
  max-width: fit-content;
  color: var(--black);
  font-size: 1.3rem;
  position: relative;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-underline-offset: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: #b36f6a;
  }

  &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #b36f6a;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  &:hover::before {
    transform: scaleX(1);
    color: #b36f6a;
  }

  @media screen and (max-width: 768px) {
    margin: 0 0 1.5rem 0;
  }
`;

const StyledHamburger = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }
`;

function Header () {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader>
      <LogoLink to="/">emma.</LogoLink>
      <StyledMenu isOpen={isOpen}>
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
