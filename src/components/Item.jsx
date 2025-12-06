import { Link } from "react-router-dom";

export default function Item({ id, name, price }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "10px" }}>
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
}