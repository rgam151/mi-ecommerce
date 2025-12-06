import { useState } from "react";

export default function ItemCount({ stock, initial }) {
  const [count, setCount] = useState(initial);

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => count > 1 && setCount(count - 1)}>-</button>

      <span style={{ margin: "0 10px" }}>{count}</span>

      <button onClick={() => count < stock && setCount(count + 1)}>+</button>
    </div>
  );
}