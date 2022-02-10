import styled from "styled-components";

export const Form = styled.form`
  background-color: #f3f1fc;
  width: 540px;
  height: 36px;
  border-radius: 18px;
  padding-left: 27px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 500px;
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    width: 500px;
    padding-left: 10px;
  }

  @media (max-width: 520px) {
    width: 100%;
  }  
`;

export const IconInput = styled.span<{ margin?: number }>`
  font-size: 23px;
  margin-left: ${(props) => props.margin}px;
  height: 100%;
  display: flex;

  @media (max-width: 425px) {
    margin-left: ${(props) => props.margin && props.margin / 1.5}px;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    margin-left: ${(props) => props.margin && props.margin / 10}px;
  }
`;

export const SectionInputs = styled.section`
  display: flex;
  align-items: center;

  input {
    background-color: #f3f1fc;
    border: 0;
    font-size: 14px;
    font-weight: 600;
    color: #656469;
    height: 70%;
    outline: none;
    margin-left: 3px;
  }

  @media (max-width: 520px) {
    input {
      font-size: 12px;
    }
  }
`;

export const InputAddress = styled.input`
  width: 141px;
  margin-right: 24px;

  @media (max-width: 520px) {
    width: 100px;
    margin-right: 14px;
  }

  @media (max-width: 415px) {
    width: 90px;
    margin-right: 5px;
  }

  @media (max-width: 392px) {
    width: 50px;
    margin-right: 5px;
  }
`;

export const InputDate = styled.input`
  &&::-webkit-inner-spin-button,
  &&::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
  width: 90px;

  @media (max-width: 425px) {
    width: 80px;
  }
`;

export const IconSearch = styled.span`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 15px;
  margin-right: 2px;
  box-shadow: 0px 3px 15px #00000014;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7b89f4;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 20px;

  &:hover {
    background-color: #7b89f4;
    color: white;
  }

  @media (max-width: 320px) {
    font-size: 18px;
  }
`;
