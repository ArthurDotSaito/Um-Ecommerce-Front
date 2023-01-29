import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authcontext from "./contexts/Authcontext";
import { useState } from "react";
import styled from "styled-components";

export default function App() {

  const [token,SetToken] = useState("")

    return (
      <Authcontext.Provider value={{token,SetToken}}>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<Login />}></Route>
            </Routes>
  
          </div>
        </BrowserRouter>
      </Authcontext.Provider>
    );
  }
  