import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const productRef = doc(db, "products", id);

    getDoc(productRef)
      .then((resp) => {
        if (resp.exists()) {
          setItem({ id: resp.id, ...resp.data() });
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div>
      {item ? <ItemDetail {...item} /> : <p>Cargando...</p>}
    </div>
  );
}