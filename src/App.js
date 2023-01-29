import React from 'react';
import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpPage from './Pages/Cadastro/SignUpPage';
import CheckoutPage from './Pages/Checkout/CheckoutPage';

function App(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path = "/cadastro" element = {<SignUpPage />}/>
                    <Route path = "/cadastro" element = {<CheckoutPage />}/>
                </Routes>
        </BrowserRouter>
    )
} 

export default App;