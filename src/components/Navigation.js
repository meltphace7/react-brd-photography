import React, { useContext, useState, useEffect, Fragment } from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-router-dom";
import Logo from "../assets/BDLOGO-white.png";
import { IoMdCart } from "react-icons/io";
import CartContext from '../store/cart-context';
import MobileNavigation from './MobileNavigation';


const Navigation = () => {
  const cartCtx = useContext(CartContext);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  const numberOfCartItems = cartCtx.items.reduce((acc, curItem) => {
    return acc + curItem.amount;
  }, 0)

  console.log(numberOfCartItems);

  useEffect(() => {
    if (numberOfCartItems === 0) {
      setCartIsEmpty(true)
    } else {
      setCartIsEmpty(false);
    }
  }, [numberOfCartItems])

  return (
    <Fragment>
      <nav className={classes.nav}>
        <div className={classes["logo-container"]}>
          <div className={`${classes.line} ${classes["line-1"]}`}></div>
          <div className={classes.logo}>
            <img
              className={classes["logo-icon"]}
              src={Logo}
              alt="Brock Dallman Photography logo"
            />
            <h2>BROCK DALLMAN PHOTOGRAPHY</h2>
          </div>
          <div className={`${classes.line} ${classes["line-2"]}`}></div>
        </div>
        <div className={classes["nav-row"]}>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <ul className={classes["nav-menu"]}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
              <ul className={classes["dropdown-menu"]}>
                <li>
                  <Link to="/washington">Washington</Link>
                </li>
                <li>
                  <Link to="/oregon">Oregon</Link>
                </li>
                <li>
                  <Link to="/california">California</Link>
                </li>
                <li>
                  <Link to="/idaho">Idaho</Link>
                </li>
                <li>
                  <Link to="/wyoming">Wyoming</Link>
                </li>
                <li>
                  <Link to="/montana">Montana</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
          </ul>
          <Link to="/cart">
            <div className={classes["cart-container"]}>
              {/* <IoMdCart size="25px" color="rgb(60, 215, 60)" /> */}
              <IoMdCart
                size="25px"
                color={!cartIsEmpty ? "rgb(60, 215, 60)" : "white"}
              />
              <span
                className={
                  cartIsEmpty
                    ? classes["cart-empty"]
                    : classes["cart-not-empty"]
                }
              >
                {numberOfCartItems ? numberOfCartItems : 0}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <MobileNavigation />
    </Fragment>
  );
};

export default Navigation;
