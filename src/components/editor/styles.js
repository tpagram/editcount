import styled from "styled-components"

export const EditorContainer = styled.div`
  height: 500px;
  width: 500px;
  resize: none;
  border: none;
  outline: none;
  background: ${props => props.theme.background};
`