// api.js
import axios from 'axios';

const apiUrl = 'http://datos.energia.gob.ar/api/3/action/datastore_search';

export const obtenerDatos = async (parametros) => {
  try {
    const response = await axios.get(`${apiUrl}`, { params: parametros });
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};