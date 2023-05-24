import React from 'react'
import GlobalStyle from "./style/GlobalStyle"
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import theme from './style/theme'
import Home from './components/pages/Home'


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}
export default App;
