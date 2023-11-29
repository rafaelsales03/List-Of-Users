import React from "react";

import { Button as ContainerButton } from "./styles.js";

function Button({ children, ...props}) {
  return <ContainerButton { ...props}>{children}</ContainerButton>;
}

export default Button;
