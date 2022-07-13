import React, { useContext, useState, useEffect } from "react";
import Cart from "./pages/Cart";
import classes from "./ShopItem.module.css";
import CartContext from "../store/cart-context";

const ShopItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  const addItemHandler = function () {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      image: props.image,
      stock: props.stock,
    });
  };

  useEffect(() => {
    const existingItemIndex = cartCtx.items.findIndex(
      (item) => item.id === props.id
    );
    const existingItem = cartCtx.items[existingItemIndex];

    if (existingItem && existingItem.stock === 0) {
      setIsOutOfStock(true);
    }
  }, [cartCtx]);

  return (
    <div className={classes["shop__items__item"]}>
      <div className={classes["shop__items__item__image-container"]}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes["shop__item__text"]}>
        <h2>{props.name}</h2>
        <h3>Limited Edition</h3>
        <h1 className={classes["shop__item__price"]}>{`$${props.price}`}</h1>
        <button onClick={addItemHandler}>
          {isOutOfStock ? "OUT OF STOCK" : "ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default ShopItem;
