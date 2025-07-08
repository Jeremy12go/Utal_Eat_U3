import '../styles/Items.css'

function ContenedorItems({ item, onClick }) {
  return (
    <div onClick={onClick}>
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <img src={item.logo} alt="logo" style={{ width: '100px' }} />
    </div>
  );
}

export default ContenedorItems;