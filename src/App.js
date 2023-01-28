import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authcontext from "./contexts/Authcontext";
import { useState } from "react";
import styled from "styled-components";

export default function App() {

    return (
      <Authcontext.Provider>
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
  