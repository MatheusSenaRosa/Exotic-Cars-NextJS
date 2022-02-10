import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import {
  Container,
  Button,
  ImageContainer,
  MainImageContainer,
} from "./styles";

import { Colors } from "../../pages/index";

type Props = {
  data: Colors[];
  onMove: (type: string) => void;
};

export function Carousel({ data, onMove }: Props) {
  return (
    <Container>
      <Button onClick={() => onMove("previous")}>
        <BsArrowLeft color="white" />
      </Button>
      {data.length > 0 && (
        <>
          <ImageContainer img={data[2].secondaryImage} />
          <MainImageContainer img={data[0].primaryImage} />
          <ImageContainer img={data[1].secondaryImage} />
        </>
      )}
      <Button onClick={() => onMove("next")}>
        <BsArrowRight color="white" />
      </Button>
    </Container>
  );
}
