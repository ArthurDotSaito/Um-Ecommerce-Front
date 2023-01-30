import {ItemTitle,ItemQuantity, OrderItemMainContainer, Value} from './OrderItemStyled'

export const OrderItem = ({orderData}) =>{
    const { id, image, qty, title, value } = orderData;

    return(
        <OrderItemMainContainer>
            <ItemTitle>{title}</ItemTitle>
            <ItemQuantity><p>Quantidade:</p>{qty}</ItemQuantity>
            <Value type = {value}>
                <p>R$</p>
                {Number(value).toLocaleString('pt-br', {minimumFractionDigits: 2})}
            </Value>
        </OrderItemMainContainer>
    )
}