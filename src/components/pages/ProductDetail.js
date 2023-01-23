import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ProductDetail.module.css";
import { useParams } from "react-router-dom";
import { cartActions } from "../../store/cart-slice";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import hostURL from "../../hosturl";

const ProductDetail = (props) => {
  let { productId } = useParams();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageName, setImageName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [itemsLeft, setItemsLeft] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(cart);

  const fetchProductDataHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${hostURL}/shop/product-detail/${productId}`
      );
      if (!response.ok) {
        throw new Error("Could not find product!");
      }
      const resData = await response.json();
      console.log(resData.product);
      setTitle(resData.product.title);
      // setImageName(resData.product.imageName);
      setImageUrl(resData.product.imageUrl);
      setPrice(resData.product.price);
      setDescription(resData.product.description);
      setStock(resData.product.stock);
      let amountLeft;
      if (!isAuth && cart.length !== 0) {
        cart.forEach((item) => {
          if (item.id === resData.product._id) {
            amountLeft = item.stock;
            setItemsLeft(amountLeft);
          }
        });
      } else {
        setItemsLeft(resData.product.stock);
      }
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }, [productId]);

  useEffect(() => {
    fetchProductDataHandler();
  }, [fetchProductDataHandler]);

  const addToCartHandler = () => {
    const cartItem = {
      id: productId,
      title,
      // imageName,
      imageUrl,
      price,
      description,
      stock,
    };
    dispatch(cartActions.addToCart(cartItem));

    if (isAuth === false) {
      props.onAddToCart();
    }
    if (itemsLeft > 0) {
      setItemsLeft((prevstate) => prevstate - 1);
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes["background-overlay"]}>
        <div className={classes.product}>
          {isLoading && <LoadingSpinner />}
          {!isLoading && (
            <img
              className={classes["product-image"]}
              src={imageUrl}
              alt={title}
            />
          )}
          <h1 className={classes.title}>{title}</h1>
          <p className={classes.description}>{description}</p>
          <h2 className={classes.price}>{`$${price}`}</h2>
          <button
            onClick={addToCartHandler}
            className={classes["add-to-cart-btn"]}
          >
            ADD TO CART
          </button>
          {itemsLeft !== 0 && (
            <p className={classes.stock}>{`${itemsLeft} left in stock`}</p>
          )}
          {itemsLeft === 0 && <p className={classes.stock}>{`OUT OF STOCK`}</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
