import React from "react";
import { MainContainer, FieldArea, Input, Button, Image, FormContainer } from "./SignUpPageStyled";
import ReactLoading from 'react-loading';

const SignUpPage = () =>{
    const [signUpForm, setSignUpForm] = React.useState({ name: "", email: "", password:"", confirmPassword:""});
    const [enableButton, setEnableButton] = React.useState(false);

    function RegisterHandleInput(e){
        setSignUpForm({ ...signUpForm, [e.target.name]: e.target.value});
    }

    return(
        <MainContainer>
            <FormContainer>
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
