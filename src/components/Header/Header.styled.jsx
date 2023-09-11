import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: #3470ffd6;
  color: white;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 95px;
`;

export const HeaderWrapStyled = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;
export const LogoStyled = styled.img`
  width: 200px;
`;

export const HeaderListStyled = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin-right: 20px;
`;

export const HeaderLinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover,
  &:focus {
    color: #afc6fe;
  }
  &:active {
    color: #afc6fe;
  }
`;
