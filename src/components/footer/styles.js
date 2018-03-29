import styled from "styled-components"

export const ModeSwitcher = styled.button`
  width: 60px;
  height: 60px;
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.color};
  border: none;
  outline: none;

  transform: perspective(1px) translateZ(0);
  transition: transform 0.3s;
  &:hover {
    color: ${props => props.theme.accent};
    transform: scale(1.2);
  }
  &:active {
    transform: rotate(180deg);
  }
`