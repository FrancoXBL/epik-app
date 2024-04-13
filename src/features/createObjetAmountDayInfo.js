
export default function createObjetAmountDayInfo(list, payMethods){
    let sendArr = []
    payMethods.map((pm) => {
        let newObj = {name:pm.payMethod, total: 0}
        list.map((i) => {
            if(i.payMethod === pm.payMethod){
                newObj.total += i.sale.ticket.total
            }
        })
        sendArr.push(newObj)
    })

    return sendArr
}