import React, {useState} from 'react';
import ContenedorItems from "./ContenedorItems";
import ContenedorComida from "./ContenedorComida";

const tiendas = [
    {
        id: 1,
        nombre: 'Tienda A',
        especialidad: '???',
        rating: '* * *',
        comidas: [
            { id: 1, nombre: 'Pizza' },
            { id: 2, nombre: 'Hamburguesa' }
        ],
    },
    {
        id: 2,
        nombre: 'Tienda B',
        especialidad: '???',
        rating: '* * * * *',
        comidas: [
            { id: 3, nombre: 'Empanada' },
            { id: 4, nombre: 'Tacos' }
        ],
    },
];

const todasLasComidas = tiendas.flatMap(tienda => tienda.comidas);

function Principal({ cambiarPantalla }) {

    const [tiendaSeleccionada, setTiendaSeleccionada] = useState(null);
    const [comidaSeleccionada, setComidaSeleccionada] = useState(null);

    const seleccionarTienda = (tienda) => {
        setTiendaSeleccionada(tienda);
        setComidaSeleccionada(null);
    };


    const seleccionarComida = (comida) => {
        setComidaSeleccionada(comida);
        if (!tiendaSeleccionada) {
            const tienda = tiendas.find(t => t.comidas.includes(comida));
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
                            {tiendas.map((tienda) => (
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