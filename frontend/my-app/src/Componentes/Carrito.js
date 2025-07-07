import React, { useState } from "react";
import "./Carrito.css";

// EJEMPLO TIENDA PARA TESTEO
const infoTienda = {
  nombre: "Comidas UTAL",
  logo: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  calificacion: 4.5,
};
// EJEMPLO CARRITO PARA TESTEO
const platosEjemplo = [
  {
    id: 1,
    nombre: "Hamburguesa Clásica",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=100&q=80",
    precio: 4500,
    cantidad: 2,
  },
  {
    id: 2,
    nombre: "Pizza Margarita",
    imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=100&q=80",
    precio: 6000,
    cantidad: 1,
  },
  {
    id: 3,
    nombre: "Empanada de Queso",
    imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80",
    precio: 1200,
    cantidad: 3,
  },
];

function Carrito({ volver, irAConfirmacion }) {
  const [carrito, setCarrito] = useState(platosEjemplo);
  const [enviando, setEnviando] = useState(false);

  const sumar = (id) => { // para sumar cantidad
    setCarrito(carrito.map(item =>
      item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
    ));
  };

  const restar = (id) => { // para restar cantidad (si llega a 0 se elimina)
    setCarrito(carrito =>
      carrito
        .map(item =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        )
        .filter(item => item.cantidad > 0)
    );
  };

  const eliminar = (id) => { // // para quitar de carrito
    setCarrito(carrito.filter(item => item.id !== id));
  };

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

   const handleGuardarPedido = async () => {
    setEnviando(true);
    const fechaPedido = new Date().toISOString();

    const pedido = {
      tienda: infoTienda,
      items: carrito,
      total,
      fecha: fechaPedido,
    };
    /* la IA me dijo q hacia seria la conexion al backend despues, yo ni idea xd, supongo falta sacar la info de los platos tambien idk
    await fetch("http://localhost:3001/pedidos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pedido)
    });
    */

    setTimeout(() => {
      setEnviando(false);
      setCarrito([]);
      irAConfirmacion();
    }, 1000);
  };

  return (
    <div className="carrito-container">
      <h2>Carrito</h2>
      <div className="carrito-tienda-info">
        <img src={infoTienda.logo} alt="logo tienda" className="carrito-tienda-logo" />
        <div className="carrito-tienda-datos">
          <div className="carrito-tienda-nombre">{infoTienda.nombre}</div>
          <div className="carrito-tienda-calificacion">Calificación: {infoTienda.calificacion} ⭐</div>
        </div>
      </div>
      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        carrito.map(item => (
          <div key={item.id} className="carrito-item">
            <img src={item.imagen} alt={item.nombre} className="carrito-item-img" />
            <div className="carrito-item-info">
              <div className="carrito-item-nombre">{item.nombre}</div>
              <div>
                <button onClick={() => restar(item.id)} className="carrito-btn-cantidad">-</button>
                <span className="carrito-item-cantidad">{item.cantidad}</span>
                <button onClick={() => sumar(item.id)} className="carrito-btn-cantidad">+</button>
                <button onClick={() => eliminar(item.id)} className="carrito-btn-eliminar">Eliminar</button>
              </div>
            </div>
            <div className="carrito-item-precio">${item.precio * item.cantidad}</div>
          </div>
        ))
      )}
      <div className="carrito-total">
        Total: ${total}
      </div>
      <div className="carrito-botones">
        <button onClick={volver} className="carrito-btn-volver">Volver</button>
        <button
          onClick={handleGuardarPedido}
          disabled={carrito.length === 0 || enviando}
          className="carrito-btn-realizar"
        >
          {enviando ? "Enviando pedido..." : "Realizar pedido"}
        </button>
      </div>
    </div>
  );
}

export default Carrito;