import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import {PaymentMainContainer, CheckoutMainContainer, OrderDetailsContainer, OrderAndPaymentContainer} from './CheckoutPageStyle'

const CheckoutPage = () =>{
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({name: '', address: '', paymentMethod: '', products:[], totalValue:''});


    return(
        <CheckoutMainContainer>
            <HeaderPage></HeaderPage>
            <OrderAndPaymentContainer>
                <OrderDetailsContainer>
                    <OrderDetails formData={formData} setFormData={setFormData}>
                    </OrderDetails>
                </OrderDetailsContainer>
                <PaymentMainContainer>
                    <PaymentDetails formData={formData} setFormData={setFormData}>
                    </PaymentDetails>
                </PaymentMainContainer>
            </OrderAndPaymentContainer>
        </CheckoutMainContainer>
    )
}

export default CheckoutPage;