const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    // URL de la API HTTP que deseas llamar
    const apiUrl = 'http://datos.energia.gob.ar/api/3/action/datastore_search?resource_id=80ac25de-a44a-4445-9215-090cf55cfda5&filters=%7B%22localidad%22:%22TRES+ARROYOS%22%7D';
    
    // Realizar la solicitud a la API HTTP
    const response = await fetch(apiUrl);
    
    // Leer la respuesta y enviarla de vuelta a la aplicación cliente
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error al llamar a la API:', error);
    res.status(500).json({ error: 'Error al llamar a la API' });
  }
};