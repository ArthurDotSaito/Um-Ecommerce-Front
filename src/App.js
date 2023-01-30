import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/cadastro/SignUpPage";
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
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<ProductsPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/carrinhos" element={<Carshop />} />
        </Routes>
      </BrowserRouter>
    </Authcontext.Provider>
  );
}

export default App;

