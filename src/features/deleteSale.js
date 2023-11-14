export default function deleteSale(state, payload) {
    console.log(state)
    let { listDailyItemSale } = state
    const id = payload
    console.log(listDailyItemSale)
    const filterList = listDailyItemSale.filter((i) => i.id !== id)
    return { ...state, listDailyItemSale: filterList}
}