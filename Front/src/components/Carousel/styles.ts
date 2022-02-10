import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10px;

  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75%;

  @media (max-width: 1700px) {
    width: 100%;
    height: 220px;
  }

  
`;

export const Button = styled.button`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  border: none;
  background-color: #313136;
  padding-top: 4px;
  font-size: 25px;
  box-shadow: 0px 3px 6px #00000029;

  cursor: pointer;

  @media (max-width: 1024px) {
    height: 37px;
    width: 37px;
    font-size: 22px;
  }

  @media (max-width: 768px) {
    height: 42px;
    width: 42px;
  }

  @media (max-width: 320px) {
    height: 30px;
    width: 30px;
    font-size: 18px;
  }
`;

export const ImageContainer = styled.article<{ img: string }>`
  width: 301px;
  height: 179px;
  background: ${(props) => `url(${props.img})`}no-repeat center;
  background-size: cover;
  margin-top: 40px;

  @media (max-width: 1440px) {
    width: 240px;
  }  

  @media (max-width: 1380px) {
    display: none;
  }
`;

export const MainImageContainer = styled.article<{ img: string }>`
  width: 473px;
  height: 240px;
  background: ${(props) => `url(${props.img})`}no-repeat center;
  background-size: cover;
  margin-right: -120px;

  @media (max-width: 1440px) {
    width: 300px;
    background-size: contain;
  }

  @media (max-width: 540px) {
    margin-left: -50px;
    width: 300px;
    background-size: contain;
  }

  @media (max-width: 320px) {
    margin-left: -60px;
    width: 240px;
    background-size: contain;
  }
`;
