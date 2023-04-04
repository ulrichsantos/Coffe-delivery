import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import {  GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from './Routes';

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>  
    </ThemeProvider>
  )
}

export default App
