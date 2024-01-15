export default function veggieProduct(state, payload){
    let { ticket } = state;
    ticket.listProducts.map((item) => {
        if(item.id === payload){
            item.veggie = true
        }
    });
    return { ...state, ticket };
}