import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 44px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
  line-height: 143%;
  transition: background 0.3s ease;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
`;
