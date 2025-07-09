import React, {useState} from 'react';
import ContenedorItems from "../components/ContenedorItems";
import ContenedorComida from "../components/ContenedorComida";
import { storeByCity } from '../API/APIGateway.js';
import { getProfile, getCompleteProfile } from '../API/APIGateway.js';
import carritoImg from '../assets/carrito.png'
import historialImg from '../assets/historial.png'
import lupaImg from '../assets/lupa.png'
import usuarioImg from '../assets/usuario.png'

function arrayBufferToBase64(buffer) {
  return btoa(
    new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), '')
  );
}

function Principal({ cambiarPantalla }) {

    const [ stores, setStores ] = useState([]);

    const StoresByCity = async () => {
        try {
            const idProfile = localStorage.getItem('idProfile');
            const profile = await getProfile(idProfile);
            setPerfil(profile.data);
            const city = profile.data.address.split(' ')[0].toLowerCase()
            const stores = await storeByCity(city);
            setStores(stores.data);
            console.log("xx",profile.data.name);
            return stores.data;
        } catch (e) {
            console.error('Error al obtener tiendas:', e.message);
            return [];
        }
    };

    const todasLasComidas = StoresByCity();

    const [tiendaSeleccionada, setTiendaSeleccionada] = useState(null);
    const [comidaSeleccionada, setComidaSeleccionada] = useState(null);
    const [user, setUser] = useState(false);
    const [perfil, setPerfil] = useState(null);

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
                    <img src={carritoImg} alt="Carrito" className="icons" />
                    Carrito
                </button>
                <button className="menu-boton">
                    <img src={historialImg} alt="Historial" className="icons" />
                    Historial
                </button>
            </div>
            <div className="contenido-principal">
                <div className="barra-lateral">
                    <div className="input-container">
                        <img src={lupaImg} alt="buscar" className="lupa-icono" />
                        <input type="text" placeholder="Buscar productos/tiendas" className="buscador" />
                    </div>
                    <button className="boton-perfil"
                            onClick={() => setUser(!user)}
                            style={{ position: 'relative', zIndex: 10 }}
                    >
                        <img src={usuarioImg} alt="Perfil" className="img-perfil" />
                    </button>
                    {user && (
                        <div className="profile-sidebar-overlay">
                            <div className="profile-sidebar">
                                {/* Encabezado del panel */}
                                <div className="sidebar-header">
                                    <h2>Mi Perfil</h2>
                                    <button
                                        onClick={() => setUser(false)}
                                        className="close-button"
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="sidebar-content">
                                    <div className="profile-info">
                                        <img
                                            src={usuarioImg}
                                            alt="Foto de perfil"
                                            className="profile-picture"
                                        />
                                        <p><strong>Perfil:</strong> {perfil?.id || 'Cargando...'} </p>
                                        <p><strong>Nombre:</strong> {perfil?.name || 'Cargando...'} </p>
                                        <p><strong>Teléfono:</strong> {perfil?.phoneNumber || 'Cargando...'} </p>
                                        <p><strong>Dirección:</strong> {perfil?.address || 'Cargando...'} </p>
                                    </div>
                                    <button
                                        className="logout-btn"
                                        onClick={() => cambiarPantalla("inicio")}
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="sub-contenido">
                    {/* Parte Izquierda: Tiendas */}
                    <div className="contenido-izquierdo">
                        <div style={{ display: 'flex', flexDirection: 'column'}}>          
                            {stores.map((tienda) => (
                               <ContenedorItems
                                    key={tienda.id}
                                    item={{
                                        ...tienda,
                                        logo: `data:${tienda.logo.contentType};base64,${arrayBufferToBase64(tienda.logo.data.data)}`
                                    }}
                                    onClick={() => seleccionarTienda(tienda)} />
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