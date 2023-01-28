import React from "react"
import { Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"

export default function App(){
  return (
    <>
    <Routes>
      <Route path="/" element={<ProductsPage />}></Route>
    </Routes>
    </>
  )
}