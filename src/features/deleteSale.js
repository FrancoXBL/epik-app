import axios from 'axios'
import API_KEY from '../constants/api'
export default function deleteSale(state, payload) {

    const { id } = payload

    axios.delete(`${API_KEY}sales-history/${id}`).then((res) => {console.log(res.data)})

    return { ...state}
}