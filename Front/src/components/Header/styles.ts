import styled from "styled-components";

export const Container = styled.header`
  height: 83px;
  font-size: 30px;
  padding: 0 112px 0 91px;
  display: flex;
  align-items: center;
  box-shadow: 0px 10px 30px #0000001a;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  @media (max-width: 1024px) {
    padding: 0 70px 0 70px;
  }

  @media (max-width: 980px) {
    padding: 0 20px 0 20px;
  }

  @media (max-width: 980px) {
    padding: 0 10px;
  }

  @media (max-width: 666px) {
    flex-direction: column;
    height: auto;
    padding: 10px 0;
  }
`;

export const LogoSection = styled.section`
  h1 {
    color: #313136;
    font-weight: 600;
    font-size: 32px;

    span {
      font-weight: normal;
      font-size: 21px;
      margin-left: -2px;
    }
  }

  @media (min-width: 666px) {
    div {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 20px;

      span {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 980px) {
    h1{
      text-align: center;
    }
  }
  

  @media (max-width: 666px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5px;

    div {
      display: flex;
    }
  }
`;

export const SignSection = styled.section`
  display: flex;

  button:first-child {
    margin-right: 28px;
  }

  @media (max-width: 1024px) {
    button:first-child {
      margin-right: 18px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 5px;

    button:first-child {
      margin-right: 0px;
    }
  }

  @media (max-width: 666px) {
    display: none;
  }
`;
