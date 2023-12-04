export default function deleteAggreggate(state, payload) {
    let { ticket } = state;
    const index = ticket.listAggreggates.findIndex((item) => item.id === payload);
    ticket.listAggreggates.splice(index, 1);
    return { ...state, ticket };
  }
  