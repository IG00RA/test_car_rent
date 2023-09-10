import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
  align-items: end;
  justify-content: center;
  margin-bottom: 50px;
`;

export const SelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledSelectBrand = styled.select`
  width: 244px;
  height: 48px;
  padding-left: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
`;

export const StyledSelectPrice = styled.select`
  width: 125px;
  height: 48px;
  padding-left: 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
  option {
    background-color: #7b7b7b;
    padding: 14px 8px 14px 18px;
    border-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ddd;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
  }
`;

export const StyledLabel = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`;

export const StyledInputFrom = styled.input`
  width: 160px;
  height: 48px;
  padding-left: 24px;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;
  &:focus {
    border: none;
  }
`;

export const StyledInputTo = styled.input`
  width: 160px;
  height: 48px;
  padding-left: 24px;
  border: none;
  border-radius: 0px 14px 14px 0px;
  border-left: 1px solid rgba(138, 138, 137, 0.2);
  background-color: #f7f7fb;
  &:focus {
    border: none;
  }
`;
