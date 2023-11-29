import React from "react";
import { ContainerItens as Container } from "./styles.js";

function ContainerItens({ children, isBlur }) {
  return <Container isBlur={isBlur}>{children}</Container>;
}

export default ContainerItens;
