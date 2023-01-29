import styled from "styled-components";

export const OrderContainer=styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: ${props =>props.walletIsEmpty ? "flex-start": "center"};
    margin-top: 30px;
    h1{
        font-family: 'Poppins', cursive;
        font-family: 400;
        font-size: 1.2rem;
        line-height: 30px;
        color: black
    }
`
export const OrderItemsContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
