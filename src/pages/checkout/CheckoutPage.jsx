import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";
import OrderDetails from "../../components/OrderDetails/OrderDetails";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import {PaymentMainContainer, CheckoutMainContainer, OrderDetailsContainer, OrderAndPaymentContainer, Confirmation, ConfirmationContainer} from './CheckoutPageStyle'
import {Link} from 'react-router-dom'

const CheckoutPage = () =>{
    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({name: '', address: '', paymentMethod: '', products:[], totalValue:''});
    const [confirmation, setConfirmation] = React.useState(false);


    return(
        <CheckoutMainContainer>
            <HeaderPage></HeaderPage>
            <OrderAndPaymentContainer>
                <OrderDetailsContainer>
                    <OrderDetails formData={formData} setFormData={setFormData}>
                    </OrderDetails>
                </OrderDetailsContainer>
                <PaymentMainContainer>
                    <PaymentDetails 
                        formData={formData} 
                        setFormData={setFormData} 
                        confirmation = {confirmation} 
                        setConfirmation = {setConfirmation}>
                    </PaymentDetails>
                </PaymentMainContainer>
            </OrderAndPaymentContainer>
            <Confirmation>
            {confirmation === false ? 
            <p>Aguardando confirmação do pedido...</p> :
            <>
                <ConfirmationContainer>
                    <h1>Seu pedido:</h1>
                    <h2>{formData.products.map((e) => e).join(", ")}</h2>
                    <h1>foi recebido!</h1>
                </ConfirmationContainer>
                <ConfirmationContainer>
                    <h1>Clique</h1>
                    <Link to='/home' onClick={() =>localStorage.removeItem('cart')}>
                        <h3>Aqui</h3>
                    </Link>
                    <h1>para realizar uma nova compra ou para retornar à tela inicial</h1> 
                </ConfirmationContainer>
            </>} 
            </Confirmation>
        </CheckoutMainContainer>
    )
}

export default CheckoutPage;