import React, { useState, useEffect } from "react";
import classes from "./Cart.module.css";
import CartItem from "../../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  const totalQuantity = useSelector((state) => +state.cart.totalQuantity);
  const totalPrice = useSelector((state) => +state.cart.totalPrice);

  const totalPriceRounded =
    Math.round((totalPrice + Number.EPSILON) * 100) / 100;
  
  useEffect(() => {
    if (cartItems === 0) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [cartItems])


  return (
    <div className={classes.cart}>
      <div className={classes["cart-overlay"]}>
        <h1>Your Cart</h1>
        {isEmpty && <p className={classes["cart-empty"]}>Your Cart Is Empty</p>}
        <div className={classes["cart-container"]}>
          <div className={classes["cart-item__container"]}>
            {cartItems.map((item) => {
              return (
                <CartItem
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  key={item.id}
                  id={item.id}
                  stock={item.stock}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
          <div className={classes["cart-total__container"]}>
            <div className={classes["cart-total__info"]}>
              <h3>{`Items: ${totalQuantity}`}</h3>
              <h2>{`Total: $${totalPriceRounded}`}</h2>
              <button className={classes["cart-total__container__button"]}>
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
