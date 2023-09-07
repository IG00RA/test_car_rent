import { StyledButton } from './MainButton.styled';

function MainButton({ width, text }) {
  return <StyledButton style={{ width }}>{text}</StyledButton>;
}

export default MainButton;
