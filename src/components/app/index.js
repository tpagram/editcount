import React, { Component } from 'react';

import { Background, mainTheme } from "./styles"
import { ThemeProvider } from "styled-components"

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from '../../reducers'

import EditBox from "../edit_box"
import Footer from "../footer"

const store = createStore(rootReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>
          <Background>
            <EditBox/>
            <Footer/>
          </Background>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
