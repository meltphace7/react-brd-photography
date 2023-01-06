import React, { useState, useEffect } from 'react'
import classes from './CartBadge.module.css'
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const CartBadge = () => {
    const [cartIsEmpty, setCartIsEmpty] = useState(false);
    const itemCount = useSelector((state) => state.cart.totalQuantity);
    
    useEffect(() => {
      if (itemCount === 0) {
        setCartIsEmpty(true);
      } else {
        setCartIsEmpty(false);
      }
    }, [itemCount]);

    return (
      <Link className={classes["cart-link"]} to="/cart">
        <div className={classes["cart-container"]}>
          <IoMdCart
            size="25px"
            color={!cartIsEmpty ? "rgb(60, 215, 60)" : "white"}
          />
          <span
            className={
              cartIsEmpty ? classes["cart-empty"] : classes["cart-not-empty"]
            }
          >
            {itemCount}
          </span>
        </div>
      </Link>
    );
}

export default CartBadge
