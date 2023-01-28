import React from 'react';
import  { BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUpPage from './Pages/Cadastro/SignUpPage';

function App(){
    return(
        <BrowserRouter>
                <Routes>
                    <Route path = "/cadastro" element = {<SignUpPage />}/>
                </Routes>
        </BrowserRouter>
    )
} 

export default App;