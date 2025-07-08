import React, {useState} from 'react';
import ContenedorItems from "../components/ContenedorItems";
import ContenedorComida from "../components/ContenedorComida";
import { storeByCity } from '../API/APIGateway.js';
import { getProfile } from '../API/APIGateway.js';


function Principal({ cambiarPantalla }) {

    const [ stores, setStores ] = useState([]);

    const StoresByCity = async () => {
    try {
        const profile = await getProfile(localStorage.getItem('profile'));
        const stores = await storeByCity(profile.address.split(' ')[0].toLowerCase());
        setStores(stores);
        return stores.flatMap(tienda => tienda.productsList || []);
    } catch (e) {
        console.error('Error al obtener tiendas:', e.message);
        return [];
    }
    };

    const todasLasComidas = StoresByCity();

    const [tiendaSeleccionada, setTiendaSeleccionada] = useState(null);
    const [comidaSeleccionada, setComidaSeleccionada] = useState(null);

    const seleccionarTienda = (tienda) => {
        setTiendaSeleccionada(tienda);
        setComidaSeleccionada(null);
    };


    const seleccionarComida = (comida) => {
        setComidaSeleccionada(comida);
        if (!tiendaSeleccionada) {
            const tienda = stores.find(t => t.comidas.includes(comida));
            if (tienda) {
                setTiendaSeleccionada(tienda);
            }
        }
    };

    const comidasAMostrar = tiendaSeleccionada ? tiendaSeleccionada.comidas : todasLasComidas;

    return (
        <div className="layout-principal">
            <div className="menu-lateral">
                {/*MENU LATERAL*/}
                <button className="logo-box">Utal Eats</button>
                <button className="menu-boton">
                    <img src="/carrito.png" alt="Carrito" className="icons" />
                    Carrito
                </button>
                <button className="menu-boton">
                    <img src="/historial.png" alt="Historial" className="icons" />
                    Historial
                </button>
                <button className="menu-boton">
                    <img src="/ajustes.png" alt="ajustes" className="icons" />
                    Ajustes
                </button>
                <button className="menu-boton"
                        onClick={() => cambiarPantalla("inicio")}
                >
                    <img src="/log-out.png" alt="log-out" className="icons-special" />
                    Log Out
                </button>
            </div>
            <div className="contenido-principal">
                <div className="barra-lateral">
                    <div className="input-container">
                        <img src="/lupa.png" alt="buscar" className="lupa-icono" />
                        <input type="text" placeholder="Buscar productos/tiendas" className="buscador" />
                    </div>
                    <button className="boton-perfil">
                        <img src="/usuario.png" alt="Perfil" className="img-perfil" />
                    </button>
                </div>
                <div className="sub-contenido">
                    {/* Parte Izquierda: Tiendas */}
                    <div className="contenido-izquierdo">
                        <div style={{ display: 'flex', flexDirection: 'column'}}>          
                            {stores.map((tienda) => (
                                <ContenedorItems key={tienda.id} item={tienda} onClick={seleccionarTienda} />
                            ))}
                        </div>
                    </div>
                    {/* Parte Derecha: Comidas */}
                    <div className="contenido-derecho">
                        {comidasAMostrar.length > 0 ? (
                            <div style={{ display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
                                gap: '15px'}}>
                                {comidasAMostrar.map((comida, index) => (
                                    <ContenedorComida
                                        key={comida.id}
                                        item={comida}
                                        onClick={() => seleccionarComida(comida)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>No hay comidas para mostrar</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principal;