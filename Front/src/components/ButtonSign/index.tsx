import React from "react";

import { Button } from "./styles";

type Props = {
  text: string;
  hasBorder: boolean;
};

export function ButtonSign({ text, hasBorder }: Props) {
  return <Button hasBorder={hasBorder}>{text}</Button>;
}
