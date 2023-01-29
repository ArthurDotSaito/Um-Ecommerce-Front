import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/cadastro/SignUpPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/home" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
