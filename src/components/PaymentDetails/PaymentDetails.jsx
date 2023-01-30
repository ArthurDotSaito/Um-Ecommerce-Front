import { useState,useEffect } from "react";
import { PaymentMainContainer, PaymentForm, Input, PaymentSelect, PaymentButon, Confirmaton } from "./PaymentDetailsStyled";
import React from "react";
import axios from "axios";
import { postCheckout } from "../../API/postCheckout";

const PaymentDetails = (props) =>{
    const {formData} = props;
    console.log(formData)

    let cart = localStorage.getItem('cart');
    let cartArray = JSON.parse(cart);
    let idProdutos = [];

    for(let i=0; i < cartArray.length; i++){
        idProdutos.push(cartArray[i].idProduct);
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          let tempProductsArray = []
          for(let i = 0; i < idProdutos.length; i++) {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/${idProdutos[i]}`);
            tempProductsArray.push(response.data);
          }
          props.setProductsArray(tempProductsArray);
        } catch (error) {
          console.log("Falhei no GETProducts")
          console.log(error);
        }
      };
      fetchData();
    }, []);


    const handleChange = (e) => {
        props.setFormData({...formData, [e.target.name]: e.target.value});
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        postCheckout(formData)
          .then(() =>{
            alert("Pedido realizado com sucesso!");
          })
          .catch((error) =>{
            console.log(error)
            console.log("Erro ao realizar o submit!")
          })
          props.setConfirmation(true);
      }

    return(
      <PaymentMainContainer>
        <PaymentForm onSubmit={handleSubmit}>
          <h1>Detalhes de pagamento</h1>
        <label>
          Nome completo:
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Endereço:
          <Input type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <br />
        <label>
          Forma de pagamento:
          <PaymentSelect name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="">Selecione uma opção</option>
            <option value="creditCard">Cartão de crédito (Na entrega)</option>
            <option value="debitCard">Cartão de débito (Na entrega)</option>
            <option value="debitCard">Dinheiro</option>
            <option value="debitCard">Barras de ouro</option>
          </PaymentSelect>
        </label>
        <br />
        <PaymentButon type="submit">Enviar</PaymentButon>
      </PaymentForm>
      </PaymentMainContainer>
    )
}

export default PaymentDetails