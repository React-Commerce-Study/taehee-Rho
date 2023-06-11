import React from 'react'
import GlobalStyle from "./style/GlobalStyle"
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Detail from './components/pages/Detail';


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/products" element={<Detail />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
