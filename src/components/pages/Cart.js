import React, { useContext, useState, useEffect } from "react";
import classes from "./Cart.module.css";
import CartItem from "../../components/CartItem";
import { PRINTS } from "../../assets/Prints";
import CartContext from '../../store/cart-context';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const [isEmpty, setIsEmpty] = useState(true);

  console.log(cartCtx);
  

  useEffect(() => {
    if (cartCtx.items.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }, [cartCtx.items])

  const totalItems = cartCtx.items.reduce((acc, curItem) => {
    return acc + curItem.amount
  }, 0);

  return (
    <div className={classes.cart}>
      <div className={classes["cart-overlay"]}>
        <h1>Your Cart</h1>
        {isEmpty && <p className={classes["cart-empty"]}>Your Cart Is Empty</p>}
        <div className={classes["cart-container"]}>
          <div className={classes["cart-item__container"]}>
            {cartCtx.items.map((item) => {
              return (
                <CartItem
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  key={item.id}
                  id={item.id}
                  stock={item.stock}
                />
              );
            })}
          </div>
          <div className={classes["cart-total__container"]}>
            <div className={classes["cart-total__info"]}>
              <h3>{`Items: ${totalItems}`}</h3>
              <h2>{`Total: $${cartCtx.totalAmount}`}</h2>
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
