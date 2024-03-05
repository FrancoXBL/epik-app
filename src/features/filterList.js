export function filterItems(list, itemFilter) {

    return list.filter(item => {
      // Verificar si los filtros no son "todos" y si el elemento coincide con los filtros seleccionados
      return (itemFilter.name === 'todos' || item.sale.ticket.client.name === itemFilter.name) &&
             (itemFilter.payMethod === 'todos' || item.payMethod === itemFilter.payMethod) &&
             (itemFilter.delivery === 'todos' || item.delivery === itemFilter.delivery) &&
             (itemFilter.date === 'todos' || item.date === itemFilter.date);
    });
  };