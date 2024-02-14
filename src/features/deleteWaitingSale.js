export default function deleteWaitingSale(state, payload){
    const { waitingSales } = state

    const newList = waitingSales.filter((sale) => sale.id !== payload )

    return {...state , waitingSales: newList}
}