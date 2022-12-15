import React from "react";
import classes from "./ImageSlider.module.css";
import { useState, useEffect } from "react";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { useInView } from "react-intersection-observer";

const ImageSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [controlsRevealed, setControlsRevealed] = useState(false);
  const length = 10;

  const nextSlideHandler = () => {
    setCurrentSlide(currentSlide === length ? 1 : currentSlide + 1);
  };

  const prevSlideHandler = () => {
    setCurrentSlide(currentSlide === 1 ? length : currentSlide - 1);
  };

  // Changes Slide every 10s / timer resets after usermanually changes slide
  useEffect(() => {
    const slideChangeTimer = setTimeout(() => {
      setCurrentSlide(currentSlide === length ? 1 : currentSlide + 1);
    }, 10000);

    return () => {
      clearTimeout(slideChangeTimer);
    }
  }, [currentSlide])

  const dotOneHandler = () => {
    setCurrentSlide(1);
  };

  const dotTwoHandler = () => {
    setCurrentSlide(2);
  };

  const dotThreeHandler = () => {
    setCurrentSlide(3);
  };

  const dotFourHandler = () => {
    setCurrentSlide(4);
  };

  const dotFiveHandler = () => {
    setCurrentSlide(5);
  };

  const dotSixHandler = () => {
    setCurrentSlide(6);
  };

  const dotSevenHandler = () => {
    setCurrentSlide(7);
  };

  const dotEightHandler = () => {
    setCurrentSlide(8);
  };

  const dotNineHandler = () => {
    setCurrentSlide(9);
  };

  const dotTenHandler = () => {
    setCurrentSlide(10);
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
          className={
            currentSlide === 1
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 2
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 3
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 4
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 5
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 6
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 7
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 8
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 9
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
        <div
          className={
            currentSlide === 10
              ? `${classes["header-slide"]} ${
                  classes[`header-slide-${currentSlide}`]
                }
                ${classes["header-slide--active"]}`
              : classes["header-slide--hidden"]
          }
        ></div>
      </div>
      <div
        ref={controlsRef}
        className={`${classes["slider-controls"]} ${
          !controlsRevealed ? classes["slider-controls--hidden"] : ""
        }`}
      >
        <button
          className={`${classes["prev-slide"]} ${classes["slider-control-button"]}`}
          onClick={prevSlideHandler}
        >
          <HiOutlineArrowSmLeft size="30px" />
        </button>
        {/* <div className={classes["dots-container"]}>
          <button
            className={
              currentSlide === 1
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotOneHandler}
          ></button>
          <button
            className={
              currentSlide === 2
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotTwoHandler}
          ></button>
          <button
            className={
              currentSlide === 3
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotThreeHandler}
          ></button>
          <button
            className={
              currentSlide === 4
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotFourHandler}
          ></button>
          <button
            className={
              currentSlide === 5
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotFiveHandler}
          ></button>
          <button
            className={
              currentSlide === 6
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotSixHandler}
          ></button>
          <button
            className={
              currentSlide === 7
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotSevenHandler}
          ></button>
          <button
            className={
              currentSlide === 8
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotEightHandler}
          ></button>
          <button
            className={
              currentSlide === 9
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotNineHandler}
          ></button>
          <button
            className={
              currentSlide === 10
                ? `${classes.dot} ${classes.active}`
                : classes.dot
            }
            onClick={dotTenHandler}
          ></button>
        </div> */}
        <button
          className={`${classes["next-slide"]} ${classes["slider-control-button"]}`}
          onClick={nextSlideHandler}
        >
          <HiOutlineArrowSmRight size="30px" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
