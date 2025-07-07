import './comidas.css'

function ContenedorComida({ item, onClick }) {
    if (!item) return null;

    return (
        <div
            className="item-comida-grid"
            onClick={() => onClick(item)}
            style={{ cursor: 'pointer' }}
        >
            <div>
                <img
                    src={item.imagen || "./logo.png"}
                    alt={item.nombre}
                    style={{
                        width: '100%',
                        height: '100px',
                        objectFit: 'cover',
                        borderRadius: '8px',
                    }}
                />
            </div>
            <h4 style={{ textAlign: 'center', marginTop: '8px' }}>{item.nombre}</h4>
        </div>
    );
}

export default ContenedorComida;
