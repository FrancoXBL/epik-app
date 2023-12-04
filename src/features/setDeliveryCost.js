export default function setDeliveryCost(state, payload){

    
    if(Number.isInteger(payload)){
        state.ticket.deliveryCost = payload
      }
    
    return {...state}
}