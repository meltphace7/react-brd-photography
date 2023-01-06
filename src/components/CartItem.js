import React from "react";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const CartItem = (props) => {
  const totalPrice = Math.round(props.price * props.quantity * 100) / 100;

  const { id, title, price, imageUrl, quantity, stock } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const cartItem = { id, title, price, imageUrl, quantity, stock };

    dispatch(cartActions.addToCart(cartItem));
  };

  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  const clearItemHandler = () => {
    dispatch(cartActions.clearItemFromCart(id));
  };

  return (
    <div className={classes["cart-item"]}>
      <div className={classes["cart-item__image-container"]}>
        <img src={`./images/${props.imageUrl}`} alt={title} />
        <button className={classes["delete-button"]} onClick={clearItemHandler}>
          X
        </button>
      </div>
      <h2 className={classes["cart-item__text"]}>{title}</h2>
      <p className={classes["cart-item__text"]}>${price}</p>
      <div className={classes["amount-controls"]}>
        <button
          className={classes["decrement-button"]}
          onClick={removeFromCartHandler}
        >
          -
        </button>
        <p className={classes["cart-item__text"]}>{props.quantity}</p>
        <button
          className={classes["increment-button"]}
          onClick={addToCartHandler}
        >
          +
        </button>
      </div>
      <p className={classes["total-price"]}>${totalPrice}</p>
    </div>
  );
};

export default CartItem;
