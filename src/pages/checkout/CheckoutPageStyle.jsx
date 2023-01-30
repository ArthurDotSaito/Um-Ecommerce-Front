import styled from "styled-components";

export const CheckoutMainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    padding: 1rem 1rem 1rem 1rem;
` 

export const OrderAndPaymentContainer = styled.section`
    width: 100vw;
    height: 70vh;
    font-family: 'Poppins', sans-serif;
    display: flex;
`

export const PaymentMainContainer = styled.section`
    width: 50%;
    display: flex;
    margin: 1rem 1rem 1rem 1rem;
`

export const OrderDetailsContainer = styled.section`
    width: 50%;
    display: flex;
    margin: 1rem 1rem 1rem 1rem;
`

export const Confirmation = styled.section`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #EB5757;
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    h2{
        word-wrap: break-word;
        color:red;
        margin:0px 10px 0px 10px
    }
`
export const ConfirmationContainer = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3{
        margin:0px 10px 0px 10px;
        text-decoration: underline;
        color: black;
    }
`