import { useEffect, useState } from "react";
import React from "react";
import { OrderContainer,OrderItemsContainer } from "./OrderDetailsStyled";
import { OrderItem } from "../OrderItem/OrderItem";
import { OrderBalance } from "../OrderBalance/OrderBalance";
import axios from "axios";

  const OrderDetails = (props) =>{
    const [isLoading, setIsLoading] = React.useState(false);
    const [productsArray, setProductsArray] = React.useState([]);
    const {formData} = props;
   
    let cart = localStorage.getItem('cart');
    let cartArray = JSON.parse(cart);
    let idProdutos = [];

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
          formData.products = products;
          setProductsArray(tempProductsArray);
        } catch (error) {
          console.log("Falhei no GETProducts")
          console.log(error);
        }
      };
      fetchData();
    }, []);

    console.log(productsArray);
    
    return(
        <OrderContainer walletIsEmpty={productsArray.length > 0}>
            <h1>Detalhes do pedido</h1>
            {isLoading && <p>Loading...</p>}
            {productsArray.length === 0 && !isLoading ? 
            <p>Não há registros de pedidos</p> :
            <>
                <OrderItemsContainer>
                    {productsArray.map((element, index) => 
                        <OrderItem 
                            orderData={element}
                            key={index}>
                        </OrderItem>)}
                </OrderItemsContainer>
                <OrderBalance orderData={productsArray} setFormData = {formData}></OrderBalance>
            </>} 
        </OrderContainer>
    ) 
  }

  export default OrderDetails