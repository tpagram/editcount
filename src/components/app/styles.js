import styled, { injectGlobal } from "styled-components"

injectGlobal`
  // @import url('https://fonts.googleapis.com/css?family=Courgette|Open+Sans');
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`
export const mainTheme = {
  background: "white",
  foreground: "#21252b",
  accent: "#21252b",
}

export const Background = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;

  // word-wrap: break-word;
  // overflow-wrap: break-word;
  // text-rendering: optimizeLegibility;
  // font-size: 16px;
  // line-height: 1.8;
  // font-family: "Open Sans";
  //
  // display: flex;
  // flex-direction: column;
`

export const TextArea = styled.textarea`
  height: 500px;
  width: 500px;
  resize: none;
  border: none;
  outline: none;
  background: ${props => props.theme.background};
`