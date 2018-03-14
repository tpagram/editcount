import React, { Component } from 'react';
import { Background, mainTheme, TextArea } from "./styles"
import { ThemeProvider } from "styled-components"

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <Background>
        <TextArea>
          testing testing testing
        </TextArea>
        </Background>
      </ThemeProvider>
    );
  }
}

export default App;
