import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import classes from './Blog.module.css'
import blogOneImage from '../../../assets/images/CA_RAE-LAKES_HIGH-VIEW_HI-RES.jpg'
import blogTwoImage from "../../../assets/images/CA_GRANITE-PARK-CLOUDS_HI-RES.jpg";
import blogThreeImage from '../../../assets/images/ID_CASTLE-PEAK_PANO_HI-RES.jpg'

const Blog = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
    console.log(offsetY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    return (
      <div className={classes.blog}>
        <div
          className={classes["blog-header"]}
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        >
          <h1>Adventure Blog</h1>
        </div>
        <div className={classes["blog-body"]}>
          <div className={classes["blog-body__overlay"]}>
            <div className={classes["blog-post"]}>
              <h1>Backpacking Kings Canyon National Park</h1>
              <h2>July 2022</h2>
              <div className={classes["blog-post__image-container"]}>
                <img src={blogOneImage} alt="Rae Lakes Basin" />
              </div>
              <p>
                Ever since my first visit to the Rae Lakes in 2011 on my PCT
                journey, I have yearned to return. The Rae Lakes Basin is in the
                heart of Kings Canyon National Park and it very popular for good
                reason...
              </p>
              <Link
                to="/kings-canyon-22"
                className={classes["feature-box__link"]}
              >
                READ MORE
                <HiOutlineArrowSmRight className={classes.arrow} size="30px" />
              </Link>
            </div>

            <div className={classes["blog-post"]}>
              <h1>Backpacking Granite Park, Bear Lakes Basin, Marie lake</h1>
              <h2>August 2022</h2>
              <div className={classes["blog-post__image-container"]}>
                <img src={blogTwoImage} alt="Rae Lakes Basin" />
              </div>
              <p>
                This adventure gave us a little more than we bargained for.
                Thunderstorms, heavy downpours, treacherous river crossings but
                also jaw dropping scenery. It ended up being a trip we would not
                soon forget...
              </p>
              <Link to="/granite-park-22" className={classes["feature-box__link"]}>
                READ MORE
                <HiOutlineArrowSmRight className={classes.arrow} size="30px" />
              </Link>
            </div>

            <div className={classes["blog-post"]}>
              <h1>Backpacking The White Clouds Loop</h1>
              <h2>September 2022</h2>
              <div className={classes["blog-post__image-container"]}>
                <img src={blogThreeImage} alt="Rae Lakes Basin" />
              </div>
              <p>
                Considering the fact we started this trek next to a raging wild
                fire, we faired pretty well on the smoke conditions. The White
                Clouds provided unique and gorgeous scenery, solitude and some
                challenging routes...
              </p>
              <Link to="/blog" className={classes["feature-box__link"]}>
                READ MORE
                <HiOutlineArrowSmRight className={classes.arrow} size="30px" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Blog
