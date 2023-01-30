import { useEffect, useState } from "react"
import { BalanceOrderContainer, Value } from "./OrderBalanceStyled.jsx"

export const OrderBalance = ({orderData}) =>{
    const [total, setTotal] = useState(0)
    console.log(orderData)

    useEffect(() => {
        let sum = 0
        const totalValue = orderData.map((element) =>{
            sum += element.value
        },0)
        setTotal(sum)
    },[])

    return(
        <BalanceOrderContainer>
            <h1>TOTAL</h1>
            <Value>
                <p>R$</p>
                {Number(total).toLocaleString('pt-br', {minimumFractionDigits:2})}
            </Value>
        </BalanceOrderContainer>
    )
}