import React from "react";
import classes from "./Shop.module.css";
import ShopItem from "../../components/ShopItem";
import { PRINTS } from "../../assets/Prints";
import { Link } from "react-router-dom";

const Shop = (props) => {
  return (
    <div className={classes.shop}>
      <h1 className={classes.title}>Print Shop</h1>
      <Link className={classes['cart-link']} to="/cart">GO TO CART</Link>
      <div className={classes.shop__items}>
        {PRINTS.map((print) => {
          return (
            <ShopItem
              name={print.name}
              price={print.price}
              image={print.image}
              key={print.id}
              id={print.id}
              quantity={print.quantity}
              stock={print.stock}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
