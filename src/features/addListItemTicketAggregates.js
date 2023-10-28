export default function addListItemTicketAggreggates(state, payload) {
    let { ticket } = state;
    ticket.listAggreggates.push(payload);
    return { ...state, ticket };
  }
