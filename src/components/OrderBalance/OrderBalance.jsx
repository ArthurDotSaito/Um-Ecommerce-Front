import { useEffect, useState } from "react"
import { BalanceOrderContainer, Value } from "./OrderBalanceStyled.jsx"

export const OrderBalance = ({orderData, setFormData}) =>{
    const [total, setTotal] = useState(0)
    const {setForm} = setFormData
    console.log(orderData)
    console.log(setFormData)

    useEffect(() => {
        let sum = 0
        const totalValue = orderData.map((element) =>{
            sum += element.price
        },0)
        setTotal(sum)
        setFormData.totalValue = sum;
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