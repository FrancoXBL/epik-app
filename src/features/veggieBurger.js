export default function veggieBurger(state, payload){
    let { ticket } = state;
    ticket.listBurguer.map((item) => {
        if(item.id === payload){
            item.veggie = true
        }
    });
    return { ...state, ticket };
}