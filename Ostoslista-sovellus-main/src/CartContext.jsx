import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(newItemText) {
    const newItem = {
      id: crypto.randomUUID(),
      text: newItemText,
    };

    setItems([...items, newItem]);
  }

  function removeItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
