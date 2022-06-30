import React, { useState, useEffect, useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from '../store/cart-context';

const CartItem = (props) => {

  const cartCtx = useContext(CartContext);

  const currentItemIndex = cartCtx.items.findIndex(item => item.id === props.id);
  const currentItem = cartCtx.items[currentItemIndex];
  const currentQuantity = currentItem.amount;
  const totalItemPrice = +currentItem.price * +currentItem.amount;

  const removeItemHandler = function () {
    cartCtx.removeItem(props.id);
  };

  const incrementItemHandler = function () {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      image: props.image,
      stock: props.stock,
    });
  };

  const decrementItemHandler = function () {
    cartCtx.decrementItem(props.id);
  };

  return (
    <div className={classes["cart-item"]}>
      <img src={props.image} alt={props.name} />
      <button onClick={removeItemHandler}>X</button>
      <h2>{props.name}</h2>
      <p>${props.price}</p>
      <div className={classes["amount-controls"]}>
        <button onClick={decrementItemHandler}>-</button>
        <p>{currentQuantity}</p>
        <button onClick={incrementItemHandler}>+</button>
      </div>
      <p>${totalItemPrice}</p>
    </div>
  );
};

export default CartItem;
