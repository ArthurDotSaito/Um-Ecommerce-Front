import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/cadastro/SignUpPage";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";
import Login from "./pages/Login";
import Authcontext from "./contexts/Authcontext";
import { useState } from "react";
import Carshop from "./pages/Carrinhos";

function App() {

  const [token,SetToken] = useState("")
  
  return (
    <Authcontext.Provider value={{ token, SetToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/carrinho" element={<Carshop />} />
          <Route path="/checkout" element = {<CheckoutPage />}/>
        </Routes>
      </BrowserRouter>
    </Authcontext.Provider>
  );
}

export default App;

