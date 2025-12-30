import { useState } from "react";

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>

      <button onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}