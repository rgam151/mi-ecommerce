import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clearCart, getTotalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>El carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito</h2>

      {cart.map((prod) => (
        <div
          key={prod.id}
          className="cart-item"
          style={{
            borderBottom: "1px solid #ccc",
            marginBottom: "15px",
            paddingBottom: "10px",
          }}
        >
          <h3>{prod.name}</h3>
          <p>Cantidad: {prod.quantity}</p>
          <p>Precio unitario: ${prod.price}</p>
          <p>Subtotal: ${prod.price * prod.quantity}</p>

          <button onClick={() => removeItem(prod.id)}>
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${getTotalPrice()}</h3>

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>

      <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  );
}