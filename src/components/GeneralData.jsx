import React, { useState, useEffect } from 'react';
import { obtenerDatos } from '../api';
import './styles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MiComponente = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const parametros = {
                    resource_id: '80ac25de-a44a-4445-9215-090cf55cfda5',
                    filters: '{"localidad":"TRES ARROYOS"}'
                };
                const datosObtenidos = await obtenerDatos(parametros);

                const datosAgrupados = agruparDatos(datosObtenidos.result.records);
                const datosReAgrupados = reAgruparDatos(datosAgrupados);
                setDatos(datosReAgrupados);
                console.log(datosReAgrupados); // Aquí deberías ver los datos actualizados
            } catch (error) {
                // Manejo de errores
            }
        };

        const agruparDatos = (datos) => {
            return datos.reduce((agrupados, dato) => {
                const key = `${dato.idempresabandera}-${dato.precio}`;
                if (!agrupados[key]) {
                    agrupados[key] = [];
                }
                agrupados[key].push(dato);
                return agrupados;
            }, {});
        };

        const reAgruparDatos = (datos) => {
            const datosAgrupadosPorEmpresa = [];
            Object.keys(datos).forEach((key) => {
                const dato = datos[key][0]; // Obtener el primer elemento de cada array
                const empresaBandera = dato.empresabandera;
                // Si la empresa bandera aún no existe en el objeto, inicializarla como un array vacío
                if (!datosAgrupadosPorEmpresa[empresaBandera]) {
                    datosAgrupadosPorEmpresa[empresaBandera] = [];
                }

                // Agregar el dato al array correspondiente a la empresa bandera
                datosAgrupadosPorEmpresa[empresaBandera].push(dato);
            });
            return datosAgrupadosPorEmpresa;
        };


        fetchData();
    }, []);

    return (
        <div class="divContenedor">
            {/* Aquí puedes usar datosAgrupados */}
            {Object.keys(datos).map((key) => {
                const dato = datos[key][0]; // Obtener el primer elemento de cada array
                const idEmpresaBandera = dato.idempresabandera;

                // Evaluar idempresabandera usando switch
                switch (idEmpresaBandera) {
                    case 2:
                        return (
                            <Card style={{ margin: '10px', padding:'20px' }}variant="outlined" key={key}>
                                <img src="https://argentinamining.nyc3.cdn.digitaloceanspaces.com/pdac2023%2F89c6082c-daa2-46f9-b645-425dd16ef3a9-catalogo_ypf2png.png" width="120px" alt="" />
                                {datos[key].map((dato, index) => (
                                    <p key={index}>{dato.producto} - ${dato.precio}</p>
                                ))}
                            </Card>
                        );
                    case 4:
                        return (
                            <Card variant="outlined" key={key} style={{ margin: '10px' }}>
                                <img src="https://i.pinimg.com/originals/7c/86/58/7c86582c6d5f6d38156b27a86430b1f7.png" width="120px" alt="" />
                                {datos[key].map((dato, index) => (
                                    <p key={index}>{dato.producto} - ${dato.precio}</p>
                                ))}
                            </Card>
                        );
                    case 26:
                        return (
                            <Card style={{ margin: '10px' }}variant="outlined" key={key}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Logo_AXION_energy.jpg" width="120px" alt="" />
                                {datos[key].map((dato, index) => (
                                    <p key={index}>{dato.producto} - ${dato.precio}</p>
                                ))}
                            </Card>
                        );
                    case 28:
                        return (
                            <Card style={{ margin: '10px' }} variant="outlined" key={key}>
                                <img src="https://www.laguiaclub.com/sites/default/files/styles/medium/public/2019-03/Puma%20Energy.png?itok=ZPV8S-BK" width="120px" alt="" />
                                {datos[key].map((dato, index) => (
                                    <p key={index}>{dato.producto} - ${dato.precio}</p>
                                ))}
                            </Card>
                        );
                    // Agrega más casos según sea necesario
                    default:
                        return null; // Si no coincide con ningún caso, retornar null
                }
            })}
        </div>
    );
};

export default MiComponente;