export default function addListGastos(state, payload){
    const { listDailyItemGasto } = state
    const newItem = payload

    listDailyItemGasto.push(newItem)

    return {...state, listDailyItemGasto}
}