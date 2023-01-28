import React from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, FieldArea, Input, Button, logoContainer, FormContainer, HeaderContainer } from "./SignUpPageStyled";
import ReactLoading from 'react-loading';
import logo from '../../Assets/logo.jpg'
import { registryRequest } from "../../API/registryRequest";

const SignUpPage = () =>{
    const navigate = useNavigate();
    const [signUpForm, setSignUpForm] = React.useState({ name: "", email: "", password:"", confirmPassword:""});
    const [enableButton, setEnableButton] = React.useState(false);

    function RegisterHandleInput(e){
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value});
    }

    function sendRegistryRequest(event){
        event.preventDefault();
        setEnableButton(true);
        console.log("Entrei no registro!")
        const passwordMatch = signUpForm.password === signUpForm.confirmPassword;
        if(!passwordMatch){
            alert("Senha e confirmação devem ser iguais.")
            setEnableButton(false);
        }else{
            const registryPromise = registryRequest(signUpForm);
            registryPromise.then((response) => {
                setEnableButton(false);
                navigate("/");
            })
            registryPromise.catch((response) =>{
                alert(response.response.data.message);
                setEnableButton(false);
            })
        }
    }

    return(
        <MainContainer>
            <HeaderContainer>
                <img src={logo}></img>
                <h2>FOOD</h2>
            </HeaderContainer>
            <FormContainer onSubmit={sendRegistryRequest}>
            <h1>Cadastro</h1>
            <h2>Por favor entre com seus dados</h2>
                <FieldArea>
                <Input
                    type="text"
                    name="name"
                    value={signUpForm.name}
                    placeholder="Nome"
                    disabled={enableButton}
                    onChange={RegisterHandleInput}
                    required>
                </Input>
                <Input
                    type="email"
                    name="email"
                    value={signUpForm.email}
                    placeholder="E-mail"
                    disabled={enableButton}
                    onChange={RegisterHandleInput}
                    required>
                </Input>
                <Input
                    type="password"
                    name="password"
                    value={signUpForm.password}
                    placeholder="Senha"
                    disabled={enableButton}
                    onChange={RegisterHandleInput}
                    required>
                </Input>
                <Input
                    type="password"
                    name="confirmPassword"
                    value={signUpForm.confirmPassword}
                    placeholder="Confirme sua senha"
                    disabled={enableButton}
                    onChange={RegisterHandleInput}
                    required>
                </Input>
                <Button
                type="submit"
                >{(!enableButton) ? "Cadastrar" :
                <ReactLoading
                    width="13"
                    height="13"
                    radius="9"
                    color='FFFFFF'></ReactLoading>}</Button>
                </FieldArea>
            </FormContainer>
    </MainContainer>
    )
}

export default SignUpPage;
