import React from 'react';

function Principal({ cambiarPantalla }) {
    return (
        <div>
            <h2>Pantalla 1</h2>
            <button onClick={() => cambiarPantalla("original")}>Volver a pantalla original</button>
        </div>
    );
}

export default Principal;