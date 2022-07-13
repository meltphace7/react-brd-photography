import React from "react";
import classes from "./ImageSlider.module.css";
import { useState, useEffect } from "react";
import { HiOutlineArrowSmLeft } from 'react-icons/hi'
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

const ImageSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [controlsRevealed, setControlsRevealed] = useState(false);
  const length = 8;

  const nextSlideHandler = () => {
    setCurrentSlide(currentSlide === length ? 1 : currentSlide + 1);
  };

  const prevSlideHandler = () => {
    setCurrentSlide(currentSlide === 1 ? length : currentSlide - 1);
  };

  const options = { root: null, threshold: 0.2 };

  const { ref: controlsRef, inView: controlsVisible } = useInView(options);

    useEffect(() => {
      if (controlsVisible) {
        setControlsRevealed(true);
      }
    }, [controlsVisible]);

  console.log(currentSlide);

  return (
    <div className={classes["slider-container"]}>
      <div className={classes.slider}>

        <div
          className={`${classes["header-slide"]} ${
            classes[`header-slide-${currentSlide}  `]
          }`}
        ></div>
        
      </div>
      <div
        ref={controlsRef}
        className={`${classes["slider-controls"]} ${
          !controlsRevealed ? classes["slider-controls--hidden"] : ""
        }`}
      >
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

//  const slides = [
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-1`]}`}
//     ></div>,
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-2`]}`}
//     ></div>,
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-3`]}`}
//     ></div>,
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-4`]}`}
//     ></div>,
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-5`]}`}
//     ></div>,
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-6`]}`}
//     ></div>,
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-7`]}`}
//     ></div>,
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-8`]}`}
//     ></div>,
//     <div
//       className={`${classes["header-slide"]} ${classes[`header-slide-9`]}`}
//     ></div>,
//   ];