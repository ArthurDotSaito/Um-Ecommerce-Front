import { useState } from "react";
import React from "react";
import { OrderContainer,OrderItemsContainer } from "./OrderDetailsStyled";
import { OrderItem } from "../OrderItem/OrderItem";

const mock = [
    {
      id: 123,
      title: "Pizza de batatas",
      image:
        "https://truffle-assets.imgix.net/c74ddf83-pizza-de-batata_l_thumb.jpg",
      value: 40,
      qty: 1
    },
    {
      id: 456,
      title: "Cachaça sabor guaraná",
      image:
        "https://cf.shopee.com.br/file/2a0adad73fea8bfe7313b8267b5f1e04",
      value: 10,
      qty: 1
    },
    {
      id: 789,
      title: "Pudim de caçarola",
      image:
        "https://s2.glbimg.com/115DQucrWsNOUxf_ncmMUisprZI=/0x0:1080x819/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/w/a/cB6VP5QoOByFKEuCleIQ/jonreceitas-109758346-416338779271002-5424220606850697813-n.jpg",
      value: 40,
      qty: 1
    },
  ];

  const OrderDetails = () =>{
    const [orderData, setOrderData] = React.useState(undefined);
    const [isLoading, setIsLoading] = React.useState(false);
    console.log(mock);

    return(
        <OrderContainer walletIsEmpty={mock.length > 0}>
            <h1>Detalhes do pedido</h1>
            {isLoading && <p>Loading...</p>}
            {mock.length === 0 && !isLoading ? 
            <p>Não há registros de pedidos</p> :
            <>
                <OrderItemsContainer>
                    {mock.map((element,index) => 
                        <OrderItem 
                            orderData={element}
                            key={index}>
                        </OrderItem>)}
                </OrderItemsContainer>
                {/* <WalletBalance registerData={mock}></WalletBalance> */}
            </>} 
        </OrderContainer>
    ) 
  }

  export default OrderDetails