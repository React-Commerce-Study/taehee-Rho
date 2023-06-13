import React from 'react'
import GlobalStyle from "./style/GlobalStyle"
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Detail from './components/pages/Detail';
import Login from "./components/pages/Login"


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/products/:product_id" element={<Detail />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
