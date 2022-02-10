import styled from "styled-components";

export const Button = styled.button<{ hasBorder: boolean }>`
  width: 84px;
  height: 36px;
  border-radius: 13px;
  background-color: white;
  color: #7b89f4;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  ${(props) =>
    props.hasBorder &&
    `border: 2px solid #7b89f4; &&:hover {
    background-color: #7b89f4;
    color: white;
  }`}

  ${(props) => !props.hasBorder && "border: 0;"}

  
  @media (max-width: 768px) {
    height: 30px;
    width: 80px;
    border-radius: 10px;
    font-size: 14px;
  }

  @media (max-width: 425px) {
    height: 28px;
    width: 76px;
    border-radius: 9px;
    font-size: 13px;
  }
`;
