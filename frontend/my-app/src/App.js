import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Registro from "./Registro";
import Contenedor from "./Contenedor";
import PedidosDemo from "./Componentes/PedidosDemo";
import { loginAccount } from './API/APIGateway';

function App() {

  const [pantallaActual, setPantallaActual] = useState("original");

  const cambiarPantalla = (nuevaPantalla) => {
    setPantallaActual(nuevaPantalla);
  }

  const [ email , setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginAccount(email, password);
      console.log('Cuenta creada:', res.data);
    } catch (e) {
      console.error('Error al registrar:', e.response?.data || e.message);
    }
  };

    return (
        <div className="App">
            {pantallaActual === "PedidosDemo" ? (
                <PedidosDemo volverAlInicio={() => setPantallaActual("original")} />
            ) : (
            <header className="Contenedor">
                {pantallaActual === "original" ? (
                    <>
                        <p style={{ fontWeight: 'bold', fontSize: '70px', margin:'40px'}}>
                            Utal Eats
                        </p>
                        <Contenedor>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '35px', marginBottom: '4px', marginTop: '0px'}}
                                className="text-titulos">
                                    Iniciar sesión
                                </p>
                                <p style={{ fontSize: '16px' , marginTop: '0'}}
                                   className="text-common">
                                    ¿Primera vez?{' '}
                                    <span
                                        onClick={() => cambiarPantalla("Registro")}
                                        className="text-subrayado"
                                        >
                                        Haz click aquí!
                                    </span>
                                </p>
                                <div style={{ fontSize: '16px', textAlign: 'left', maxWidth: '300px', margin: '0 auto', marginTop: '30px'}}>
                                    <p style={{marginBottom: '10px'}}
                                       className="text-common">
                                        Email* </p>
                                    <input type="email" placeholder="Email"
                                        value={email} onChange={ (e) => setEmail(e.target.value) } 
                                        className="input-text" />
                                    <p style={{marginBottom: '10px'}}
                                       className="text-common">
                                        Contraseña*</p>
                                    <input type="password" placeholder="Contraseña"
                                        value={password} onChange={ (e) => setPassword(e.target.value)}
                                        className="input-text" />
                                </div>
                            </div>
                            <div style={{marginTop: '20px', marginBottom: '20px'}}>
                                <button
                                    onClick={() => {
                                        handleSubmit();
                                        cambiarPantalla("Principal");
                                    }}
                                    className="boton-iniciar">
                                    Iniciar Sesión
                                </button>
                            </div>
                        </Contenedor>
                        <div style={{marginTop: '20px'}}>
                            <button onClick={() => setPantallaActual("PedidosDemo")}>
                            Ir a TESTS
                            </button>
                        </div>
                    </>
                ) : (
                    <Registro cambiarPantalla={cambiarPantalla} />
                )}
            </header>
        )}
        </div>
    );
}

export default App;
