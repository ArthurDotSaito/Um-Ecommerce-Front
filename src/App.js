import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/cadastro/SignUpPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/home" element={<ProductsPage />} />
        <Route path="/checkout" element = {<CheckoutPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
