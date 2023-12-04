
export default function deleteSale(state, payload) {
    const { listDailyItemSale } = state

    const { id } = payload

    const newList  = listDailyItemSale.filter((i) => i.id !== id)

    return { ...state, listDailyItemSale: newList}
}