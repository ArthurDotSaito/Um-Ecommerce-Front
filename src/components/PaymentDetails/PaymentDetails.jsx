import { useState } from "react";
import { PaymentMainContainer, PaymentForm, Input, PaymentSelect, PaymentButon } from "./PaymentDetailsStyled";

const PaymentDetails = () =>{
    const [formData, setFormData] = useState({name: '', address: '', paymentMethod: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // aqui você pode enviar os dados para o seu servidor ou processá-los de alguma outra maneira
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