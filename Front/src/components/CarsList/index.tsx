import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { CarsList } from "src/pages";

import { CarListItem } from "..";

import { Container, List, BackToTopButton } from "./styles";

type Props = {
  data: CarsList[];
};

export function CarsList({ data }: Props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <List>
        {data.map((car) => (
          <CarListItem
            brand={car.brand}
            model={car.model}
            price={car.price}
            icon={car.icon}
            id={car.id}
            key={car.id}
          />
        ))}
      </List>

      <BackToTopButton onClick={scrollToTop}>
        <IoIosArrowUp />
      </BackToTopButton>
    </Container>
  );
}
