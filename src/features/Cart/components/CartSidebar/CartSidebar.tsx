import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartSidebar.css";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
  selectTotalPrice,
  closeCart,
  clearCart,
} from "../../state/cartslice";
import { RootState } from "../../../../state/store";

interface CartSidebarProps {}

const CartSidebar: React.FC<CartSidebarProps> = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleRemove = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleIncrement = (id: number) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id: number) => {
    dispatch(decrementQuantity(id));
  };

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-sidebar">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item: any) => (
            <div className="list-box" key={item.id}>
              <li>
                <div>
                  <span className="namePrice">
                    {item.name} - ${item.price}{" "}
                  </span>
                </div>
                <div>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <span className="quantity"> {item.quantity}</span>
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                  <button onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      )}
      <div className="cart-total">Total: ${totalPrice.toFixed(2)}</div>
      <div className="btn-box">
        {cart.length !== 0 && (
          <button className="clearAll" onClick={handleClearCart}>
            Clear All
          </button>
        )}
        <button onClick={handleCloseCart}>Close</button>
      </div>
    </div>
  );
};

export default CartSidebar;
