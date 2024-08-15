import API_KEY from "../constants/api";
import axios from "axios";

export default function addSpent(state, payload){

    const spent = { spent: parseInt(payload.spent), description: payload.description } 

    axios.post(`${API_KEY}spent`, spent)

    return state
}