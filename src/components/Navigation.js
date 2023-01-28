import React, { Fragment, useState, useEffect } from "react";
import classes from "./Navigation.module.css";
import { Link, NavLink, useHistory } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import CartBadge from "./CartBadge";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../assets/BDLOGO-white.png";
import useScrollDirection from '../hooks/use-scroll-direction';
import { authActions } from '../store/auth-slice';

const Navigation = () => {
  const scrollDirection = useScrollDirection();

  const history = useHistory();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  const dispatch = useDispatch();

  // Parallax Scroll
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(offsetY);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    localStorage.setItem("token", null);
    localStorage.setItem("userId", null);
    localStorage.setItem("expiryDate", null);
    history.replace("/");
  };

  console.log(scrollDirection);

  const stickyNavClasses =
    scrollDirection === "up" && offsetY > 65
      ? `${classes["sticky-nav"]} ${classes["show-sticky-nav"]}`
      : `${classes["sticky-nav"]}`;

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
        <ul className={classes["admin-nav"]}>
          {isAdmin && (
            <li>
              <Link className={classes["admin-link"]} to="/admin/add-product">
                Add Product
              </Link>
            </li>
          )}

          {isAdmin && (
            <li>
              <Link className={classes["admin-link"]} to="/admin/products">
                Admin Products
              </Link>
            </li>
          )}
          {isAdmin && (
            <li>
              <Link className={classes["admin-link"]} to="/admin/orders">
                Orders
              </Link>
            </li>
          )}
          {isAdmin && (
            <li>
              <button onClick={logoutHandler} className={classes["logout-btn"]}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
      <nav className={stickyNavClasses}>
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
              <ul className={classes["sticky-dropdown-menu"]}>
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
