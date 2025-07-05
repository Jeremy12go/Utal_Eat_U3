import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function Pantalla1({cambiarPantalla}) {
  return (
      <div>
        <h2>Screen 1</h2>
        <button onClick={() => cambiarPantalla("original")}>Ir a Pantalla de inicio</button>
      </div>
  );
}

function Contenedor({ children }) {
    return (
        <div style={{
            maxWidth: '400px',
            margin: '0 auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
            {children}
        </div>
    );
}

function App() {

  const [pantallaActual, setPantallaActual] = useState("A");

  const cambiarPantalla = (nuevaPantalla) => {
    setPantallaActual(nuevaPantalla);
  }

    return (
        <div className="App">
            <header className="Contenedor">
                {pantallaActual === "original" ? (
                    <>
                        <p style={{ fontWeight: 'bold', fontSize: '70px' }}>
                            Utal Eats
                        </p>
                        <Contenedor>
                            <div style={{ textAlign: 'center' }}>
                                <p style={{ fontSize: '35px', marginBottom: '4px', marginTop: '0px'}}>
                                    Iniciar sesión
                                </p>
                                <p style={{ fontSize: '16px' , marginTop: '0'}}>
                                    ¿Primera vez?{' '}
                                    <span
                                        onClick={() => cambiarPantalla("pantalla1")}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                        >
                                        Haz click aquí!
                                    </span>
                                </p>
                                <div style={{ fontSize: '16px', textAlign: 'left', maxWidth: '300px', margin: '0 auto' }}>
                                    <p style={{marginBottom: '5px'}}>
                                        Usuario</p>
                                    <input type="text" placeholder="Escribe aquí..." style={{ width: '100%' }} />
                                    <p style={{marginBottom: '5px'}}>
                                        Contraseña</p>
                                    <input type="text" placeholder="Escribe aquí..." style={{ width: '100%' }} />
                                </div>
                            </div>
                            <div style={{marginTop: '20px'}}>
                                <button
                                    onClick={() => cambiarPantalla("pantalla1")}>
                                    Iniciar Sesión
                                </button>
                            </div>
                        </Contenedor>
                    </>
                ) : (
                    <Pantalla1 cambiarPantalla={cambiarPantalla} />
                )}
            </header>
        </div>
    );
}

export default App;
