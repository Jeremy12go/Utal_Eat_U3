import React from 'react';

function Pantalla1({ cambiarPantalla }) {
    return (
        <div>
            <h2>Pantalla 1</h2>
            <button onClick={() => cambiarPantalla("original")}>Volver a pantalla original</button>
        </div>
    );
}

export default Pantalla1;