import React from "react"

import { ButtonWrapper } from "../elements"

export const Button = ({ href, children }) => {
  return <ButtonWrapper to={href}>{children}</ButtonWrapper>
}
