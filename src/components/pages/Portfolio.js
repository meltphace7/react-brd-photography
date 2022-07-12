import React from "react";
import classes from "./Portfolio.module.css";
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <h1>PORTFOLIO</h1>
      <div className={classes.grid}>
        <div className={`${classes.grid__item} ${classes["grid__item--1"]}`}>
            <div
              className={`${classes["grid__item--image"]} ${classes["grid__item--image--1"]}`}
            ></div>
          <Link to="/washington">
            <h2 className={classes["grid__item--text"]}>WASHINGTON</h2>
          </Link>
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--2"]}`}>
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--2"]}`}
          ></div>
          <Link to="/oregon">
            <h2 className={classes["grid__item--text"]}>OREGON</h2>
          </Link>
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--3"]}`}>
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--3"]}`}
          ></div>
          <Link to="/california">
            <h2 className={classes["grid__item--text"]}>CALIFORNIA</h2>
          </Link>
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--4"]}`}>
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--4"]}`}
          ></div>
          <Link to="/idaho">
            <h2 className={classes["grid__item--text"]}>IDAHO</h2>
          </Link>
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--5"]}`}>
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--5"]}`}
          ></div>
          <Link to="/wyoming">
            <h2 className={classes["grid__item--text"]}>WYOMING</h2>
          </Link>
        </div>

        <div className={`${classes.grid__item} ${classes["grid__item--6"]}`}>
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--6"]}`}
          ></div>
          <Link to="/montana">
            <h2 className={classes["grid__item--text"]}>MONTANA</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
