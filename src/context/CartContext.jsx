import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemInCart = cart.find(prod => prod.id === item.id);

    if (itemInCart) {
      const updatedCart = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, prod) => total + prod.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, prod) => total + prod.quantity * prod.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}