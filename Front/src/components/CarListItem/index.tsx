import { useRouter } from "next/router";
import React from "react";

import {
  Container,
  Footer,
  Header,
  OptionsButton,
  ImageContainer,
} from "./styles";

type Props = {
  id: number;
  brand: string;
  model: string;
  price: number;
  icon: string;
};

export function CarListItem({ brand, model, price, icon, id }: Props) {
  const router = useRouter();

  const onClickHandler = () => {
    router.push(`/details/${id}`);
  };

  return (
    <Container onClick={onClickHandler}>
      <Header>
        <div>
          <h3>{brand}</h3>
          <h4>{model}</h4>
        </div>
        <OptionsButton>
          <div />
          <div />
          <div />
        </OptionsButton>
      </Header>

      <ImageContainer urlImage={icon}>
        <img src={icon} alt={model} />{" "}
      </ImageContainer>

      <Footer>
        <span>$</span>
        <h4>
          {price}
          <span>/day</span>
        </h4>
      </Footer>
    </Container>
  );
}
