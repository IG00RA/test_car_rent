import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  background-color: #3470ff;
  color: white;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapStyled = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
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
