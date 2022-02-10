import styled from "styled-components";

export const Screen = styled.div`
  min-height: 100vh;
background: transparent linear-gradient(125deg, #ffffff 0%, #d8d7d7 100%) 0%
    0% no-repeat padding-box;
`;

export const Main = styled.main`
  padding: 120px 166px 0 90px;
  height: 100%;
  

  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    padding: 136px 96px 0 60px;
  }

  @media (max-width: 425px) {
    padding: 136px 5px 10px 5px;
  }
`; 

export const DataCarArea = styled.div`
  display: flex;

  div {
    margin-left: 39px;
    color: #313136;

    h2 {
      font-size: 50px; 
      font-weight: bold;
    }

    h3 {
      display: flex;
      align-items: flex-end;
      height: 50px;
      font-size: 40px;
      font-weight: 300;
    }
  }

  @media (max-width: 768px) {
    div {
      h2 {
        font-size: 40px;
      }
      h3 {
        font-size: 30px;
        height: 40px;
      }
    }
  }

  @media (max-width: 540px) {
    img {
      width: 70px;
    }

    div {
      margin-left: 10px;
      h2 {
        font-size: 30px;
      }

      h3 {
        font-size: 25px;
        height: 35px;
      }
    }
  }

  @media (max-width: 375px) {
    img {
      width: 50px;
    }

    div {
      h2 {
        font-size: 25px;
      }

      h3 {
        font-size: 22px;
        height: 30px;
        font-weight: 300;
      }
    }
  }
`;

export const FeaturedCarContent = styled.div<{ image: string }>`
  display: flex;
  justify-content: space-between;

  .imgFeaturedCar {
    height: 388px;
    width: 743px;
    background: ${({ image }) => `url(${image})`} no-repeat center;
    background-size: contain;
  }

  .ContainerButtonCatalog {
    margin-right: 77px;
    display: flex;
    align-items: center;

    button {
      width: 177px;
      height: 50px;
      color: #313136;

      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      border: 1px solid #313136;
      border-radius: 25px;
      background-color: transparent;

      font-size: 16px;
      font-weight: 300;
      padding-right: 8px;

      .icon {
        font-size: 30px;
        margin-right: 5px;
        margin-top: 2px;
      }
    }
  }

  .detailContainer {
    text-align: center;
    h3 {
      font-size: 50px;
      font-weight: bold;
    }
    h4 {
      font-size: 30px;
      font-weight: 300;
    }
  }

  @media (max-width: 1024px) {
    .detailContainer {
      h3 {
        margin-top: 60px;
      }
    }
  }

  @media (max-width: 820px) {
    .imgFeaturedCar {
      height: 300px;
    }
    .ContainerButtonCatalog {
      margin-right: 20px;
      button {
        width: 120px;
        height: 40px;
        font-size: 12px;

        .icon {
          font-size: 20px;
          margin-right: 4px;
        }
      }
    }

    .detailContainer {
      h3 {
        font-size: 40px;
        margin-top: 40px;
      }
      h4 {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 540px) {
    .ContainerButtonCatalog {
      display: none;
    }

    .detailContainer {
      h3 {
        font-size: 30px;
        margin-top: 50px;
      }
      h4 {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 375px) {
    .imgFeaturedCar {
      height: 230px;
    }
  }

`;

export const ContainerActionButtons = styled.div`
  align-self: center;
  display: flex;

  @media (max-width: 768px) {
    margin-top: -30px;
    margin-bottom: 10px;
  }

  @media (max-width: 540px) {
    width: 100%;
    justify-content: space-between;
    padding: 0 20px;
  }

  @media (max-width: 320px) {
    width: 100%;
    justify-content: space-between;
  }
`;
