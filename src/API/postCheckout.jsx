import axios from "axios";

export const postCheckout = async (formData) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/checkout`, formData)
      const checkoutData = res.data;
      return checkoutData
    }catch(error){
        console.log("Erro enviar o checkout do pedido!");
        alert(error);
    }
}