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
  cursor: pointer;
  font-family: "Space Mono", monospace;
  font-size: 1rem;

  svg {
    margin-right: 0.5rem;
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
