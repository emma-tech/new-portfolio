import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeft } from "react-bootstrap-icons";

const BackButtonStyled = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  color: var(--black);
  border: none;
  cursor: pointer;
`;

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step
  };

  return (
    <BackButtonStyled onClick={goBack}>
      <ArrowLeft color="#252525" size={20} title="Arrow" />
      Back to projects
    </BackButtonStyled>
  );
};

export default BackButton;
