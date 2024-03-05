
import { date } from "./date"
export default function getDayInfo({list}){

    const dailyDate = date()

    let sendList = []

    if(list.lenght !== 0){
        list.map((i) => {
            if(i.date === dailyDate){
                sendList.push(i)
            }
        })
    }
    return sendList
}