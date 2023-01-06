import React, {useState, useEffect} from "react";
import classes from "./ShopItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";


const ShopItem = (props) => {
  const [isOutOfStock, setIsOutOfStock] = useState(false);
   const { id, title, price, imageUrl, stock, quantity } = props;
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.cart);
  const currentItem = cartItems.find((item) => item.id === id);
  
   let itemStock = props.stock;
   if (currentItem) {
     itemStock = currentItem.stock;
   }

   const addToCartHandler = (e) => {
     e.stopPropagation();
     const cartItem = {
       id,
       title,
       price,
       imageUrl,
       stock,
       quantity
     };
     dispatch(cartActions.addToCart(cartItem));
   };
  
  useEffect(() => {
    if (itemStock === 0) {
      setIsOutOfStock(true);
    }
  }, [itemStock])

  return (
    <div className={classes["shop__items__item"]}>
      <div className={classes["shop__items__item__image-container"]}>
        <img src={`./images/${props.imageUrl}`} alt={props.title} />
      </div>
      <div className={classes["shop__item__text"]}>
        <h2>{props.title}</h2>
        <h3>Limited Edition</h3>
        <h1 className={classes["shop__item__price"]}>{`$${price}`}</h1>
        <button onClick={addToCartHandler}>
          {isOutOfStock ? 'OUT OF STOCK' : 'ADD TO CART'}
        </button>
      </div>
    </div>
  );
};

export default ShopItem;


