import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const BackButtonStyled = styled.button`
  background-color: #007bff;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack(); // Go back one step in history
  };

  return (
    <BackButtonStyled onClick={goBack}>
      Back
    </BackButtonStyled>
  );
};

export default BackButton;