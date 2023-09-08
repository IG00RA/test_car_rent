import { StyledButton } from './MainButton.styled';

function MainButton({ width, text, onClick, phoneNumber }) {
  if (phoneNumber) {
    return (
      <a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none' }}>
        <StyledButton onClick={onClick} type="button" style={{ width }}>
          {text}
        </StyledButton>
      </a>
    );
  }
  return (
    <StyledButton onClick={onClick} type="button" style={{ width }}>
      {text}
    </StyledButton>
  );
}

export default MainButton;
