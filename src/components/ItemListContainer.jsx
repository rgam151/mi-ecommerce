import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsRef = collection(db, "products");

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef;

    getDocs(q)
      .then((resp) => {
        const itemsFirebase = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(itemsFirebase);
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

 return (
  <div>
    <h2 className="section-title">{greeting}</h2>
    <ItemList items={items} />
  </div>
);
}