export const products = [
  {
    id: "1",
    title: "Remera Nike",
    category: "ropa",
    price: 15000,
    stock: 10
  },
  {
    id: "2",
    title: "Zapatillas Adidas",
    category: "zapatillas",
    price: 65000,
    stock: 5
  },
  {
    id: "3",
    title: "Gorra Puma",
    category: "accesorios",
    price: 12000,
    stock: 8
  },
  {
    id: "4",
    title: "Campera Under Armour",
    category: "ropa",
    price: 45000,
    stock: 3
  }
];

export const getProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products), 800);
  });

export const getProductsByCategory = (categoryId) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 800);
  });

export const getProductById = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.find(p => p.id === id)), 800);
  });