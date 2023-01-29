import React from 'react';
import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpPage from './Pages/Cadastro/SignUpPage';
import ProductsPage from "./pages/ProductsPage"

function App(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path = "/cadastro" element = {<SignUpPage />}/>
                </Routes>
                <Routes>
                    <Route path="/" element={<ProductsPage />}></Route>
                </Routes>
        </BrowserRouter>
    )
} 

export default App;
