import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ShopProduct.module.css";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cart-slice";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const ShopProduct = (props) => {
  const { id, title, price, imageUrl, imageName, description, stock } = props;
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
      imageName,
      imageUrl,
      stock,
    };
    dispatch(cartActions.addToCart(cartItem));
  };

  return (
    <div to={`/product-detail/${props.id}`} className={classes["shop-item"]}>
      <Link
        to={`/product-detail/${props.id}`}
        className={classes["shop-item__detail-link"]}
      ></Link>
      <div className={classes["shop-item__img-container"]}>
        <img src={imageUrl} className={classes["shop-item__img"]} alt={title} />
        <div className={classes['loading-spinner']}>
          <LoadingSpinner />
        </div>
      </div>
      <div className={classes["shop-item__stats"]}>
        <h1 className={classes["shop-item__title"]}>{title}</h1>
        <h3 className={classes["shop-item__price"]}>{`$${price}`}</h3>

        <button
          onClick={addToCartHandler}
          className={classes["shop-item__add-to-cart__btn"]}
        >
          Add To Cart
        </button>
        {itemStock === 0 ? (
          <p className={classes["shop-item__stock"]}>{`OUT OF STOCK`}</p>
        ) : (
          <p
            className={classes["shop-item__stock"]}
          >{`${itemStock} left in stock`}</p>
        )}
      </div>
    </div>
  );
};

export default ShopProduct;
