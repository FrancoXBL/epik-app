import API_KEY from '../constants/api.js'
import axios from 'axios'

const fetchData = async (endpoint, setFunction) => {
    try {
      const response = await axios.get(`${API_KEY}${endpoint}`); // Reemplaza con tu endpoint real
      const data = response.data;

      setFunction(data)

    } catch (error) {
      console.error("Error al obtener datos desde el servidor:", error.message);
    }
  };

  export default fetchData