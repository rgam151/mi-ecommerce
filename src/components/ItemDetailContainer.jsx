import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(id).then(res => setItem(res));
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail {...item} /> : <p>Cargando...</p>}
    </div>
  );
}