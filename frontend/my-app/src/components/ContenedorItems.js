import '../styles/Items.css'

function ContenedorItems({ item, onClick }) {
    if (!item) return null;

    return (
        <div className="item-card" onClick={() => onClick(item)}>
            <img src={item.imagen || "./logo.png"} alt={item.nombre} className="item-imagen" />
            <div className="item-info">
                <h4 className="item-nombre">{item.nombre}</h4>
                {item.especialidad && <p className="item-especialidad">Especialidad: {item.especialidad}</p>}
                {item.rating && <p className="item-rating">Rating: {item.rating}</p>}
            </div>
        </div>
    );
}

export default ContenedorItems;