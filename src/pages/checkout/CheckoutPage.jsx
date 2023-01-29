import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import {PaymentMainContainer, CheckoutMainContainer, OrderDetailsContainer, OrderAndPaymentContainer} from './CheckoutPageStyle'

const CheckoutPage = () =>{
    const navigate = useNavigate();
    const [isLoading, setIsloading] = React.useState(false);


    return(
        <CheckoutMainContainer>
            <HeaderPage></HeaderPage>
            <OrderAndPaymentContainer>
                <OrderDetailsContainer>
                    <OrderDetails>
                    </OrderDetails>
                </OrderDetailsContainer>
                <PaymentMainContainer>
                    <PaymentDetails>
                    </PaymentDetails>
                </PaymentMainContainer>
            </OrderAndPaymentContainer>
        </CheckoutMainContainer>
    )
}

export default CheckoutPage;