import axios from 'axios'
import API_KEY from '../constants/api'
export default function endSale(state, payload){
    
    const { waitingSales, ticket } = state

    waitingSales.map((sale) => {
        if(sale.id === payload.sale.id){
            axios.post(`${API_KEY}sales-history`, payload);
        }
    })

    const newList = waitingSales.filter((sale) => sale.id !== payload.sale.id )

    return {
        ticket,
        waitingSales: newList,
      };

}