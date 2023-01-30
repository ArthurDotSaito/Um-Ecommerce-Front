import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import axios from 'axios'
import imagebackground from '../assets/pizza.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import Authcontext from "../contexts/Authcontext";
import HeaderPage from "./../components/HeaderPage";
import Lista from "./ListaItens";

export default function Carshop(){
    return (
        <Body>
             <HeaderPage></HeaderPage>
            <Produtos>
                
                <Boxproducts>
                <h1>Confira seus itens:</h1>
                    <Cabecalho>
                        <Nome>Item</Nome>
                        <Quantidade>Qtde</Quantidade>
                        <Valor>Valor</Valor>
                        <Total>Total</Total>
                    </Cabecalho>
                    <Itens>
                        <Lista></Lista>
                        <Nome>Suco de Laranja</Nome>
                        <Quantidade>1</Quantidade>
                        <Valor>3.9</Valor>
                        <Total>7.8</Total>
                    </Itens>
                </Boxproducts>
            </Produtos>
        </Body>
    )
}

const Body = styled.main`
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    padding: 1rem 1rem 1rem 1rem;
`

const Produtos = styled.div``
const Boxproducts = styled.div`
display:flex;
align-items:center;
flex-direction:column;
h1{
    font-size: 20px;
    margin-bottom: 20px;
}
margin-top:80px;`

const Cabecalho= styled.div`
    display:flex;
    width:50%;
    font-size: 15px;
    margin-bottom: 15px;
`

const Itens = styled.div`
display:flex;
border-radius:5px;
width:50%;
background-color:lightgray;
height:20px;
align-items:center;`

const Nome = styled.div`
width:25%;
text-align:center;`
const Quantidade = styled.div`
width:25%;
text-align:center;`
const Valor = styled.div`
width:25%;
text-align:center;`
const Total = styled.div`
width:25%;
text-align:center;`