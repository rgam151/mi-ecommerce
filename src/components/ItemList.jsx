import Item from "./Item.jsx";

export default function ItemList({ items }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",   
        width: "100%",              
        marginTop: "20px"           
      }}
    >
      {items.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  );
}