import { Link } from "react-router-dom";

export default function Item({ id, name, price }) {
  return (
    <div className="item-card">
      <h3>{name}</h3>
      <p>$ {price}</p>

      <Link to={`/item/${id}`} className="btn">
        Ver detalle
      </Link>
    </div>
  );
}