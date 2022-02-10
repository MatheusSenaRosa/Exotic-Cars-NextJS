import styled from "styled-components";

export const Container = styled.article`
  height: 223px;
  width: 287px;
  padding: 23px 16px 20px 17px;
  border-radius: 20px;
  background: #f8f8fa;
  cursor: pointer;

  &&:hover {
    background: transparent linear-gradient(52deg, #a1a7f4 0%, #e6d3f1 100%) 0%
      0% no-repeat padding-box;
  }
`;

export const Header = styled.section`
  font-size: 17px;
  color: #313136;
  display: flex;
  justify-content: space-between;

  h3 {
    font-weight: bold;
  }

  h4 {
    font-weight: 300;
  }
`;

export const OptionsButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22px;
  padding-top: 5px;

  div {
    background-color: #c8c8ca;
    height: 6px;
    width: 6px;
    border-radius: 50%;
  }
`;

export const ImageContainer = styled.section<{ urlImage: string }>`
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }
`;

export const Footer = styled.section`
  display: flex;
  justify-content: flex-end;

  color: #313136;
  font-weight: bold;
  font-size: 14px;

  h4 {
    font-size: 24px;
    margin-left: 2px;

    span {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;
