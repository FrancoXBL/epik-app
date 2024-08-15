import API_KEY from "../constants/api"
import axios from "axios";

export default function deleteSpent(state, id) {
  axios.delete(`${API_KEY}/spent/${id}`);
  return state;
}
