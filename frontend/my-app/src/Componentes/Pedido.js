import React, { useEffect, useState } from "react";
import "./Pedido.css";

function Pedido({ volver, pedido }) {
    /* la IA me dijo q hacia seria la conexion al backend despues, yo ni idea xd
  const [pedidoData, setPedidoData] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3001/pedidos/${pedidoId}`)
      .then(res => res.json())
      .then(data => setPedidoData(data));
  }, [pedidoId]);
  */

  if (!pedido || !pedido.items) {
    return (
      <div className="pedido-container">
        <h3>No se encontró el pedido.</h3>
        <button onClick={volver} className="pedido-btn-volver">Volver</button>
      </div>
    );
  }

  const items = pedido.items;
  const total = items.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  return (
    <div className="pedido-container">
      <h2>Detalle del Pedido</h2>
      <div className="pedido-tienda-info">
        <img src={pedido.tienda?.logo} alt="logo tienda" className="pedido-tienda-logo" />
        <div className="pedido-tienda-datos">
          <div className="pedido-tienda-nombre">{pedido.tienda?.nombre}</div>
          <div className="pedido-tienda-fecha">
            Fecha: {pedido.fecha ? new Date(pedido.fecha).toLocaleString() : ""}
          </div>
        </div>
      </div>
      {items.length === 0 ? (
        <p>No hay productos en este pedido.</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="pedido-item">
            <img src={item.imagen} alt={item.nombre} className="pedido-item-img" />
            <div className="pedido-item-info">
              <div className="pedido-item-nombre">{item.nombre}</div>
              <div>Cantidad: {item.cantidad}</div>
            </div>
            <div className="pedido-item-precio">${item.precio * item.cantidad}</div>
          </div>
        ))
      )}
      <div className="pedido-total">
        Total: ${total}
      </div>
      <div className="pedido-botones">
        <button onClick={volver} className="pedido-btn-volver">Volver al historial</button>
      </div>
    </div>
  );
}

export default Pedido;