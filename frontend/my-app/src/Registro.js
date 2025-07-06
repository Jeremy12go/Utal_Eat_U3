import React from 'react';
import Contenedor from "./Contenedor";

function Registro({ cambiarPantalla }) {
    return (
        <div>
            <p style={{ fontWeight: 'bold', fontSize: '70px', margin:'40px' }}>
                Utal Eats
            </p>
            <Contenedor>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '35px', marginBottom: '4px', marginTop: '0px'}}
                       className="text-titulos">
                        Registro
                    </p>
                    <div style={{ fontSize: '16px', textAlign: 'left', maxWidth: '300px', margin: '0 auto', marginTop: '30px'}}>
                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Nombre de usuario* </p>
                        <input type="text" placeholder="Usuario" className="input-text" />

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Telefono*</p>
                        <input type="text" placeholder="+56912345678" className="input-text" />

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Dirección*</p>
                        <input type="text" placeholder="Ciudad/Calle/Numero" className="input-text" />

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Email*</p>
                        <input type="text" placeholder="Email" className="input-text" />

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Contraseña*</p>
                        <input type="password" placeholder="Contraseña" className="input-text" />
                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Se creara un perfil automaticamente asociado a tu dirección de correo.
                        </p>
                    </div>
                </div>
                <div style={{marginTop: '20px', marginBottom: '20px'}}>
                    <button
                        onClick={() => cambiarPantalla("inicio")}
                        className="boton-iniciar">
                        Registrar
                    </button>
                </div>
            </Contenedor>
        </div>

    );
}

export default Registro;