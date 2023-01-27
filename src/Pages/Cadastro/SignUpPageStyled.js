import styled from "styled-components"
import pizzaImage from '../../Assets/pizza-max-size.jpg'

export const MainContainer = styled.main`
    background-image: url(${pizzaImage});
    h1{
        margin-bottom: 30px;
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        text-align: center;
        color: #FFFFFF;
    }
    a{
        width: 100%;
        display: flex;
        justify-content: center;
        text-decoration: none;
    }
    p{
        width: 100%;
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        text-decoration: underline;
        color: #52B6FF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const FormContainer = styled.main`
    width:100%; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`

export const FieldArea = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
box-sizing: border-box;
margin: 5px 0px 0px 0px;
width: 80%;
height: 45px;
padding: 10px;
border: 1px solid #D5D5D5;
border-radius: 5px;
&::placeholder{
    font-family: 'Raleway', sans-serif;
    font-size: 21px;
    line-height: 26px;
    font-weight: 400;
    color: black;
}
`

export const Button = styled.button`
width: 80%;
height: 45px;
background: #A328D6;
font-family: 'Raleway', sans-serif;
font-size: 21px;
line-height: 26px;
font-weight: 700;
border-radius: 5px;
text-align: center;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0px 20px 0px;
cursor: pointer;
`
export const SignUp = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
`