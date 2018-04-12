import React from "react"
// import { withTheme } from "styled-components"
import { ButtonStyle } from "./styles"

const Button = ({ mode, onClick }) => (
  <ButtonStyle onClick={() => onClick(mode)}>
    {mode}
  </ButtonStyle>
)

export default Button
