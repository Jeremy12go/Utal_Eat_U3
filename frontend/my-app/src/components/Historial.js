import React, { useState, useEffect } from "react";
import "./Historial.css";

// EJEMPLOS PARA TESTEO
const pedidosEjemplo = [
  {
    id: 1,
    tienda: {
      nombre: "Comidas UTAL",
      logo: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    },
    fecha: "2025-07-01T13:45:00Z",
    total: 15000,
    items: [
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
    ],
  },
  {
    id: 2,
    tienda: {
      nombre: "Sushi Express",
      logo: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    },
    fecha: "2025-06-28T19:20:00Z",
    total: 8500,
    items: [
      {
        id: 3,
        nombre: "Sushi Roll",
        imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80",
        precio: 4250,
        cantidad: 2,
      },
    ],
  },
  {
    id: 3,
    tienda: {
      nombre: "Pizzería Central",
      logo: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
    },
    fecha: "2025-06-15T21:10:00Z",
    total: 6000,
    items: [
      {
        id: 4,
        nombre: "Pizza Napolitana",
        imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=100&q=80",
        precio: 6000,
        cantidad: 1,
      },
    ],
  },
];

function formatearFecha(fechaFormat) { //dd-mm-yy
  const fecha = new Date(fechaFormat);
  const dia = String(fecha.getDate()).padStart(2, '0');
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const anio = String(fecha.getFullYear()).slice(-2);
  const hora = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return `${dia}-${mes}-${anio} ${hora}`;
}

function Historial({ volver, verPedido }) {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    /* la IA me dijo q hacia seria la conexion al backend despues, yo ni idea xd
    fetch("http://localhost:3001/pedidos?usuario=usuario_ejemplo")
      .then(res => res.json())
      .then(data => {
        setPedidos(data);
        setCargando(false);
      });
    */
    // Simulación:
    setTimeout(() => {
      setPedidos(pedidosEjemplo);
      setCargando(false);
    }, 500);
  }, []);

  return (
    <div className="historial-container">
      <h2>Historial de Pedidos</h2>
      {cargando ? (
        <p>Cargando...</p>
      ) : pedidos.length === 0 ? (
        <p>No hay pedidos anteriores.</p>
      ) : (
        <div>
          {pedidos.map(pedido => (
            <div
              key={pedido.id}
              onClick={() => verPedido(pedido)}
              className="historial-item"
            >
              <img src={pedido.tienda.logo} alt="logo tienda" className="historial-logo" />
              <div className="historial-info">
                <div className="historial-nombre">{pedido.tienda.nombre}</div>
                <div className="historial-fecha">Fecha: {formatearFecha(pedido.fecha)}</div>
              </div>
              <div className="historial-total">${pedido.total}</div>
            </div>
          ))}
        </div>
      )}
      <button onClick={volver} className="historial-btn-volver">Volver</button>
    </div>
  );
}

export default Historial;