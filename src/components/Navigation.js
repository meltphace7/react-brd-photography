import React, { Fragment } from "react";
import classes from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/BDLOGO-white.png";
import MobileNavigation from "./MobileNavigation";
import CartBadge from "./CartBadge";

const Navigation = () => {
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
          <CartBadge />
        </div>
      </nav>
      <MobileNavigation />
    </Fragment>
  );
};

export default Navigation;
