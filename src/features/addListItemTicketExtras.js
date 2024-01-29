

export default function addListItemTicketExtras(state, payload) {
    let { ticket } = state;
    ticket.listExtras.push(payload);
    console.log(payload)
    return { ...state, ticket };
  }
