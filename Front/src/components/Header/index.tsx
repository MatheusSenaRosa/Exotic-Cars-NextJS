import React from "react";

import { Container, LogoSection, SignSection } from "./styles";

import { ButtonSign } from "../ButtonSign";
import { FormHeader } from "../FormHeader";

export function Header() {
  return (
    <Container>
      <LogoSection>
        <h1>
          EXOTIC <span>CARS</span>
        </h1>
        <div>
          <ButtonSign text="Sign up" hasBorder={false} />
          <ButtonSign text="Sign in" hasBorder />
        </div>
      </LogoSection>

      <FormHeader />

      <SignSection>
        <ButtonSign text="Sign up" hasBorder={false}/>
        <ButtonSign text="Sign in" hasBorder />
      </SignSection>
    </Container>
  );
}
