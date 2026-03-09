import { useContext } from "react";
import { CartContext } from "../components/CartContext";

const Cart = () => {
  const { cart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <h3>{item.name}</h3>

          <div className="qty-control">
            <button onClick={() => decreaseQty(item.id)}>-</button>

            <span>{item.qty}</span>

            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <p>₹{item.price * item.qty}</p>
        </div>
      ))}

      <h2>Total: ₹{totalPrice}</h2>

      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;