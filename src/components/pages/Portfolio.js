import React from "react";
import classes from "./Portfolio.module.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className={classes.portfolio}>
      <h1>GALLERY</h1>
      <div className={classes.grid}>
        <Link
          to="/washington"
          className={`${classes.grid__item} ${classes["grid__item--1"]}`}
        >
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--1"]}`}
          ></div>
          <h2 className={classes["grid__item--text"]}>WASHINGTON</h2>
        </Link>

        <Link
          to="/oregon"
          className={`${classes.grid__item} ${classes["grid__item--2"]}`}
        >
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--2"]}`}
          ></div>
          <h2 className={classes["grid__item--text"]}>OREGON</h2>
        </Link>

        <Link
          to="/california"
          className={`${classes.grid__item} ${classes["grid__item--3"]}`}
        >
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--3"]}`}
          ></div>
          <h2 className={classes["grid__item--text"]}>CALIFORNIA</h2>
        </Link>

        <Link
          to="/idaho"
          className={`${classes.grid__item} ${classes["grid__item--4"]}`}
        >
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--4"]}`}
          ></div>
          <h2 className={classes["grid__item--text"]}>IDAHO</h2>
        </Link>

        <Link
          to="/wyoming"
          className={`${classes.grid__item} ${classes["grid__item--5"]}`}
        >
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--5"]}`}
          ></div>
          <h2 className={classes["grid__item--text"]}>WYOMING</h2>
        </Link>

        <Link
          to="/montana"
          className={`${classes.grid__item} ${classes["grid__item--6"]}`}
        >
          <div
            className={`${classes["grid__item--image"]} ${classes["grid__item--image--6"]}`}
          ></div>
          <h2 className={classes["grid__item--text"]}>MONTANA</h2>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
