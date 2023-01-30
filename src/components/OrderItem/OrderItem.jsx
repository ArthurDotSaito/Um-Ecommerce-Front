import {ItemTitle,ItemQuantity, OrderItemMainContainer, Value} from './OrderItemStyled'

export const OrderItem = ({orderData}) =>{
    const { id, image, qty, title, price } = orderData;

    return(
        <OrderItemMainContainer>
            <ItemTitle>{title}</ItemTitle>
            <ItemQuantity><p>Quantidade:</p>{qty}</ItemQuantity>
            <Value type = {price}>
                <p>R$</p>
                {Number(price).toLocaleString('pt-br', {minimumFractionDigits: 2})}
            </Value>
        </OrderItemMainContainer>
    )
}