import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { Button } from "./styles";

type Props = {
  text: string;
  back: boolean;
  action?: () => void;
};

export function ActionButton({ action, text, back }: Props) {
  return (
    <Button onClick={action} transparent={back}>
      {back && <BsArrowLeft className="icon" />}
      {text}
      {!back && <BsArrowRight className="icon" />}
    </Button>
  );
}
