import styled from "styled-components";

export const Button = styled.button<{ transparent?: boolean }>`
  width: 177px;
  height: 50px;
  color: ${(props) => (props.transparent ? "#313136" : "white")};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  justify-content: space-around;
  padding: 0 15px;

  border: 1px solid #313136;
  border-radius: 25px;
  background-color: ${(props) =>
    props.transparent ? "transparent" : "#313136"};

  font-size: 16px;
  font-weight: 300;

  .icon {
    font-size: 30px;
    margin-top: 2px;
  }

  @media (min-width: 541px) {
    ${({ transparent }) => transparent && "display: none;"}
  }

  @media (max-width: 375px) {
    width: 150px;
    font-size: 13px;

    .icon {
      font-size: 25px;
      margin-top: 2px;
    }
  }

  @media (max-width: 320px) {
    width: 120px;
    height: 45px;
  }
`;
