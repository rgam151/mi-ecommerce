export const products = [
  { id: "1", name: "Remera Nike", category: "ropa", price: 15000 },
  { id: "2", name: "Zapatillas Adidas", category: "zapatillas", price: 65000 },
  { id: "3", name: "Gorra Puma", category: "accesorios", price: 12000 },
  { id: "4", name: "Campera Under Armour", category: "ropa", price: 45000 }
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