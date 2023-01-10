import React from "react";
import classes from "./Shop.module.css";
import ShopProduct from "../../components/ShopProduct";
import { Link } from "react-router-dom";

const Shop = (props) => {
  return (
    <div className={classes.shop}>
      <div className={classes["shop-overlay"]}>
        <h1 className={classes.title}>Print Shop</h1>
        <Link className={classes["cart-link"]} to="/cart">
          GO TO CART
        </Link>
        <div className={classes.shop__items}>
          {props.products.map((prod) => {
            return (
              <ShopProduct
                key={prod._id}
                id={prod._id}
                title={prod.title}
                imageName={prod.imageName}
                imageUrl={prod.imageUrl}
                price={+prod.price}
                description={prod.description}
                stock={+prod.stock}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
