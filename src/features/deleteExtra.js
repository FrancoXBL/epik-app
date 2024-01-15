export default function deleteExtra(state, payload) {
    let { ticket } = state;
    const index = ticket.listExtras.findIndex((item) => item.id === payload);
    ticket.listExtras.splice(index, 1);
    return { ...state, ticket };
  }
  