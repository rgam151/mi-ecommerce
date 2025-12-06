import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/products.js";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    fetchData.then(res => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList items={items} />
    </div>
  );
}