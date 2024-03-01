// api.js
import axios from 'axios';

const apiUrl = '/api/proxy';

export const obtenerDatos = async (parametros) => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};