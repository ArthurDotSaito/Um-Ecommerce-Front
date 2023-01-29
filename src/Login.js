import styled from "styled-components";
import { useContext, useState } from "react";
import axios from 'axios'
import imagebackground from './images/pizza.png'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import logo from './images/Logo.png'

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return (

        <Body>
            <SideMenu>
                <MenuBox>
                    <Logo src={logo}></Logo>
                    <Title>Login</Title>
                    <Text>Por favor, entre com seus dados.</Text>
                    <Data>
                        <Input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} required></Input>
                    </Data>
                    <Line></Line>
                    <Data>
                        <Input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required></Input>
                    </Data>
                    <Line></Line>
                    <Button onClick={SignIn}>Login</Button>
                    <TextBox>
                        <SignUp>Não possui uma conta?</SignUp>
                        <Link to="/">
                            <SignUp>Cadastre-se de graça</SignUp>
                        </Link>
                    </TextBox>

                </MenuBox>
            </SideMenu>
        </Body>

    );
    
    function SignIn(e){
        alert("deu certo");
    }

}




const Body = styled.div`
min-height: 100vh;
display:flex;
justify-content: flex-end;
background-image: url(${imagebackground});
background-size: cover;
font-family: 'Poppins', sans-serif;
background-position: center;
`

const SideMenu = styled.div`
min-height: 100vh;
width:50%;
background: rgba(255, 255, 255, 0.39);
display:flex;
justify-content: center;
backdrop-filter: blur(30px);
`

const MenuBox = styled.div`
min-height: 100vh;
width:70%;
z-index: 2;
`

const Logo = styled.img`
margin-top: 70px;
`

const Title = styled.h1`
font-size:36px;
line-height:56px;
font-style:Bold;
color:#FFFFFF;
margin-top:100px;`

const Text = styled.p`
font-size:20px;
line-height:30px;
color:#FFFFFF;
margin-bottom:100px;`

const Data = styled.div``

const Input = styled.input`
font-size: 20px;
line-height: 30px;
color:#FFFFFF;
border:none;
background-color: transparent;

::placeholder{
color:#FFFFFF;
font-size: 20px;
line-height: 30px;   
}
`
const Line = styled.div`
height:1px;
background-color:#FFFFFF;
margin-bottom:15px;`

const Button = styled.button`
display:flex;
align-items: center;
justify-content: center;
width:100%;
height:63px;
border:none;
border-radius: 6px;
text-align: center;
background-color: #EB5757;
color:#FFFFFF;
font-size: 18px;
line-height: 22.4px;
margin-bottom: 15px;
`

const SignUp = styled.p`
color:#FFFFFF;
font-size:16px;
margin-left:5px;`

const TextBox= styled.div`
display:flex;
justify-content:center;
:link{
    text-decoration: none;
}`