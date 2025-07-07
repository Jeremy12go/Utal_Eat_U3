import React, { useState } from 'react';
import Contenedor from "./Contenedor";
import { registerAccount } from './API/APIGateway';

function Registro({ cambiarPantalla }) {

    const [ email , setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ address, setAddress ] = useState('');

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await registerAccount(email, password, name, phoneNumber, address);
        console.log('Cuenta creada:', res.data);
    } catch (e) {
        console.error('Error al registrar:', e.response?.data || e.message);
    }
    };

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
                        <input type="name" placeholder="Usuario" 
                            value={name} onChange={ (e) => setName(e.target.value) }
                            className="input-text" />   

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Telefono*</p>
                        <input type="phoneNumber" placeholder="911111111"
                            value={phoneNumber} onChange={ (e) => setPhoneNumber(e.target.value) }
                            className="input-text" />

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Dirección*</p>
                        <input type="address" placeholder="Ciudad/Calle/Numero"
                            value={address} onChange={ (e) => setAddress(e.target.value) }
                            className="input-text" />

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Email*</p>
                        <input type="email" placeholder="Email" 
                            value={email} onChange={ (e) => setEmail(e.target.value) }
                            className="input-text" />

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Contraseña*</p>
                        <input type="password" placeholder="Contraseña"
                            value={password} onChange={ (e) => setPassword(e.target.value) }
                            className="input-text" />

                        <p style={{marginBottom: '10px'}}
                           className="text-common">
                            Se creara un perfil automaticamente asociado a tu dirección de correo.
                        </p>
                    </div>
                </div>
                <div style={{marginTop: '20px', marginBottom: '20px'}}>
                    <button
                        onClick={() => {
                            handleSubmit();
                            cambiarPantalla("original");
                        }}
                        className="boton-iniciar">
                        Registrar
                    </button>
                </div>
            </Contenedor>
        </div>

    );
}

export default Registro;