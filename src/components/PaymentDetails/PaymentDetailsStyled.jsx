import styled from "styled-components"

export const PaymentMainContainer = styled.main`
    width: 100%;
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
    justify-content: space-around;
    h1{
        font-family: 'Poppins', cursive;
        font-family: 400;
        font-size: 1.2rem;
        line-height: 30px;
        color: black
    }
`

export const Input = styled.input`
    font-family: 'Poppins', cursive;
    font-size: 20px;
    font-family: 400;
    color:#FFFFFF;
    box-sizing: border-box;
    margin: 5px 0px 0px 0px;
    width: 100%;
    height: 45px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: transparent;

    &::placeholder{
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        line-height: 26px;
        font-weight: 400;
        color: white;
}
`

export const PaymentSelect = styled.select`
    font-family: 'Poppins';
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    margin-left: 10px;

`

export const PaymentButon = styled.button`
    width: 80%;
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