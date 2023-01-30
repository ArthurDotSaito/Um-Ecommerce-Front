import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import axios from 'axios'
import imagebackground from '../assets/pizza.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.png'
import Authcontext from "../contexts/Authcontext";

export default function Carshop() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const { SetToken } = useContext(Authcontext)
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")))
    const [produto, setProduto] = useState([]);

    const [nome, setNome] = useState([]);

    return (Printarvalor(products));

}

function Printarvalor(valores) {
    const [title, setTitle] = useState([])
    const [valor, setValor] = useState([]);
    let titulo = [...title];
    let preco = [...valor];

    console.log(valores);
    variaveis();

    function variaveis(){
        valores.map(movimentacao => (Pegarnome(movimentacao.idProduct)))
    }

    return (<Body>

        {valores.map((movimentacao, i) => (

            <Linha>
                <Nome>{title[i]}</Nome>
                <Custo>{valor[i]}</Custo>
                <Quantidade>{movimentacao.quantity}</Quantidade>
                <Total>{Number(valor[i])*Number(movimentacao.quantity)}</Total>
                <Nome>Osasco</Nome>
            </Linha>))}
    </Body>
    )



    function Pegarnome(nome) {


        useEffect(() => {

            const promise = axios.get((`${process.env.REACT_APP_API_URL}/products/${nome}`))

            promise.then(resposta => {
                preco.push(resposta.data.price)
                titulo.push(resposta.data.title)
                setTitle(titulo);
                setValor(preco);
            })

            promise.catch(err => {
                console.log(err.response.data)
                alert("Deu erro tente novamente")
            })
        }, []
        )
    }
}


const Linha = styled.div`
color:fuchsia;
font-size: 40px;
display:flex;
width:1000px;
`

const Total = styled.div``

const Nome = styled.div``

const Custo = styled.div``

const Quantidade = styled.div``

const Body = styled.div`
min-height: 100vh;
background-color:lightgrey;
font-family: 'Poppins', sans-serif;
background-position: center;
`