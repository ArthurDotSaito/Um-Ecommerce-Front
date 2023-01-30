import styled from "styled-components";

export const OrderItemMainContainer = styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 0.8rem;
`

export const ItemTitle = styled.p`
    width: 50%;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: black;
`
export const ItemQuantity = styled.p`
    width: 25% ;
    display: flex;
    justify-content: flex-start;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    text-align: left;
    color: #000000;
`

export const Value = styled.p`
    width: 25% ;
    display: flex;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: black
`