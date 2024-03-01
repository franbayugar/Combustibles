// api.js

const apiUrl = 'https://datos.energia.gob.ar/api/3/action/datastore_search?resource_id=80ac25de-a44a-4445-9215-090cf55cfda5&filters={"localidad":"TRES ARROYOS"}';

export const obtenerDatos = async (req, res) => {
    try {
        // Realizar la solicitud HTTP utilizando fetch
        const response = await fetch(apiUrl);
    
        // Verificar si la solicitud fue exitosa

        // Leer y enviar los datos de respuesta de vuelta
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        res.status(500).send('Error interno del servidor');
      }
};
