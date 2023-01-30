import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import { RiseLoader } from "react-spinners";
import { Link } from "react-router-dom";

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
            {productsArray.length === 0 ? <Noproducts>
            <p>Não há registros de pedidos</p>
            <Link to="/home">
            <Voltar>Voltar</Voltar>
            </Link>
            </Noproducts>:
            <>
                
                    {productsArray.map((element, index) =>
                
                        <Itens>
                       <Nome>{element.title}</Nome>
                       <Quantidade>{cartArray[index].quantity}</Quantidade>
                       <Valor>{element.price}</Valor>
                       <Total>{Number(cartArray[index].quantity)*Number(element.price)}</Total>
                       <Icon onClick={() => Remove(cartArray[index].idProduct)}>X</Icon>
                       </Itens> )}

                       <Soma> O total é de R$ {somatotal}</Soma>
                       <Link to="/checkout">
                       <Button>Confirmar pedido</Button>
                       </Link>
                
            </>} 
            </Boxproducts>

      )

      function Remove(item) {
        let cart = JSON.parse(localStorage.getItem("cart"));

        const findedSearch = cart.find(
            (order) => order.idProduct === item
          );

        if(findedSearch){
            const index = cart.indexOf(findedSearch);
            cart.splice(index,1);
            localStorage.setItem("cart", JSON.stringify(cart));
        }

        document.location.reload(true);
      }

     
}
const Noproducts = styled.div`
 display:flex;
    width:70%;
    font-size: 15px;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
        margin-top:20px;
    }`

const Voltar = styled.button`
background-color:#EB5757;
border-radius:50px;
font-size:15px;
color:white;
margin-top:30px;
padding: 0px 100px;
height: 49px;
width:100%;`

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
width:100%;
padding: 0px 100px;
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
    margin-bottom: 50px;
}
margin-top:80px;`

const Cabecalho= styled.div`
    display:flex;
    width:70%;
    font-size: 15px;
    margin-bottom: 50px;
`
