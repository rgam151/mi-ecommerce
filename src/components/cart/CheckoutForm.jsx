import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!buyer.name || !buyer.phone || !buyer.email) {
      alert("Completa todos los campos");
      return;
    }

    
    console.log("Orden creada:", {
      buyer,
      items: cart,
      total: getTotalPrice(),
    });

    clearCart();
    setOrderConfirmed(true);
  };

  if (orderConfirmed) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>¡Compra realizada con éxito! 🎉</h2>
        <p>Gracias por tu compra.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", maxWidth: "400px" }}>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "10px" }}
        />

        <button type="submit">
          Confirmar compra (${getTotalPrice()})
        </button>
      </form>
    </div>
  );
}