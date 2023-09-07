import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  width: 1440px;
  grid-template-columns: repeat(4, 274px);
  gap: 29px;
  margin: 0px auto;
  padding: 150px 128px;
  list-style: none;
`;

export const CarItem = styled.li`
  width: 100%;
  height: 426px;
`;
