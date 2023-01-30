import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/cadastro/SignUpPage";
import ProductsPage from "./pages/ProductsPage";
import Login from "./pages/Login";
import Authcontext from "./contexts/Authcontext";
import { useState } from "react";

function App() {
  return (
    <Authcontext.Provider value={{ }}>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Authcontext.Provider>
  );
}

export default App;

