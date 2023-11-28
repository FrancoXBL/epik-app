export function filterItems(list, itemFilter) {
    return list.filter(item => {
      // Verificar si los filtros no son "todos" y si el elemento coincide con los filtros seleccionados
      return (itemFilter.name === 'todos' || item.name === itemFilter.name) &&
             (itemFilter.payMethod === 'todos' || item.payMethod === itemFilter.payMethod) &&
             (itemFilter.delivery.name === 'todos' || item.delivery.name === itemFilter.delivery.name) &&
             (itemFilter.date === 'todos' || item.date === itemFilter.date);
    });
  };