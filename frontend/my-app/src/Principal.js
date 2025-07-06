import React, {useState} from 'react';

const tiendas = [
    {
        id: 1,
        nombre: 'Tienda A',
        comidas: ['Pizza', 'Hamburguesa'],
    },
    {
        id: 2,
        nombre: 'Tienda B',
        comidas: ['Empanada', 'Tacos'],
    },
];

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
                    <input type="text" placeholder="Buscar productos/tiendas" className="buscador" />
                </div>
                <div className="sub-contenido">
                    <div className="contenido-derecho">
                        Parte Derecha
                    </div>
                    <div className="contenido-izquierdo">
                        parte2
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principal;