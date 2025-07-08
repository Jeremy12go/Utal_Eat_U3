import React, { useState } from "react";
import "./Calificar.css";

function Calificar({ volver }) {
  const [estrellas, setEstrellas] = useState(0);
  const [comentario, setComentario] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = async () => {
    setEnviando(true);
    /* la IA me dijo q hacia seria la conexion al backend despues, yo ni idea xd
    await fetch("http://localhost:3001/calificaciones", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        tiendaId: "id_tienda_ejemplo",
        estrellas,
        comentario,
        usuario: "usuario_ejemplo"
      })
    });
    */
    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 1000);
  };

  return (
    <div className="calificar-container">
      <h2>Califica la tienda</h2>
      <div className="calificar-estrellas">
        {[1, 2, 3, 4, 5].map(num => (
          <span
            key={num}
            className={`calificar-estrella${estrellas >= num ? " activa" : ""}`}
            onClick={() => setEstrellas(num)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        placeholder="Deja un comentario (opcional)"
        value={comentario}
        onChange={e => setComentario(e.target.value)}
        rows={4}
        className="calificar-textarea"
      />
      <div>
        {!enviado && (
          <button
            onClick={handleEnviar}
            disabled={estrellas === 0 || enviando}
            className="calificar-btn-enviar"
          >
            {enviando ? "Enviando..." : "Enviar calificación"}
          </button>
        )}
      </div>
      <button onClick={volver} className="calificar-btn-volver">Volver</button>
      {enviado && <div className="calificar-mensaje-exito">¡Gracias por tu calificación!</div>}
    </div>
  );
}

export default Calificar;