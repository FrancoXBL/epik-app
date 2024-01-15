export default function addListItemTicketExtras(state, payload) {
    let { ticket } = state;
    ticket.listExtras.push(payload);
    return { ...state, ticket };
  }
