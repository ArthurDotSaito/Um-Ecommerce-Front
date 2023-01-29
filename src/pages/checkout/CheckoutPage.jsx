import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import {PaymentMainContainer, CheckoutMainContainer, OrderDetailsContainer} from './CheckoutPageStyle'


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
  

const CheckoutPage = () =>{
    const navigate = useNavigate();
    const [isLoading, setIsloading] = React.useState(false);


    return(
        <CheckoutMainContainer>
            <HeaderPage></HeaderPage>
            <OrderDetailsContainer>
            </OrderDetailsContainer>
            <PaymentMainContainer>
            <PaymentDetails>
            </PaymentDetails>
            </PaymentMainContainer>
        </CheckoutMainContainer>
    )
}

export default CheckoutPage;