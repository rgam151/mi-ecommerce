import ItemCount from "./ItemCount.jsx";

export default function ItemDetail({ name, price, category }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>{name}</h2>
      <p>Categoría: {category}</p>
      <p>Precio: ${price}</p>

      <ItemCount stock={10} initial={1} />
    </div>
  );
}
