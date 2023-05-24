import React from 'react'
import GlobalStyle from "./style/GlobalStyle"
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'


function App() {
  return (
    <>
        <GlobalStyle />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
    </>
  );
}
export default App;
