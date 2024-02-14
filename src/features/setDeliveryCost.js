export default function setDeliveryCost(state, payload){

    if(Number.isNaN(payload)){
      state.ticket.deliveryCost = 0
    }
    
    if(Number.isInteger(payload)){
        state.ticket.deliveryCost = payload
      }
    
    return {...state}
}