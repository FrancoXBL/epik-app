export function filterItems(list, itemFilter) {

    return list.filter(item => {
      return (itemFilter.name === 'todos' || item.sale.ticket.client.name === itemFilter.name) &&
             (itemFilter.payMethod === 'todos' || item.payMethod === itemFilter.payMethod) &&
             (itemFilter.delivery === 'todos' || item.delivery === itemFilter.delivery)
    });
  };