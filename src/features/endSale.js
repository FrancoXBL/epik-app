import axios from 'axios'
import API_KEY from '../constants/api'
export default function endSale(state, payload){
    
    const { waitingSales } = state
    console.log(waitingSales)
    console.log(payload)

    waitingSales.map((sale) => {
        if(sale.id === payload.sale.id){
            axios.post(`${API_KEY}sales-history`, payload);
        }
    })

    const newList = waitingSales.filter((sale) => sale.id !== payload.sale.id )

    return {
        ticket: {
          total: 0,
          client: {
            name: "",
            address: { street: "", number: "" },
          },
          deliveryCost: 0,
          isTakeOut: undefined,
          listProducts: [],
          listExtras: [],
          orderNumber: Math.floor(Math.random() * 9000) + 1000,
        },
        waitingSales: newList,
      };

}