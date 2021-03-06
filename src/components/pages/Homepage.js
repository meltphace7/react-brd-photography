import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import classes from "./Homepage.module.css";
import ImageSlider from "../ImageSlider";
import { HiOutlineArrowSmRight } from "react-icons/hi";

const Homepage = (props) => {
  // For Section Fadie In animations
  const [sectionOneRevealed, setSectionOneRevealed] = useState(false);
  const [sectionTwoRevealed, setSectionTwoRevealed] = useState(false);
  const [sectionThreeRevealed, setSectionThreeRevealed] = useState(false);
  const [galleryRevealed, setGalleryRevealed] = useState(false);

  const options = { root: null, threshold: 0.2 };

  const { ref: featureOneRef, inView: featOneIsVisible } = useInView(options);

  const { ref: featureTwoRef, inView: featTwoIsVisible } = useInView(options);

  const { ref: featureThreeRef, inView: featThreeIsVisible } =
    useInView(options);

  const { ref: galleryRef, inView: galleryIsVisible } = useInView({root: null, threshold: 0.4});


  useEffect(() => {
    if (featOneIsVisible) {
      setSectionOneRevealed(true);
    }
  
  }, [featOneIsVisible])

  useEffect(() => {
    if (featTwoIsVisible) {
      setSectionTwoRevealed(true);
    }
  }, [featTwoIsVisible]);

  useEffect(() => {
    if (featThreeIsVisible) {
      setSectionThreeRevealed(true);
    }
  }, [featThreeIsVisible]);

   useEffect(() => {
     if (galleryIsVisible) {
       setGalleryRevealed(true);
     }
   }, [galleryIsVisible]);


  

  return (
    <div className={classes["home-page"]}>
      <ImageSlider sliderImages={props.images} />

      <section className={classes["feature-section"]}>
        <div
          ref={featureOneRef}
          className={`${classes["feature-box"]} ${
            !sectionOneRevealed ? classes["feature--hidden"] : ""
          }`}
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

        <div
          ref={featureTwoRef}
          className={`${classes["feature-box-2"]} ${
            !sectionTwoRevealed ? classes["feature--hidden"] : ""
          }`}
        >
          <div className={classes["feature-box-2__text"]}>
            <h3>Explore The West By State</h3>
            <h1>Galleries</h1>
            <p>
              From the jagged mountains of Washington state, to the massive high
              alpine lakes of Wyoming. Check out the raw beauty of 6 Western
              States
            </p>
            <Link to="/portfolio">
              <button className={classes["feature-box__link"]}>
                EXPLORE
                <HiOutlineArrowSmRight className={classes['arrow-2']} size="30px" />
              </button>
            </Link>
          </div>
        </div>

        <div
          ref={featureThreeRef}
          className={`${classes["feature-box"]} ${
            !sectionThreeRevealed ? classes["feature--hidden"] : ""
          }`}
        >
          <div className={classes["feature-box__text"]}>
            <h3>Display the Wild World on Your Wall</h3>
            <h1>Prints</h1>
            <p>
              All prints are handcrafted with the finest materials. High quality
              items guaranteed.
            </p>
            <Link to="/shop">
              <button className={classes["feature-box__link"]}>
                SHOP NOW
                <HiOutlineArrowSmRight className={classes.arrow} size="30px" />
              </button>
            </Link>
          </div>
          <div className={classes["feature-box__image-2"]}></div>
        </div>
      </section>
      <div ref={galleryRef} className={classes.trigger}></div>
      <section
        className={`${classes["gallery-section"]} ${
          !galleryRevealed ? classes["feature--hidden"] : ""
        }`}
      >
        <div className={classes["gallery__grid"]}>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-1"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-2"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-3"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-4"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-5"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-6"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-7"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-8"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-9"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-10"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-11"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-12"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-13"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-14"]}`}
          ></div>
        </div>
      </section>

      {/* <section
        ref={galleryRef}
        className={classes["gallery-section"]}>
        <div className={classes["gallery__grid"]}>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-1"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-2"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-3"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-4"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-5"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-6"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-7"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-8"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-9"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-10"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-11"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-12"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-13"]}`}
          ></div>
          <div
            className={`${classes["gallery__grid--item"]} ${classes["gallery__grid--item-14"]}`}
          ></div>
        </div>
      </section> */}
    </div>
  );
};

export default Homepage;


// useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const [entry] = entries;
  //     console.log('entry', entry);
  //     setGalleryIsVisible(entry.isIntersecting);
  //   }, {root: null, threshold: 0.2})

  //   observer.observe(galleryRef.current);
  // }, [])

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       console.log("entry", entry);
  //       setFeatOneIsVisible(entry.isIntersecting);
  //     },
  //     { root: null, threshold: 0.2 }
  //   );

  //   observer.observe(featureTwoRef.current);
  // }, []);



  //   .section {
  //   transition: transform 1s, opacity 1s;
  // }

  // .section--hidden {
  //   opacity: 0;
  //   transform: translateY(8rem);
  // }