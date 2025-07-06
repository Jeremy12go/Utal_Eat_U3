import './App.css';
import {useState} from "react";
import Registro from "./Registro";
import Principal from "./Principal";
import Contenedor from "./Contenedor";

function App() {

    const [pantallaActual, setPantallaActual] = useState("inicio");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);
    const cambiarPantalla = (nuevaPantalla) => {
        if (nuevaPantalla === 'inicio'){
            setErrorLogin(false);
            setEmail("");
            setPassword("");
        }
        setPantallaActual(nuevaPantalla);
    }

    const validarLogin = (email, password) => {
        return email === "admin@utal.cl" && password === "1234";
    };

    return (
        <div className="App">
            <header className="Contenedor">
                {pantallaActual === "inicio" ? (
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
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        className="input-text"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)
                                    }/>

                                    <p style={{marginBottom: '10px'}}
                                       className="text-common">
                                        Contraseña*</p>
                                    <input
                                        type="password"
                                        placeholder="Contraseña"
                                        className="input-text"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </div>
                            </div>
                            <div style={{height: '45px' ,marginTop: '20px', marginBottom: '20px'}}>
                                <button
                                    onClick={() => {
                                        if (validarLogin(email, password)) {
                                            cambiarPantalla("Principal");
                                            setErrorLogin(false);
                                        } else {
                                            setErrorLogin(true);
                                        }
                                    }}
                                    className="boton-iniciar"
                                >
                                    Iniciar Sesión
                                </button>
                                {errorLogin && (
                                    <p style={{ color: 'red', marginTop: '10px' }}>
                                        Credenciales incorrectas.
                                    </p>
                                )}
                            </div>
                        </Contenedor>
                    </>
                ) : pantallaActual === "Registro" ? (
                    <Registro cambiarPantalla={cambiarPantalla} />
                ) : pantallaActual === "Principal" ? (
                    <Principal cambiarPantalla={cambiarPantalla} />
                ) : null}
            </header>
        </div>
    );
}

export default App;
