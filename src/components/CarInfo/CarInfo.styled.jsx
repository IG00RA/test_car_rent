import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 541px;
  height: 752px;
  border-radius: 24px;
  background: #fff;
  position: relative;
`;

export const StyledXSVG = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  stroke: #121417;
  stroke-opacity: 0.8;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 24px;
  height: 24px;
  fill: none;
  transition: stroke 0.3s ease;
  &:hover,
  &:focus {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;
export const ModalCarImg = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ModalTitleWrap = styled.div`
  line-height: 24px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ModalTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;

export const ModalDataList = styled.li`
  margin-right: 6px;
  display: inline-block;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 150%;
  &:not(:last-child)::after {
    content: '';
    margin-left: 6px;
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 16px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='16' viewBox='0 0 2 16' fill='none'%3E%3Cpath d='M1 0V16' stroke='%23121417' stroke-opacity='0.1'/%3E%3C/svg%3E");
  }
`;
export const ModalDataWrap = styled.div`
  margin-bottom: 28px;
`;

export const ModalStyledModel = styled.span`
  color: #3470ff;
`;
export const StyledSVG = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  stroke: white;
  stroke-opacity: 0.8;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 18px;
  height: 18px;
  fill: none;
  transition: stroke 0.3s ease;
  &:hover,
  &:focus {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;
