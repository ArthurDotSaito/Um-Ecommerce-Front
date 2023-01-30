import styled from "styled-components"

export const PaymentMainContainer = styled.main`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const PaymentForm = styled.form`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 1rem 0rem 1rem 0rem;
    h1{
        font-family: 'Poppins', cursive;
        font-family: 400;
        font-size: 1.2rem;
        line-height: 30px;
        color: black;
        margin-bottom: 1rem;
    }
`

export const Input = styled.input`
    font-family: 'Poppins', cursive;
    font-size: 20px;
    font-family: 400;
    color:#FFFFFF;
    box-sizing: border-box;
    margin-top:1rem;
    width: 100%;
    height: 45px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: transparent;

`

export const PaymentSelect = styled.select`
    font-family: 'Poppins';
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    margin-left: 10px;
    background: rgba(255, 255, 255, 0.16);

`

export const PaymentButon = styled.button`
    width: 100%;
    height: 45px;
    background: #EB5757;
    font-family: 'Poppins', sans-serif;
    font-size: 21px;
    line-height: 26px;
    font-weight: 500;
    border: none;
    border-radius: 6px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px 20px 0px;
    cursor: pointer;
`