import { useContext, useState, useEffect } from "react";
import axios from 'axios'
import styled from "styled-components";

export default function Lista(){
    
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")))
    const [valores1,setValores] = useState([]);
    const [titulos1,setTitulos] = useState([]);
    let title = "";
    let price = 0;
    let titles = [];
    let valores = [];

    fazeromap(products);

    function fazeromap(itens){
        itens.map(produto => puxardados(produto.idProduct))

        function puxardados(id){
            
                console.log(id);
                const promise = axios.get((`${process.env.REACT_APP_API_URL}/products/${id}`))
    
                promise.then(resposta => {
                    extrairdados(resposta.data)

                    function extrairdados(res){
                        titles = [...titulos1]
                        valores = [...valores1]

                        titles.push(res.title)
                        valores.push(res.price)

                    }
                })
    
                promise.catch(err => {
                    console.log(err.response.data)
                    alert("Deu erro tente novamente")
                })


               
            
            
        }

        
    }
    console.log(valores1);
    return (
        
        <Teste>teste</Teste>
    )
}

const Teste = styled.div`
`

const Valor = styled.div`
width:25%;
text-align:center;`