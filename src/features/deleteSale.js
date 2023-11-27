
export default function deleteSale(state, payload) {
    const { listDailyItemSale } = state

    const {id, setFilteredList, filterItems, itemFilter} = payload

    const newList  = listDailyItemSale.filter((i) => i.id !== id)

    const newListFiltered = filterItems(newList, itemFilter)

    setFilteredList(newListFiltered)

    return { ...state, listDailyItemSale: newList}
}