export default function setClient(state, payload) {
  let { ticket } = state 

  ticket.client = payload

  return {...state, ticket} 
}
