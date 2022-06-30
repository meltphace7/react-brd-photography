import React from "react";
import classes from "./ImageSlider.module.css";
import { useState } from "react";
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { HiOutlineArrowSmRight } from "react-icons/hi";

const ImageSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const length = 8;

  const nextSlideHandler = () => {
    setCurrentSlide(currentSlide === length ? 1 : currentSlide + 1);
  };

  const prevSlideHandler = () => {
    setCurrentSlide(currentSlide === 1 ? length : currentSlide - 1);
  };

  // setTimeout(() => {
  //   setCurrentSlide(currentSlide === length ? 1 : currentSlide + 1);
  // }, 10000);

  console.log(currentSlide);

  return (
    <div className={classes["slider-container"]}>
      <div className={classes.slider}>
        <div
          className={`${classes["header-slide"]} ${
            classes[`header-slide-${currentSlide}`]
          }`}
        ></div>
      </div>

      <div className={classes["slider-controls"]}>
        <button className={classes["prev-slide"]} onClick={prevSlideHandler}>
          <HiOutlineArrowSmLeft size="30px" />
        </button>
        <button className={classes["next-slide"]} onClick={nextSlideHandler}>
          <HiOutlineArrowSmRight size="30px" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
