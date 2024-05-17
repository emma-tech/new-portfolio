// Libraries
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Icons
import { ArrowLeftCircleFill } from "react-bootstrap-icons";

// Styling
const BackButtonStyled = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: var(--black);
  border: none;
  font-family: "Space Mono", monospace;
  font-size: 1rem;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-underline-offset: 0.6rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  svg {
    margin-right: 1rem;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    text-decoration: none;
  }

  &:hover svg {
    transform: translateX(-50%);
  }
`;

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step
  };

  return (
    <BackButtonStyled onClick={goBack}>
      <ArrowLeftCircleFill color="#252525" size={20} title="Arrow" />
      Back to projects
    </BackButtonStyled>
  );
};

export default BackButton;
