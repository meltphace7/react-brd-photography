import React from 'react'
import classes from './ImageBoxSplit.module.css'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ImageboxSplit = () => {
    return (
      <div
        className={classes["feature-box"]}
        // ref={featureOneRef}
        // className={`${classes["feature-box"]} ${
        //   !sectionOneRevealed ? classes["feature--hidden"] : ""
        // }`}
      >
        <div className={classes["feature-box__text"]}>
          <h3>Discover The Latest Works</h3>
          <h1>New Arrivals</h1>
          <p>
            Breathe life into your interior space with these striking limited
            edition prints. Designed to completely transform the look of any
            room.
          </p>
          <Link to="/shop">
            <button className={classes["feature-box__link"]}>
              SHOP NOW
              <HiOutlineArrowSmRight className={classes.arrow} size="30px" />
            </button>
          </Link>
        </div>
        <div className={classes["feature-box__image"]}></div>
      </div>
    );
}

export default ImageboxSplit
