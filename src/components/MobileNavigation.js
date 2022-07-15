import React, { useState } from "react";
import classes from "./MobileNavigation.module.css";
import Logo from "../assets/BDLOGO-white.png";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheck = () => {
        setIsChecked((prevState) => !prevState);
    }

    const closeMenuHandler = () => {
        setIsChecked((prevState) => !prevState);
    }

    console.log(isChecked);


  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <img
          className={classes["logo-icon"]}
          src={Logo}
          alt="Brock Dallman Photography logo"
        />
        <p>BROCK DALLMAN PHOTOGRAPHY</p>
      </div>
      <div className={classes.navigation}>
        <input
          type="checkbox"
          className={classes["navigation__checkbox"]}
          id="navi-toggle"
          onChange={handleCheck}
          checked={isChecked}
        />
        <label htmlFor="navi-toggle" className={classes["navigation__button"]}>
          <span className={classes["navigation__icon"]}>&nbsp;</span>
        </label>
        <div className={classes["navigation__background"]}>&nbsp;</div>
        <nav className={classes["navigation__nav"]}>
          <ul className={classes["navigation__list"]}>
            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                className={classes["navigation__link"]}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                className={classes["navigation__link"]}
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                className={classes["navigation__link"]}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                className={classes["navigation__link"]}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li className={classes["navigation__item"]}>
              <Link
                onClick={closeMenuHandler}
                className={classes["navigation__link"]}
                to="/shop"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenuHandler}
                className={classes["navigation__link"]}
                to="/cart"
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavigation;
