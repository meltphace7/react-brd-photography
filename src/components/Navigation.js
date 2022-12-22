import React, { useContext, useState, useEffect, Fragment } from "react";
import classes from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/BDLOGO-white.png";
import { IoMdCart } from "react-icons/io";
import CartContext from "../store/cart-context";
import MobileNavigation from "./MobileNavigation";

const Navigation = () => {
  const cartCtx = useContext(CartContext);
  const [cartIsEmpty, setCartIsEmpty] = useState(true);

  const numberOfCartItems = cartCtx.items.reduce((acc, curItem) => {
    return acc + curItem.amount;
  }, 0);

  console.log(numberOfCartItems);

  useEffect(() => {
    if (numberOfCartItems === 0) {
      setCartIsEmpty(true);
    } else {
      setCartIsEmpty(false);
    }
  }, [numberOfCartItems]);

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
              <NavLink
                className={classes["nav-menu__link"]}
                activeClassName={classes.active}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["nav-menu__link"]}
                activeClassName={classes.active}
                to="/gallery"
              >
                Gallery
              </NavLink>
              <ul className={classes["dropdown-menu"]}>
                <li>
                  <Link className={classes["nav-menu__link"]} to="/washington">
                    Washington
                  </Link>
                </li>
                <li>
                  <Link className={classes["nav-menu__link"]} to="/oregon">
                    Oregon
                  </Link>
                </li>
                <li>
                  <Link className={classes["nav-menu__link"]} to="/california">
                    California
                  </Link>
                </li>
                <li>
                  <Link className={classes["nav-menu__link"]} to="/idaho">
                    Idaho
                  </Link>
                </li>
                <li>
                  <Link className={classes["nav-menu__link"]} to="/wyoming">
                    Wyoming
                  </Link>
                </li>
                <li>
                  <Link className={classes["nav-menu__link"]} to="/montana">
                    Montana
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                className={classes["nav-menu__link"]}
                activeClassName={classes.active}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["nav-menu__link"]}
                activeClassName={classes.active}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["nav-menu__link"]}
                activeClassName={classes.active}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                className={classes["nav-menu__link"]}
                to="/shop"
                activeClassName={classes.active}
              >
                Shop
              </NavLink>
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
