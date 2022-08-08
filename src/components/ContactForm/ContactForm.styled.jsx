import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  padding: 8px;
  border: 1px solid rgb(95, 149, 183); ;
`;

export const Input = styled.input`
  position: relative;
  font-size: 12px;
  background: #ecf1f4;
  border-radius: 4px;
  line-height: 25px;
  height: 25px;
  width: 250px;
  padding: 0 10px;
  border: 1px solid #b6cfeb;
  margin-bottom: 20px;
  &:active {
    box-shadow: rgb(95, 149, 183);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  border-radius: 4px;
  border-color: rgb(95, 149, 183);
  &:active {
    box-shadow: rgb(95, 149, 183) 0px 13px 27px -5px,
      rgb(95, 149, 183) 0px 8px 16px -8px;
    background-color: rgb(139, 173, 194);
  }
`;
