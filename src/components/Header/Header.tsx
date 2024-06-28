import React from "react";
import Navbar from "../Navbar/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalItems,
  openCart,
  closeCart,
  selectIsCartOpen,
} from "../../features/Cart/state/cartslice";
import "./Header.css";

const Header: React.FC = () => {
  const totalItems = useSelector(selectTotalItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const toggleCart = () => {
    if (isCartOpen) {
      dispatch(closeCart());
    } else {
      dispatch(openCart());
    }
  };

  return (
    <header className="header">
      <Navbar />
      <button className="cart-button" onClick={toggleCart}>
        Cart ({totalItems})
      </button>
    </header>
  );
};

export default Header;
