import styled from "styled-components";

export const Container = styled.main`
  padding-top: 83px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
`;

export const List = styled.section`
  margin-top: 22px;

  display: grid;
  grid-template-columns: 5fr 5fr 5fr 5fr 5fr;
  grid-row-gap: 32px;
  grid-column-gap: 24px;

  @media (min-width: 2560px) {
    grid-template-columns: 6fr 6fr 6fr 6fr 6fr 6fr;
  }

  @media (max-width: 1440px) {
    grid-template-columns: 4fr 4fr 4fr 4fr;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 3fr 3fr 3fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

export const BackToTopButton = styled.div`
  width: 73px;
  height: 73px;
  border-radius: 50%;
  cursor: pointer;

  position: fixed;
  bottom: 50px;
  right: 187px;

  background: #e6d3f1;
  opacity: 0.9;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: white;

  @media (min-width: 2560px) {
    right: 355px;
  }

  @media (max-width: 1440px) {
    right: 110px;
  }

  @media (max-width: 1024px) {
    right: 60px;
  }

  @media (max-width: 768px) {
    right: 85px;
    width: 63px;
    height: 63px;
  }

  @media (max-width: 425px) {
    right: 5px;
  }

  @media (max-width: 375px) {
    right: 40%;
    bottom: 10px;
  }
`;
