import { StyledButton } from './MainButton.styled';

function MainButton({ width, text, onClick }) {
  return (
    <StyledButton onClick={onClick} type="button" style={{ width }}>
      {text}
    </StyledButton>
  );
}

export default MainButton;
