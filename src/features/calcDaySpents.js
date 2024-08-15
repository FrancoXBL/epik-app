export default function calcDaySpents(list){
    let total = 0
    list.map((i) => {
        total += i.spent
    })

    return total
}