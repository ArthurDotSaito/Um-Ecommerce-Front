import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";

export default function Lista(){
    const [productsArray, setProductsArray] = React.useState([]);

    let cart = localStorage.getItem('cart');
    let cartArray = JSON.parse(cart);
    let idProdutos = [];
    let somatotal = 0;

    console.log(cart);
    console.log(cartArray);

    for(let i=0; i < cartArray.length; i++){
        idProdutos.push(cartArray[i].idProduct);
    }
    console.log(idProdutos);

    useEffect(() => {
        const fetchData = async () => {
          try {
            let tempProductsArray = [];
            let products = []
            for(let i = 0; i < idProdutos.length; i++) {
              const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${idProdutos[i]}`);
              tempProductsArray.push(response.data);
              products.push(response.data.title);
            }
            //formData.products = products;
            setProductsArray(tempProductsArray);
          } catch (error) {
            console.log("Falhei no GETProducts")
            console.log(error);
          }
        };
        fetchData();
      }, []);
  
      console.log(productsArray);

      for (let y=0;y<productsArray.length;y++){
            somatotal += Number(cartArray[y].quantity)*Number(productsArray[y].price);
      }

      return(
        <Boxproducts>
        <h1>Confira seus itens:</h1>
            <Cabecalho>
                <Nome>Item</Nome>
                <Quantidade>Qtde</Quantidade>
                <Valor>Valor</Valor>
                <Total>Total</Total>
            </Cabecalho>
            {productsArray.length === 0 ? 
            <p>Não há registros de pedidos</p> :
            <>
                
                    {productsArray.map((element, index) =>
                
                        <Itens>
                       <Nome>{element.title}</Nome>
                       <Quantidade>{cartArray[index].quantity}</Quantidade>
                       <Valor>{element.price}</Valor>
                       <Total>{Number(cartArray[index].quantity)*Number(element.price)}</Total>
                       <Icon onClick={() => Teste(cartArray[index].idProduct)}>X</Icon>
                       </Itens> )}

                       <Soma> O total é de R$ {somatotal}</Soma>
                       <Button>Confirmar pedido</Button>
                
            </>} 
            </Boxproducts>

      )

      function Teste(item) {
        console.log(item);
      }

     
}

const Soma = styled.div`
margin-top: 30px;
font-size:20px;`

const Icon = styled.button`
background-color:#EB5757;
height:40px;
width:40px;
border-radius:5px;
color:white;
font-size:15px;
`


const Button = styled.button`
background-color:#EB5757;
border-radius:50px;
font-size:20px;
color:white;
margin-top:30px;
height: 49px;
width:30%;
`

const Itens = styled.div`
display:flex;
border-radius:5px;
width:70%;
background-color:lightgray;
height:40px;
align-items:center;
margin-bottom:10px;`

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
    width:70%;
    font-size: 15px;
    margin-bottom: 15px;
`
