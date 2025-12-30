import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

export default function ItemDetail({ id, name, price, category, stock }) {
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setAdded(false);
  }, [id]);

  const handleAdd = (quantity) => {
    addItem(
      {
        id,
        name,
        price,
      },
      quantity
    );
    setAdded(true);
  };

  return (
    <div className="detail-box">
      <h2>{name}</h2>
      <p>Precio: $ {price}</p>
      <p>Categoría: {category}</p>

      {stock > 0 ? (
        added ? (
          <p>Producto agregado al carrito ✔</p>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
        )
      ) : (
        <p>Producto sin stock</p>
      )}
    </div>
  );
}