import { createContext, useState } from "react";

export const CartContext = createContext();   // export context

export const CartProvider = ({ children }) => {   // export provider
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exist = cart.find((x) => x.id === item.id);

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...x, qty: x.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

