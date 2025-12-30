import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  console.log("CLICK CONFIRMAR");
  console.log("CARRITO:", cart);

  const order = {
    buyer,
    items: cart,
    total: getTotalPrice(),
    date: new Date(),
  };

  const ordersRef = collection(db, "orders");

  addDoc(ordersRef, order)
    .then((doc) => {
      console.log("ORDEN CREADA:", doc.id);
      setOrderId(doc.id);
      clearCart();
    })
    .catch((err) => console.log("ERROR:", err));
};

  if (orderId) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Gracias por tu compra 🙌</h2>
        <p>Tu número de orden es:</p>
        <strong>{orderId}</strong>

        <br /><br />
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="phone"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
}
