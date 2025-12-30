import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartWidget() {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return (
    <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
      🛒
      {total > 0 && (
        <span style={{ marginLeft: "5px", fontWeight: "bold" }}>
          {total}
        </span>
      )}
    </Link>
  );
}