import styled from "styled-components"
import pizzaImage from '../../assets/pizza-max-size.jpg'

export const MainContainer = styled.main`
    &::before{
        content: '';
        background-image: url(${pizzaImage});
        background-size: cover;
        background-position: center;
        filter: blur(15px);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
    h1{
        font-family: 'Poppins', cursive;
        font-weight: 800;
        font-size: 2rem;
        line-height: 50px;
        text-align: center;
        color: #FFFFFF;
    }
    h2{
        font-family: 'Poppins', cursive;
        font-family: 400;
        font-size: 1.2rem;
        line-height: 30px;
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
        font-family: "Poppins", sans-serif;
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

export const HeaderContainer = styled.header`
    width: 70%;
    height: 80px;
    display: flex;
    flex-direction:row;
    justify-content: flex-start;
    margin: auto;
    position: fixed;
    top: 0;
    img{
        width: 45px;
        height: 45px;
        display: flex;
        margin: 20px;
    }
    h2{
        font-family: 'Poppins',cursive;
        font-weight: 600;
        font-size: 1rem;
        line-height: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const logoContainer = styled.img`  
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    color: red;
`
export const FormContainer = styled.section`
    width:100%; 
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
`

export const FieldArea = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    font-family: 'Poppins', cursive;
    font-size: 20px;
    font-family: 400;
    color:#FFFFFF;
    box-sizing: border-box;
    margin: 5px 0px 0px 0px;
    width: 80%;
    height: 45px;
    padding: 10px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid white;

    &::placeholder{
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        line-height: 26px;
        font-weight: 400;
        color: white;
}

&:focus:after {
    transform: scaleX(1);
}
`

export const Button = styled.button`
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
export const SignUp = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
`